import { useEffect, useRef, useState } from 'preact/hooks'
import { profile } from '@/content/profile'
import { useI18n } from '@/lib/i18n'

export const GitHubAvatar = () => {
  const [hasFailed, setHasFailed] = useState(false)
  const imageRef = useRef<HTMLImageElement>(null)
  const { t } = useI18n()

  useEffect(() => {
    const image = imageRef.current
    if (!image?.complete || image.naturalWidth > 0) return
    setHasFailed(true)
  }, [])

  return (
    <img
      ref={imageRef}
      class="avatar"
      src={hasFailed ? `${import.meta.env.BASE_URL}avatar-fallback.svg` : profile.avatarUrl}
      alt={t('hero.avatarAlt')}
      width="230"
      height="230"
      decoding="async"
      fetchPriority="high"
      referrerPolicy="no-referrer"
      onError={() => {
        if (hasFailed) return
        setHasFailed(true)
      }}
    />
  )
}

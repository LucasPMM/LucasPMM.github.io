import { useState } from 'preact/hooks'
import { profile } from '@/content/profile'
import { useI18n } from '@/lib/i18n'

export const GitHubAvatar = () => {
  const [hasFailed, setHasFailed] = useState(false)
  const { t } = useI18n()

  return (
    <img
      class="avatar"
      src={hasFailed ? '/avatar-fallback.svg' : profile.avatarUrl}
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

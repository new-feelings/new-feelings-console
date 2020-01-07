import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Administrator Console'

export default pageTitle => pageTitle ? `${pageTitle} - ${title}` : `${title}`

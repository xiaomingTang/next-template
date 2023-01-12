import { ENV_CONFIG } from '@/config'

const { manifest } = ENV_CONFIG

export const SEO = {
  title: (customTitle = '', asFullTitle = false) => {
    const inputTitle = customTitle.trim()
    if (!inputTitle) {
      return manifest.name
    }
    if (asFullTitle) {
      return inputTitle
    }
    return `${inputTitle} - ${manifest.name}`
  },
  description: (customDescription = '', asFullDescription = false) => {
    const inputDescription = customDescription.trim()
    if (!inputDescription) {
      return manifest.description
    }
    if (asFullDescription) {
      return inputDescription
    }
    return `${inputDescription} - ${manifest.description}`
  },
}

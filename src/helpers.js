// https://github.com/emerleite/node-gravatar
import gravatar from 'gravatar'
import config from './config'

export function avatarImage (imageUrl, email) {
  if (!imageUrl || imageUrl === 'http://imagebin.suse.de/2554/img') {
    return gravatar.url(email, {s: '160', d: 'retro'})
  } else {
    return imageUrl.replace('http://localhost:3000', config.backend_url)
  }
}

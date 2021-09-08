import request from 'superagent'

const serverURL = '/api/v1/imgs'

export function getPics () {
  return request
    .get(serverURL)
    .then(response => response.body)
}

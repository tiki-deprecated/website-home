const API_URL = 'https://signup.dev.mytiki.com/api/'
const API_VERSION = '0-1-0'
const API_PATH_USER = '/user'

export async function post(axios, email, referrer, participate) {
  const body = {}
  if (email) body.email = email
  if (referrer) body.referrer = referrer
  if (participate != null) body.participate = participate

  return await axios
    .$post(API_URL + API_VERSION + API_PATH_USER, body, {
      headers: {
        'Content-Type': 'application/json',
      },
      validateStatus(status) {
        return status === 200
      },
    })
    .then(function (data) {
      return {
        success: true,
        body: data.data,
      }
    })
    .catch(function (error) {
      return {
        success: false,
        error,
      }
    })
}

export async function count(axios) {
  return await axios
    .get(API_URL + API_VERSION + API_PATH_USER, {
      headers: {
        'Content-Type': 'application/json',
      },
      validateStatus(status) {
        return status === 200
      },
    })
    .then(function (data) {
      return {
        success: true,
        body: data.data,
      }
    })
    .catch(function (error) {
      return {
        success: false,
        error,
      }
    })
}

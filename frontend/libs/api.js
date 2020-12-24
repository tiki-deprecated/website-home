const API_URL = 'https://api.mytiki.com/'
const API_VERION = '0-0-3'
const API_PATH_SIGNUP = '/signup/user'
const API_PATH_OPT = '/signup/user/opt'
const API_PATH_COUNT = '/signup/count'

export async function signUp(axios, contact, code) {
  return await axios
    .$post(
      API_URL + API_VERION + API_PATH_SIGNUP,
      {
        contact,
        code,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        validateStatus(status) {
          return status === 200
        },
      }
    )
    .then(function (data) {
      return {
        success: true,
        data,
      }
    })
    .catch(function (error) {
      return {
        success: false,
        error,
      }
    })
}

export async function optIn(axios, contact, code, optIn) {
  return await axios
    .$post(
      API_URL + API_VERION + API_PATH_OPT,
      {
        contact,
        code,
        optIn,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        validateStatus(status) {
          return status === 200
        },
      }
    )
    .then(function (data) {
      return {
        success: true,
        data,
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
    .get(API_URL + API_VERION + API_PATH_COUNT, {
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

const HOME = '/'
const SIGNUP = '/#signup'

export default function ({ route, redirect }) {
  if (route.name == null || route.name === 'redirect') {
    switch (route.path) {
      case SIGNUP:
      case SIGNUP + '/':
        redirect(HOME, '#signup')
        break
      default:
        redirect(
          addQuery(HOME, {
            code: route.path.substring(1, route.path.length),
          })
        )
        break
    }
  }
}

function addQuery(path, params) {
  let rsp = path
  if (Object.keys(params).length > 0) rsp += '?'
  for (const key of Object.keys(params))
    rsp = rsp + key + '=' + params[key] + '&'
  if (rsp[rsp.length - 1] === '&') rsp = rsp.slice(0, rsp.length - 1)
  return rsp
}

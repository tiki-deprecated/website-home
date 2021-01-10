const BILLION_382 = '/signup/382-billion/'
const DOLLARS_10 = '/signup/10-dollars/'
const CONTROL_SIMPLE_1 = '/signup/control-simple-1/'
const CONTROL_SIMPLE_2 = '/signup/control-simple-2/'
const CONTROL_SIMPLE_3 = '/signup/control-simple-3/'
const CONTROL_SIMPLE_4 = '/signup/control-simple-4/'
const CONTROL_SIMPLE_5 = '/signup/control-simple-5/'

const signupOptionsAll = [
  BILLION_382,
  DOLLARS_10,
  CONTROL_SIMPLE_1,
  CONTROL_SIMPLE_2,
  CONTROL_SIMPLE_3,
  CONTROL_SIMPLE_4,
  CONTROL_SIMPLE_5,
]

const signupOptionsControlSimple = [
  CONTROL_SIMPLE_1,
  CONTROL_SIMPLE_2,
  CONTROL_SIMPLE_3,
  CONTROL_SIMPLE_4,
  CONTROL_SIMPLE_5,
]

export default function ({ route, redirect }) {
  if (route.name == null || route.name === 'redirect') {
    switch (route.path) {
      case '/signup/control-simple':
      case '/signup/control-simple/':
        redirect(addQuery(pickAB(signupOptionsControlSimple), route.query))
        break
      case '/signup':
      case '/signup/':
        redirect(addQuery(pickAB(signupOptionsAll), route.query))
        break
      default:
        redirect(
          addQuery(pickAB(signupOptionsAll), {
            code: route.path.substring(1, route.path.length),
          })
        )
        break
    }
  }
}

function pickAB(array) {
  const rand = Math.floor(Math.random() * array.length)
  return array[rand]
}

function addQuery(path, params) {
  let rsp = path
  if (Object.keys(params).length > 0) rsp += '?'
  for (const key of Object.keys(params))
    rsp = rsp + key + '=' + params[key] + '&'
  if (rsp[rsp.length - 1] === '&') rsp = rsp.slice(0, rsp.length - 1)
  return rsp
}

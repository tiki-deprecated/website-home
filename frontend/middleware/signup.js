const PATH_1 = '/signup/382-billion/'
const PATH_2 = '/signup/10-dollars/'
const PATH_3 = '/signup/control-simple/'

export default function ({ route, redirect }) {
  if (route.name == null || route.name === 'redirect') {
    if (route.path === '/signup' || route.path === '/signup/') {
      redirect(addQuery(pickAB(), route.query))
    } else {
      redirect(
        addQuery(pickAB(), { code: route.path.substring(1, route.path.length) })
      )
    }
  }
}

function pickAB() {
  const rand = Math.random()
  if (rand < 0.33333) return PATH_1
  else if (rand < 0.66666) return PATH_2
  else return PATH_3
}

function addQuery(path, params) {
  let rsp = path
  if (Object.keys(params).length > 0) rsp += '?'
  for (const key of Object.keys(params))
    rsp = rsp + key + '=' + params[key] + '&'
  if (rsp[rsp.length - 1] === '&') rsp = rsp.slice(0, rsp.length - 1)
  return rsp
}

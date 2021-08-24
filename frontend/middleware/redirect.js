const HOME = '/'
const ROADMAP = '/roadmap'
const FEEDBACK = '/feedback'
const SUMMARY = '/summary'
const SIGNUP = '/#signup'
const BETA = '/beta'
const FAQ = '/faq'
const TEAM = '/team'
const MEET = '/meet'
const MISSION = '/mission'
const PRIVACY = '/privacy'
const ONEPAGER = '/1pager'

export default function ({ route, redirect }) {
  if (route.name == null || route.name === 'redirect') {
    switch (route.path) {
      case SUMMARY:
      case SUMMARY + '/':
        redirect('/blog/executive-summary-0421')
        break
      case SIGNUP:
      case SIGNUP + '/':
        redirect(HOME, '#signup')
        break
      case ROADMAP:
      case ROADMAP + '/':
        redirect(
          301,
          'https://www.notion.so/mytiki/206e9e86c520468ea604e057c0f0dea7?v=20062bf2771d4952840f862334a6cfc5'
        )
        break
      case FEEDBACK:
      case FEEDBACK + '/':
        redirect(301, 'https://feedback.mytiki.com')
        break
      case BETA:
      case BETA + '/':
        redirect(301, '/blog/beta-install-instructions')
        break
      case FAQ:
      case FAQ + '/':
        redirect(301, '/blog/faq')
        break
      case MEET:
      case MEET + '/':
      case TEAM:
      case TEAM + '/':
        redirect('/blog/team')
        break
      case MISSION:
      case MISSION + '/':
        redirect('/blog/your-data')
        break
      case PRIVACY:
      case PRIVACY + '/':
        redirect('/blog/privacy')
        break
      case ONEPAGER:
      case ONEPAGER + '/':
        redirect(301, 'https://tiki-email-assets.s3.amazonaws.com/1-pager.pdf')
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

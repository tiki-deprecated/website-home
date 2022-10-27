import Plausible from 'plausible-tracker'

export default ({ app }, inject) => {
  const plausible = Plausible({
    domain: 'mytiki.com',
  })
  inject('plausible', plausible)
}

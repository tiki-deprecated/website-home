export default function ({ route, redirect }) {
  if (route.name == null || route.name === 'redirect') {
    redirect('/signup/?code=' + route.path.substring(1, route.path.length))
  }
}

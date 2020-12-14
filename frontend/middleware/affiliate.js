export default function ({ route, redirect }) {
  if (route.name == null) {
    redirect('/money?code=' + route.path.substring(1, route.path.length))
  }
}

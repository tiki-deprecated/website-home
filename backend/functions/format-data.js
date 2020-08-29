export function isUser(path) {
  if (path.match('/signup/user') != null) return true
  if (path.match('/signup/buyer') != null) return false
  else return null
}

export function sanitize(contact) {
  return contact.trim().toLowerCase()
}

function isEmail(contact) {
  return /\S+@\S+\.\S+/.test(contact)
}

function isPhone(contact) {
  return /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(contact)
}

export function contactType(contact) {
  if (isEmail(contact)) return 'email'
  else if (isPhone(contact)) return 'phone'
  else return 'unknown'
}


let isEmail = function(contact) {
  return /\S+@\S+\.\S+/.test(contact)
}

let isPhone = function(contact) {
  return /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(contact)
}

module.exports = {

  isUser: function(path) {
    if (path.match('/signup/user') != null) return true
    if (path.match('/signup/buyer') != null) return false
    else return null
  },

  sanitize: function(contact) {
    return contact.trim().toLowerCase()
  },

  contactType: function(contact) {
    if (isEmail(contact)) return 'email'
    else if (isPhone(contact)) return 'phone'
    else return 'unknown'
  }

}



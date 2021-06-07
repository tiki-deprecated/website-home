const isEmail = function (contact) {
  return /\S+@\S+\.\S+/.test(contact);
};

const isPhone = function (contact) {
  return /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(contact);
};

const corsHeaders = function () {
  return {
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS,POST",
  };
};

module.exports = {
  isUser(path) {
    if (path.match("/signup/user") != null) return true;
    if (path.match("/signup/buyer") != null) return false;
    else return null;
  },

  sanitize(contact) {
    return contact.trim().toLowerCase();
  },

  contactType(contact) {
    if (isEmail(contact)) return "email";
    else if (isPhone(contact)) return "phone";
    else return "unknown";
  },

  corsHeaders: corsHeaders(),
};

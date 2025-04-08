const { validateToken } = require("../services/auth");

function checkforauthcookie(cookieName) {
  return (req, res, next) => {
    const tokenCookieValue = req.cookies[cookieName]; // fixed 'cookies'
    if (!tokenCookieValue) {
      return next();
    }
    try {
      const userPayload = validateToken(tokenCookieValue); // make sure this matches your auth.js
      req.user = userPayload;
    } catch (error) {
      console.error("Invalid token in cookie:", error.message);
    }
    return next();
  };
}

module.exports = {
  checkforauthcookie,
};

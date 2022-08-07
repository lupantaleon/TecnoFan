const db = require("../database/models");

async function userLoggedMiddleware(req, res, next) {
  res.locals.isLogged = false;

  let emailInCookie = req.cookies.userEmail;

  if (emailInCookie) {
    let userFromCookie = await db.User.findOne({
      where: {
        email: emailInCookie
      },
      include: 'role'
    })
    req.session.userLogged = userFromCookie;
  }

  if (req.session.userLogged) {
    res.locals.isLogged = true;
    res.locals.userLogged = req.session.userLogged;
    res.locals.isAdmin = res.locals.userLogged.role.role_name == 'admin';
  }

  next();
}

module.exports = userLoggedMiddleware;
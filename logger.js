function login(req, res, next) {
  console.log('loggined');
  next();
}

module.exports = login;
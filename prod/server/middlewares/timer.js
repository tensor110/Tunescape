// DEPRECATED


function timer(res) {
  
  res.locals.isAuthenticated = true;

  res.redirect('/tunescape.com/stream');
}

module.exports = timer
function timer(res){
    setTimeout(()=>{
      res.redirect('/tunescape.com/stream');
    },2000)
}

module.exports = timer
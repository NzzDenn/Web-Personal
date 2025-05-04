window.onscroll = function() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0 ) {
    document.getElementById('navbar').classList.add('scrolled');
  } else {
    document.getElementById('navbar').classList.remove('scrolled'):
  }
}

function sendMail(){
  let parms = {
    name : document.getElementById('nama').value,
    email : document.getElementById('email').value,
    subject : document.getElementById('subject').value,
    message : document.getElementById('pesan').value,
  }
  
  emailjs.send('service_sbcztl5','template_23seulx',parms).then(alert('Email Sent!'))
}

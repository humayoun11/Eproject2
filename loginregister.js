var selectpage = document.getElementById('selectpage')
var loginpage = document.getElementById('loginpage')
var registrationpage = document.getElementById('registrationpage')
var showuser = (document.getElementById('showusername').innerHTML = localUser)

function loginpageselect() {
  selectpage.style.display = 'none'
  loginpage.style.display = 'flex'
  registrationpage.style.display = 'none'
}
function registrationpageselect() {
  selectpage.style.display = 'none'
  loginpage.style.display = 'none'
  registrationpage.style.display = 'flex'
}
function registration() {
  var username = document.getElementById('RUser').value
  var email = document.getElementById('REmail').value
  var password = document.getElementById('RPassword').value

  localStorage.setItem('localUsername', username)
  localStorage.setItem('localUserEmail', email)
  localStorage.setItem('localUserPassword', password)

  alert('registration successfull')
}
function login() {
  var showuser = document.getElementById('showusername')
  var user = document.getElementById('loginUser').value
  var password = document.getElementById('loginPassword').value
  var showuser = document.getElementById('showusername')

  var localUser = localStorage.getItem('localUsername')
  var localPass = localStorage.getItem('localUserPassword')

  //   document.getElementById('showusername').innerHTML = localUser
  if (user == localUser && password == localPass) {
    alert('login successfully ' + localStorage.localUsername)
    ;(window.location.href = 'userhome.html'), (showuser.innerHTML = localUser)
  } else {
    alert('kindly pleasee correct your credentials')
  }
}
var showuser = (document.getElementById('showusername').innerHTML = localUser)

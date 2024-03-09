qa('.nav-prop').forEach(function(elem) {
  elem.addEventListener('click', function(e) {

  })
})

q('nav').addEventListener('click', function(e) {
  q('.nav-ripple').style.left = (e.clientX - 25) + 'px';
  q('.nav-ripple').style.top = (e.clientY - 25) + 'px';
  q('.nav-ripple').style.display = 'block';
  q('.nav-ripple').onanimationend = function() {
    q('.nav-ripple').style.display = 'none'
  }
})

let navToggleId = false

q('nav ion-icon').onclick = function() {
  if (navToggleId) {
    // close
    navToggleId = false;
    q('nav ion-icon').name = navToggleId ? 'close-outline' : 'menu-outline'

    q('.nav-props').animate([{
      transform: 'translate(0%)',
      opacity: 1
   }, {
      transform: 'translate(-100%)',
      opacity: 0
   }], {
      iterations: 1,
      duration: 500
    }).onfinish = function() {
      q('.nav-props').style.display = navToggleId ? 'block' : 'none';
    }
  } else {
    navToggleId = true;
    q('.nav-props').style.display = navToggleId ? 'block' : 'none';
    q('nav ion-icon').name = navToggleId ? 'close-outline' : 'menu-outline'
  }
}
function q(q) {
  return document.querySelector('' + q)
}

function qa(a) {
  return document.querySelectorAll('' + a)
}

const section = {
  home: 0,
  about: 1,
  skills: 2,
  contact: 3
}

function openSection(section = 0) {
  qa('.section').forEach(function(elem, i){
    elem.style.display = 'none'
    qa('.nav-prop')[i].className = 'nav-prop'
  })
  switch (section) {
    case 0:
      q('#home').style.display = 'block';
      qa('.nav-prop')[section].className = 'nav-prop nav-active-prop'
      break;
    case 1:
      q('#about').style.display = 'block';
      qa('.nav-prop')[section].className = 'nav-prop nav-active-prop'
      break;
  }
}

// toAbout button animation

q('#toAbout').onclick = function() {
  q('#toAbout').animate([{
    background: 'linear-gradient(to right, var(--dark-sec-color) 0%, transparent 100%)',
    color: 'var(--color)'
}, {
    background: 'linear-gradient(to right, var(--dark-sec-color) 100%, transparent 0%)',
    color: '#eee',
}], {
    iterations: 1,
    duration: 100,
    easing: 'ease-in'
  }).onfinish = function () {
    qa('.section *').forEach(function (elem, i) {
      var dis = getComputedStyle(elem)['display'];
      elem.style.display = 'none'
      elem.style.animation = 'fadeOut 1s 1';
      elem.style.display = dis
    })
    openSection(section.about)
  }
}

openSection()
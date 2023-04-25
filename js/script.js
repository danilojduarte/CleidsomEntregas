function onScroll() {
  if (scrollY > 0) {
    navegacao.classList.add("scroll")
  } else {
    navegacao.classList.remove("scroll")
  }
}


function openMenu() {
  document.body.classList.add('menu-expanded');
}

function closeMenu() {
  document.body.classList.remove('menu-expanded');
}
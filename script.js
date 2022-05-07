const ellipsis = document.querySelector('.sub-menu-2')
const searchbox = document.querySelector('.search-box input')

ellipsis.addEventListener('click', () => {
  document.querySelector('.sub-menu').classList.toggle('active')
})

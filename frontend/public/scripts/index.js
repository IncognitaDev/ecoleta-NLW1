const button = document.querySelector('#page-home main a')
const modal = document.querySelector('#modal')
const exit = document.querySelector('#modal .header a')

button.addEventListener('click', () => {
    modal.classList.remove('hide')
})


exit.addEventListener('click', () => {
  modal.classList.add('hide')
})

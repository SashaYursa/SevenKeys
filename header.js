// header.js

const burger = document.querySelector('.header__burger')
const nav = document.querySelector('.header__nav')
const preHeader = document.querySelector('.pre-header')
const body = document.body

if (burger && nav) {
  burger.addEventListener('click', (e) => {
    e.preventDefault()

    burger.classList.toggle('active')
    nav.classList.toggle('active')
    body.classList.toggle('block')

    if (preHeader) {
      preHeader.classList.toggle('active')
    }
  })

  document.querySelectorAll('.header__nav-item').forEach((item) => {
    item.addEventListener('click', () => {
      burger.classList.remove('active')
      nav.classList.remove('active')
      body.classList.remove('block')

      if (preHeader) {
        preHeader.classList.remove('active')
      }
    })
  })
}

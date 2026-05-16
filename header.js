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

document.addEventListener('click', (e) => {
  const phoneLink = e.target.closest('a[href^="tel:"]')
  if (!phoneLink) return
  if (typeof gtag === 'function') {
    gtag('event', 'conversion', {
      send_to: 'AW-11337131436/OIK4CImVlK4cEKzL-50q',
    })
  }
})

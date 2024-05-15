let homeButton = document.querySelector('#home');
let historiaButton = document.querySelector('#historia');
let festivalButton = document.querySelector('#festival');
let headerButtons = document.querySelectorAll('nav-link');

homeButton.addEventListener('click', ()=>{
    historiaButton.classList.remove('active')
    festivalButton.classList.remove('active')
    homeButton.classList.add('active')
})

historiaButton.addEventListener('click', ()=>{
    homeButton.classList.remove('active')
    festivalButton.classList.remove('active')
    historiaButton.classList.add('active')
})
festivalButton.addEventListener('click', ()=>{
    homeButton.classList.remove('active')
    historiaButton.classList.remove('active')
    festivalButton.classList.add('active')
})
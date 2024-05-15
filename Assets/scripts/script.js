let homeButton = document.querySelector('#home');
let historiaButton = document.querySelector('#historia');
let festivalButton = document.querySelector('#festival');
let headerButtons = document.querySelectorAll('nav-link');


const homePage = document.querySelector('.homePage');
const loginPage = document.querySelector('.loginPage');

function changeToLoginPage(){
    
    homePage.style.display = 'none';
    loginPage.style.display = 'grid';
    
}



homeButton.addEventListener('click', ()=>{
    historiaButton.classList.remove('active')
    festivalButton.classList.remove('active')
    homeButton.classList.add('active')   

    loginPage.style.display = 'none';
    homePage.style.display = 'grid';


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
let homeButton = document.querySelector('#home');
let historiaButton = document.querySelector('#historia');
let festivalButton = document.querySelector('#festival');
let headerButtons = document.querySelectorAll('nav-link');


const homePage = document.querySelector('.homePage');
const loginPage = document.querySelector('.loginPage');
const registerPage = document.querySelector('.registerPage');
const homeNavButton = document.querySelector('#homeButton');
const body = document.querySelector('body');

function changeToLoginPage(){
    
    homePage.style.display = 'none';
    registerPage.style.display = 'none';
    loginPage.style.display = 'grid';

    homeNavButton.addEventListener('click',()=>{
        loginPage.style.display = 'none';
        registerPage.style.display = 'none';
        homePage.style.display = 'grid';
    })    
}

function changeToRegisterPage(){
    
    homePage.style.display = 'none';
    loginPage.style.display = 'none';
    registerPage.style.display = 'grid';

    homeNavButton.addEventListener('click',()=>{
        loginPage.style.display = 'none';
        registerPage.style.display = 'none';
        homePage.style.display = 'grid';
    })    
}



homeButton.addEventListener('click', ()=>{
    historiaButton.classList.remove('active')
    festivalButton.classList.remove('active')
    registerPage.style.display = 'none';
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


/*window.addEventListener('scroll',()=>{
    let height = window.scrollY;
    if (height >=500){
       document.querySelector('header').style.display ='none';
    }
})*/


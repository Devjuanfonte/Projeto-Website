let homeButton = document.querySelector('#homeNavButton');
let historiaButton = document.querySelector('#historyNavButton');
let biographyButton = document.querySelector('#biographyNavButton');
let festivalButton = document.querySelector('#festivalNavButton');
let headerButtons = document.querySelectorAll('nav-link');
const biographyPage = document.querySelector('.biographyPage');
const homePage = document.querySelector('.homePage');
const historiaPage = document.querySelector('.historiaPage');
const festivalPage = document.querySelector('.festivalPage');
const loginPage = document.querySelector('.loginPage');
const registerPage = document.querySelector('.registerPage');
const homeNavButton = document.querySelector('#homeButton');
const body = document.querySelector('body');
const menuContainer = document.querySelector('.mobileMenuContainer');

function changeToLoginPage(){
    document.querySelector('.global').style.display = 'block';
    document.querySelector('.mainSlider').style.display = 'none';
   
    console.log('vasco da gama')
    registerPage.style.display = 'none';
    loginPage.style.display = 'grid';

    historiaButton.classList.remove('active')
    biographyButton.classList.remove('active')
    festivalButton.classList.remove('active');
    homeButton.classList.remove('active')     
    closeMenu()
    homeButton.addEventListener('click',()=>{        
        reloadHomePage();
    })    
}

function changeToRegisterPage(){
    document.querySelector('.global').style.display = 'block';
    document.querySelector('.mainSlider').style.display = 'none';

    loginPage.style.display = 'none';
    registerPage.style.display = 'grid';    
    historiaButton.classList.remove('active');
    biographyButton.classList.remove('active');
    festivalButton.classList.remove('active');
    homeButton.classList.remove('active') ;

    homeButton.addEventListener('click',()=>{       
        reloadHomePage();
    })    
    closeMenu()
}
     homeButton.addEventListener('click',()=>{            
            reloadHomePage();
    })    

    historiaButton.addEventListener('click', ()=>{
        reloadHistoriaPage();

    })
    biographyButton.addEventListener('click', ()=>{
        reloadbiographyPage();
    })
    festivalButton.addEventListener('click',()=>{
        console.log('vasco')
        reloadFestivalPage();
    })


function reloadHomePage(){
    biographyPage.style.display ='none';
    historiaPage.style.display ='none';
    festivalPage.style.display = 'none';
    document.querySelector('.global').style.display = 'block';
    
    loginPage.style.display = 'none';
    registerPage.style.display = 'none';
    document.querySelector('.mainSlider').style.display = 'flex';
    homeButton.classList.add('active');    
    historiaButton.classList.remove('active');
    biographyButton.classList.remove('active');
    festivalButton.classList.remove('active');    
    document.querySelector('.mainSlider').style.transform = "translateX(0vw)";
    biographyPage.style.display ='none';
    historiaPage.style.display ='none';
    festivalPage.style.display = 'none';
    closeMenu()
}
function reloadHistoriaPage(){
    biographyPage.style.display ='none';
    festivalPage.style.display = 'none';
    historiaPage.style.display ='block';
    document.querySelector('.global').style.display = 'block';
    
    loginPage.style.display = 'none';
    registerPage.style.display = 'none';
    document.querySelector('.mainSlider').style.display = 'flex';
    homeButton.classList.remove('active');    
    historiaButton.classList.add('active');
    festivalButton.classList.remove('active');
    biographyButton.classList.remove('active');    
    document.querySelector('.mainSlider').style.transform = "translateX(-100vw)";
    closeMenu()
}
function reloadbiographyPage(){    
    historiaPage.style.display ='block';
    biographyPage.style.display ='block';
    festivalPage.style.display = 'none';
    document.querySelector('.global').style.display = 'block';
   
    loginPage.style.display = 'none';
    registerPage.style.display = 'none';
    document.querySelector('.mainSlider').style.display = 'flex';
    homeButton.classList.remove('active');    
    historiaButton.classList.remove('active');
    festivalButton.classList.remove('active');
    biographyButton.classList.add('active');
    document.querySelector('.mainSlider').style.transform = "translateX(-200vw)";
    closeMenu()
}
function reloadFestivalPage(){
    historiaPage.style.display ='block';
    biographyPage.style.display ='block';
    festivalPage.style.display = 'block';
    document.querySelector('.global').style.display = 'block';
   
    loginPage.style.display = 'none';
    registerPage.style.display = 'none';
    document.querySelector('.mainSlider').style.display = 'flex';
    homeButton.classList.remove('active');    
    historiaButton.classList.remove('active');
    biographyButton.classList.remove('active');
    festivalButton.classList.add('active');
    document.querySelector('.mainSlider').style.transform = "translateX(-300vw)";
    closeMenu()
}



function updateMobileMenu() {
    
    const menuWidth = window.getComputedStyle(menuContainer).getPropertyValue('width');
    console.log(menuWidth);
    if(menuWidth == '0px'){
        menuContainer.classList.add('active');
    }else{
       closeMenu();
    }
}
function closeMenu(){
    menuContainer.classList.remove('active');
    console.log("teste")
}





document.getElementById('registerForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    
    const name = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('telefone').value;
    const birthDate = document.getElementById('dataNascimento').value;
    const city = document.getElementById('cidade').value;
    const danceStudio = document.getElementById('danceStudio').value;
    const password = document.getElementById('senha').value;
    const confirmPassword = document.getElementById('confirmarSenha').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    try {
        const response = await fetch('/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, phone, birthDate, city, danceStudio, password })
        });

        const data = await response.json();
        if (response.ok) {
            alert('Registration successful');
            // Armazenar o nome do usuário no localStorage
            localStorage.setItem('userName', name);
            // Atualizar a interface para mostrar o usuário logado
            updateLogin();
            reloadHomePage();
        } else {
            alert('Registration failed: ' + data.msg);
        }
    } catch (err) {
        console.error('Error:', err);
        alert('Registration failed: ' + err.message);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    console.log("Script carregado!");

    const signInButton = document.querySelector('#sign-in');
    if (signInButton) {
        console.log("Botão Sign In encontrado");
        signInButton.addEventListener('click', async (e) => {
            e.preventDefault();
            console.log("Botão Sign In clicado");

            const email = document.getElementById('form2Example1')?.value;
            const password = document.getElementById('form2Example2')?.value;

            console.log(`Email: ${email}, Password: ${password}`);

            if (!email || !password) {
                alert('Please enter both email and password');
                return;
            }

            try {
                console.log('Enviando requisição para login...');
                const response = await fetch('/api/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password })
                });

                console.log('Resposta recebida:', response);

                const data = await response.json();
                if (response.ok) {
                    // Armazenar o token no localStorage
                    localStorage.setItem('token', data.token);
                    // Armazenar o nome do usuário no localStorage (certifique-se que o servidor retorne o nome)
                    localStorage.setItem('userName', data.name);
                    // Atualizar a interface para mostrar o usuário logado
                    updateLogin();
                    reloadHomePage();
                } else {
                    alert('Login failed: ' + (data.msg || 'Unknown error'));
                }
            } catch (err) {
                console.error('Error:', err);
                alert('Login failed: ' + err.message);
            }
        });
    } else {
        console.log("Botão Sign In não encontrado");
    }
});

    const protectedRouteButton = document.querySelector('#protected-route-button');
    if (protectedRouteButton) {
        console.log("Botão Protected Route encontrado");
        protectedRouteButton.addEventListener('click', async (e) => {
            e.preventDefault();
            console.log("Botão Protected Route clicado");

            const token = localStorage.getItem('token');
            if (!token) {
                alert('No token found, please log in first.');
                return;
            }

            try {
                console.log('Enviando requisição para a rota protegida...');
                const response = await fetch('/api/auth/protected', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-auth-token': token
                    }
                });
                console.log('Resposta recebida:', response);

                const data = await response.json();
                if (response.ok) {
                    alert('Access to protected route successful');
                    console.log('Protected Data:', data);
                   
                } else {
                    alert('Access to protected route failed: ' + data.msg);
                }
            } catch (err) {
                console.error('Error:', err);
                alert('Access to protected route failed: ' + err.message);
            }
           
        });
    } else {
        console.log("Botão Protected Route não encontrado");
    }

const headerButton = document.querySelector('#headerButtons')

function updateLogin() {
    const loggedMenu = document.querySelector('.menuLoggedContainer');
    const signOutMenu = document.querySelector('.menuLogged');
    const closeMenu = document.querySelector('.closeMenu');

    if (loggedMenu) {
        loggedMenu.style.display = 'flex';
    } else {
        console.log("loggedMenu não encontrado");
    }

    if (signOutMenu) {
        signOutMenu.style.display = 'none';
    } else {
        console.log("signOutMenu não encontrado");
    }

    // Recuperar o nome do usuário do localStorage
    const userName = localStorage.getItem('userName');
    console.log(userName);

    if (userName) {
        const userNameElement = document.querySelector('.userName');
        if (userNameElement) {
            userNameElement.innerHTML = userName;
        } else {
            console.log("userNameElement não encontrado");
        }
    } else {
        console.error('User name is not available in localStorage');
    }

    if (loggedMenu) {
        loggedMenu.addEventListener('click', () => {
            if (signOutMenu) {
                signOutMenu.style.display = 'flex';
            } else {
                console.log("signOutMenu não encontrado ao clicar no loggedMenu");
            }
        });
    }

    if (closeMenu) {
        closeMenu.addEventListener('click', () => {
            if (signOutMenu) {
                signOutMenu.style.display = 'none';
            } else {
                console.log("signOutMenu não encontrado ao clicar no closeMenu");
            }
        });
    }

    const loginPage = document.querySelector('.loginPage'); // Adicionado
    const homePage = document.querySelector('.homePage'); // Adicionado
    const homeButton = document.querySelector('.homeButton'); // Adicionado

    if (loginPage) {
        loginPage.style.display = 'none';
    } else {
        console.log("loginPage não encontrado");
    }

    if (homePage) {
        homePage.style.display = 'grid';
    } else {
        console.log("homePage não encontrado");
    }};

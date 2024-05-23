let homeButton = document.querySelector('#home');
let historiaButton = document.querySelector('#historia');
let festivalButton = document.querySelector('#festival');
let headerButtons = document.querySelectorAll('nav-link');
const festivalPage = document.querySelector('.festivalPage');
const homePage = document.querySelector('.homePage');
const historiaPage = document.querySelector('.historiaPage');
const loginPage = document.querySelector('.loginPage');
const registerPage = document.querySelector('.registerPage');
const homeNavButton = document.querySelector('#homeButton');
const body = document.querySelector('body');

function changeToLoginPage(){
    document.querySelector('.mainSlider').style.display = 'none';
    registerPage.style.display = 'none';
    loginPage.style.display = 'grid';

    historiaButton.classList.remove('active')
    festivalButton.classList.remove('active')
    homeButton.classList.remove('active')     

    homeNavButton.addEventListener('click',()=>{        
        reloadHomePage();
    })    
}

function changeToRegisterPage(){
    document.querySelector('.mainSlider').style.display = 'none';
    loginPage.style.display = 'none';
    registerPage.style.display = 'grid';

    historiaButton.classList.remove('active');
    festivalButton.classList.remove('active');
    homeButton.classList.remove('active') ;

    homeButton.addEventListener('click',()=>{       
        reloadHomePage();
    })    
}
historiaButton.addEventListener('click', ()=>{
    reloadHistoriaPage();

})
festivalButton.addEventListener('click', ()=>{
    reloadFestivalPage();
})


function reloadHomePage(){
    loginPage.style.display = 'none';
    registerPage.style.display = 'none';
    document.querySelector('.mainSlider').style.display = 'flex';
    homeButton.classList.add('active');    
    historiaButton.classList.remove('active');
    festivalButton.classList.remove('active');
    document.querySelector('.mainSlider').style.transform = "translateX(0vw)";
}
function reloadHistoriaPage(){
    loginPage.style.display = 'none';
    registerPage.style.display = 'none';
    document.querySelector('.mainSlider').style.display = 'flex';
    homeButton.classList.remove('active');    
    historiaButton.classList.add('active');
    festivalButton.classList.remove('active');
    document.querySelector('.mainSlider').style.transform = "translateX(-100vw)";
}
function reloadFestivalPage(){
    loginPage.style.display = 'none';
    registerPage.style.display = 'none';
    document.querySelector('.mainSlider').style.display = 'flex';
    homeButton.classList.remove('active');    
    historiaButton.classList.remove('active');
    festivalButton.classList.add('active');
    document.querySelector('.mainSlider').style.transform = "translateX(-200vw)";
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
            
            const email = document.getElementById('form2Example1').value;
            const password = document.getElementById('form2Example2').value;

            console.log(`Email: ${email}, Password: ${password}`);

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
                    alert('Login failed: ' + data.msg);
                }
            } catch (err) {
                console.error('Error:', err);
                alert('Login failed: ' + err.message);
            }
        });
    } else {
        console.log("Botão Sign In não encontrado");
    }

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
});

const headerButton = document.querySelector('#headerButtons')

function updateLogin() {
    const headerButton = document.getElementById('headerButtons');
    if (headerButton) {
        headerButton.style.setProperty('display', 'none', 'important');
        const loggedMenu = document.querySelector('.menuLoggedContainer');
        const signOutMenu = document.querySelector('.menuLogged');
        const closeMenu = document.querySelector('.closeMenu');

        loggedMenu.style.display = 'flex'; 
        signOutMenu.style.display = 'none';

        // Recuperar o nome do usuário do localStorage
        const userName = localStorage.getItem('userName');
        if (userName) {
            document.querySelector('.userName').innerHTML = userName; 
        }  

        loggedMenu.addEventListener('click', ()=>{
            signOutMenu.style.display = 'flex';
        });
        closeMenu.addEventListener('click', ()=>{
            signOutMenu.style.display = 'none';
        });
        
        loginPage.style.display = 'none';
        homePage.style.display = 'grid';
        homeButton.classList.remove('active');
    } else {
        console.error('Elemento "headerButtons" não encontrado');
    } 
}

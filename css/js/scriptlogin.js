// não funciona 
const userInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const buttonInput = document.getElementById('but');


const loginForm = document.getElementById('form');


loginForm.addEventListener('button', (event) => {
  event.preventDefault(); 

  
  const user = userInput.value.trim();
  const password = passwordInput.value.trim();

  if (user == admin && password == admin) {
    but.setAttribute("href", "admturmas.html");
  }
  else {
    but.setAttribute("href", "home.html");
  }


});

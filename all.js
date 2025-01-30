function myfunction(){
  var x = document.getElementsByClassName("dropdown");
  x[0].style.display = "block";
  
}
function myfunction1(){
  var x = document.getElementsByClassName("dropdown");
  x[0].style.display = "none";
  
}
side = () =>{
  var x = document.getElementById("side");
  x.style.display="block";
  var y = document.getElementById("sidebut");
  y.style.display="none";

}
side1=()=>{
var z=document.getElementById("side");
z.style.display="none";
var y=document.getElementById("sidebut");
y.style.display="block";

}

// Define the signup function
function signup() {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const message = document.getElementById('signup-message');
    

    if (email && password) {
        localStorage.setItem('userName', name);
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password);
        message.textContent = 'Signup successful! You can now log in.';
        message.style.color = 'green';
        window.location.href = 'navbar.html';
        var x=document.getElementById("p");
        x.textContent="hello "+name;
        
    } else {
        message.textContent = 'Please fill in all fields.';
        message.style.color = 'red';
    }
}

// Define the login function
function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const message = document.getElementById('login-message');

    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    if (email === storedEmail && password === storedPassword) {
        localStorage.setItem('loggedInUser', email); // Store the logged-in user's email
        alert('Welcome! You have successfully logged in.');
        window.location.href = 'navbar.html'; // Redirect to the navbar page
    } else {
        message.textContent = 'Invalid email or password.';
        message.style.color = 'red';
    }
}

// Function to update the navbar with the logged-in user's email
function update() {
    const loggedInUser = localStorage.getItem('userEmail');
    if (loggedInUser) {
        const accountElement = document.getElementById('p');
        accountElement.textContent = "hello " + loggedInUser;
    }   else {
        const accountElement = document.getElementById('p');
        accountElement.textContent = "no_account";
    }
}

// Function to handle logout
function logout() {
    localStorage.removeItem('userEmail'); // Clear the logged-in user's email from localStorage
    update(); // Update the navbar text
    window.location.href = 'navbar.html'; // Redirect to the navbar page
}

// Call update when the page loads
window.onload = update;
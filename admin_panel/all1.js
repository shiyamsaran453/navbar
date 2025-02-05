function myfunction() {
    var x = document.getElementsByClassName("dropdown");
    x[0].style.display = "block";
}

function myfunction1() {
    var x = document.getElementsByClassName("dropdown");
    x[0].style.display = "none";
}

side = () => {
    var x = document.getElementById("side");
    x.style.display = "block";
    var y = document.getElementById("sidebut");
    y.style.display = "none";
}

side1 = () => {
    var z = document.getElementById("side");
    z.style.display = "none";
    var y = document.getElementById("sidebut");
    y.style.display = "block";
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
        window.location.href = 'index.html';
        var x = document.getElementById("p");
        x.textContent = "hello " + name;
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
        window.location.href = 'index.html'; // Redirect to the navbar page
    } else {
        message.textContent = 'Invalid email or password.';
        message.style.color = 'red';
    }
}

// Function to handle logout
function logout() {
    localStorage.removeItem('loggedInUser'); // Clear the logged-in user's email from localStorage
    update(); // Update the navbar text
    window.location.href = 'index.html'; // Redirect to the navbar page
}

// Preview function
function preview() {
    const imageInput = document.getElementById('imageInput');
    const pre_view = document.getElementById('img_preview');
    const product_name = document.getElementById('p_name').value;
    const product_price = document.getElementById('p_price').value;
    const product_details = document.getElementById('p_details').value;

    if (imageInput.files && imageInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            pre_view.src = e.target.result;
            pre_view.style.display = 'block';
        }
        reader.readAsDataURL(imageInput.files[0]);
    }

    document.getElementById('pre_name').innerText = product_name;
    document.getElementById('pre_price').innerText = product_price;
    document.getElementById('pre_details').innerText = product_details;
    document.getElementById('preview').style.display = 'flex';
}

// Add product function
function add_product() {
    const imageInput = document.getElementById('imageInput');
    const product_name = document.getElementById('p_name').value;
    const product_price = document.getElementById('p_price').value;
    const product_details = document.getElementById('p_details').value;

    if (imageInput.files && imageInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const product = {
                name: product_name,
                price: product_price,
                details: product_details,
                image: e.target.result
            };

            // Save product to localStorage
            let products = JSON.parse(localStorage.getItem('products')) || [];
            products.push(product);
            localStorage.setItem('products', JSON.stringify(products));

            alert('Product added successfully!');
        }
        reader.readAsDataURL(imageInput.files[0]);
    }
}

// Function to load products on home page
function loadProducts() {
    const pro_lst = document.getElementById('PRODUCT');
    let products = JSON.parse(localStorage.getItem('products')) || [];

    products.forEach(product => {
        const crt_div = document.createElement('div');
        crt_div.setAttribute('id', 'div');
        const crt_img = document.createElement('img');
        crt_img.setAttribute('class', 'img');
        crt_img.src = product.image;
        crt_img.style.display = 'block';
        const name = document.createElement('span');
        const price = document.createElement('span');
        const details = document.createElement('span');

        name.innerText = product.name;
        price.innerText = product.price;
        details.innerText = product.details;

        crt_div.appendChild(crt_img);
        crt_div.appendChild(name);
        crt_div.appendChild(price);
        crt_div.appendChild(details);
        pro_lst.appendChild(crt_div);
    });
}

window.onload=loadProducts;
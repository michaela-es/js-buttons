const nameInput = document.getElementById('name');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let messages = []

    if (nameInput.value === '' || nameInput.value === null)
        messages.push('Name is required')

    if (password.value.length <=8) {
        messages.push('Password must be longer than 8 characters')
    }
    if (messages.length > 0){
        e.preventDefault();
        errorElement.innerText = messages.join('\n')
    }
});

document.getElementById('form').addEventListener('submit', function(event) {
    if (window.location.pathname.includes("volibear.html")) {
        document.getElementById('form-container').style.display = 'none';
    }
});
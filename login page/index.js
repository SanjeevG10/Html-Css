document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const message = document.getElementById('message');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

      
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

       
        if (username === '' || password === '') {
            message.textContent = 'Please fill in both fields.';
            message.style.color = 'red';
            return;
        }

        
        if (username === 'user' && password === 'pass') {
            message.textContent = 'Login successful!';
            message.style.color = 'green';
            
        } else {
            message.textContent = 'Invalid username or password.';
            message.style.color = 'red';
        }
    });
});

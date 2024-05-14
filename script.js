document.getElementById('showRegister').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
});

        
document.getElementById('showLogin').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-passwrd').value;
    const errorDiv = document.getElementById('login-error');
    errorDiv.innerHTML = '';

        if (username === '' || password === '') {
            errorDiv.innerHTML = 'Both fields are required.';
            return;
        }

            alert('Login successful');
        });

document.getElementById('registerForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('reg-username').value;
            const email = document.getElementById('reg-email').value;
            const password = document.getElementById('reg-passwrd').value;
            const confirmPassword = document.getElementById('confirmPasswrd').value;
            const errorDiv = document.getElementById('registerError');
            errorDiv.innerHTML = '';

            if (username === '' || email === '' || password === '' || confirmPassword === '') {
                errorDiv.innerHTML = 'All fields are required.';
                return;
            }

            if (password !== confirmPassword) {
                errorDiv.innerHTML = 'Passwords do not match.';
                return;
            }

            if (!validateEmail(email)) {
                errorDiv.innerHTML = 'Invalid email format.';
                return;
            }

            alert('Registration successful');
        });

        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(String(email).toLowerCase());
        }
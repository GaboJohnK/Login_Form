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
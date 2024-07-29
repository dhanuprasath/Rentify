document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');

    if (registerForm) {
        registerForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const formData = new FormData(registerForm);
            const user = Object.fromEntries(formData.entries());
            
            // Simulate storing user data in local storage
            localStorage.setItem('user', JSON.stringify(user));
            
            // Redirect based on user role
            if (user.role === 'buyer') {
                window.location.href = 'buyer.html'; // Redirect to buyer page
            } else if (user.role === 'seller') {
                window.location.href = 'seller.html'; // Redirect to seller page
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const formData = new FormData(loginForm);
            const loginData = Object.fromEntries(formData.entries());
            
            // Retrieve user data from local storage
            const storedUser = JSON.parse(localStorage.getItem('user'));
            
            // Check credentials
            if (storedUser && 
                storedUser.email === loginData.emailLogin && 
                storedUser.password === loginData.passwordLogin) {
                
                // Redirect based on stored user role
                if (storedUser.role === 'buyer') {
                    window.location.href = 'buyer.html'; // Redirect to buyer page
                } else if (storedUser.role === 'seller') {
                    window.location.href = 'seller.html'; // Redirect to seller page
                }
            } else {
                alert('Invalid email or password');
            }
        });
    }
});

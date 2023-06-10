document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var loginButton = document.getElementById('loginButton');
    var loader = document.getElementById('loader');
    loginButton.innerHTML = 'Logging In';
    loader.classList.add('loader');
    loginButton.classList.add('loading');
    setTimeout(function() {
      // Simulate successful login
      loginButton.innerHTML = 'Logged In';
      loader.classList.remove('loader');
      loginButton.classList.remove('loading');
    }, 2000);
  });
  
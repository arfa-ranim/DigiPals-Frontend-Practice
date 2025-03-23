document.addEventListener('DOMContentLoaded', function() {  
    let signcontainer = document.getElementById('container');  
    let SignIn = document.getElementById('bsignin');  
    let SignUp = document.getElementById('bsignup');  
  
    console.log('signcontainer');  
    console.log(SignIn);  
    console.log(SignUp);  
  
    SignIn.addEventListener('click', function() {  
      console.log('the btn has just been clicked');  
      signcontainer.classList.add('active');  
    });  
  
    SignUp.addEventListener('click', function() {  
      console.log('the btn has just been clicked');  
      signcontainer.classList.remove('active');  
    });  
  });

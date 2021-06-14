const form = document.querySelector('.form');
const formControl = document.querySelector('.form-control');


form.addEventListener('submit', e =>{
    e.preventDefault();

    const first= form.fname.value;
    const last= form.lname.value;
    const email= form.email.value;
    const password= form.password.value;
    const small = formControl.querySelector('small');
    const icon = formControl.querySelector('.error-icon');

});
   
        small.style.opacity = "1";
        small.style.fontStyle = "italic";
        formControl.classList.add('error');
        icon.style.opacity = "1";
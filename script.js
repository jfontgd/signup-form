const form = document.querySelector(".form1");


form.addEventListener('submit', e =>{
    e.preventDefault();

    var name = form.name.value;
    var lastName = form.lastname.value;
    var email = form.email.value;
    var password = form.password.value;
    const userInfo = [
        {name, name.length},
        
    ];

    const filtered = userInfo.filter(field => field.length === 0);
    console.log(filtered);
});


const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.login-button');
const link = document.querySelector('.link');

const handleFocus = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.add('span-active')
}

const handleFocusOut = ({ target }) => {
    if (target.value === ''){
        const span = target.previousElementSibling;
        span.classList.remove('span-active')
    }
    
}
const handleChange = () => {
    const [username, password] = inputs;

    if (username.value && password.value.length >= 8){
        button.removeAttribute('disabled');
    } else{
        button.setAttribute('disabled', '');
    }
}
link.addEventListener('click', function(e) {
    const name = document.getElementById('username');

    const value = name.value;
    console.log(value);
    sessionStorage.setItem(value, 1);
})



inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));
inputs.forEach((input) => input.addEventListener('input', handleChange));
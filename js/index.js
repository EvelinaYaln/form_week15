/*check = () => {
    document.getElementById('errorMessage').innerHTML = '';
    let name = document.getElementById('userName').value;
    if (name === '') {
        document.getElementById('errorMessage').innerHTML += 'Введите ваше имя<br>';
    }
    let secondName = document.getElementById('userSecondName').value;
    if (secondName === '') {
        document.getElementById('errorMessage').innerHTML += 'Введите вашу фамилию<br>';
    }
    let email = document.getElementById('userEmail').value;
    if (email === '') {
        document.getElementById('errorMessage').innerHTML += 'Введите ваш e-mail<br>';
    }
    let password = document.getElementById('userPassword').value;
    if (password === '') {
        document.getElementById('errorMessage').innerHTML += 'Введите ваш пароль<br>';
    }
    if (password !== '' && password.length <= 8) {
        document.getElementById('errorMessage').innerHTML += 'Пароль слишком короткий<br>';
    }
    if (name !== '' && secondName !== '' && email !== '' && password !== '' && password.length >= 8) {
        document.getElementById('errorMessage').innerHTML += `Добро пожаловать, ${name + secondName}<br>`;
    }
}*/
let errors = [];
let checkValidity = (input) => {
    let validity = input.validity;
    if (validity.valueMissing) {
        errors.push('Поле ' + input.placeholder + ' не заполнено');
    }
    if (validity.patternMismatch) {
        errors.push('Неверный формат заполенения поля ' + input.placeholder);
    }
    if (validity.rangeOverflow) {
        errors.push('Максимальное значение не может быть больше, чем' + max);
    }
    if (validity.rangeUnderflow) {
        errors.push('Минимальное значение не может быть меньше, чем' + min);
    }
    if (validity.tooLong) {
        errors.push('Значение не может быть длиннее, чем' + maxlength);
    }
    if (validity.tooShort) {
        errors.push('Значение не может быть короче, чем' + minlength);
    }
    if (validity.typeMismatch) {
        errors.push('Значение не соответствует формату');
    }

}

let checkAll = () => {
    errors = [];
    let inputs = document.querySelectorAll('input');
    for (let input of inputs) {
        checkValidity(input);
    }
    document.querySelector('#errorMessage').innerHTML = errors.join('.<br>');

}
register.addEventListener('click', checkAll);
register.addEventListener('click', function(event) {
    event.preventDefault();
    let user = {
        nameUser: document.getElementById('userName').value,
        nameSec: document.getElementById('userSecondName').value,
        email: document.getElementById('userEmail').value,
        password: document.getElementById('userPassword').value,
    }
    fetch('https://httpbin.org/post', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-type': 'application/json; charset=utf-8'
            }
        })
        .then(response => response.json())
        .then(user => console.log(user))
        .catch(error => console.log(error))
});
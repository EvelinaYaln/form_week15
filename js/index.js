check = () => {
    document.getElementById('errorMessage').innerHTML = '';
    let name = document.getElementById('userName').value;
    if (name === '') {
        document.getElementById('errorMessage').innerHTML += 'Введите ваше имя<br>';
    }
    let secondName = document.getElementById('userSecondName').value;
    if (secondName === '') {
        document.getElementById('errorMessage').innerHTML += 'Введите вашу фамилию<br>';
    }
    if (name !== '' && secondName !== '') {
        document.getElementById('errorMessage').innerHTML += `Добро пожаловать, ${name + secondName}<br>`;
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
}
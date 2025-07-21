document.getElementById('main-form').addEventListener("submit", checkForm);

function checkForm(event) {
        event.preventDefault();
        var el = document.getElementById('main-form');

        var name = el.name.value;
        console.log("Name: " + name);

        var pass = el.pass.value;
        console.log("Password: " + pass);

        var repass = el.repass.value;

        var state = el.state.value;
        console.log("Gender: " + state);

        if (name == "" || pass == "" || repass == "" || state == "") {
                alert("Вы ввели не все данные");        }
        else if (pass != repass) {
                alert("Пароли должны совпадать");
        }
        else if (pass.length < 6) {
                alert("Пароль должен содержать не менее 6 символов");
        }
        else if (name.length <= 1) {
                alert("Слишком короткое имя");
        }
        else if (pass.split("&").length > 1) {
                alert("Пароль не должен содержать специальных символов");
        } else {
                alert("Accaunt created")
                window.location = 'index.html';
        }
}
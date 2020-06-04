function registerSubmit(ev){
    ev.preventDefault();
    const username = ev.target.elements[0].value;
    const password = ev.target.elements[1].value;

    let error = {};

    if(localStorage.getItem(username)){
        error = {code: "username", message: "This username has been already created"};
        inError(error);
        return false;
    }

    if(password.length < 6){
        error = { code: "password", message: "Minimal number of characters is six" };
        inError(error);
        return false;
    }

    let data = {
        username: username,
        password: password,
    };

    localStorage.setItem(username, JSON.stringify(data));
    window.location.href = "../index.html";
}

const inError = (error) => {
    var loginField = document.getElementById("errorUsername");
    var passwordField = document.getElementById("errorPassword");

    var errorText = document.createTextNode(error.message);

    
    if(error.code === "username"){
            loginField.innerHTML = error.message;
            passwordField.innerHTML = "";
    }
    
    if(error.code === "password"){
            loginField.innerHTML = "";
            passwordField.innerHTML = error.message;
    }
}
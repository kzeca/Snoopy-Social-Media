function validate(ev){
    try{
        ev.preventDefault();

        const username = ev.target.elements["username"].value;
        const password = ev.target.elements["password"].value;

        var db = localStorage.getItem(username);

        let error = {};

        if(db){
            db = JSON.parse(db);

            const login = db.username;
            const pass = db.password;

            if(username === login && password === pass){
                window.location.href = "home.html";
                localStorage.setItem("token", username);
                return true;
            }else error = {code: "password", message: "That password is wrong :("}
        }else error = {code: "username", message: "Username doesn't exist"};
        inError(error);
    }catch(e){
            alert(e.message);
    }
}

const inError = (error) => {
    if (error.code === "username") {
      alert(error.message);
    } else if (error.code === "password") {
        alert(error.message);
    }
  };
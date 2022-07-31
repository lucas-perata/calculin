let mailUsuario = JSON.parse(localStorage.getItem("dato"))
console.log(mailUsuario[0].email)


function mail(){
    Email.send({
        SecureToken : "D54AF67C01A0B222512EF770336ED7AAE8E3",
        To : mailUsuario[0].email,
        From : "calculin@hotmail.com",
        Subject : "Préstamos consultados",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}



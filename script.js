let menu= document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click" , function(){
    navbar.classList.toggle("active");
});

window.onscroll = () => {
    navbar.classList.remove("active");
};
var submit = document.getElementById("Submit")
submit.addEventListener('click', function(e){
    var name = document.getElementById('Name').value;
    var email = document.getElementById('Email').value;
    var phone = document.getElementById('Phone').value;
    var message = document.getElementById('Note').value;
    var body = 'name: '+name + '<br/> email: '+email+ '<br/> Phone: ' +phone+ '<br/> message: '+ message

    e.preventDefault()
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "minalranjit@gmail.com",
        Password : "1D7A2863661EC9BDBB71399B1248DDCA0F7D",
        To : 'minalranjit@gmail.com',
        From : email,
        Subject : "New email from your website",
        Body : body
    }).then(
      message => alert(message)
    );
})
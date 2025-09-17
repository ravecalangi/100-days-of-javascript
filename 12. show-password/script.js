const icon = document.getElementById("icon");
const password = document.getElementById("password");
const img = document.getElementById("image");

icon.addEventListener("click", (e) => {

    let isTrue = password.type === "password";
    
    img.src = isTrue ? "img/eye-open.png" : "img/eye-close.png";
    password.type = isTrue ? "text" : "password"; 

});
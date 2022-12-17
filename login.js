let loginbtn=document.querySelector("#loginform");
loginbtn.addEventListener("submit",function(event){
    event.preventDefault();
    let email=loginbtn.email.value;
    let password=loginbtn.password.value;

    let storedEmail=localStorage.getItem("email");
    let storedPassword=localStorage.getItem("password");

    if(email!==storedEmail){
        alert("enter correct email");
    }
    else{
        if(password!==storedPassword){
            alert("enter correct password");
        }
        else{
            alert("login successful");
            window.location.assign("./index.html");
        }
    }
})
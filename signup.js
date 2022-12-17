let signupbtn=document.querySelector("#signupform");
signupbtn.addEventListener("submit",function(event){
    console.log("fahfkjlahfkjhakjlfhkjahkfhkhf");
    event.preventDefault();
    let name=signupbtn.name.value;
    let age=signupbtn.age.value;
    let email=signupbtn.email.value;
    let password=signupbtn.password.value;
     
    localStorage.setItem("name",name);
    localStorage.setItem("age",age);
    localStorage.setItem("email",email);
    localStorage.setItem("password",password);
    alert("signup successful!");
    signupbtn.reset();
})
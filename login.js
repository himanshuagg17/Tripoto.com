document.querySelector("#form").addEventListener("submit",login)
function login(event){
 event.preventDefault()
 loginobj={
  email:document.getElementById("mail").value,
  password:document.getElementById("password").value
}
console.log(loginobj.email);
 let login_data=JSON.parse(localStorage.getItem("login"))||[];
  console.log(login_data);
   let count=0
   for(let i=0; i<login_data.length; i++){
    if(login_data[i].email==logobj.email && login_data[i].password==logobj.password ){
      count++ ;
    }
    }
    if(count>0){
        window.location.href="index2.html";
    }else{
        alert("Please enter correct email or password")
    }
   }
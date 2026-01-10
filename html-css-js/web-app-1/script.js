let users=[];
function addUser(){
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    
    let user={
        name:name,
        email:email,
        password:password,
    };
    users.push(user);
    showLoginForm();
    console.log(users);


    
}




function dispMessage() {

  let email = document.getElementById("txtEmail").value;
  let password = document.getElementById("txtPassword").value;
  const found=users.find(
    (e)=> e.email===email&&e.password===password
);

  if(found){
    lblMessage.innerHTML="WELCOME";
  }
  else
    lblMessage.innerHTML="DENIED";
 
}

function showLoginForm(){
    let str = `
    <h3>Login Form</h3>
      <p><label id="lblMessage"></label></p>
      <p><input type="text" id="txtEmail" placeholder="Enter your email"/></p>
      <p><input type="password" id="txtPassword"  placeholder="Enter your password"/></p>
      <p><button class="login-btn" onclick="dispMessage()">Log In</button></p>
      <hr>
      <p><button class="register-btn" onclick="showRegisterForm()">Create Account</button></p>
    `
    root.innerHTML = str
}

function showRegisterForm(){
    let str =  `
     <h3>Registration Form</h3>
      <p><input type="text" name="" id="name" placeholder="Enter name"></p>
        <p><input type="text" name="" id="email" placeholder="Enter email"></p>
        <p><input type="text" name="" id="password" placeholder="Enter password"></p>
        <p><button id="register" onclick="addUser()">Submit</button></p>
        <hr>
        <p>Already a member? <a onclick="showLoginForm()" href="#">Click here</a></p>
     
     
    `
    root.innerHTML = str
}
// when its clicked
const Login = (event) => {
    // get the values from username and pass
    //   to get the values I have to call the elements and then get the value
    event.preventDefault();
    const correctName = "admin";
    const correctPass = "admin1";
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    let hiddenMsg = document.getElementById("hiddenMsg");
    let hiddenLoading= document.getElementById("hidden-loading");
    //   console.log(username);
    //   console.log(password);
    // check if the values match
    if (username == correctName && password == correctPass) {
      // if login success
      // go to todo page
      hiddenMsg.style.display = "block";
      hiddenMsg.style.color= "green";
      hiddenMsg.style.border= "1px solid green";
      hiddenMsg.style.backgroundColor= "#0080003d";
      hiddenMsg.innerHTML = "Logging you in!";
      hiddenLoading.style.display = "block"
      // get login from database login()
      
      setTimeout(()=>{
          window.location = "http://127.0.0.1:5500/todo-list-assignment/todo.html";
      },2000);
  
     
      return;
    }
    // if wrong
    hiddenMsg.style.display = "block";
  };
  
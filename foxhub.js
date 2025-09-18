 function togglePassword() {
      const pwd = document.getElementById("password");
      const toggle = document.getElementById("toggle");
      if (pwd.type === "password") {
        pwd.type = "text";
        toggle.textContent = "HIDE";
      } else {
        pwd.type = "password";
        toggle.textContent = "SHOW";
      }
    } 
    
  function toggle() {
      const pwd = document.getElementById("confirm");
      const toggle = document.getElementById("tog");
      if (pwd.type === "password") {
        pwd.type = "text";
        toggle.textContent = "HIDE";
      } else {
        pwd.type = "password";
        toggle.textContent = "SHOW";
      }
    }


  function check(){
     let check_val = document.getElementById('password').value
     let val = check_val.length

       if (val === 0) {
   document.getElementById('show').innerText = ""
  }
     else if (!/[!@#$%^&*()]/.test(check_val) || val < 8){
        document.getElementById('show').innerText = `Password must contain 8 or more characters  
          It should also contain atleast a special character`
}

else {
  document.getElementById('show').innerText = ""
}


}


function check_pwd(){
 let pword =  document.getElementById('password').value
 let conf = document.getElementById('confirm').value

 if(pword === conf){
     window.location.href = "fhub_login.html";       //to redirect in js
 }
 else{
     document.getElementById('same').innerText = `Password must be the same`
 }
}

document.getElementById('registerButton').addEventListener("click",()=>{
    if(document.getElementById("email").value!="" && document.getElementById("password").value!="")
    {
        checkDetails();
    }
    else{
        alert('Please Enter All Details');
    }
    
});

let checkDetails = ()=>{
    let details = JSON.parse(localStorage.getItem("userDetails")) || [];

    if(details.length==0 || details==null)
    {
        alert("No User Found, Please Sign Up")
    }
    else
    {
        console.log(details)

        const enteredEmail = document.getElementById('email').value;
        const enteredPass = document.getElementById('password').value;
    
        if(enteredEmail===details.userEmail && enteredPass===details.userPassword)
        {
            alert(`Welcome ${details.userName}`);
            window.location.href="index.html"
            
        }
        else{
            alert('Wrong Details Entered');
            window.location.reload()
        }
    }

}




const extension = document.getElementById('registerExtention').addEventListener("click",function(){
    window.location.href="signup.html"
});

document.getElementById('signUpext').addEventListener("click",()=>{
    window.location.href="signup.html"
});
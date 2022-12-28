console.log("Nabar is also here");

let details = JSON.parse(localStorage.getItem("userDetails")) || [];

if(details.length==0)
{
    document.getElementById('userNameDisplay').innerText="";
}
else
{
    document.getElementById('userNameDisplay').innerText=details.userName;
}

let takeToWomen =()=>{
    window.location.href="women.html"
}

let takeToMen =()=>{
    window.location.href="mens.html"
}

// =====[ Account Verification ]===

let checkUser = ()=>{
    let check = JSON.parse(localStorage.getItem("userDetails")) ||[];

    console.log(check);

    if(check.length==0)
    {
        alert("Please Sign Up First")
        window.location.href="signup.html"
    }
    else{
        showBag();
    }
}

let showBag = ()=>{

window.location.href="cart.html"
}


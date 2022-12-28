
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

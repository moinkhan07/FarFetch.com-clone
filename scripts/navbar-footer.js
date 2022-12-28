//  this script is for injecting navbar and footer to pages wherever required

function loadNavbar(){
    fetch('./navbar.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('navbar').innerHTML = text);
    }
    // loadNavbar();

function loadFooter(){
    fetch('../footer.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('footer').innerHTML = text);
    }
    loadFooter();



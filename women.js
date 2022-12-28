let first_box_img = document.getElementById("first_box_img");
first_box_img.onclick = ()=>{
    window.location.href = "./womens_product.html"
}

let second_box_img = document.getElementById("second_box_img");
second_box_img.onclick = ()=>{
    window.location.href = "./womens_product.html"
}

let third_box_img = document.getElementById("third_box_img");
third_box_img.onclick = ()=>{
    window.location.href = "./womens_product.html"
}

let forth_box_img = document.getElementById("forth_box_img");
forth_box_img.onclick = ()=>{
    window.location.href = "./womens_product.html"
}

let products_box_5_store = document.querySelectorAll(".products_box_5")

products_box_5_store.forEach((el)=>{
    el.addEventListener("click",()=>{
        window.location.href = "./womens_product.html"
    })
})

let image_box_6 = document.getElementById("image_box_6");
image_box_6.onclick = ()=>{
   window.location.href = "./womens_product.html"
}

let image_box_7 = document.querySelectorAll(".image_box_7");
image_box_7.forEach((elem)=>{
    elem.addEventListener("click",()=>{
        window.location.href = "./womens_product.html"
    })
})

let products_box_9 = document.querySelectorAll(".products_box_9");
products_box_9.forEach((element)=>{
    element.addEventListener("click",()=>{
        window.location.href = "./womens_product.html"
    })
})


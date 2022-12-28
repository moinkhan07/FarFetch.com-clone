let product=[
    {
        image_url1: "https://cdn-images.farfetch-contents.com/18/87/45/09/18874509_41141864_1000.jpg",
        image_url: "https://cdn-images.farfetch-contents.com/18/87/45/09/18874509_41141874_1000.jpg",
        season: "New Season",
        name: "Versace",
        title: "all-over graphic print shirt",
        price: "2,226",
        imports: "Import duties included"
      },
];


let cartArr_ =JSON.parse(localStorage.getItem("selected"))||[]
console.log(cartArr_)
let wishlistArr=JSON.parse(localStorage.getItem("wishlists"))||[]

let productDetail=document.getElementById("productDetail");

appendProduct(cartArr_)

function appendProduct(data){
    productDetail.innerHTML="";

    data.forEach(function (elem,index){
        let div=document.createElement("div");

        let div1=document.createElement("div");

        let image=document.createElement("img");
        image.setAttribute("src",elem.image);

        let image1=document.createElement("img");
        image1.setAttribute("src",elem.image_2);

        let season=document.createElement("p");
        season.innerText="New Season";

        let name=document.createElement("h3");
        name.innerText=elem.brand;

        let title=document.createElement("p");
        title.innerText=elem.product;

        let price=document.createElement("p");
        price.innerText="$"+elem.price;

        let imports=document.createElement("p");
        imports.innerText=elem.category;

        // let size=document.createElement("select");
        // size.innerText="Select size (Clothing Standard)"

        // let option1=document.createElement("option")
        // option1.innerText="48 IT - M"

        // let option2=document.createElement("option")
        // option2.innerText="50 IT - L"

        // let option3=document.createElement("option")
        // option3.innerText="52 IT - XL"

        // let option4=document.createElement("option")
        // option4.innerText="54 IT - XXL"

        // let option5=document.createElement("option")
        // option5.innerText="56 IT - XXXL"

        let select_tag=document.createElement("div")
        select_tag.setAttribute("class","dropdown_main_12")

        let select_tag2=document.createElement("div")
        select_tag2.setAttribute("class","select_12")

        let span_=document.createElement("span")
        span_.setAttribute("class","selected_12")
        span_.innerText="Select size (Clothing Standard)"

        let caret=document.createElement("div")
        caret.setAttribute("class","caret_12")

        let option_main=document.createElement("ul");
        option_main.setAttribute("class","menu_2_12");

        let option_1=document.createElement("li");
        option_1.innerText="46 IT - S";

        let option_2=document.createElement("li");
        option_2.innerText="48 IT - M";
        
        let option_3=document.createElement("li");
        option_3.innerText="50 IT - L";

        let option_4=document.createElement("li");
        option_4.innerText="52 IT - XL";

        let option_5=document.createElement("li");
        option_5.innerText="54 IT - XXL";

        let option_6=document.createElement("li");
        option_6.innerText="56 IT - XXXL";

        let cart=document.createElement("button");
        cart.innerText="Add To Bag"
        cart.addEventListener("click",function(){
            cartFun(elem,index);
        })

        let wishlist=document.createElement("button");
        wishlist.innerText="Wishlist"
        wishlist.addEventListener("click",function(){
            wishlistFun(elem,index);
        })

        let delivery=document.createElement("p");
        delivery.innerText="ESTIMATED DELIVERY"
        
        let delivertDate=document.createElement("p");
        delivertDate.innerText="Aug 31-Sep 8"

        option_main.append(option_1,option_2,option_3,option_4,option_5,option_6)

        select_tag2.append(span_,caret)

        select_tag.append(select_tag2,option_main)

        div.append(image1,image);

        // size.append(option1,option2,option3,option4,option5)

        div1.append(season,name,title,price,imports,select_tag,cart,wishlist,delivery,delivertDate)

        // div2.append(image);

        productDetail.append(div,div1);
    });
}

function cartFun(elem,index){
  let addtobag= JSON.parse(localStorage.getItem("add_to_bag")) || [];
  addtobag.push(elem);
  localStorage.setItem("add_to_bag",JSON.stringify(addtobag));
  window.location.href = "../cart.html"
}

function wishlistFun(elem,index){
    wishlistArr.push(elem);
    localStorage.setItem("wishlists",JSON.stringify(wishlistArr));
}
    
let dropdown_12 = document.querySelectorAll(".dropdown_main_12");
  dropdown_12.forEach((drop) => {
    let select_12 = drop.querySelector(".select_12");
    let caret_12 = drop.querySelector(".caret_12");
    let menu_12 = drop.querySelector(".menu_2_12");
    let options_12 = drop.querySelectorAll(".menu_2_12 li");
    let selected_12 = drop.querySelector(".selected_12");
    select_12.addEventListener("click",()=> {
      select_12.classList.toggle("select_12-clicked");
      caret_12.classList.toggle("caret_12-rotate");
      menu_12.classList.toggle("menu_2_12-open");
    });
    options_12.forEach((op) => {
        op.addEventListener("click", () => {
        selected_12.innerText = op.innerText;

        select_12.classList.remove("select_12-clicked");
        
        caret_12.classList.remove("caret_12-rotate");
        menu_12.classList.remove("menu_2_12-open");
        options_12.forEach((op) => {
          op.classList.remove("active");
        });
        op.classList.add("active");
      });
    });
  });

//   let span=document.getElementsByTagName("span");
//   let menscontainer=document.getElementById("mens_container");
//   let x=0;
//   span[1].onclick=()=>{
//     x++;
//     for(let i of mens_container){

//         if(x==0){
//             i.style.left="0px";
//         }
//         if(x==1){
//             i.style.left="-740px";
//         }
//         if(x==2){
//             i.style.left="-1480px";
//         }
//         if(x==3){
//             i.style.left="-2220px";
//         }
//         if(x==4){
//             i.style.left="-2960px";
//         }
//         if(x>4){
//             x=4;
//         }
//     }

//     span[0].onclick=()=>{
//         x--;
//         for(let i of mens_container){
    
//             if(x==0){
//                 i.style.left="0px";
//             }
//             if(x==1){
//                 i.style.left="-740px";
//             }
//             if(x==2){
//                 i.style.left="-1480px";
//             }
//             if(x==3){
//                 i.style.left="-2220px";
//             }
           
//             if(x<0){
//                 x=0;
//             }
//         }
    
//   }
// }







// <!-- Initialize Swiper -->

//   var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     slidesPerGroup: 3,
//     loop: true,
//     loopFillGroupWithBlank: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });

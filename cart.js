let totalCartValue = 0;
let totalItem = 0;
let estimatedAmt = 0;

let cartdata = JSON.parse(localStorage.getItem("add_to_bag")) || [];
console.log(cartdata);
display(cartdata);
checkout(cartdata);

function display(cartdata) {
  // document.querySelector("#content").innerHTML = "";

  cartdata.forEach(function (elem, index) {
    let estiTotal = totalCartValue + 100;
    let subCartTotal = 0;
    let x = elem.price;
    let tr = document.createElement("tr");

    let box = document.createElement("div");
    box.setAttribute("id", "box");
    let td2 = document.createElement("td");

    let box1 = document.createElement("div");
    box1.setAttribute("id", "box1");
    let proImg = document.createElement("img");
    proImg.src=elem.image;
    box1.append(proImg);

    let box2 = document.createElement("div");
    box2.setAttribute("id", "box2");
    let proName = document.createElement("p");
    proName.innerText = elem.product;

    let proPrice = document.createElement("p");
    proPrice.innerText = "$ " + elem.price;
    box2.append(proName, proPrice);

    box.append(box1, box2);
    td2.append(box);

    let td3 = document.createElement("td");

    let quantityBox = document.createElement("div");
    quantityBox.setAttribute("id", "quantity");
    let inc = document.createElement("button");
    inc.setAttribute("id", "increase");
    inc.innerText = "+";
    let counter = 1;
    inc.addEventListener("click", function () {
      counter++;
      localStorage.setItem(elem.product, counter);
      subCartTotal = x * counter;
      td4.innerText = subCartTotal + " " + "$";
      window.location.reload();
    });
    counter = localStorage.getItem(elem.product);
    // inc.addEventListener("click", function () {
    //     let y=counter++;
    //     localStorage.setItem("counter",y);
    //     num.innerText = counter;
    //     subCartTotal = x * counter;
    //     td4.innerText = subCartTotal + " " + "$";
    // });

    let num = document.createElement("h6");
    num.setAttribute("id", "number");
    if (localStorage.getItem(elem.product) == null) {
      num.innerText = 1;
    } else {
      num.innerText = localStorage.getItem(elem.product);
    }

    let dec = document.createElement("button");
    dec.setAttribute("id", "decrease");
    dec.innerText = "-";
    dec.addEventListener("click", function () {
      if (counter > 1) {
        counter--;
        localStorage.setItem(elem.product, counter);
        window.location.reload();
      }
    });
    // dec.addEventListener("click", function () {
    //     if (counter > 1) {
    //         let z=counter--;
    //         localStorage.setItem("counter",z);
    //         num.innerText = counter;
    //         subCartTotal = x * counter;
    //         td4.innerText = subCartTotal + " " + "$";
    //     }
    // });
    quantityBox.append(inc, num, dec);
    td3.append(quantityBox);

    let td4 = document.createElement("td");
    td4.setAttribute("id", "price");
    td4.innerText = "" + " " + elem.price;
    if (counter > 1) {
      td4.innerText = "$" + " " + elem.price * counter;
    }
    // if (Number(counter) == 1) {
    //     td4.innerText = "$"+" "+ elem.price;
    // }else
    // if(counter>0){
    //     td4.innerText="$"+" "+elem.price*counter;
    // }

    let td5 = document.createElement("td");
    td5.setAttribute("id", "delete");
    td5.innerHTML =
      '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ2qxxrocB2XyYTstDgPUqe1pJ2i1ZbGD0qA&usqp=CAU"width="15%" height="15%"\background-color=transaparent">';
    td5.addEventListener("click", function () {
      deleteItem(index);
      localStorage.setItem(elem.product, 1);
      window.location.reload();
    });

    totalItem = totalItem + Number(counter);
    totalCartValue = totalCartValue + elem.price * Number(counter);
    console.log(totalCartValue);
    console.log(totalItem);
    tr.append(td2, td3, td4, td5);
    document.querySelector("#content").append(tr);
  });
}

// console.log(cartdata);
function deleteItem(index) {
  cartdata.splice(index, 1);
  localStorage.setItem("add_to_bag", JSON.stringify(cartdata));
  window.location.reload();
}

var total = 0;
function checkout(cartdata) {
  document.querySelector("#checkout").innerHTML = "";

  let summary = document.createElement("h2");
  summary.innerText = "ORDER SUMMARY";

  let subtotal = document.createElement("h3");
  // let subTotal=subCartTotal+Number(elem.price);
  subtotal.innerText = "Subtotal : " + "$ " + " " +Math.round(totalCartValue);

  let shipping = document.createElement("h3");
  shipping.innerText = "Estimated Shipping : " + "$ " + 100;

  let total = document.createElement("h3");
  estimatedAmt = estimatedAmt + 100 + totalCartValue;

  total.innerText = "Estimated Total : $ " + estimatedAmt;
  let coupon_submit = document.createElement("button");
  coupon_submit.innerText = "APPLY COUPON";

  let coupon_entered = document.createElement("input");
  coupon_entered.setAttribute("id", "cpn_name");
  coupon_entered.innerText = "APPLY COUPON";
  coupon_submit.addEventListener("click", apply_coupon);

  let checkoutButton = document.createElement("button");
  checkoutButton.setAttribute("id", "finalpay");
  checkoutButton.innerText = "CHECKOUT NOW";

  let coupon_status = document.createElement("p");
  coupon_status.setAttribute("id", "display");

  let last_amount_display = document.createElement("h3");
  last_amount_display.setAttribute("id", "dsp_last_total");

  let discount = document.createElement("h3");
  discount.setAttribute("id", "discount");

  document
    .querySelector("#checkout")
    .append(
      summary,
      subtotal,
      shipping,
      total,
      coupon_status,
      discount,
      last_amount_display,
      coupon_submit,
      checkoutButton
    );
}

function apply_coupon() {
  let x = document.querySelector("#cpn_name").value;
  if (x == "masai30") {
    // let total=100
    totalCartValue = +totalCartValue * 0.7;
    document.querySelector("#display").innerText = "Coupon applied sucessfully";
    console.log(total);

    document.querySelector("#discount").innerText = "Discount : " + "30%";
    document.querySelector("#dsp_last_total").innerText =
      "Amount to pay : $ " + totalCartValue;

    localStorage.setItem("last_total_to_pay", totalCartValue);
    // location.href = "payment.html";
  } else {
    document.querySelector("#display").innerText = "Invalid Coupon";
  }
}

document.querySelector("#finalpay").addEventListener("click", function () {
  localStorage.setItem("last_total_to_pay", totalCartValue);
  localStorage.setItem("estimate_total_to_pay",estimatedAmt );
  location.href = "addresspage.html";
});

let count_value_of_cart = JSON.parse(localStorage.getItem("add_to_bag"));

let cart_value = document.getElementById("bagCount");
let count = 0;
for(let i = 0;i < count_value_of_cart.length;i++){
    ++count;
    cart_value.innerText = totalItem;
}
const kurtas = [
  {
    name: "Indo Era",
    subName: "Women Maroon Solid A-Line Kurta with Printed Longline Ethnic Jacket",
    price: "Rs. 1044",
    productDetails: ["Maroon solid A-line kurta, has a round neck, sleeveless, flared hem, no slits","Black and pink screen print A-line calf length kurta, has a round neck, three-quarter sleeves, asymmetric hem, button closure at the back", "", ""],
    sleeveLength: "Three-Quarter Sleeves",
    TopPattern: "Printed",
    machineWash: "Hand Wash",
    img: "./src/img/kurtas/pic-1.webp"
  },
  {
    name: "Libas",
    subName: "Women Black & Pink Screen Print Kurta with Trousers & Dupatta",
    price: "Rs. 1499",
    productDetails: ["Black and pink printed kurta with trousers","Comes with a black, taupe and maroon printed longline ethnic jacket, has tie-up detail on the front, three-quarter sleeves,Green and golden striped dupatta, has tasselled detail"],
    sleeveLength: "Three-Quarter Sleeves",
    TopPattern: "Solid",
    machineWash: "Hand Wash",
    img: "./src/img/kurtas/pic-2webp.webp"},

  {
    name: "Anouk",
    subName: "Women Pink Printed Straight Kurta",
    price: "Rs. 1274",
    productDetails: ["Pink printed straight kurta, has a V-neck, three-quarter sleeves, straight hem, side slits","","",""],
    sleeveLength: "Three-Quarter Sleeves",
    TopPattern: "Floral",
    machineWash: "Machine Wash",
    img: "./src/img/kurtas/pic-3.jpg"
  },
  {
    name: "Libas",
    subName: "Women Green Solid Straight Kurta",
    price: "Rs. 879",
    productDetails: ["Green solid straight kurta, has a mandarin collar with half button placket, three-quarter sleeves with embroidered detail, straight hem, side slits", "", "", ""],
    sleeveLength: "Three-Quarter Sleeves",
    TopPattern: "Solid",
    machineWash: "Machine Wash",
    img: "./src/img/kurtas/pic-4.webp"
  },
  {
    name: "Libas",
    subName: "Women Black Yoke Design Straight Kurta",
    price: "Rs. 879",
    productDetails: ["Black yoke design straight kurta, has a mandarin collar with mock half button placket, three-quarter sleeves, straight hem, side slits"],
    sleeveLength: "Three-Quarter Sleeves",
    TopPattern: "Solid",
    machineWash: "Machine Wash",
    img: "./src/img/kurtas/pic-5.webp"
  },
  {
    name: "Divena",
    subName: "Women Peach-Coloured & White Printed Anarkali Kurta with Ethnic Jacket",
    price: "Rs. 2999",
    productDetails: ["Peach-coloured and white printed Anarkali kurta with gotta patti detail, has a round neck, sleeveless, flared hem. Comes with a peach-coloured and white printed ethnich jacket with gotta patti detail, has a front-tie, three-quarter sleeves, flared hem"],
    sleeveLength: "Three-Quarter Sleeves",
    TopPattern: "Ethnic Motifs",
    machineWash: "Hand Wash",
    img: "./src/img/kurtas/pic-6.webp"
  },
  {
    name: "Libas",
    subName: "Women Navy Blue Block Print Straight Kurta",
    price: "Rs. 779",
    productDetails: ["Navy Blue printed straight kurta, has a stylised keyhole neck, three-quarter sleeves, straight hem, side slits, hook-and-eye closure"],
    sleeveLength: "Three-Quarter Sleeves",
    TopPattern: "Ethnic Motifs",
    machineWash: "Dry-Clean",
    img: "./src/img/kurtas/pic-7.webp"
  },
  {
    name: "Varanga",
    subName: "Women Yellow & Green Floral Print Straight Kurta",
    price: "Rs. 696",
    productDetails: ["Navy Blue printed straight kurta, has a stylised keyhole neck, three-quarter sleeves, straight hem, side slits, hook-and-eye closure"],
    sleeveLength: "Three-Quarter Sleeves",
    TopPattern: "Floral",
    machineWash: "Dry-Clean",
    img: "./src/img/kurtas/pic-8.webp"
  }

]
console.log(kurtas[2]);

const display_kurtas = document.getElementById("kurta");

const showDetails = (card) => {
  let output = "";
  output += `
<div class="pop-structure">
  <div class="close-display"><i class="fas fa-window-close"></i></div>
  <div class="row"> 
    <div class="displayImg">
      <img src="${kurtas[card].img}" alt="">
    </div>
    <div class="displayDetails">
      <h3 class="display-name">${kurtas[card].name}</h3>
      <h3 class="display-subname">${kurtas[card].subName}</h3>
      <h2 class="money">${kurtas[card].price}</h2>
      <p class="taxes">inclusive of all taxes</p>
      <h4 class="size">SELECT SIZE</h4>
      <div class="row-1">
        <div class="col-2">XS</div>
        <div class="col-2">S</div>
        <div class="col-2">M</div>
        <div class="col-2">L</div>
        <div class="col-2">XL</div>
      </div>
      <button class="btn add-to-bag"><i class="fas fa-cart-plus"></i> Add To Cart</button>
      <button class="btn whishlist"><i class="fas fa-bookmark"></i> WHISHLIST</button>
    </div>        
  </div>
  <div class="pdDiv">
    <h3 class="product-details">Product Details</h3>
    <p>${kurtas[card].productDetails[0]}</p>
    <p><span>Top Pattern:</span> ${kurtas[card].TopPattern}</p>
    <p><span>Sleave Length:</span> ${kurtas[card].sleeveLength}</p>
    <p><span>Wash:</span> ${kurtas[card].machineWash}</p>
  </div>        
</div>
            `
  console.log(output);
  display_kurtas.innerHTML = output;
}

const toggle = () => {
  document.querySelector(".whole-section").style.display = "none";
}

const closeWindow = () => {
  document.querySelector(".fa-window-close").addEventListener("click", () => {
    document.querySelector(".whole-section").style.display= "block";
    display_kurtas.innerHTML = "";
  });
}

const processDetails = (card) => {
  toggle();
  showDetails(card);
  closeWindow();
};




const shirt = [
  {
    name: "Roadster",
    subName: "Men Grey Melange All-Over-Printed T-shirt",
    price: "Rs. 419",
    productDetails: ["Grey melange and navy blue printed T-shirt, has a round neck, long sleeves"],
    img: "./src/img/shirt/shirt-1.webp"
  },
  {
    name: "Roadster",
    subName: "Grey melange and navy blue printed T-shirt, has a round neck, long sleeves",
    price: "Rs. 699",
    productDetails: ["Charcoal grey, maroon and black striped T-shirt, has a polo collar, long sleeves"],
    img: "./src/img/shirt/shirt-2.webp"},

  {
    name: "Master $ Harbour",
    subName: "Men Teal Blue Slim Fit Solid Casual Shirt",
    price: "Rs. 1044",
    productDetails: ["Teal blue solid casual shirt, has a cutaway collar, button placket, 2 pockets, long sleeves, curved hem"],
    img: "./src/img/shirt/shirt-3.webp"
  },
  {
    name: "Campus Sutra",
    subName: "Men Navy Blue & Grey Standard Fit Colourblocked Casual Shirt",
    price: "Rs. 599",
    productDetails: ["Navy blue and grey colourblocked casual shirt, has a spread collar, long sleeves, button placket, and curved hem"],
    img: "./src/img/shirt/shirt-4.webp"
  }
];

const shoes = [
  {
    name: "Mast & Harbour",
    subName: "Men White Sneakers",
    price: "Rs. 893",
    productDetails: ["A pair of round-toe white sneakers, has regular styling, lace-up detail"],
    img: "./src/img/shoes/shoes-1.webp"
  },
  {
    name: "Vans",
    subName: "Men Navy Blue Sneakers",
    price: "Rs. 9999",
    productDetails: ["A pair of round-toe navy blue & white sneakers, has regular styling, lace-up detail"],
    img: "./src/img/shoes/shoes-2.webp"},

  {
    name: "FILA",
    subName: "Men Grey & Orange ALFRED Tennis Shoes",
    price: "Rs. 1599",
    productDetails: ["A pair of grey & orange tennis sports shoes, has regular styling, lace-up detail"],
    img: "./src/img/shoes/shoes-3.webp"
  },
  {
    name: "MENGLER",
    subName: "Men Black Textile Walking Shoes",
    price: "Rs. 699",
    productDetails: ["A pair of black walking sports shoes, has regular styling, slip-on detail"],
    img: "./src/img/shoes/shoes-4.webp"
  }
];

const display_kurtas = document.getElementById("kurta");

const showDetails = (card) => {
  let output = "";
  output += `
<div class="pop-structure" style="padding-top: 20px;">
  <div class="close-display"><i class="fas fa-window-close"></i></div>
  <div class="row"> 
    <div class="displayImg">
      <img src="${shirt[card].img}" alt="">
    </div>
    <div class="displayDetails">
      <h3 class="display-name">${shirt[card].name}</h3>
      <h3 class="display-subname">${shirt[card].subName}</h3>
      <h2 class="money">${shirt[card].price}</h2>
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
    <p>${shirt[card].productDetails[0]}</p>
  </div>        
</div>
            `
  console.log(output);
  display_kurtas.innerHTML = output;
}
const showDetailsShoes = (card) => {
  let output = "";
  output += `
<div class="pop-structure" style="padding-top: 20px;">
  <div class="close-display"><i class="fas fa-window-close"></i></div>
  <div class="row"> 
    <div class="displayImg">
      <img src="${shoes[card].img}" alt="">
    </div>
    <div class="displayDetails">
      <h3 class="display-name">${shoes[card].name}</h3>
      <h3 class="display-subname">${shoes[card].subName}</h3>
      <h2 class="money">${shoes[card].price}</h2>
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
    <p>${shoes[card].productDetails[0]}</p>
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

const processDetailsShirt = (card) => {
  toggle();
  showDetails(card);
  closeWindow();
};
const processDetailsShoes = (card) => {
  toggle();
  showDetailsShoes(card);
  closeWindow();
};
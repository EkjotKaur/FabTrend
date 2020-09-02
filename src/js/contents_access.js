const acc = [
  {
    name: "Tommy Hilfiger",
    subName: "Men Black & Brown Colourblocked Two Fold Leather Wallet",
    price: "Rs. 1503",
    productDetails: ["Black and brown colourblocked two fold wallet 1 main compartment, has a non detachable flap 4 card holders, 2 slip pockets, has a flap coin pocket"],
    img: "./src/img/assess/pic-1.webp"
  },
  {
    name: "NOISE",
    subName: "Black ColorFit Pro 2 Active Smartwatch",
    price: "Rs. 3499",
    productDetails: ["ColorFit Pro 2 is our latest smartwatch with a stylish new design and a gorgeous 1.3' full touch colour display. It isn't all good looks though, because ColorFit Pro 2 has much better health and activity tracking, 9 sports modes and all the smartwatch features you can think of, from call, text and social media notifications to music control on your smartphone. ColorFit Pro 2 can do so much more and yet it has an amazing 10 day battery life so you'll need to charge it just a few times a month."],
    img: "./src/img/assess/pic-2.webp"},

  {
    name: "NOISE",
    subName: "Unisex Jet Black Shots BEAT Truly Wireless Earbuds",
    price: "Rs. 1999",
    productDetails: ["Featuring a lightweight and snug-fitting design, these earbuds offers playback time of up to 6 hours for every charge and carrying case can give 2 additional charges to the earbuds making total play-time of up to 18 Hours."],
    img: "./src/img/assess/pic-3.webp"
  },
  {
    name: "Tistabene",
    subName: "Pink Triangular Rose Gold-Plated Drop Earrings",
    price: "Rs. 260",
    productDetails: ["Pink Triangular Earrings, rose gold-plated, has artificial stones Secured with a post and back"],
    img: "./src/img/assess/pic-4.webp"
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
      <img src="${acc[card].img}" alt="">
    </div>
    <div class="displayDetails">
      <h3 class="display-name">${acc[card].name}</h3>
      <h3 class="display-subname">${acc[card].subName}</h3>
      <h2 class="money">${acc[card].price}</h2>
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
    <p>${acc[card].productDetails[0]}</p>
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

const processDetailsAcc = (card) => {
  toggle();
  showDetails(card);
  closeWindow();
};
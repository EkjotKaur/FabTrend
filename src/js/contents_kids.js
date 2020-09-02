const kid = [
  {
    name: "BORN WEAR",
    subName: "Kids Navy Blue & Red Solid T-shirt with Dungarees",
    price: "Rs. 599",
    productDetails: ["This clothing set consists of t-shirt and dungarees Red solid t-shirt, has a round neck, short sleeves Navy Blue and white printed dungarees, has a button closure"],
    img: "./src/img/kids-2/kid-1.webp"
  },
  {
    name: "Wish Karo",
    subName: "Girls Maroon Solid Fit and Flare Dress",
    price: "Rs. 816",
    productDetails: ["Maroon solid knitted fit and flare dress, has a round neck, sleeveless, zip closure,flared hem"],
    img: "./src/img/kids-2/kid-2.webp"},

  {
    name: "BORN WEAR",
    subName: "Unisex Red & Navy Blue Printed T-shirt with Dungarees",
    price: "Rs. 599",
    productDetails: ["This clothing set consists of t-shirt and shorts Red and navy blue printed t-shirt, has a round neck, short sleeves Red and navy blue printed dungarees, has a button closure"],
    img: "./src/img/kids-2/kid-3.webp"
  },
  {
    name: "Nauti Nati",
    subName: "Girls Peach-Coloured & White Applique Sweatshirt with Pyjamas",
    price: "Rs. 1049",
    productDetails: ["This clothing set consists of sweatshirt and pyjamas Peach-coloured applique sweatshirt, has a hood, long sleeves, straight hem White,pink and blue printed pyjamas, has a slip-on closure"],
    img: "./src/img/kids-2/kid-4.webp"
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
      <img src="${kid[card].img}" alt="">
    </div>
    <div class="displayDetails">
      <h3 class="display-name">${kid[card].name}</h3>
      <h3 class="display-subname">${kid[card].subName}</h3>
      <h2 class="money">${kid[card].price}</h2>
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
    <p>${kid[card].productDetails[0]}</p>
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

const processDetailsKids = (card) => {
  toggle();
  showDetails(card);
  closeWindow();
};
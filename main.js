//////////// cart script start
// cart open
var modal = document.getElementById("myModal");

// button to open cart
var btn = document.getElementById("myBtn");

// button element that closes the cart
var span = document.getElementsByClassName("close")[0];

// clicks outside the cart
btn.onclick = function() {
  modal.style.display = "block";
}

// user clicks outside cart
span.onclick = function() {
  modal.style.display = "none";
}

// user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//////////////// cart script end

// changing of sizes to fetch when adding to cart
const button_S = document.getElementById('button_S');
const button_M = document.getElementById('button_M');
const button_L = document.getElementById('button_L');
const size_output = document.getElementById('size_output');

// start buttons event listeners
button_S.addEventListener('click', () => {
  size_output.textContent = 'S';
});

button_M.addEventListener('click', () => {
  size_output.textContent = 'M';
});

button_L.addEventListener('click', () => {
  size_output.textContent = 'L';
});
// end buttons event listeners

//// test start
transferDataBtn.addEventListener('click', () => {
    /* displaycart1(); */
    console.log("TEST SUCCESS!");
    cartNumbers(products);
  });

/* function displaycart1(){

    var cart =[];

    // Fetch the content of the <p> element
    var title = document.getElementById("dataElement1").innerText;
    const price = document.getElementById("dataElement2").innerText;
    var value = document.getElementById("size_output").innerText;
    //const dataToFetch = document.getElementById("size_output").innerText
    console.log(title, value, price);

    // Set the fetched data as the content of the modal
    const displayedDataContainer = document.getElementById('displayedData');

    // Get the button element by its ID
    const transferDataBtn = document.getElementById("transferDataBtn");
} */

    // Function to display data in the modal
function displayDataInModal(data1, data2) {
    const modalDataContainer = document.getElementById('modalData');
  
    // Manipulate the data as needed
    const html = `
      <p>${data1}</p>
      <p>${data2}</p>
      <p>${document.getElementById("size_output").innerText}</p>
    `;

    // Display the data in the modal
    modalDataContainer.innerHTML = html;
  }

  const openModalBtn = document.getElementById('myModal');
  btn.addEventListener('click', () => {
  // Gather data from the HTML elements
  const dataElement1 = document.getElementById('dataElement1').innerText;
  const dataElement2 = document.getElementById('dataElement2').innerText;

  // Display the data in the modal
  displayDataInModal(dataElement1, dataElement2);
});


////NEW TEST START

let carts = document.querySelectorAll('.add-to-cart-btn');

const products = [
    { name: "Classic Tee S", tag: "classic-tee-s", price: 75, inCart: 0 },
    { name: "Classic Tee M", tag: "classic-tee-m", price: 75, inCart: 0 },
    { name: "Classic Tee L", tag: "classic-tee-l", price: 75, inCart: 0 },
    // Other products go here
  ];


for (let i=0; i < carts.length; i++){
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
    })
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers'); 

    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(products) {

    let productNumbers = localStorage.getItem('cartNumbers'); 
    productNumbers = parseInt(productNumbers);
    if (productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItems(products);
}

function setItems(products){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {

        if (cartItems[products.tag] == undefined){
            cartItems = {
                ...cartItems,
                [products.tag]: products
            }
        }
        cartItems[products.tag].inCart += 1;
    } else {
        products.inCart = 1;
        cartItems = {
            [products.tag]: products
        }
    }
    products.inCart =  1;
    cartItems = {
        [products.tag]: products
    }
    localStorage.setItem("productsInCart", JSON.stringify
    (cartItems));
}

// to keep the  items inside the cart upon loading
onLoadCartNumbers();
//// NEW TEST END
// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
   {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1

function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // It loops through array products using a for loop to 
    //find item with same id parameter passed to the function.
    for (let i = 0; i < products.length; i +=1) {
    // 2. Add found product to the cartList array
        if (products[i].id === id){
            cartList.push(products[i]);
        }
    }
    // updates the innerHTML property of an HTML element with the id count_product 
    //to display the length of the cartList array.
    // Shows the number of products in the cart
    document.getElementById('count_product').innerHTML = cartList.length;

    console.log("Exercici 1: ",cartList);

    calculateTotal();
    generateCart();
    applyPromotionsCart();
}

// Exercise 2
function cleanCart() {
    //checks if the cartList array has at least one element 
    //using length property. If cart is empty, it displays an 
    //alert message to user.

    if(cartList.length>0){
        //If the cart is not empty, it displays a confirmation dialog box using confirm() method.
        let clean = confirm("Do you want empty the shopping cart?");
        //If user confirms empty cart by clicking"OK"
        if(clean){
            //empty array
            cartList = [];
            //Sets innerHTML property HTML elements ids: cart_list, total_price, count_product
            //to empty values and zero, respectively. And cleant shopping cart contents.
            document.getElementById('cart_list').innerHTML = "";
            document.getElementById('total_price').innerHTML = "0.00";
            document.getElementById('count_product').innerHTML = 0;
            console.log("Exercici 2: ", cartList);
        }
    //If user cancels the confirmation dialog box by clicking the "Cancel".
    }else{
        alert("Cart is empty");
    }
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    //initialize variable total.
    total = 0;
    //for loop to iterate over each item of array cartList
    for(let i=0; i<cartList.length; i++){
        //for each item in add price to total variable
        total += cartList[i].price;
    }

    console.log("Exercici 3 - Total: ",total);    
}

// Exercise 4
function generateCart() {
    //Using the "cartlist" array that contains all the items in the shopping cart, 
    //generate the "cart" array that does not contain repeated items, 
    //instead each item of this array "cart" shows the quantity of product.
    
    //declares variables
    let idProd, nameProd, priceProd, typeProd;
    let isNew;
    cart = [];

    //for loop through cartList
    for(let i=0; i<cartList.length; i++){
        //inizialize variable isNew.
        isNew = 0;
        
            //for loop iterates cart 
            for(let j=0; j<cart.length; j++){
                //For each item in the "cart" array, checks if "id" of current item in the "cartList"  matches the "id" property of the current item in the "cart".
                if(cartList[i].id==cart[j].id){
                    //increases quantity
                    cart[j].quantity++;
                    cart[j].subtotalWithDiscount = cart[j].price * cart[j].quantity;
                    isNew ++;
                }
            } 
            
            //checks if two coditions are true
            //first condition if cart array is empty.
            //second condition if isNew is 0.
            if(!cart.length || isNew==0){
                //Assigns values of id,name,price,type, to variable.           
                idProd = cartList[i].id;
                nameProd = cartList[i].name;
                priceProd = cartList[i].price;
                typeProd = cartList[i].type;
                subtotalWithDiscountProd = cartList[i].price
                
                //new products array of cart[i] with quantity=1 
                const newProduct = {id:idProd,name:nameProd,price:priceProd,type:typeProd,quantity:1,subtotalWithDiscount:subtotalWithDiscountProd};
                //add newProducts to cart.
                cart.push(newProduct);
            }                  
    }
    
    console.log("Exercici 4: ",cart);
}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    //define variable subtotal and set to 0.
    let subTotal = 0;

    //Loop through each item of cart array.
    for(let i=0; i<cart.length; i++){

        //Check if the current item is eligible for discount based on
        //its name and quantity. 
        if(cart[i].name == 'cooking oil' && cart[i].quantity>=3){
            cart[i].subtotalWithDiscount = cart[i].quantity * 10;
            subTotal += cart[i].subtotalWithDiscount;
        }

        if(cart[i].name == 'Instant cupcake mixture' && cart[i].quantity>=10){
            const discountProd = (cart[i].price * 2/3).toFixed(2);  
            cart[i].subtotalWithDiscount = cart[i].quantity * discountProd;
            subTotal += cart[i].subtotalWithDiscount;
        }
    }
    
    console.log("Exercici 5: ",cart);
    console.log("Subtotal with Discount: ", subTotal);
}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    //Initializes a variable named subtotal to zero and a string variable 
    //named chain to an empty string.
    subtotal = 0;
    let chain = '';

    //Call functions
    generateCart();
    applyPromotionsCart();

    // Show the products from cart
    //Iterates over array cart using a for loop,
    //where i is the index of each element in the array.
    for(let i=0; i<cart.length; i++){
        //For each element in cart, it concatenates a string 
        //representation of an HTML table row to chain. 
        //The table row includes four items: name, price, quantity, subtotal with discount.
        chain += '<tr>';
        chain += '<th scope="row">' + cart[i].name + '</th>';
        chain += '<td>$' + cart[i].price + '</td>';
        chain += '<td>' + cart[i].quantity + '</td>';
        chain += '<td>$' + cart[i].subtotalWithDiscount.toFixed(2) + '</td>';
        //Adds the subtotalWithDiscount value of the current item to the subtotal variable.
        subtotal += cart[i].subtotalWithDiscount;
    }
    // sets the innerHTML property of two elements with ids cart_list and total_price to chain
    // and subtotal. This action will update the content of these elements on the web page 
    //with the concatenated HTML table and the calculated total price.
    document.getElementById('cart_list').innerHTML = chain;
    document.getElementById('total_price').innerHTML = subtotal.toFixed(2);    
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal(){
	console.log("Open Modal");
	printCart();
}
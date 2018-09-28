/* global Cart */
'use strict';



//deletebutton.addEventListener('click', removeItemFromCart)
// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
 var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
 cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
 loadCart();
 clearCart();
 showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {

}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
 var myCart = document.getElementsByTagName('tbody');
 // TODO: Find the table body
for(i=0;i<Cart.items.length;i++){
 // TODO: Iterate over the items in the cart
 var head = document.createElement('tr')
 // TODO: Create a TR

 var mylink = document.createElement('td')
 mylink.setAttribute('id' , 'delete')
 var myquantity = document.createElement('td')
 var myitem = document.createElement('td')

  // TODO: Create a TD for the delete link, quantity,  and the item
  myCart.appendChild(head);
  head.appendChild(mylink)
  head.appendChild(myquantity)
  head.appendChild(myitem)

 // TODO: Add the TR to the TBODY and each of the TD's to the TR

}
}

function removeItemFromCart(event) {


 // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
 var target = event.target;
 Cart.removeItem(target);
 // TODO: Save the cart back to local storage
 localStorage.setItems('cart', JSON.stringify(Cart.items));
 // TODO: Re-draw the cart table
 renderCart();

}

// This will initialize the page and draw the cart on screen
renderCart();
(function() {
	'use strict';

	var tinyslider = function() {
		var el = document.querySelectorAll('.testimonial-slider');

		if (el.length > 0) {
			var slider = tns({
				container: '.testimonial-slider',
				items: 1,
				axis: "horizontal",
				controlsContainer: "#testimonial-nav",
				swipeAngle: false,
				speed: 700,
				nav: true,
				controls: true,
				autoplay: true,
				autoplayHoverPause: true,
				autoplayTimeout: 3500,
				autoplayButtonOutput: false
			});
		}
	};
	tinyslider();

	


	var sitePlusMinus = function() {

		var value,
    		quantity = document.getElementsByClassName('quantity-container');

		function createBindings(quantityContainer) {
	      var quantityAmount = quantityContainer.getElementsByClassName('quantity-amount')[0];
	      var increase = quantityContainer.getElementsByClassName('increase')[0];
	      var decrease = quantityContainer.getElementsByClassName('decrease')[0];
	      increase.addEventListener('click', function (e) { increaseValue(e, quantityAmount); });
	      decrease.addEventListener('click', function (e) { decreaseValue(e, quantityAmount); });
	    }

	    function init() {
	        for (var i = 0; i < quantity.length; i++ ) {
						createBindings(quantity[i]);
	        }
	    };

	    function increaseValue(event, quantityAmount) {
	        value = parseInt(quantityAmount.value, 10);

	        console.log(quantityAmount, quantityAmount.value);

	        value = isNaN(value) ? 0 : value;
	        value++;
	        quantityAmount.value = value;
	    }

	    function decreaseValue(event, quantityAmount) {
	        value = parseInt(quantityAmount.value, 10);

	        value = isNaN(value) ? 0 : value;
	        if (value > 0) value--;

	        quantityAmount.value = value;
	    }
	    
	    init();
		
	};
	sitePlusMinus();


})()

//Dropdown meny
$(document).ready(function () {
	$('.dropdown').hover(function () {
		$(this).addClass('show');
		$(this).find('.dropdown-menu').addClass('show');
	}, function () {
		$(this).removeClass('show');
		$(this).find('.dropdown-menu').removeClass('show');
	});
}); 

// Product list
const categoryList = document.getElementById('category-list');
const productList = document.getElementById('product-list');

// Sample product data (replace with your actual data)
const products = [
  { category: 'shoes', name: 'Running Shoes', price: 50 },
  { category: 'shirts', name: 'T-Shirt', price: 20 },
  { category: 'pants', name: 'Jeans', price: 40 },
  // Add more products with different categories
];

function displayProducts(category) {
  productList.innerHTML = ''; // Clear previous product list
  products.forEach(product => {
    if (category === 'all' || product.category === category) {
      const productItem = document.createElement('div');
      productItem.classList.add('product-item');
      productItem.innerHTML = `<h3>${product.name}</h3><p>$${product.price}</p>`;
      productList.appendChild(productItem);
    }
  });
}

categoryList.addEventListener('click', (event) => {
  const clickedCategory = event.target.dataset.category;
  categoryList.querySelector('.active').classList.remove('active'); // Remove active class from previous category
  event.target.classList.add('active'); // Add active class to clicked category
  displayProducts(clickedCategory);
});

displayProducts('all'); // Initially display all products

// DOM SELECTION
// nodelist
// HTMLCollection
// Element

// MANIPULATION
// ELEMENT MANIPULATION
// NODE MANIPULATION

// EVENT



// div id='total';
let elhDivTotal = document.createElement('div');
elhDivTotal.setAttribute('id','total');

// img div id='total';
let elhImgDivTotal = document.createElement('img');
elhImgDivTotal.setAttribute('src', 'assets/img/icon/cart.png');

// p div id='total';
let elhPDivTotal = document.createElement('p');
elhPDivTotal.innerHTML = "Total belanja: Rp.0"

elhDivTotal.appendChild(elhImgDivTotal);
elhDivTotal.appendChild(elhPDivTotal);

// div id = 'checkout'
let elhDivCheckout = document.createElement('div');
elhDivCheckout.setAttribute('id', 'checkout');
// a div id = 'checkout'
let elhADivCheckout = document.createElement('a');
elhADivCheckout.setAttribute('href','a');
elhADivCheckout.innerHTML = 'Lanjut';
// img div id = 'checkout'
let elhImgDivCheckout = document.createElement('img');
elhImgDivCheckout.setAttribute('src','assets/img/icon/arrow.png');
elhDivCheckout.appendChild(elhADivCheckout);
elhDivCheckout.appendChild(elhImgDivCheckout);


// cart-statuswrapper
let cartStatus = document.createElement('div');
cartStatus.setAttribute('id','cart-status');
cartStatus.appendChild(elhDivTotal);
cartStatus.appendChild(elhDivCheckout);

// elhBody
let elhBody = document.getElementsByTagName('body')[0];
elhBody.appendChild(cartStatus);

// menu-1
let totalHarga1 = 0;
let jumlahProduk1 = 0;
let elhTotalHarga = 0;

let addProduk1 = document.getElementById('addProduk1');
addProduk1.addEventListener('click',function(){
	totalHarga1 += 10000;
	jumlahProduk1 += 1;
	elhTotalHarga += 10000;
	elhPDivTotal.innerHTML = "Total belanja: Rp." + elhTotalHarga;
});

let removeProduk1 = document.getElementById('removeProduk1');
removeProduk1.addEventListener('click',function(){
	if(totalHarga1 >= 10000){
	totalHarga1 -= 10000;
	jumlahProduk1 -= 1;
	elhTotalHarga -= 10000;
	elhPDivTotal.innerHTML = "Total belanja: Rp." + elhTotalHarga;
	};
});

// menu-2
let totalHarga2 = 0;
let jumlahProduk2 = 0;

let addProduk2 = document.getElementById('addProduk2');
addProduk2.addEventListener('click',function(){
	totalHarga2 += 20000;
	jumlahProduk2 += 2;
	elhTotalHarga += 20000;
	elhPDivTotal.innerHTML = "Total belanja: Rp." + elhTotalHarga;
});

let removeProduk2 = document.getElementById('removeProduk2');
removeProduk2.addEventListener('click',function(){
	if(totalHarga2 >= 20000){
	totalHarga2 -= 20000;
	jumlahProduk2 -= 2;
	elhTotalHarga -= 20000;
	elhPDivTotal.innerHTML = "Total belanja: Rp." + elhTotalHarga;
	};
});

// menu-3
let totalHarga3 = 0;
let jumlahProduk3 = 0;

let addProduk3 = document.getElementById('addProduk3');
addProduk3.addEventListener('click',function(){
	totalHarga3 += 30000;
	jumlahProduk3 += 3;
	elhTotalHarga += 30000;
	elhPDivTotal.innerHTML = "Total belanja: Rp." + elhTotalHarga;
});

let removeProduk3 = document.getElementById('removeProduk3');
removeProduk3.addEventListener('click',function(){
	if(totalHarga3 >= 30000){
	totalHarga3 -= 30000;
	jumlahProduk3 -= 3;
	elhTotalHarga -= 30000;
	elhPDivTotal.innerHTML = "Total belanja: Rp." + elhTotalHarga;
	};
});
// idenya adalah
// ketika tombol adalah ketika tombol add atau tombol remove diklik maka nilai/total harga dari sebuah menu tersebut bertambah atau berkurang


// JS DOM
// selection
// HTMLCollection
// element
// nodelist
// manipulation
// node
// element
// event
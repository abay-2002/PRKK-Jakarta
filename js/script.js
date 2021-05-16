// DOM SELECTION
// nodelist
// HTMLCollection
// Element

// MANIPULATION
// ELEMENT MANIPULATION
// NODE MANIPULATION

// EVENT


// 

// div id='total';
let elhDivTotal = document.createElement('div');
elhDivTotal.setAttribute('id','total');
// img div id='total';
let elhImgDivTotal = document.createElement('img');
elhImgDivTotal.setAttribute('src', 'assets/img/icon/cart.png');
// p div id='total';
let elhPDivTotal = document.createElement('p');
elhPDivTotal.innerHTML = "Total belanja: Rp.";
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

// // menu1 wrapper3

// let tTes = document.getElementById('tes');
// let tTes2 = document.getElementById('tesTotal');
// let wrapperTest = document.getElementById('wrapperTest');

// let hargaProduk1 = 0;
// let totalProduk1 = 0;
// // addProduk1
// let addProduk1 = document.getElementById('addProduk1');
// addProduk1.addEventListener('click',function(){
// 	hargaProduk1 += 10000;
// 	totalProduk1 += 1;
// 	tTes.innerHTML = 'harga ='+hargaProduk1;
// 	tTes2.innerHTML = 'total ='+totalProduk1;
// 	wrapperTest.appendChild(tTes);
// 	wrapperTest.appendChild(tTes2);
// });

// // removepProduk1
// let removeProduk1 = document.getElementById('removeProduk1');
// removeProduk1.addEventListener('click',function(){
// 	if((hargaProduk1 >= 10000)&&(totalProduk1 >= 1)){
// 		hargaProduk1 -= 10000;
// 		totalProduk1 -= 1;
// 		tTes.innerHTML = 'harga ='+hargaProduk1;
// 		tTes2.innerHTML = 'total ='+totalProduk1;
// 	}else {
// 		wrapperTest.removeChild(tTes);
// 		wrapperTest.removeChild(tTes2);
// 	}
// });



// idenya adalah apabila add sebuah produk diklik maka
// tambah harga produk tersebut
// tambah total produk tersebut

// apabila tombol bayar dklik tampilkan dialog box 
// dialog box untuk mengisi form mau kemana produk tersbut dikirim

// apabila dialog box tersebut sudah diklik maka akan tersambung ke API WhatsApp



// JS DOM
// selection
// HTMLCollection
// element
// nodelist
// manipulation
// node
// element
// event
// menu1 wrapper3

let tTes = document.getElementById('tes');
let tTes2 = document.getElementById('tesTotal');
let wrapperTest = document.getElementById('wrapperTest');

let hargaProduk1 = 0;
let totalProduk1 = 0;
// addProduk1
let addProduk1 = document.getElementById('addProduk1');
addProduk1.addEventListener('click',function(){
	hargaProduk1 += 10000;
	totalProduk1 += 1;
	tTes.innerHTML = 'harga ='+hargaProduk1;
	tTes2.innerHTML = 'total ='+totalProduk1;
	wrapperTest.appendChild(tTes);
	wrapperTest.appendChild(tTes2);
});

// removepProduk1
let removeProduk1 = document.getElementById('removeProduk1');
removeProduk1.addEventListener('click',function(){
	if((hargaProduk1 >= 10000)&&(totalProduk1 >= 1)){
		hargaProduk1 -= 10000;
		totalProduk1 -= 1;
		tTes.innerHTML = 'harga ='+hargaProduk1;
		tTes2.innerHTML = 'total ='+totalProduk1;
	}else {
		wrapperTest.removeChild(tTes);
		wrapperTest.removeChild(tTes2);
	}
});



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

function hitungCheckout(harga, jumlah, isMember) {
    if (!Number.isFinite(harga) || harga <= 0 || !Number.isInteger(jumlah) || jumlah <= 0) {
        return "Input tidak valid";
}
    let subtotal = harga * jumlah;
    let diskon;
    if (isMember === true) {
        diskon = subtotal * 0.10;
    } else {
        diskon = 0 ;
    }
    let total = subtotal - diskon
    let ongkir = 15000
    if (total >= 250000) {
        ongkir = 0
    }
    let  totalAkhir= total + ongkir;
    return totalAkhir;
}
//Skenario 1
console.log(hitungCheckout(100000, 5, true));

//Skenario 2
console.log(hitungCheckout(100000, 5, false));

//Skenario 3
console.log(hitungCheckout(50000, 4, true));

//skenario 4
console.log(hitungCheckout(125000,2 , true));

//skenario 5
console.log(hitungCheckout(250000, 1, false));

//skenario 6
console.log(hitungCheckout(250000, 0, true));

//skenario 7
console.log(hitungCheckout(-1000, 5, true));

//skenario 8
console.log(hitungCheckout(300000, 1.5, true));


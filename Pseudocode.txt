MULAI

INPUT harga
INPUT jumlahProduk
INPUT member
Validasi INPUT
Validasi gagal "Input Tidak Valid"
Validasi berhasil lanjut
 
subtotal = harga * jumlahProduk

JIKA member = true
    diskon = 10%
JIKA false
    diskon = 0

JIKA

total = subtotal - diskon

JIKA total >= 250000
    ongkir = 0
JIKA TIDAK
    ongkir = 15000
AKHIR JIKA

totalAkhir = total + ongkir

TAMPILKAN totalAkhir

SELESAI
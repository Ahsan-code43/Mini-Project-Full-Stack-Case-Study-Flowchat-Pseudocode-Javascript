# Skenario 1
Pembeli member, harga 100000, jumlah produk 5. Expected result total akhir 450000. (Gratis ongkir berlaku, diskon berlaku)

# Skenario 2
Pembeli  non member, harga 100000, jumlah produk 5. Expected result total akhir 500000. (Gratis ongkir berlaku, tapi tidak mendapat diskon)

# Skenario 3
Pembeli member, harga 50000, jumlah produk 4. Expected result total akhir 195000. (Dapat diskon tetapi total dibawah 250000)

# Skenario 4
Pembeli member, harga 125000, jumlah produk 2. Expected result total akhir 240000. (Total setelah diskon kurang dari 250000, sehingga ongkir berlaku)

# Skenario 5
Pembeli non member, harga 250000, jumlah produk 1. Expected result total akhir 250000. (Total setelah diskon tepat 250000, dapat gratis ongkir, tidak dapat diskon karena non member)

# Skenario 6
Pembeli member, harga 250000, jumlah produk 0. Expected result "Input Tidak Valid.(jumlahproduk 0)

# Skenario 7
Pembeli member, harga -1000, jumlah produk 5. Expected resulT "Input Tidak Valid". (Harga negatif)

# Skenario 8
Pembeli member, harga 300000, jumlah produk 1.5. Expected result  "Input Tidak Valid. (Jumlah produk berupa pecahan)

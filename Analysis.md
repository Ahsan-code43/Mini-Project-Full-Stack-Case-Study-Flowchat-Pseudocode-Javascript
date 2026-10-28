# Tujuan
Membuat sebuah sistem chekout sederhana guna menghitung total pembayaran sebuah produk yang berdasarkan harga, jumlah produk, dan status member pembeli

# 2.Input
- Harga
- Jumlah produk
- Status member pembeli (Ya/Tidak)

# 3. Proses
- Pembeli memasukkan input (Harga, jumlah, status member)
- Kemudian divalidasi apakah harga produk berupa angka positif dan jumlah barang memiliki format bilangan bulat positid.
- Jika gagal memenuhi persyaratan maka akan muncul pesan "Input Tidak Valid"
- Jika valid maka akan lanjut ke perhitungan subtotal (Harga*Jumlah produk).
- Kemudian jika pembeli memenuhi status sebagai member akan diberi diskon 10%, jika status member tidak terpenuhi maka tidak akan diberi diskon menghasilkan harga total.
- Jika total memenuhi persyaratan >= 250000 maka gratis ongkir 0 berlaku. jika tidak memenuhi maka akan dikenakan 15000 untuk ongkir.

# 4. Output
- Setelah perhitungan total selesai maka pembeli akan mendapatkan harga total akhir yang harus dibayar.
- Transaksi selesai



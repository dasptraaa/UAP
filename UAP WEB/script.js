var listBarang = [
    {kode:"001",barang:"A",harga:"10000"},
    {kode:"002",barang:"B",harga:"20000"},
    {kode:"003",barang:"C",harga:"30000"}
]

var listTabel = document.getElementById("Tabel");
listBarang.forEach(function (item) {
  var { kode, barang, harga} = item;
  var row = listTabel.insertRow(listTabel.rows.length);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);

  cell1.innerHTML = kode;
  cell2.innerHTML = barang;
  cell3.innerHTML = "Rp" + harga;
});

function Beli() {
    var kodeBarang = document.getElementById("kodeBarang").value;
    var banyakBarang = document.getElementById("banyakBarang").value;
    var selectedItem = listBarang.find((item) => item.kode === kodeBarang);
    var totalPembayaran;
    if (selectedItem) {
        totalPembayaran = selectedItem.harga * banyakBarang;
        alert("Total pembayaran adalah: " + totalPembayaran);
    }
}
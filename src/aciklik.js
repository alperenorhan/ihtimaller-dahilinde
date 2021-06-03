function calistir() {
    var ay = document.getElementById('InputDataAciklik').value;
	var ayp = ay.split(",");
	//document.write(ay);
	//alert(ay);
	//document.write(ayp[0]);
	//document.write(diziboyutu);
	var diziboyutu = ayp.length;
	var toplam = 0;

    ayp.sort(function(a, b){return a - b});	
let sonuc;
    sonuc=ayp[diziboyutu-1]-ayp[0];

    h1sonuc.innerHTML="<font color='#dc3545'>" + sonuc + "</font>";
}
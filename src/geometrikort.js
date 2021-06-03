function geometrikortf() {
	var ay = document.getElementById('InputDataGeometrik').value;
	var ayp = ay.split(",");
	var diziboyutu = ayp.length;
	let flag=1;
	let sum = 1
	
	for (let a = 0; a < diziboyutu; a++) {
		if(ayp[a]>=0){
			flag=1;
		}
		else{
			flag=0;
			a=diziboyutu;
			alert("negatif sayı girdiniz!!!");
		}
	}
	if(flag){
	for (let i = 0; i < diziboyutu; i++) {
		sum *= ayp[i]
	}

	sum = Math.pow(sum, 1 / diziboyutu)
	h1sonuc.innerHTML="<font color='#dc3545'>" + sum.toFixed(3) + "</font>";
	}



}
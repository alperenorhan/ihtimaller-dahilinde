function modf() {

  var ay = document.getElementById('InputDataMod').value;
  var ayp = ay.split(",");
  var diziboyutu = ayp.length;
  let sayac = 0
  let sec = 0
  let tut = []
  let sum = 0
  let gonder = []
  let k = 0
  for (let i = 0; i < diziboyutu; i++) {
    sec = ayp[i]
    for (let j = 0; j <= diziboyutu; j++) {
      if (sec == ayp[j]) {
        sayac++
      }
    }
    sum = sayac
    tut.push(sayac)
    sayac = 0
  }
  sec = 0
  sum = 0
  for (let i = 0; i < tut.length; i++) {
    sum = Math.max(...tut)
    sec = tut[i]
    if (sec == sum) {
      if (gonder[k - 1] != ayp[i]) {
        gonder[k] = ayp[i]
        k++
      }
    }
  }
  let sum1 = 0;
  for (let a1 = 0; a1 < diziboyutu; a1++) {
    for (let a2 = a1 + 1; a2 < diziboyutu; a2++) {
      if (gonder[a1] == gonder[a2]) {
      
        
        gonder.splice(a2, 1);
      }
    }
  }

  h1sonuc.innerHTML = "<font color='#dc3545'>" + gonder + "</font>";
}
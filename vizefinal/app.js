
function ax(){
 
 var a1 =Number( document.getElementById("input1").value);

 var b1 =Number(document.getElementById("input2").value);

  sonuc = (a1 * 40 / 100)  +  (b1 * 60 / 100);

  document.getElementById("tema").innerHTML = (+sonuc );

}

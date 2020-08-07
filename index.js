var solde = 100;
var perte = 0;
function jouer() {

  var nombreGagnant = Math.round(Math.random() * 36); 
  var pari = document.getElementById("pari").value;
  var mise = parseInt(document.getElementById("mise").value);

  if (solde == 0) {
    alert("Votre porte monnaie est vide");
  } else if (mise > solde) {
    alert("La somme misée est supérieure à celle de votre porte monnaie");
  } else {
    var gain = 0;
    solde -= mise;
    var nombreGagnant = Math.round(Math.random() * 36);
    document.getElementById("numeroGagnant").value = nombreGagnant;
    if (nombreGagnant == 0) {

      document.getElementById("result-text").style.color = "crimson";
      document.getElementById("result-text").innerText = "\n Le chiffre zero est apparu ,vous avez perdu votre mise ";
      perte += mise;
    } else if (nombreGagnant == pari) {
      gain = mise + (mise * 35);
      document.getElementById("result-text").style.color = "green";
      document.getElementById("result-text").innerText = "\nBRAVO ! vous avez gagné " + gain + " 000 fr";
      solde += gain;
    } else if (
      (pari == "Pair" && nombreGagnant % 2 == 0) || (pari == "Impair" && nombreGagnant % 2 != 0)) {
      gain = mise + mise;
      document.getElementById("result-text").style.color = "green";
      document.getElementById("result-text").innerText = "\nBRAVO ! vous avez gagné " + gain + " 000 fr";
      solde += gain;

    } else {
      document.getElementById("result-text").style.color = "crimson";
      document.getElementById("result-text").innerText = "\n Vous venez de perdre " + mise + " 000 fr";
      perte += mise;

    }

    document.getElementById("solde").value = solde;
    document.getElementById("perte").value = perte;


  }


}




function toggleBundesland() {
  const kirchensteuer = document.getElementById("kirchensteuer").value;
  const bundeslandContainer = document.getElementById("bundesland-container");

  if (kirchensteuer === "ja") {
    bundeslandContainer.style.display = "block";
  } else {
    bundeslandContainer.style.display = "none";
    document.getElementById("bundesland").value = "";
  }
}

function berechneNetto() {
  const bruttoMonat = parseFloat(document.getElementById("bruttoMonat").value);
  const bruttoJahr = parseFloat(document.getElementById("bruttoJahr").value);
  const steuerklasse = document.getElementById("steuerklasse").value;
  const familienstand = document.getElementById("familienstand").value;
  const zahltKirchensteuer = document.getElementById("kirchensteuer").value === "ja";
  const bundesland = document.getElementById("bundesland").value;

  // Monatliches und jährliches Bruttogehalt synchronisieren
  let bruttoMonatlich = bruttoMonat;
  let bruttoJaehrlich = bruttoJahr;

  if (!bruttoMonatlich && bruttoJaehrlich) {
    bruttoMonatlich = bruttoJaehrlich / 12;
  } else if (bruttoMonatlich && !bruttoJaehrlich) {
    bruttoJaehrlich = bruttoMonatlich * 12;
  }

  if (!bruttoMonatlich || bruttoMonatlich <= 0) {
    alert("Bitte mindestens ein gültiges Bruttogehalt eingeben.");
    return;
  }

  // Steuerklassenpauschale (vereinfachtes Modell)
  let abzugSatz;
  switch (steuerklasse) {
    case "1": abzugSatz = 0.32; break;
    case "2": abzugSatz = 0.30; break;
    case "3": abzugSatz = 0.22; break;
    case "4": abzugSatz = 0.27; break;
    case "5": abzugSatz = 0.40; break;
    case "6": abzugSatz = 0.45; break;
    default: abzugSatz = 0.33;
  }

  // Familienstand
  if (familienstand === "verheiratet" && steuerklasse !== "5" && steuerklasse !== "6") {
    abzugSatz -= 0.02;
  }

  // Kirchensteuer (nur wenn aktiviert)
  if (zahltKirchensteuer) {
    let kirchensteuerSatz = 0;
    if (bundesland === "BY" || bundesland === "BW") {
      kirchensteuerSatz = 0.08;
    } else if (bundesland === "rest") {
      kirchensteuerSatz = 0.09;
    } else {
      alert("Bitte ein Bundesland für die Kirchensteuer auswählen.");
      return;
    }
    abzugSatz += kirchensteuerSatz;
  }

  const nettoMonat = bruttoMonatlich * (1 - abzugSatz);
  const nettoJahr = nettoMonat * 12;

  document.getElementById("nettoMonat").textContent = nettoMonat.toFixed(2);
  document.getElementById("bruttoJahrOut").textContent = bruttoJaehrlich.toFixed(2);
  document.getElementById("nettoJahr").textContent = nettoJahr.toFixed(2);
}

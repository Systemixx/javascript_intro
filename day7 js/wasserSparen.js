function tageBisLeer(reservoirLiter, taeglicherVerbrauch) {
    if (reservoirLiter <= 0 || taeglicherVerbrauch <= 0) {
      return "Ungültige Eingabe. Bitte stellen Sie sicher, dass sowohl die Anzahl der Liter im Reservoir als auch der tägliche Verbrauch größer als Null sind.";
    }
  
    const tage = reservoirLiter / taeglicherVerbrauch;
    return Math.ceil(tage) + " Tage bis das Reservoir leer ist";
  }
  
  // Test
  console.log(tageBisLeer(100, 0));
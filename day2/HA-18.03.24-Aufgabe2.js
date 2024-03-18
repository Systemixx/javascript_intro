function bestimmeFahrpreis(alter) {
    if (alter < 6) {
        return "Die Fahrt ist kostenlos.";
    } else if (alter >= 6 && alter <= 17) {
        return "Kinderpreis.";
    } else if (alter >= 18 && alter <= 66) {
        return "Vollpreis.";
    } else {
        return "Seniorenpreis.";
    }
}
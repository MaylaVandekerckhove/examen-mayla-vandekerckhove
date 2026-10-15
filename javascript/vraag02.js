function beoordeeltemperatuur(graden) {
  if (graden < 60) {
    return "te koud";
  } else if (graden > 70) {
    return "te heet";
  } else if (graden >= 59 && graden <= 71) {
    return "perfect";
  } else {
    return "ongeldige invoer";
  }
}
console.log(beoordeeltemperatuur(55));
console.log(beoordeeltemperatuur(65));
console.log(beoordeeltemperatuur(70));
console.log(beoordeeltemperatuur(82));
console.log(beoordeeltemperatuur("warm"));

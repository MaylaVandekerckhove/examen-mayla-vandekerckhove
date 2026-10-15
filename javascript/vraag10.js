function prijsVan(product) {
  switch (product) {
    case "espresso":
      return 2.4;
    case "latte":
      return 3.6;
    case "cappuccino":
      return 3.3;
    case "croissant":
      return 2.1;
    default:
      throw new error(`onbekend product: "${code}"`);
  }
}

function bepaalKorting(klanttype) {
  if (student) {
    return 0.2;
  } else if (personal) {
    return 0.25;
  } else {
    return 0;
  }
}
function berekensubtotaal(product, aantallen) {
  for (let i = 0; i < product.length; i++) {
    if (product.length !== aantallen.length) {
      throw new error("producten en aantallen passen niet bij elkaar");
    }
  }
}
function maakKassaticket(producten, aantallen, klantentype = gewoon) {}

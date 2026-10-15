const maten = ["small", "large", "mega"];

function prijsVanMaat(maat) {
  switch (maat) {
    case "large":
      return 2.5;
    case "medium":
      return 3.2;
    case "small":
      return 2.5;
    default:
      return 0;
  }
}

for (const maat of maten) {
  const prijs = prijsVanMaat(maat);
  const regel = prijs > 0;
  console.log(regel);
}

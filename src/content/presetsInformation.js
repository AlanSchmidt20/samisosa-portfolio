// Preset New York: price_1MlcNYIxos0c3lhNsdvVARBb

// Preset Londres: price_1MlcRBIxos0c3lhNmtPubn1C

//Preset Dubai: price_1Mlv41Ixos0c3lhNpFuO59Oh

//Preset Buenos Aires: price_1Mlv6JIxos0c3lhNrgiAsuyz

//Preset Paris: price_1Mlv6sIxos0c3lhNwE3vGqMg

export const presetsInformation = [
  {
    id: "1",
    title: "New York",
    image: require("../images/newYorkPreset.png"),
    price: 1000,
  },
  {
    id: "2",
    title: "Londres",
    image: require("../images/londresPreset.png"),
    price: 1000,
  },
  {
    id: "3",
    title: "Dubai",
    image: require("../images/dubaiPreset.png"),
    price: 1000,
  },
  {
    id: "4",
    title: "Buenos Aires",
    image: require("../images/buenosAiresPreset.png"),
    price: 1000,
  },
  {
    id: "5",
    title: "Paris",
    image: require("../images/parisPreset.png"),
    price: 1000,
  },
];

export function getProductData(id) {
  let productData = presetsInformation.find((product) => product.id === id);

  if (productData == undefined) {
    console.log("Product data does not exist for ID: " + id);
    return undefined;
  }

  return productData;
}

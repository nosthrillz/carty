import { createSlice } from "@reduxjs/toolkit";

// hardcoded initial product offering
const initialState = {
  items: [
    {
      name: "ASTRO A50 Wireless Headset",
      category: "audio",
      image:
        "https://www.astrogaming.com/content/dam/astro/en/products/a50-headset-with-base-station-gen4/a50-gallery-ps4-01-refresh.png",
      price: 299.99,
      description: `Experience the performance and sound of ASTRO Audio V2 with the convenience and freedom that comes without wires.\nThe A50 Wireless + Base Station for Xbox/PC delivers top-of-the-line acoustics, ergonomics, comfort and durability that gamers and streamers demand.\nExperience Absolute Immersion with the A50 Wireless + Base Station.\nAll current ASTRO Gaming products designed for Xbox will offer continuous compatibility on Xbox: Series X|S.`,
      id: 0,
    },
    {
      name: "SteelSeries Arctis 5 - Black",
      category: "audio",
      image:
        "https://media.steelseriescdn.com/thumbs/catalogue/products/00964-arctis-5-black-2019-edition/2d05914f40f34ebe8accceeffe9d2f41.png.1200x627_q100_crop-fit_optimize.png",
      price: 69.99,
      description: `Surround Sound RGB Gaming Headset\nBest mic in gaming: the Discord-certified ClearCast bidirectional microphone\nHear stunning detail in all games with award-winning Arctis sound\nNext-generation DTS Headphone:X v2.0 surround sound\nBalance game and chat audio with the USB ChatMix dial\nPrism RGB illuminated earcups`,
      id: 1,
    },
    {
      name: "Recon 70 Headset",
      category: "audio",
      image:
        "https://cdn.shopify.com/s/files/1/2654/0420/products/RECON-70-XB-BLACK_HEADSET_1_480x480.png?v=1571871154",
      price: 39.95,
      description: `BUILT FOR VICTORY ON XBOX ONE.\nHigh-sensitivity flip-to-mute microphone\nSuperior 40mm drivers for crisp audio quality\nComfortable, lightweight headband and earcup design`,
      id: 2,
    },
    {
      name: "Logitech G432 7.1 Surround",
      category: "audio",
      image:
        "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/362823-Product-2-I_1080x.jpg",
      price: 52.99,
      description: `Large 50 millimeter audio drivers produce great sound for a more immersive gaming experience\nAdvanced DTS Headphone: X 2; 0 surround sound creates precise positional audio and a 3D soundscape\n6 millimeter flip to mute mic with volume control at your fingertips\nConnects to PC, mobile devices and game consoles via simple 3.5 millimeter or USB DAC input\nPremium leatherette ear pads and headband for comfortable gaming`,
      id: 3,
    },
  ],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    add: (state, action) => {
      state.items.push(action.payload);
    },
    del: (state, action) => {
      state.items = state.items.filter((item) => item !== action.payload);
    },
  },
});

export const productActions = productSlice.actions;

export default productSlice.reducer;

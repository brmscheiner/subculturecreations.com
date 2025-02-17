import { Jimp } from "jimp";

// This is exactly what the Jimp docs say to do.. feels dirty
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// eslint-disable-next-line no-restricted-globals
const ctx: Worker = self as any;

ctx.addEventListener("message", async (e) => {
  const image = await Jimp.fromBuffer(e.data.image);
  image.resize({ w: 9, h: 18 });
  ctx.postMessage({
    type: "resized",
    base64: await image.getBase64("image/png"),
  });
  image.quantize({
    colors: 5,
  });
  ctx.postMessage({
    type: "quantized",
    base64: await image.getBase64("image/png"),
  });
});

import { Jimp } from "jimp";

// This is exactly what the Jimp docs say to do.. feels dirty
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// eslint-disable-next-line no-restricted-globals
const ctx: Worker = self as any;

const colorCount = 5; // Github chart has 5 colors
const resizeWidth = 40;

interface ColorMap {
  [key: string]: number;
}
ctx.addEventListener("message", async (e) => {
  const image = await Jimp.fromBuffer(e.data.image);
  // Match aspect ratio of original image when resizing
  const resizeHeight = Math.round(image.height / (image.width / resizeWidth));
  image.resize({ w: resizeWidth, h: resizeHeight });
  ctx.postMessage({
    type: "resized",
    base64: await image.getBase64("image/png"),
  });
  image.quantize({
    colors: colorCount,
  });
  ctx.postMessage({
    type: "quantized",
    base64: await image.getBase64("image/png"),
  });
  const matrix = [];
  const colorMap: ColorMap = {};
  let i = 0;
  // Encode image as pixel matrix with each color mapped to an index between 0 and 4
  // TODO replace with scan
  for (let y = 0; y < resizeHeight; y++) {
    const row = [];
    for (let x = 0; x < resizeWidth; x++) {
      const pixel = image.getPixelColor(x, y);
      if (!colorMap[pixel]) {
        colorMap[pixel] = i;
        i += 1;
      }
      row.push(colorMap[pixel]);
    }
    matrix.push(row);
  }

  ctx.postMessage({
    type: "matrix",
    matrix,
  });
});

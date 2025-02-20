import { Jimp } from 'jimp'

// This is what the Jimp documentation says to do, but it feels dirty
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-restricted-globals */
const ctx: Worker = self as any
/* eslint-enable @typescript-eslint/no-explicit-any */
/* eslint-enable no-restricted-globals */

const colorCount = 5 // Github chart has 5 colors
const resizeWidth = 40

interface ColorMap {
  [key: string]: number
}
ctx.addEventListener('message', async e => {
  const image = await Jimp.fromBuffer(e.data.image)
  // Match aspect ratio of original image when resizing
  const resizeHeight = Math.round(image.height / (image.width / resizeWidth))
  image.resize({ w: resizeWidth, h: resizeHeight })
  ctx.postMessage({
    type: 'resized',
    base64: await image.getBase64('image/png'),
  })
  image.quantize({
    colors: colorCount,
  })
  ctx.postMessage({
    type: 'quantized',
    base64: await image.getBase64('image/png'),
  })
  const matrix = Array.from({ length: resizeHeight }, () =>
    Array(resizeWidth).fill(null)
  )
  const colorMap: ColorMap = {}
  let i = 0
  image.scan((x: number, y: number) => {
    const pixel = image.getPixelColor(x, y)
    if (!colorMap[pixel]) {
      colorMap[pixel] = i
      i += 1
    }
    matrix[y][x] = colorMap[pixel]
  })

  ctx.postMessage({
    type: 'matrix',
    matrix,
  })
})

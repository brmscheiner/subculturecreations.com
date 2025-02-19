/* Adapted from https://ryanccn.dev/posts/respimg-11ty-sharp */

const fs = require('fs')
const glob = require('glob')
const path = require('path')
const sharp = require('sharp')

const outputPath = './src/imageMetadata.json'
const outputFiles = {}

const resizes = [
  {
    key: 'medium',
    src: './src/assets/galleries/originals/*',
    dist: './src/assets/galleries/medium',
    maxPixels: 1600,
  },
  {
    key: 'small',
    src: './src/assets/galleries/originals/*',
    dist: './src/assets/galleries/small',
    maxPixels: 740,
  },
]

async function resizePhotos() {
  for (const resize of resizes) {
    if (!fs.existsSync(resize.dist)) {
      fs.mkdirSync(resize.dist, { recursive: true }, err => {
        if (err) throw err
      })
    }

    let files = glob.sync(resize.src)

    for (const file of files) {
      let filename = path.basename(file)
      const image = sharp(file)

      const metadata = await image.metadata()
      const landscape = metadata.width > metadata.height
      const target = landscape
        ? { width: resize.maxPixels }
        : { height: resize.maxPixels }
      const generatedImage = await image
        .rotate()
        .resize(target)
        .toFile(`${resize.dist}/${filename}`)
      const prevSizes = outputFiles?.[filename]?.sizes || {}
      outputFiles[filename] = {
        filename,
        format: metadata.format,
        sizes: {
          ...prevSizes,
          original: { width: metadata.width, height: metadata.height },
          [resize.key]: {
            width: generatedImage.width,
            height: generatedImage.height,
          },
        },
      }
    }
  }
}

resizePhotos()
  .then(() => {
    fs.writeFileSync(outputPath, JSON.stringify(outputFiles, null, 4))
    console.log(`Finished, created ${outputPath}`)
  })
  .catch(err => {
    console.log(err)
  })

# subculturecreations.com

Ben Scheiner's personal website.

## Running locally

```
npm install
npm run generate-images
npm start
```

I am using npm version 8.11.0 and node 16.15.1.

## Stack

I used the TS version of [Create React App](https://github.com/facebook/create-react-app), [Tailwind](https://tailwindcss.com/), and [react-photoswipe-gallery](https://github.com/dromru/react-photoswipe-gallery). There is also a simple script that uses [sharp](https://sharp.pixelplumbing.com/) to generate thumbnails and provide image metadata to the UI.

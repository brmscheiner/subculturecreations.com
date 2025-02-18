
import { useEffect, useState, useRef } from 'react';
import Page from "../../../components/Page";
import Card from "../../../components/Card";
import { InlineButton } from '../../../components/Button';
import githubbifyLogo from "../../../assets/githubbify/githubbify.png"
import githubChartExample from "../../../assets/githubbify/github-chart-example.png"
import { FileUpload } from './FileUpload';

type ImageMode = 'original' | 'resized' | 'quantized'
interface ColorMap {
  [key: number]: string
}
type Matrix = number[][]

/* All non-tailwind colors are taken from the Github contribution chart. Also,
   there is a bug in jimp.quantize() where every quantized image's first pixel is a 
   different color. So we wind up with 6 colors instead of 5. To compensate I map the 
   first two colors to grey */
const colorMap: ColorMap = {
  0: 'rgb(235, 237, 240)',
  1: 'rgb(235, 237, 240)',
  2: 'rgb(155, 233, 168)',
  3: 'rgb(64, 196, 99)',
  4: 'rgb(48, 161, 78)',
  5: 'rgb(33, 110, 57)',
}

export default function Githubbify() {
    const workerRef = useRef<Worker | null>(null);

  useEffect(() => {
    const worker = new Worker(new URL("./jimp.worker.ts", import.meta.url), {
        type: "module",
    })
    workerRef.current = worker
    worker.addEventListener("message", (e) => {
        if (e.data.type === 'resized') setResizedImgUrl(e.data.base64);
        if (e.data.type === 'quantized') setQuantizedImgUrl(e.data.base64);
        if (e.data.type === 'matrix') setMatrix(e.data.matrix)
      });
    return () => {
      workerRef.current?.terminate();
    };
  }, []);

    const [originalImgUrl, setOriginalImgUrl] = useState<string | null>(null);
    const [resizedImgUrl, setResizedImgUrl] = useState<string | null>(null);
    const [quantizedImgUrl, setQuantizedImgUrl] = useState<string | null>(null);
    const [imageMode, setImageMode] = useState<ImageMode>('original')
    const [matrix, setMatrix] = useState<Matrix | null>(null);
    const onDataUrl = (dataUrl: string) => {
      setImageMode('original')
      setOriginalImgUrl(dataUrl)
      setResizedImgUrl(null)
      setQuantizedImgUrl(null)
    }
    const onArrayBuffer = (buffer: ArrayBuffer) => {
        if (workerRef.current) workerRef.current.postMessage({ image: buffer })
    }
    const getImageFromMode = (mode: ImageMode) => {
      if (mode === 'original') return originalImgUrl
      if (mode === 'resized') return resizedImgUrl
      if (mode === 'quantized') return quantizedImgUrl
    }
    const getImageAltFromMode = (mode: ImageMode) => {
      if (mode === 'original') return 'original uploaded image'
      if (mode === 'resized') return 'resized image'
      if (mode === 'quantized') return 'quantized image'
    }
    const updateImageMode = (newMode: ImageMode) => {
      if (newMode === imageMode || !getImageFromMode(newMode)) return undefined
      return () => setImageMode(newMode)
    }
    const showImageUrl = getImageFromMode(imageMode) || originalImgUrl
    return (
      <Page title="Githubbify">
        <Card className='!max-w-4xl flex flex-col gap-4'>
          <img className='w-64' src={githubbifyLogo} style={{ imageRendering: 'pixelated' }} alt='Githubbify logo' />
          <p>Make any image look like the Github contributions heatmap!</p>
          <img className='w-full h-auto' src={githubChartExample} alt='Example Github contributions chart' />
          <FileUpload onDataUrl={onDataUrl} onArrayBuffer={onArrayBuffer}  />
          {showImageUrl && (
            <div>
              <img className='max-h-full h-[60vh] w-auto' style={{ imageRendering: 'pixelated' }} src={showImageUrl} alt={getImageAltFromMode(imageMode)} />
              <div className='text-sm'><InlineButton text='Original' onClick={updateImageMode('original')} /> | <InlineButton text='Resized' onClick={updateImageMode('resized')} /> | <InlineButton text='Quantized' onClick={updateImageMode('quantized')} /></div>
            </div>
          )}
          {matrix && (
            <div>
              <p className='font-bold text-center'>Githubbified image</p>
              <div className='w-full border-2 border-zinc-300 rounded-lg bg-zinc-200 p-8'>
              <div className='p-1 mx-auto w-fit flex flex-col gap-[3px] bg-white rounded-lg'>
                {matrix.map((row, y) => (
                <div key={`row-${y}`} className='flex gap-[3px]'>
                    {row.map((cell, x) => (
                        <div key={`cell-${x}-${y}`} className={`w-[10px] h-[10px] rounded-[2px] outline-[rgba(27, 31, 35, 0.06)] outline-offset-[-1px]`} style={{ background: colorMap[cell] }} />
                    ))}
                </div>
            ))}
              </div>
            </div>
            </div>
          )}
        </Card>
      </Page>
    );
  }
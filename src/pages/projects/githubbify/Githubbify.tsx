
import { useEffect, useState, useRef } from 'react';
import Page from "../../../components/Page";
import Card from "../../../components/Card";
import { InlineButton } from '../../../components/Button';
import githubChartExample from "../../../assets/githubbify/github-chart-example.png"
import { FileUpload } from './FileUpload';

type ImageMode = 'original' | 'resized' | 'quantized'
interface ColorMap {
  [key: number]: string
}

/* There is a bug in jimp.quantize() where every quantized image's first pixel is a 
   different color. So we wind up with 6 colors instead of 5. To compensate I map the 
   first two colors to grey */
const colorMap: ColorMap = {
  0: '#ebedf0',
  1: '#ebedf0',
  2: 'rgb(155, 233, 168)',
  3: 'rgb(64, 196, 99)',
  4: 'rgb(48, 161, 78)',
  5: 'rgb(33, 110, 57)',
}
type Matrix = number[][]
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
    const sendArrayBuffer = (buffer: ArrayBuffer) => {
        if (workerRef.current) workerRef.current.postMessage({ image: buffer })
    }
    const getImageFromMode = (mode: ImageMode) => {
      if (mode === 'original') return originalImgUrl
      if (mode === 'resized') return resizedImgUrl
      if (mode === 'quantized') return quantizedImgUrl
    }
    const updateImageMode = (newMode: ImageMode) => {
      if (newMode === imageMode || !getImageFromMode(newMode)) return undefined
      return () => setImageMode(newMode)
    }
    const showImageUrl = getImageFromMode(imageMode) || originalImgUrl
    return (
      <Page title="Githubbify">
        <Card className='!max-w-4xl flex flex-col gap-4'>
          <h3 className="font-bold text-lg">Githubbify</h3>
          <p>Turn any image into a green heatmap! Inspired by the Github contributions chart.</p>
          <img className='w-full h-auto' src={githubChartExample} alt='Example Github contributions chart' />
          <FileUpload sendArrayBuffer={sendArrayBuffer} setImageUrl={setOriginalImgUrl}  />
          {showImageUrl && (
            <div>
              <img className='w-full h-auto' style={{ imageRendering: 'pixelated' }} src={showImageUrl} alt='original uploaded image' />
              <div><InlineButton text='Original' onClick={updateImageMode('original')} /> | <InlineButton text='Resized' onClick={updateImageMode('resized')} /> | <InlineButton text='Quantized' onClick={updateImageMode('quantized')} /></div>
            </div>
          )}
          {matrix && (
            <div className='flex flex-col gap-[3px]'>
                {matrix.map((row, y) => (
                <div key={`row-${y}`} className='flex gap-[3px]'>
                    {row.map((cell, x) => (
                        <div key={`cell-${x}-${y}`} className='w-[10px] h-[10px] rounded-[2px] outline-[rgba(27, 31, 35, 0.06)] outline-offset-[-1px]' style={{ background: colorMap[cell] }} />
                    ))}
                </div>
            ))}
            </div>
          )}
        </Card>
      </Page>
    );
  }
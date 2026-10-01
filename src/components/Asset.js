import Image from 'next/image';
import { assetSizes } from '@/data/assets';

// <Asset src="Airbnb.png" /> -> next/image for /public/Assets/Airbnb.png.
// Width/height come from src/data/assets.js so the browser can reserve space (no layout jump).
export default function Asset({ src, alt = '', ...props }) {
  const [width, height] = assetSizes[src] ?? [100, 100];
  const unoptimized = /\.(svg|ico|gif)$/i.test(src);
  return <Image src={`/Assets/${src}`} alt={alt} width={width} height={height} unoptimized={unoptimized} {...props} />;
}

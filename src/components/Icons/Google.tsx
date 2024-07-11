import * as React from "react";
import { SvgXml } from "react-native-svg";

interface LogoProps {
  width: number;
  height: number;
  color: string;
  border: string;
}
export default function Google({ width, height, color, border }: LogoProps) {
  const xml = `
  <svg width="${width}" height="${height}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1.46112" y="1.5" width="45.3593" height="45.3593" rx="11" fill="${color}" stroke="${border}" stroke-width="2"/>
<g clip-path="url(#clip0_2016_192)">
<g clip-path="url(#clip1_2016_192)">
<path d="M35.8858 24.4497C35.8858 23.6597 35.8158 22.9097 35.6958 22.1797H24.3958V26.6897H30.8658C30.5758 28.1697 29.7258 29.4197 28.4658 30.2697V33.2697H32.3258C34.5858 31.1797 35.8858 28.0997 35.8858 24.4497Z" fill="#4285F4"/>
<path d="M24.3958 36.1797C27.6358 36.1797 30.3458 35.0997 32.3258 33.2697L28.4658 30.2697C27.3858 30.9897 26.0158 31.4297 24.3958 31.4297C21.2658 31.4297 18.6158 29.3197 17.6658 26.4697H13.6858V29.5597C15.6558 33.4797 19.7058 36.1797 24.3958 36.1797Z" fill="#34A853"/>
<path d="M17.6658 26.4697C17.4158 25.7497 17.2858 24.9797 17.2858 24.1797C17.2858 23.3797 17.4258 22.6097 17.6658 21.8897V18.7997H13.6858C12.8658 20.4197 12.3958 22.2397 12.3958 24.1797C12.3958 26.1197 12.8658 27.9397 13.6858 29.5597L17.6658 26.4697Z" fill="#FBBC05"/>
<path d="M24.3958 16.9297C26.1658 16.9297 27.7458 17.5397 28.9958 18.7297L32.4158 15.3097C30.3458 13.3697 27.6358 12.1797 24.3958 12.1797C19.7058 12.1797 15.6558 14.8797 13.6858 18.7997L17.6658 21.8897C18.6158 19.0397 21.2658 16.9297 24.3958 16.9297Z" fill="#EA4335"/>
</g>
</g>
<defs>
<clipPath id="clip0_2016_192">
<rect width="24" height="24" fill="white" transform="translate(12.1408 12.1797)"/>
</clipPath>
<clipPath id="clip1_2016_192">
<rect width="24" height="24" fill="white" transform="translate(12.1408 12.1797)"/>
</clipPath>
</defs>
</svg>
    `;

  return <SvgXml xml={xml} />;
}

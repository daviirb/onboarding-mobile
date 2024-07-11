import * as React from "react";
import { TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";

interface LogoProps {
  size: number;
  color: string;
  border: string;
}
export default function Facebook({ size, color, border }: LogoProps) {
  const xml = `
  <svg width="${size}" height="${size}" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="1.82037" y="1.5" width="45.3593" height="45.3593" rx="11" fill="${color}" stroke="${border}" stroke-width="2"/>
<rect x="12.8853" y="12.0718" width="24" height="24" rx="12" fill="#1977F3"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.0071 35.8844C26.3184 36.0073 25.6093 36.0714 24.8853 36.0714C24.2436 36.0714 23.6137 36.0211 22.9993 35.9241V27.8942H19.7427V24.199H22.9993V21.3827C22.9993 18.1796 24.9129 16.4098 27.8434 16.4098C28.8052 16.4232 29.7646 16.5067 30.7141 16.6596V19.8056H29.096C27.503 19.8056 27.0071 20.7909 27.0071 21.8029V24.1996H30.564L29.9954 27.8942H27.0071V35.8844Z" fill="#FFFBFB"/>
</svg>
    `;

  return (
    <TouchableOpacity>
      <SvgXml xml={xml} />
    </TouchableOpacity>
  );
}

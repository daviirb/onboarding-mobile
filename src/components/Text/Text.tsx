import { useDynamicStyles } from "@/styles/styles";
import { Text as RText } from "react-native";

interface TextProps {
  text: string;
}

function TitleLarge({ text }: TextProps) {
  const { titleLarge } = useDynamicStyles();
  return <RText style={titleLarge}>{text}</RText>;
}

function Paragraph({ text }: TextProps) {
  const { paragraph } = useDynamicStyles();
  return <RText style={paragraph}>{text}</RText>;
}
function ButtonText({ text }: TextProps) {
  const { buttonText } = useDynamicStyles();
  return <RText style={buttonText}>{text}</RText>;
}
function Tertiary({ text }: TextProps) {
  const { paragraphSecondary } = useDynamicStyles();
  return <RText style={paragraphSecondary}>{text}</RText>;
}

export const Text = { TitleLarge, Paragraph, Tertiary, ButtonText };

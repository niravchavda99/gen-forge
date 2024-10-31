import hexToRGB from "@/lib/hexToRGB";

function isLightColor(hex: string): boolean {
  const { r, g, b } = hexToRGB(hex);
  const brightness = 0.299 * r + 0.587 * g + 0.114 * b;
  return brightness > 186;
}

export default function getTextColorForBackground(hex: string): string {
  return isLightColor(hex) ? "#000000" : "#FFFFFF";
}

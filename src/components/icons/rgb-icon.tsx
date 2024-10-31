import { Copy } from "lucide-react";

interface RGBIconProps {
  onClick?: () => void;
}

export default function RGBIcon({ onClick }: RGBIconProps) {
  return (
    <span
      className="text-sm cursor-pointer flex flex-row items-center gap-1"
      onClick={onClick}
    >
      <Copy className="cursor-pointer w-4 h-4" />
      <span>RGB</span>
    </span>
  );
}

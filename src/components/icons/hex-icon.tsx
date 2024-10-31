import { Copy } from "lucide-react";

interface HexIconProps {
  onClick?: () => void;
}

export default function HexIcon({ onClick }: HexIconProps) {
  return (
    <span
      className="text-sm cursor-pointer flex flex-row items-center gap-1"
      onClick={onClick}
    >
      <Copy className="cursor-pointer w-4 h-4" />
      <span>Hex</span>
    </span>
  );
}

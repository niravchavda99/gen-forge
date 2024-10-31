import { FormEvent } from "react";

interface TextAreaProps {
  value?: string;
  rows?: number;
  placeholder?: string;
  onChange: (value: string) => void;
}

export const Textarea = ({
  value,
  rows,
  placeholder,
  onChange,
}: TextAreaProps) => {
  return (
    <textarea
      value={value}
      className="mt-2 w-full rounded-lg border border-gray-400 align-top shadow-sm sm:text-sm p-3 bg-transparent text-black"
      rows={rows ?? 4}
      placeholder={placeholder}
      onChange={(e: FormEvent) =>
        onChange((e.target as HTMLTextAreaElement).value)
      }
    ></textarea>
  );
};

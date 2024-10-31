"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { ReactNode, useState } from "react";
import { generateData, TransformInput } from "../gen-forge/generateData";
import ClipboardApi from "@/lib/clipboard-api";
import { useToast } from "@/hooks/use-toast";
import { PopoverInput } from "../popover-input/popover-input";
import {
  Algorithm,
  AlgorithmType,
} from "@/components/gen-forge/gen-forge.model";
import HexIcon from "@/components/icons/hex-icon";
import RGBIcon from "@/components/icons/rgb-icon";
import hexToRGB from "@/lib/hexToRGB";
import getTextColorForBackground from "@/lib/getTextColorForBackground";

interface GenForgeCardProps {
  algorithm: Algorithm;
}

export const GenForgeCard = ({ algorithm }: GenForgeCardProps) => {
  const [result, setResult] = useState<string>("");
  const { toast } = useToast();
  const resetFields = () => setResult("");
  const generateRandom = async () => {
    resetFields();
    const bytes = window.crypto.getRandomValues(new Uint8Array(20));
    await generateAndCopy(bytes);
  };
  const copyResultToClipboard = async (value: string) => {
    await ClipboardApi.copy(value);
    toast({
      title: "Copied to clipboard!",
      variant: "default",
    });
  };
  const generateAndCopy = async (input: TransformInput) => {
    try {
      const result = await generateData(algorithm.type, input);
      setResult(result);
      await copyResultToClipboard(result);
    } catch (err) {
      toast({
        title: (err as Error).message,
        variant: "destructive",
      });
    }
  };
  const generateFromInput = async (inputText: string) => {
    resetFields();
    if (!inputText?.length) {
      toast({
        title: "Enter text to generate!",
        variant: "destructive",
      });
      return;
    }
    await generateAndCopy(inputText);
  };

  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>{algorithm.title}</CardTitle>
        <CardDescription>Generate {algorithm.displayName}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-row items-center justify-center gap-2">
        <Button variant="default" size="sm" onClick={generateRandom}>
          {algorithm?.generateRandomActionName ?? "Random"}
        </Button>
        {!algorithm.isInputDisabled && (
          <PopoverInput onGenerate={generateFromInput} />
        )}
      </CardContent>
      <CardFooter className="h-[100px]">
        <div className="text-black w-full">
          {result && (
            <div className="text-sm mb-2 flex flex-row items-center justify-between text-slate-600">
              <span>Result</span>
              {renderCTA(result, algorithm.type, copyResultToClipboard)}
            </div>
          )}
          {result && (
            <div className="break-all text-left">
              {renderResult(result, algorithm.type)}
            </div>
          )}
          {!result && (
            <div className="text-sm text-slate-600 mb-2 flex flex-row items-center justify-center">
              Your result will appear here
            </div>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

function renderResult(result: string, algorithmType: AlgorithmType): ReactNode {
  if (algorithmType === AlgorithmType.COLOR) {
    return (
      <div
        style={{
          background: result,
          color: getTextColorForBackground(result),
        }}
        className="w-full h-8 rounded-md text-sm flex flex-row items-center justify-center select-none cursor-pointer"
      >
        <span>{result}</span>
      </div>
    );
  }
  return result;
}

function renderCTA(
  result: string,
  algorithmType: AlgorithmType,
  callback: (result: string) => void,
): ReactNode {
  if (algorithmType === AlgorithmType.COLOR) {
    return (
      <span className="flex flex-row items-center gap-3">
        <HexIcon onClick={() => callback(result)} />
        <RGBIcon
          onClick={() => {
            const rgb = hexToRGB(result);
            const rgbString = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
            callback(rgbString);
          }}
        />
      </span>
    );
  }
  return (
    <Copy className="cursor-pointer w-4 h-4" onClick={() => callback(result)} />
  );
}

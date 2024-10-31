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
import { Copy as IoCopyOutline } from "lucide-react";
import { useState } from "react";
import { generateData, TransformInput } from "../gen-forge/generateData";
import ClipboardApi from "@/lib/clipboard-api";
import { useToast } from "@/hooks/use-toast";
import { PopoverInput } from "../popover-input/popover-input";
import { Algorithm } from "@/components/gen-forge/gen-forge.model";

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
              <IoCopyOutline
                className="cursor-pointer w-4 h-4"
                onClick={() => copyResultToClipboard(result)}
              />
            </div>
          )}
          {result && <div className="break-all text-left">{result}</div>}
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

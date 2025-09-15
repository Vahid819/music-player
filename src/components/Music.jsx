import React from "react";
import Image from "next/image";
import Song from "@/../public/img1.jpeg";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AspectRatio } from "@/components/ui/aspect-ratio";

function Music() {
  return (
    <div className="w-full p-4 md:h-[100vh] h-[80vh] md:flex md:gap-1">
      <Card className="border-2 md:w-[30%] md:h-[70%] h-full px-4 md:flex flex-col justify-between">
        <Card className="h-[60%] relative flex items-center p-1">
          <AspectRatio ratio={16/14}>
            <Image src={Song} alt="Song" className="rounded-2xl absolute " />
          </AspectRatio>
        </Card>
        <Separator />
        <Card className="h-[17%] flex justify-center items-center">

        </Card>
      </Card>
      <Card className="w-full">

      </Card>
    </div>
  );
}

export default Music;

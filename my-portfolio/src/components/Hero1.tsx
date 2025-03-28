import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { cn } from "../../utils/cn";

const Hero1 = () => {
  return (
    <div className="pb-20 pt-36 relative min-h-screen bg-[#000000] dark:bg-[#000000] h-full">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="#FFFFFF"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="#800080"
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="#0000FF"
        />
      </div>
      <div className="relative flex h-screen w-full items-center justify-center bg-black dark:bg-black">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)]"
          )}
        />
      </div>
    </div>
  );
};

export default Hero1;

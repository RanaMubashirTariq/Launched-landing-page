import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative flex flex-col w-full max-w-3xl items-start gap-8 py-12 pl-[80px] max-[1100px]:pl-[50px]  max-[680px]:pl-[25px] max-[1000px]:items-center max-[1000px]:gap-12 max-[1000px]:pr-[50px] max-[680px]:pr-[25px] max-[1000px]:max-w-[100%]  max-[680px]:gap-4">
      <div className=" flex flex-col items-start gap-[11px] w-full max-[1100px]:w-[500px] max-[1000px]:items-center max-[1000px]:text-center max-[1000px]:gap-4 max-[1000px]:w-[100%]">
        <h1 className="font-['IBM_Plex_Sans',Helvetica] font-bold text-white text-[80px] leading-tight whitespace-nowrap max-[1300px]:text-[70px] max-[1100px]:text-[60px] max-[1100px]:leading-[1.2] max-[680px]:text-[30px] max-[680px]:leading-[1.2]">
          Launch The Future <br />
          of Web3
        </h1>

        <p className="font-['Poppins',Helvetica] font-medium text-[#afaabf] text-[32px]  max-[1300px]:text-[28px] max-[1100px]:text-[24px] max-[1100px]:leading-[1.2] max-[680px]:text-[16px] max-[680px]:leading-[1.2]">
          Decentralized Multi-chain launched on Ethereum, BNS Chain and Doygon
        </p>
      </div>

      <div className="flex items-center gap-6 max-[680px]:flex-col max-[6800px]:gap-4 max-[680px]:w-[100%]">
        <Button className="px-5 py-[18px] bg-[#2e286e] rounded-[15px] border border-solid border-[#afaabf80] shadow-[inset_0px_-4px_11.7px_#907ce640] font-['Poppins',Helvetica] font-medium text-[#afaabf] text-xl h-auto max-[680px]:w-[100%]  max-[680px]:py-[10px]">
          Join IDO
        </Button>

        <Button className="px-5 py-[18px] bg-[#060232] rounded-[15px] border border-solid border-[#afaabf80] shadow-[inset_0px_-4px_11.7px_#907ce640] font-['Poppins',Helvetica] font-medium text-[#afaabf] text-xl h-auto max-[680px]:w-[100%] max-[680px]:py-[10px]">
          Apply Launch
        </Button>
      </div>
    </section>
  );
};

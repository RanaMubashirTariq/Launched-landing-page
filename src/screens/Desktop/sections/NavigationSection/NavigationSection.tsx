import React from "react";
import Marquee from "react-fast-marquee";
import { Card, CardContent } from "../../../../components/ui/card";
import { ScrollArea, ScrollBar } from "../../../../components/ui/scroll-area";

// Token data for mapping
const tokens = [
  {
    name: "Toad",
    symbol: "$TOAD",
    mainImage: "/original-png.png",
    chainImage: "/solana.png",
  },
  {
    name: "Valu",
    symbol: "LIFE",
    mainImage: "/1745749714165-48d158fb4b73914242f6a1c11361930b-jpeg.jpg",
    chainImage: "/solana.png",
  },
  {
    name: "CowCoin",
    symbol: "COW",
    mainImage: "/1734711458548-9a933310e5c76125764f5d9ff136521c-png.png",
    chainImage: "/ic-bsc-a3213bd0-svg.svg",
    isSvgChain: true,
  },
  {
    name: "KOMA Inu",
    symbol: "KOMA",
    mainImage: "/1728231454398-f00432283d18f075f373bbdc425ec972-png.png",
    chainImage: "/ic-bsc-a3213bd0-svg.svg",
    isSvgChain: true,
  },
  {
    name: "Baby Neiro",
    symbol: "Baby",
    mainImage: "/1728995202100-867bfa0729040fbfaa700da0e73b4f3f-png.png",
    chainImage: "/ic-bsc-a3213bd0-svg.svg",
    isSvgChain: true,
  },
  {
    name: "Reploy",
    symbol: "RAI",
    mainImage: "/1729786687597-fe8569ba511de57b1cd4f7925a74de81-png.png",
    chainImage: "/ic-bsc-a3213bd0-svg.svg",
    isSvgChain: true,
  },
  {
    name: "Eagle AI",
    symbol: "EAI",
    mainImage: "/1716209527383-cf565b97cdd0b00b3f1b72f6283b2f20-png-1.png",
    chainImage: "/base-mainnet-1.png",
  },
  {
    name: "Eagle AI",
    symbol: "EAI",
    mainImage: "/1716209527383-cf565b97cdd0b00b3f1b72f6283b2f20-png-1.png",
    chainImage: "/base-mainnet-1.png",
  },
  {
    name: "Eagle AI",
    symbol: "EAI",
    mainImage: "/1716209527383-cf565b97cdd0b00b3f1b72f6283b2f20-png-1.png",
    chainImage: "/base-mainnet-1.png",
  },
  {
    name: "Eagle AI",
    symbol: "EAI",
    mainImage: "/1716209527383-cf565b97cdd0b00b3f1b72f6283b2f20-png-1.png",
    chainImage: "/base-mainnet-1.png",
  },
];

export const NavigationSection = (): JSX.Element => {
  return (
    <div className="w-full py-20 overflow-hidden max-[1100px]:py-10 max-[680px]:py-5">
    <Marquee pauseOnHover speed={50} gradient={false}>
      <div className="flex items-center gap-[24px]">
        {tokens.map((token, index) => (
          <Card
            key={`token-${index}`}
            className="flex-none bg-[#544bbf1a] rounded-[23px] border border-solid border-[#a097ff33] mx-2"
          >
            <CardContent className="flex items-center gap-2 pl-[15px] pr-[30px] py-3">
              <div className="relative w-[45px] h-[45px]">
                <div className="relative w-full h-full">
                  <div
                    className="absolute w-[45px] h-[45px] top-0 left-0 rounded-full border border-solid border-[#f1466833] bg-cover bg-center"
                    style={{ backgroundImage: `url(${token.mainImage})` }}
                  />
                  <div
                    className="absolute w-[22px] h-[22px] top-[26px] left-[26px] rounded-full border border-solid border-[#f1466833] bg-cover bg-center"
                    style={{ backgroundImage: `url(${token.chainImage})` }}
                  />
                </div>
              </div>
              <div className="flex flex-col h-7 items-center gap-1.5">
                <div className="text-white text-xs leading-[11px]">
                  {token.name}
                </div>
                <div className="text-gray-400 text-xs leading-[11px]">
                  {token.symbol}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Marquee>
  </div>
  );
};

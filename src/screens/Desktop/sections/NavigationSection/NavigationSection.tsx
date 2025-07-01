import React from "react";
import Marquee from "react-fast-marquee";
import { Card, CardContent } from "../../../../components/ui/card";
import { ScrollArea, ScrollBar } from "../../../../components/ui/scroll-area";
import toad from "../../../../../public/original-png.png"
  import valu from "../../../../../public/1745749714165-48d158fb4b73914242f6a1c11361930b-jpeg.jpg"
import cow from "../../../../../public/1734711458548-9a933310e5c76125764f5d9ff136521c-png.png"
import koma from "../../../../../public/1728231454398-f00432283d18f075f373bbdc425ec972-png.png"
import baby from "../../../../../public/1728995202100-867bfa0729040fbfaa700da0e73b4f3f-png.png"
import reploy from "../../../../../public/1729786687597-fe8569ba511de57b1cd4f7925a74de81-png.png"
import eai from "../../../../../public/1716209527383-cf565b97cdd0b00b3f1b72f6283b2f20-png-1.png"
// Token data for mapping
const tokens = [
  {
    name: "Toad",
    symbol: "$TOAD",
    mainImage: toad,
    chainImage: "/solana.png",
  },
  {
    name: "Valu",
    symbol: "LIFE",
    mainImage: valu,
    chainImage: "/solana.png",
  },
  {
    name: "CowCoin",
    symbol: "COW",
    mainImage: cow,
    chainImage: "/ic-bsc-a3213bd0-svg.svg",
    isSvgChain: true,
  },
  {
    name: "KOMA Inu",
    symbol: "KOMA",
      mainImage: koma,
    chainImage: "/ic-bsc-a3213bd0-svg.svg",
    isSvgChain: true,
  },
  {
    name: "Baby Neiro",
    symbol: "Baby",
    mainImage: baby,
    chainImage: "/ic-bsc-a3213bd0-svg.svg",
    isSvgChain: true,
  },
  {
    name: "Reploy",
    symbol: "RAI",
    mainImage: reploy,
    chainImage: "/ic-bsc-a3213bd0-svg.svg",
    isSvgChain: true,
  },
  {
    name: "Eagle AI",
    symbol: "EAI",
    mainImage: eai,
    chainImage: "/base-mainnet-1.png",
  },
  {
    name: "Eagle AI",
    symbol: "EAI",
    mainImage: eai,
    chainImage: "/base-mainnet-1.png",
  },
  {
    name: "Eagle AI",
    symbol: "EAI",
      mainImage: eai,
    chainImage: "/base-mainnet-1.png",
  },
  {
    name: "Eagle AI",
    symbol: "EAI",
      mainImage: eai,
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

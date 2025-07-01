import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const TokenUtilitySection = (): JSX.Element => {
  // Define card data for mapping
  const utilityCards = [
    {
      icon: '/group-5.svg',
      iconWidth: "w-[48.4px]",
      iconHeight: "h-[48.4px]",
      iconMargin: "mt-[-7.20px]",
      title: "Stake Tokens",
      titleWidth: "w-[134px]",
      alt: "Group",
    },
    {
      icon: '/vector-1.svg',
      iconWidth: "w-[73.2px]",
      iconHeight: "h-[73.2px]",
      iconMargin: "mt-[-19.60px]",
      title: "Get Tier Access",
      titleWidth: "w-[158px]",
      alt: "Vector",
    },
    {
      icon: '/vector.svg',
      iconWidth: "w-[55.2px]",
      iconHeight: "h-[55.2px]",
      iconMargin: "mt-[-10.60px]",
      title: "Join Sales",
      titleWidth: "w-[102px]",
      alt: "Vector",
    },
    {
      icon: '/-x30-6.svg',
      iconWidth: "w-[34px]",
      iconHeight: "h-[34px]",
      iconMargin: "",
      title: "Claim Tokens",
      titleWidth: "w-[138px]",
      alt: "X",
    },
  ];

  return (
    <div className="flex items-center  gap-[37px] w-full px-[180px] pt-[50px] pb-[61px] max-[1300px]:px-[100px] max-[1100px]:px-[50px]  max-[680px]:px-[25px] max-[1000px]:justify-center max-[1000px]:flex-wrap max-[680px]:gap-4 max-[680px]:pt-[32px] max-[680px]:pb-[32px]">
      {utilityCards.map((card, index) => (
        <Card
          key={index}
          className="flex flex-col w-[242px] items-center bg-[#afaabf1a] rounded-[17px] border border-solid border-[#afaabf33] shadow-[inset_0px_-4px_4.5px_#b0b0b040]"
        >
          <CardContent className="flex flex-col items-center gap-[17px] px-8 py-[52px] w-full">
            <img
              className={`relative ${card.iconWidth} ${card.iconHeight} ${card.iconMargin}`}
              alt={card.alt}
              src={card.icon}
            />
            <div
              className={`relative ${card.titleWidth} [font-family:'Poppins',Helvetica] font-medium text-[#afaabf] text-xl tracking-[0] leading-[normal]`}
            >
              {card.title}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

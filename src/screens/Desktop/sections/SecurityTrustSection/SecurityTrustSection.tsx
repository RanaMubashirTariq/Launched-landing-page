import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Progress } from "../../../../components/ui/progress";
import { Separator } from "../../../../components/ui/separator";

export const SecurityTrustSection = (): JSX.Element => {
  // Card data for mapping
  const launchpadCards = [
    { id: 1, groupImageSuffix: "" },
    { id: 2, groupImageSuffix: "-3" },
    { id: 3, groupImageSuffix: "-7" },
    { id: 4, groupImageSuffix: "-10" },
    { id: 5, groupImageSuffix: "-13" },
    { id: 6, groupImageSuffix: "-16" },
  ];

  return (
    <section className="flex flex-col items-center gap-9 w-full  mx-auto max-[1100px]:max-w-[100%] my-[50px] max-[680px]:my-[32px] max-[680px]:gap-4  max-[680px]:px-[25px]">
      <h2 className="w-full [font-family:'Poppins',Helvetica] font-bold text-[#afabbf] text-5xl text-center max-[1100px]:text-3xl max-[680px]:text-2xl max-[680px]:text-center">
        Launchpad List
      </h2>

      <div className="flex flex-col items-start gap-[50px] w-full max-[1100px]:gap-[40px] max-[1000px]:gap-[20px] max-[680px]:gap-[10px]">
        {/* First row of cards */}
        <div className="flex flex-wrap items-center justify-center gap-[50px] w-full max-[1100px]:gap-[40px] max-[680px]:gap-[20px]">
          {launchpadCards.slice(0, 6).map((card) => (
            <LaunchpadCard
              key={card.id}
              groupImageSuffix={card.groupImageSuffix}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// LaunchpadCard component for reusability
const LaunchpadCard = ({ groupImageSuffix }: { groupImageSuffix: string }) => {
  return (
    <Card className="flex flex-col w-[325px] items-start gap-[15px] px-4 py-[15px] bg-[#a097ff1a] rounded-[20px] border-none">
      <CardContent className="p-0 w-full">
        <div className="flex w-full items-center justify-between mb-[15px]">
          <div className="w-16 h-16 bg-[url(/ic-pinksale-61500ae2-svg.svg)] bg-[100%_100%]" />

          <Badge className="flex items-center gap-[3px] px-[15px] py-1.5 bg-[#2e286e] rounded-[47px] border border-solid border-[#afaabf80] shadow-[inset_0px_-4px_11.7px_#907ce640]">
            <div className="w-[9px] h-[9px] bg-[#f3ba2f] rounded-[4.5px]" />
            <span className="[font-family:'Poppins',Helvetica] font-medium text-[#afaabf] text-xs max-[680px]:text-xs max-[680px]:text-center">
              Upcoming
            </span>
          </Badge>
        </div>

        <div className="flex flex-col w-full items-start gap-1.5 mb-[15px] ">
          <div className="flex flex-col items-start gap-[11px] w-full max-[680px]:gap-2">
            <div className="flex flex-col items-start gap-0.5 w-full max-[680px]:gap-1 ">
              <h3 className="w-full [font-family:'Poppins',Helvetica] font-medium text-white text-lg max-[680px]:text-sm">
                Defi Kings Lending
              </h3>
              <p className="w-full [font-family:'Poppins',Helvetica] font-medium text-[#afaabf] text-[15px] max-[680px]:text-xs">
                1 BNB=69,4444.44 DKL
              </p>
            </div>

            <div className="flex flex-col items-start w-full">
              <p className="w-full [font-family:'Poppins',Helvetica] font-medium text-[#afaabf] text-sm max-[680px]:text-xs">
                Soft/Hard18 BNB-36 BNB
              </p>
              <div className="flex flex-col items-start gap-1 -mt-px">
                <p className="text-[#a097ff] text-base [font-family:'Poppins',Helvetica] font-medium max-[680px]:text-xs">
                  18 BNB - 36 BNB
                </p>
                <p className="[font-family:'Poppins',Helvetica] font-medium text-[#afaabf] text-sm max-[680px]:text-xs">
                  Progress (0.00%)
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-1.5 w-full max-[680px]:gap-1">
            <Progress
              value={30}
              className="h-1.5 w-full bg-[#d9d9d9] rounded-xl max-[680px]:h-1"
            />
            <div className="flex items-center justify-between w-full max-[680px]:gap-1">
              <span className="text-[#afaabf] text-sm [font-family:'Poppins',Helvetica] font-medium max-[680px]:text-xs">
                0 BNB
              </span>
              <span className="text-[#afaabf] text-sm [font-family:'Poppins',Helvetica] font-medium">
                36 BNB
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full items-start gap-2 max-[680px]:gap-1">
          <div className="flex flex-col items-start gap-3.5 w-full max-[680px]:gap-2">
            <div className="flex flex-col w-full items-start gap-[5px] max-[680px]:gap-1">
              <div className="flex items-center justify-between w-full ">
                <span className="[font-family:'Poppins',Helvetica] font-medium text-[#afaabf] text-sm max-[680px]:text-xs">
                  Liquidity % :
                </span>
                <span className="[font-family:'Poppins',Helvetica] font-medium text-[#afaabf] text-sm max-[680px]:text-xs">
                  15%
                </span>
              </div>
              <div className="flex items-center justify-between w-full">
                <span className="[font-family:'Poppins',Helvetica] font-medium text-[#afaabf] text-sm max-[680px]:text-xs">
                  Lockup Time:
                </span>
                <span className="[font-family:'Poppins',Helvetica] font-medium text-[#afaabf] text-sm max-[680px]:text-xs">
                  180 days
                </span>
              </div>
            </div>
            <Separator className="w-full h-px max-[680px]:h-0.5" />
          </div>

          <div className="flex items-center justify-between w-full max-[680px]:gap-1">
            <div className="flex flex-col items-start gap-[5px] max-[680px]:gap-1">
              <span className="[font-family:'Poppins',Helvetica] font-medium text-[#afaabf] text-sm max-[680px]:text-xs">
                Sale Starts In:
              </span>
              <span className="[font-family:'Poppins',Helvetica] font-medium text-[#afaabf] text-sm max-[680px]:text-xs">
                26:19:11:11
              </span>
            </div>

            <div className="flex items-center gap-3 max-[680px]:gap-1">
              <div className="flex items-end gap-[11px] max-[680px]:gap-1">
                <img className="w-[33px] max-[680px]:w-[23px]" alt="Frame" src="/frame-16.svg" />
                <img className="w-[33px] max-[680px]:w-[23px]" alt="Frame" src="/bell-icon.svg" />

              </div>

              <Button className="flex items-center justify-center px-[17px] py-[5px] bg-[#060232] rounded-[91px] border border-solid border-[#afaabf80] shadow-[inset_0px_-4px_11.7px_#907ce640] h-auto max-[680px]:px-[10px] max-[680px]:py-[3px] max-[680px]:text-xs">
                <span className="[font-family:'Poppins',Helvetica] font-medium text-[#afaabf] text-[11px]">
                  View
                </span>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

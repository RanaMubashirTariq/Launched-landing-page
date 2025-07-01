import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import freepik1 from "../../../../../public/freepik--create-a-new-version-of-the-3d-futuristic-crypto-v--357.png"
export const FooterSection = (): JSX.Element => {
  return (
    <Card className="flex items-center gap-20 p-14 bg-[#a097ff26] rounded-[30px] border border-solid border-[#544bbf80] mx-[180px] my-[100px] max-[1300px]:mx-[100px] max-[1100px]:mx-[50px] max-[680px]:mx-[25px] max-[680px]:my-[32px] max-[1000px]:my-[50px] max-[1100px]:gap-10 max-[1100px]:p-8 max-[1000px]:flex-col-reverse max-[1000px]:items-center max-[480px]:p-4 max-[480px]:gap-4">
      <CardContent className="flex flex-col items-start gap-10 p-0 max-[1000px]:items-center">
        <h2 className="font-bold text-[#afabbf] text-[40px] font-['Poppins',Helvetica] leading-normal whitespace-nowrap max-[1100px]:whitespace-normal max-[1100px]:w-[500px] max-[680px]:text-2xl  max-[1000px]:text-center   max-[1000px]:w-[100%]   ">
          Want to Launch your Project
          <br />
          on Launchpad.
        </h2>

        <div className="flex flex-wrap items-center gap-[9px]">
          <div className="relative flex-grow">
            <Input
              placeholder="Email Address"
              className=" max-w-[380px] px-8 py-5 h-auto bg-[#060232b2] rounded-[15px] border border-solid border-[#544bbf80] text-[#9b9b9b] font-['Poppins',Helvetica] font-semibold text-base max-[480px]:px-4 max-[480px]:py-3 max-[480px]:text-sm"
            />
          </div>

          <Button className="px-8 py-5 h-auto bg-[#a097ff] rounded-[15px] border border-solid border-[#544bbf80] text-[#060232] font-['Poppins',Helvetica] font-semibold text-base hover:bg-[#8c84e6] max-[480px]:px-4 max-[480px]:py-3 max-[480px]:text-sm max-[480px]:w-[100%]">
            Subscribe Now
          </Button>
        </div>
      </CardContent>

      <div className="relative w-[325px] h-[325px]">
        <div className="absolute w-[292px] h-[31px] top-[255px] left-[23px] bg-[#a097ff] rounded-[146px/15.5px] blur-[23.25px] max-[480px]:top-[200px] max-[480px]:left-[30px] max-[480px]:w-[200px]" />
        <div className="absolute w-[268px] h-[295px] top-3 left-[38px] bg-[#a097ff33] rounded-[134.03px/147.35px] rotate-[-90.32deg] blur-[23.25px] max-[480px]:w-[200px] max-[480px]:h-[200px] max-[480px]:top-[50px] max-[480px]:left-[50px]" />
        <img
          className="absolute w-[325px] h-[325px] top-0 left-0 object-cover max-[480px]:w-[200px] max-[480px]:h-[200px] max-[480px]:top-[50px] max-[480px]:left-[50px]"
          alt="Futuristic crypto illustration"
          src={freepik1}
        />
      </div>
    </Card>
  );
};

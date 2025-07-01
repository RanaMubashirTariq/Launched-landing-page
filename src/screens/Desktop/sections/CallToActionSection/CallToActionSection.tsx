import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
export const CallToActionSection = (): JSX.Element => {
  // Data for Token Utility card
  const tokenUtilityFeatures = [
    "Fee Discount",
    "Governance",
    "Launch Participation",
  ];

  // Data for Security & Trust card
  const securityFeatures = ["Audited by Certik", "KYC Bypass", "BlockPass"];

  return (
    <div className="flex gap-11 w-full justify-center px-[180px] max-[1300px]:px-[100px] max-[1100px]:px-[50px]  max-[680px]:px-[25px] max-[1000px]:justify-center max-[1000px]:flex-wrap max-[680px]:gap-4 ">
      {/* Token Utility and Tokonomics Card */}
      <Card className="w-[618px] bg-[#06023380] rounded-[35px] border border-solid border-[#a097ff33] max-[1000px]:w-[100%]">
        <CardHeader className="px-[37px] pt-4 pb-0">
          <CardTitle className="font-bold text-4xl text-[#afabbf] font-['Poppins',Helvetica] max-[680px]:text-2xl">
            Token Utility and Tokonomics
          </CardTitle>
          <img
            className="w-full h-[3px] object-cover mt-3"
            alt="Line"
            src="/line-2.svg"
          />
        </CardHeader>
        <CardContent className="px-[37px] py-4">
          <div className="flex items-center gap-[90px] justify-between max-[680px]:gap-4 max-[370px]:flex-col">
            <div className="flex flex-col gap-[22px] justify-center">
              {tokenUtilityFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <img
                    className="w-[30px] h-[30px] max-[680px]:w-[20px] max-[680px]:h-[20px]"
                    alt="Check icon"
                    src="/fi-4325445.svg"
                  />
                  <span className="font-['Poppins',Helvetica] font-medium text-white text-xl max-[680px]:text-sm">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <div className="relative w-[180.65px] h-[180.65px] max-[680px]:w-[100px] max-[680px]:h-[100px]">
                <img src="/circle.svg" className="w-full h-full" alt="" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Security & Trust Card */}
      <Card className="w-[417px] bg-[#06023380] rounded-[35px] border border-solid border-[#a097ff33] max-[1000px]:w-[100%]">
        <CardHeader className="px-[37px] pt-[19px] pb-0">
          <CardTitle className="font-bold text-4xl text-[#afabbf] font-['Poppins',Helvetica] max-[680px]:text-2xl">
            Security &amp; Trust
          </CardTitle>
          <img
            className="w-[343px] h-px object-cover mt-3 max-[680px]:w-[200px]"
            alt="Line"
            src="/line-2.svg"
          />
        </CardHeader>
        <CardContent className="px-[37px] py-4 max-[680px]:px-[20px]">
          <div className="flex items-center">
            <div className="flex flex-col gap-[22px] justify-center max-[680px]:gap-2">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <img
                    className="w-[30px] h-[30px] max-[680px]:w-[20px] max-[680px]:h-[20px]"
                    alt="Check icon"
                    src="/fi-4315445.svg"
                  />
                  <span className="font-['Poppins',Helvetica] font-medium text-white text-xl max-[680px]:text-sm">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

import React from "react";

export const LaunchpadListSection = (): JSX.Element => {
  // Social media icons data
  const socialIcons = [
    { url: "/public/svg-4.svg" },
    { url: "/public/svg-1.svg" },
    { url: "/public/svg.svg" },
    { url: "/public/svg-2.svg" },
    { url: "/public/svg-3.svg" },
  ];

  // Footer links data
  const footerSections = [
    {
      title: "General",
      links: ["Pools alert", "KYC & Audit", "Docs", "Shop"],
    },
    {
      title: "Help",
      links: ["Pools alert", "KYC & Audit", "Docs", "Shop"],
    },
    {
      title: "Communities",
      links: ["Pools alert", "KYC & Audit", "Docs", "Shop"],
    },
  ];

  return (
    <footer className="flex justify-between w-full gap-5  pr-[234px] pl-[180px] pb-[36px] max-[1300px]:pr-[150px] max-[1300px]:pl-[100px] max-[1100px]:pr-[50px] max-[1100px]:gap-10 max-[1100px]:pl-[50px] max-[680px]:pr-[25px] max-[680px]:pl-[25px] max-[680px]:flex-col">
      <div className="flex flex-col w-[330px] gap-6">
        <div className="flex flex-col gap-3">
          <h3 className="font-medium text-xl text-white font-['Poppins',Helvetica]">
            Launchhood
          </h3>
          <p className="text-xs text-[#afaabf] font-medium font-['Poppins',Helvetica] leading-[27px]">
            Lorem ipsum dolor sit amet consectetur mi urna tellus dignissim duis
            at in tempor mauris morbi fermentum dolor lobortis aliquam maecenas.
          </p>
        </div>

        <div className="flex flex-wrap gap-[18px]">
          {socialIcons.map((icon, index) => (
            <img
            key={`social-icon-${index}`}
            src={icon.url}
            alt="social icon"
            className="w-[33.83px] h-[33.83px] max-[680px]:w-[20px] max-[680px]:h-[20px]"
          />
          ))}
        </div>
      </div>

      <div className="flex gap-[94px] max-[1000px]:gap-10  max-[680px]:w-[100%] max-[680px]:justify-between max-[380px]:flex-wrap">
        {footerSections.map((section, index) => (
          <div
            key={`footer-section-${index}`}
            className="flex flex-col w-[93px] gap-5  max-[680px]:gap-2"
          >
            <h4
              className={`font-medium text-sm text-white font-['Poppins',Helvetica] ${section.title === "Communities" ? "w-[103px]" : ""} leading-[27px] `}
            >
              {section.title}
            </h4>
            <div className="flex flex-col gap-[18px] max-[680px]:gap-2">
              {section.links.map((link, linkIndex) => (
                <a
                  key={`${section.title}-link-${linkIndex}`}
                  href="#"
                  className="text-sm text-gray-400 font-['Segoe_UI-Regular',Helvetica] leading-[27px] hover:text-white transition-all duration-300 hover:underline hover:underline-offset-4 hover:decoration-1 hover:decoration-white "
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
};

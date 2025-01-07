import zysk from "../assets/zysk.png";

const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        "Overview",
        "Features",
        "Solutions",
        "Tutorials",
        "Pricing",
        "Releases",
      ],
    },
    {
      title: "Company",
      links: ["About us", "Careers", "Press", "News", "Media kit", "Contact"],
    },
    {
      title: "Resources",
      links: [
        "Blog",
        "Newsletter",
        "Events",
        "Help centre",
        "Tutorial",
        "Support",
      ],
    },
    {
      title: "Use cases",
      links: [
        "Startups",
        "Enterprise",
        "Government",
        "SaaS centre",
        "Marketplaces",
        "Ecommerce",
      ],
    },
    {
      title: "Social",
      links: [
        "Twitter",
        "LinkedIn",
        "Facebook",
        "GitHub",
        "AngelList",
        "Dribbble",
      ],
    },
    {
      title: "Legal",
      links: ["Terms", "Privacy", "Cookies", "Licenses", "Settings", "Contact"],
    },
  ];

  return (
    <div className="w-full mx-auto md:gap-[64px] gap-[48px] flex flex-col md:pb-[48px] md:pt-[64px] justify-center md:px-[169px] px-[16px] pt-[48px]">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-8 md:px-[32px]">
        {footerSections.map((section) => (
          <div key={section.title}>
            <h3 className="text-[14px] font-[600] text-[#667085] mb-4">
              {section.title}
            </h3>
            <ul className="space-y-3">
              {section.links.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-[16px] font-[600] text-[#475467] hover:text-gray-900 flex items-center"
                  >
                    {typeof link === "string" ? link : link.label}
                    {typeof link === "object" && link.isNew && (
                      <span className="ml-2 text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full">
                        New
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="md:flex md:flex-row flex-col gap-[24px] space-y-2 md:justify-between items-center pt-8 border-t-[1px] border-[#EAECF0]">
        <img src={zysk} />
        <div className="text-[16px] font-[400] text-[#667085] md:text-left">
            <span className="hidden md:inline">© 2023 pushtech/designs. All rights reserved.</span>
            <span className="md:hidden">
                © 2023 pushtech/designs. <br /> All rights reserved.
            </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

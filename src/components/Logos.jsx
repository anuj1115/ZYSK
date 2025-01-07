import React from 'react';

const CompanyLogos = ({ companies }) => {
  return (
    <div className="md:w-[1280] md:h-[104px] px-[16px]">
      <p className="text-center text-gray-600 text-[16px] font-[500] mb-6">
        Join 4,000+ companies already growing
      </p>
      <div className="flex flex-wrap items-center space-between justify-between md:w-[1216px]">
        {companies.map((company, index) => (
            <div key={index} className="flex flex-row items-center gap-2">
                <img 
                    src={company.logo}
                    alt={company.name}
                    className="md:h-[44px] md:w-[44px] w-[33px] h-[33px]"
                />
                <span className=" text-xl md:text-3xl font-bold text-black">{company.name}</span>
            </div>
        ))}
        </div>
    </div>
  );
};

export default CompanyLogos;
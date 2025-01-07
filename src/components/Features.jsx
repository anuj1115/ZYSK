import React from 'react';
import share from "../assets/chat.png";
import deliver from "../assets/deliver.png";
import customer from "../assets/customer.png";
import connect from "../assets/connect.png";
import heart from "../assets/heart.png";
import team from "../assets/team.png";

const defaultFeatures = [
    {
      icon: 'share',
      title: 'Share team inboxes',
      description: 'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.'
    },
    {
      icon: 'deliver',
      title: 'Deliver instant answers',
      description: 'An all-in-one customer service platform that helps you balance everything your customers need to be happy.'
    },
    {
      icon: 'team',
      title: 'Manage your team with reports',
      description: 'Measure what matters with Untitleds easy-to-use reports. You can filter, export, and publish custom reports on your data in a couple clicks.'
    },
    {
      icon: 'customer',
      title: 'Connect with customers',
      description: 'Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.'
    },
    {
      icon: 'connect',
      title: 'Connect the tools you already use',
      description: 'Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.'
    },
    {
      icon: 'heart',
      title: 'Our people make the difference',
      description: 'We are an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.'
    }
  ];

const FeatureCard = ({ icon, title, description }) => (
  <div className="p-6 flex flex-col justify-center items-center text-base space-y-4">
    <div className="rounded-lg flex p-2 border border-gray-300">
      <img src={icon} alt={title} className="w-6 h-6 text-gray-700" />
    </div>
    <h3 className="text-xl font-semibold text-[#101828]">{title}</h3>
    <p className="text-[#475467] text-md font-[400] text-center">{description}</p>
  </div>
);

const FeaturesGrid = ({ features = defaultFeatures }) => {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6">
        {features.map((feature, index) => {
          const IconComponent = {
            share,
            deliver,
            customer,
            connect,
            heart,
            team
          }[feature.icon] || share;

          return (
            <FeatureCard
              key={index}
              icon={IconComponent}
              title={feature.title}
              description={feature.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FeaturesGrid;

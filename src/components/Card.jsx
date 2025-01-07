import blog1 from '../assets/blog1.png';
import blog2 from '../assets/blog2.png';
import blog3 from '../assets/blog3.png';
import avatar1 from '../assets/avatar1.png';
import avatar2 from '../assets/avatar2.png';
import avatar3 from '../assets/avatar3.png';

const blogPosts = [
  {
    category: "Design",
    title: "UX review presentations",
    description: "How do you create compelling presentations that wow your colleagues and impress your managers?",
    author: {
      name: "Olivia Rhye",
      avatar: avatar1
    },
    date: "07 Jan 2025",
    image: blog1,
    link: "#"
  },
  {
    category: "Product",
    title: "Migrating to Linear 101",
    description: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
    author: {
      name: "Phoenix Baker",
      avatar: avatar2
    },
    date: "07 Jan 2025",
    image: blog2,
    link: "#"
  },
  {
    category: "Software Development",
    title: "Building your API stack",
    description: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
    author: {
      name: "Lana Steiner",
      avatar: avatar3
    },
    date: "07 Jan 2025",
    image: blog3,
    link: "#"
  }
];

const BlogPostCard = ({ category, title, description, author, date, image }) => {
  return (
    <div className="group flex flex-col cursor-pointer md:px-[32px] md:gap-[32px]">
      <div className="relative mb-4 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full md:w-[382px] md:h-[240px] object-cover group-hover:scale-105 transition-transform duration-200"
        />
      </div>
      
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-red-500 text-sm">{category}</span>
        </div>

        <div className='flex justify-between items-center'>
            <h3 className="text-[24px] font-[600] mb-2">{title}</h3>
            <svg 
                className="w-5 h-5 text-[#101828] transform -rotate-45" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
            >
                <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
            </svg>
        </div>

        <p className="text-[16px] font-[400] text-[#475467] mb-4">{description}</p>

        <div className="flex items-center">
          <img 
            src={author.avatar} 
            alt={author.name}
            className="w-[40px] h-[40px] rounded-full mr-2"
          />
          <div className='flex flex-col space-between'>
            <span className="font-[600] text-[14px] text-[#101828] block">{author.name}</span>
            <span className="font-[400] text-[14px] text-[#475467]">{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { BlogPostCard, blogPosts };

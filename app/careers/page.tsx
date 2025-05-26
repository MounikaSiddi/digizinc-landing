"use client";

import { memo } from "react";
import {
  FaLocationDot,
  FaBriefcase,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes'; // For light/dark theme detection

const jobListings = [
  { title: "Graphic Designer", location: "Dubai", type: "Part-Time" },
  { title: "UI/UX Designer", location: "Dubai", type: "Full-Time" },
  { title: "Video Editor", location: "Dubai", type: "Part-Time" },
  { title: "Social Media Manager", location: "Dubai", type: "Part-Time" },
  { title: "Content Writer", location: "Remote", type: "Full-Time" },
  { title: "SEO Analyst", location: "Dubai", type: "Part-Time" },
];

type JobCardProps = {
  title: string;
  location: string;
  type: string;
};

const JobCard = memo(({ title, location, type }: JobCardProps) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const cardBg = isDark ? 'bg-secondary-900/50' : 'bg-gray-100/50';
  const cardBorder = isDark ? 'border-secondary-700' : 'border-gray-300';
  const textPrimary = isDark ? 'text-gray-300' : 'text-gray-800';
  const textSecondary = isDark ? 'text-gray-400' : 'text-gray-600';

  return (
    <div className={`flex justify-between items-center ${cardBg} ${cardBorder} rounded-lg p-4 h-[90px] hover:bg-primary-600/20 transition duration-300`}>
      <span className={`text-lg font-semibold ${textPrimary}`}>{title}</span>
      <div className={`flex items-center gap-4 text-sm ${textSecondary}`}>
        <span className="flex items-center gap-1">
          <FaLocationDot className="text-green-400" /> {location}
        </span>
        <span className="flex items-center gap-1">
          <FaBriefcase className="text-pink-400" /> {type}
        </span>
        <FaArrowUpRightFromSquare className="text-pink-400 cursor-pointer" />
      </div>
    </div>
  );
});

const Careers = () => {
  const navigate = useRouter().push;
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const headingText = isDark ? 'text-white' : 'text-gray-900';
  const paragraphText = isDark ? 'text-gray-400' : 'text-gray-600';
  const buttonBg = 'bg-primary-600 hover:bg-primary-700';
  const buttonText = 'text-primary-foreground';
  const accentText = 'bg-gradient-primary';
  const sectionBg = isDark ? 'bg-secondary-900' : 'bg-white';

  return (
    <div className={`relative min-h-screen flex flex-col items-center ${sectionBg} py-16`}>
      {/* Main Content Wrapper for Consistency */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center mb-12 px-4 relative z-10">
          <h1 className={`text-3xl md:text-4xl font-extrabold font-heading ${headingText} mb-4`}>
            Not just a job, but your next <br />
            <span className={`${accentText} `}>
              creative adventure
            </span>
          </h1>
          <p className={`${paragraphText} mt-2`}>
            Fuel your passion. Elevate your skills. Join the disruption.
          </p>
        </div>

        {/* Open Positions Section */}
        <div className="mt-12 text-center w-full px-6 relative z-10">
          <h2 className={`text-3xl md:text-4xl font-extrabold font-heading ${headingText} mb-6`}>
            Open <span className={accentText}>Positions.</span>
          </h2>
          <p className={`${paragraphText} mt-2`}>
            Discover exciting career opportunities, competitive benefits, and a vibrant work culture.
          </p>
        </div>

        {/* Job Listings - Scrollable and Responsive */}
        <div className="relative mt-8 w-full max-w-md md:max-w-lg lg:max-w-xl max-h-[400px] overflow-y-auto custom-scrollbar">
          <div className="space-y-4">
            {jobListings.map((job, index) => (
              <JobCard key={index} {...job} />
            ))}
          </div>
        </div>

        {/* Not Finding a Role Section */}
        <div className="mt-16 text-center max-w-xl relative z-10">
          <p className={`text-xl font-semibold ${headingText} mb-2`}>
            Don’t see the role <span className={accentText}>you’re</span> looking for?
          </p>
          <p className={`${paragraphText} mt-2 text-center`}>
            Relax! We would still love to hear from you. Please submit your profile to{" "}
            <a href="mailto:careers@digizinc.com" className={accentText}>
              careers@digizinc.com
            </a>{" "}
            (no agencies please), and we will get in touch with you.
          </p>
        </div>

        {/* Submit Resume Button */}
        <button
          className={`mt-8 ${buttonBg} ${buttonText} px-6 py-3 rounded-lg shadow-md transition duration-300 transform hover:scale-105`}
          onClick={() => navigate("/Form")}
        >
          SUBMIT RESUME
        </button>
      </div>
    </div>
  );
};

export default Careers;
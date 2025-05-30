'use client'
import { memo } from "react";
import {
  FaLocationDot,
  FaArrowUpRightFromSquare,
  FaClock,
  FaCalendarDays,
} from "react-icons/fa6";
import { Raleway, Cedarville_Cursive } from "next/font/google"; // Corrected import for Raleway

// Initialize fonts
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cedarvilleCursive = Cedarville_Cursive({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-heading", // Using --font-heading for this font
  display: "swap",
});

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

const JobCard = memo(({ title, location, type }: JobCardProps) => (
  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-purple-600/20 border border-gray-500 rounded-lg p-4 h-auto sm:h-[90px] hover:bg-secondary-600/5 transition duration-300 transform hover:scale-[1.02] cursor-pointer">
    <span className={`${raleway.variable} font-sans text-lg font-semibold text-foreground mb-2 sm:mb-0`}>
      {title}
    </span>
    <div className="flex items-center gap-4 text-sm text-foreground flex-wrap sm:flex-nowrap">
      <span className="flex items-center gap-1">
        <FaLocationDot className="text-green-700" /> {location}
      </span>
      <span className="flex items-center gap-1">
        {type === "Part-Time" ? (
          <FaClock className="text-pink-400" />
        ) : (
          <FaCalendarDays className="text-pink-400" />
        )}{" "}
        {type}
      </span>
      <FaArrowUpRightFromSquare className="text-primary- cursor-pointer text-base sm:text-lg" />
    </div>
  </div>
));

const Careers = () => {
  return (
    <div
      className={`${raleway.variable} font-sans relative min-h-screen flex flex-col items-center bg-cover bg-center overflow-hidden`}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-white dark:bg-gradient-to-b dark:from-secondary-800 dark:to-secondary-950 dark:bg-opacity-[0.06] z-0"></div>

      {/* Main Content Wrapper for Consistency */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center z-10">
        {/* Header Section */}
        <div className="text-center mt-20 px-4 relative z-10">
          <h1 className={`${raleway.variable} font-sans text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase text-foreground leading-tight mt-9`}>
            Not just a job, but your next <br />
            <span
              className={`${cedarvilleCursive.variable} font-heading italic normal-case text-5xl md:text-6xl lg:text-7xl`}
              style={{
                backgroundImage: "linear-gradient(to right, #902ef2, #f22ee5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              creative adventure
            </span>
          </h1>
          <p className="mt-4 text-foreground text-base md:text-lg">
            Fuel your passion. Elevate your skills. Join the disruption.
          </p>
        </div>

       

        {/* Open Positions Section */}
        <div className="mt-16 text-center w-full px-4 sm:px-6 relative z-10 border-2 border-purple-900 rounded-xl p-6 shadow-2xl bg-purple-900/10 backdrop-blur-sm">
          <h2 className={`${raleway.variable} font-sans text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase text-foreground leading-tight mb-4`}>
            Open{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(to right, #902ef2, #f22ee5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Positions.
            </span>
          </h2>
          <p className="text-foreground mt-2 text-base md:text-lg">
            Discover exciting career opportunities, competitive benefits, and a
            vibrant work culture.
          </p>
        </div>

        {/* Job Listings - Scrollable and Responsive */}
        <div className="relative mt-10 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl max-h-[400px] overflow-y-auto custom-scrollbar p-2">
          <div className="space-y-4">
            {jobListings.map((job, index) => (
              <JobCard key={index} {...job} />
            ))}
          </div>
        </div>

        {/* Not Finding a Role Section */}
        <div className="mt-12 text-center max-w-2xl relative z-10 px-4">
          <p className={`${raleway.variable} font-sans text-xl sm:text-2xl font-semibold text-foreground`}>
            Don’t see the role{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(to right, #902ef2, #f22ee5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              you’re
            </span>{" "}
            looking for?
          </p>
          <p className="text-foreground mt-4 text-base md:text-lg leading-relaxed">
            Relax! We would still love to hear from you. Please submit your
            profile to{" "}
            <a
              href="mailto:careers@digizinc.com"
              className="font-medium hover:underline"
              style={{
                backgroundImage: "linear-gradient(to right, #902ef2, #f22ee5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              careers@digizinc.com
            </a>{" "}
            (no agencies please), and we will get in touch with you.
          </p>
        </div>

        {/* Submit Resume Button */}
        <button className="mt-10 mb-16 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-8 py-3 rounded-full shadow-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50 text-lg font-bold uppercase tracking-wider">
          SUBMIT RESUME
        </button>
      </div>
      {/* Custom Scrollbar Styles */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(128, 90, 213, 0.2); /* Purple-ish track */
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #902ef2, #f22ee5); /* Pink-purple gradient thumb */
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #a03ef2, #f33ee6);
        }
      `}</style>
    </div>
  );
};

export default Careers;
'use client'
import { memo, useMemo, useState } from "react";
import {
  FaLocationDot,
  FaArrowUpRightFromSquare,
  FaClock,
  FaCalendarDays,
  FaChevronDown,
} from "react-icons/fa6";
import { Raleway, Cedarville_Cursive } from "next/font/google";

// Initialize fonts
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cedarvilleCursive = Cedarville_Cursive({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const jobListings = [
  { title: "Graphic Designer", location: "Dubai", type: "Part-Time" },
  { title: "UI/UX Designer", location: "Dubai", type: "Full-Time" },
  { title: "Video Editor", location: "Dubai", type: "Part-Time" },
  { title: "Social Media Manager", location: "Dubai", type: "Part-Time" },
  { title: "Content Writer", location: "Remote", type: "Full-Time" },
  { title: "SEO Analyst", location: "Dubai", type: "Part-Time" },
  { title: "Graphic Designer", location: "Dubai", type: "Part-Time" },
  { title: "UI/UX Designer", location: "Dubai", type: "Full-Time" },
  { title: "Video Editor", location: "Dubai", type: "Part-Time" },
  { title: "Social Media Manager", location: "Dubai", type: "Part-Time" },
  { title: "Content Writer", location: "Remote", type: "Full-Time" },
];

type JobCardProps = {
  title: string;
  location: string;
  type: string;
};

const JobCard = memo(({ title, location, type }: JobCardProps) => (
  <div className="flex justify-between items-center bg-white/5 text-black border-b border-gray-400 rounded-lg px-6 py-4 h-[90px]">
    {/* Job Title */}
    <span
      className={`${raleway.variable} font-sans text-black sm:text-lg font-semibold`}
    >
      {title}
    </span>

    {/* Job Details */}
    <div className="flex items-center gap-6 text-sm text-black/80">
      {/* Location */}
      <span className="flex items-center gap-2">
        <FaLocationDot className="text-green-600 text-xs" />
        {location}
      </span>

      {/* Type */}
      <span className="flex items-center gap-2">
        {type === "Part-Time" ? (
          <FaClock className="text-pink-400 text-xs" />
        ) : (
          <FaCalendarDays className="text-pink-400 text-xs" />
        )}
        {type}
      </span>

      {/* External Icon */}
      <FaArrowUpRightFromSquare className="text-purple-500 hover:text-purple-600 text-sm transition" />
    </div>
  </div>
));

const JOBS_PER_PAGE = 6;

const Careers = () => {
  
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState<"default" | "asc" | "desc" | "location">("default");


  // Sorted jobs
 const sortedJobs = useMemo(() => {
  let jobs = [...jobListings];
  if (sortOrder === "asc") {
    jobs.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortOrder === "desc") {
    jobs.sort((a, b) => b.title.localeCompare(a.title));
  } else if (sortOrder === "location") {
    jobs.sort((a, b) => a.location.localeCompare(b.location)); 
    // Or use datePosted if available
  }
  return jobs;
}, [sortOrder]);

  const totalPages = Math.ceil(sortedJobs.length / JOBS_PER_PAGE);

const startIndex = (currentPage - 1) * JOBS_PER_PAGE;
const endIndex = startIndex + JOBS_PER_PAGE;
const currentJobs = sortedJobs.slice(startIndex, endIndex);


  return (
    <div
      className={`${raleway.variable} font-sans relative min-h-screen flex flex-col items-center bg-cover bg-center overflow-hidden`}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black dark:bg-gradient-to-b dark:from-secondary-800 dark:to-secondary-950 dark:bg-opacity-[0.06] z-0"></div>

      {/* Wrapper */}
      <div className="w-full mx-auto flex flex-col items-center z-10 bg-black">
        {/* Header */}
        <div className="text-center sm:mx-6 lg:mx-8 pt-20 relative z-10 bg-black">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase text-foreground leading-tight mt-9">
            Not just a job, but your next <br />
            <span
              className="italic normal-case text-5xl md:text-6xl lg:text-7xl"
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

        {/* Open Positions */}
        {/* <div className="mt-10 text-center mx-10  sm:px-6 relative z-10 border-2 border-purple-900 rounded-xl p-6 shadow-2xl backdrop-blur-sm">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase text-foreground leading-tight mb-4">
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
        </div> */}
   <div className="mt-5 mb-3 text-center">
  <h2 className="text-3xl md:text-3xl lg:text-4xl font-extrabold uppercase text-foreground leading-tight mb-2">
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
  <p className="text-base md:text-base text-foreground">
    Discover exciting career opportunities, competitive benefits, and a vibrant work culture.
  </p>
</div>

        {/* Job Listings */}
        <div className="relative mt-10 mb-0 w-full bg-white px-10">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between text-black mb-6 gap-3 pt-5">
          <p className="text-lg font-medium">
  Showing <span className="font-semibold">{startIndex + 1}</span>–
  <span className="font-semibold">
    {Math.min(endIndex, sortedJobs.length)}
  </span>{" "}
  results out of total{" "}
  <span className="font-semibold">{sortedJobs.length}</span> open jobs
</p>
        <div className="flex items-center gap-4 ml-auto sm:ml-0">
          {/* Reset Button */}
          {sortOrder !== "default" && (
  <button
    onClick={() => {
      setSortOrder("default");
      setCurrentPage(1);
    }}
    className="text-sm text-purple-600 hover:underline px-4"
  >
    Reset
  </button>
)}

          {/* Sort Dropdown */}
          <div className="relative justify-end">
           <select
  value={sortOrder}
  onChange={(e) => {
    const value = e.target.value as "asc" | "desc" | "location" | "default";
    setSortOrder(value === "default" ? "asc" : value);
    setCurrentPage(1); // go back to page 1 on sort change
  }}
  className="appearance-none bg-white border-b border-gray-300 rounded-md px-3 py-1 pr-8 text-sm cursor-pointer"
>
  <option value="default">Sort by</option>
  <option value="asc">Job Title (A–Z)</option>
  <option value="desc">Job Title (Z–A)</option>
  <option value="location">Location</option>
</select>

            <FaChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-600 pointer-events-none" />
          </div>
        </div>
      </div>
          <div className="space-y-4">
            {currentJobs.map((job, index) => (
              <JobCard key={index} {...job} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-3 mt-6 mb-5 pb-3">
              {/* Prev */}
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 border border-gray-400 rounded-md text-black text-sm disabled:opacity-50"
              >
                Prev
              </button>

              {/* Page numbers */}
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 rounded-md text-sm ${
                    currentPage === i + 1
                      ? "bg-purple-600 text-white"
                      : "border border-gray-400 hover:bg-gray-100 text-black"
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              {/* Next */}
              <button
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3 py-1 border text-black border-gray-400 rounded-md text-sm disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
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

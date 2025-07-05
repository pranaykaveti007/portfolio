import React, { useState } from "react";
import { Code, Boxes } from "lucide-react";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useTheme } from "@mui/material/styles";
import TechStackIcon from "../components/TechStackIcon";
import { motion } from "framer-motion";
import styled from "styled-components";

// Manually added projectsdjs
const projects = [
  
  {
    id: 5,
    Title: "Agribot- AI Chatbot For Farmers ",
    Img: "/agribot.png",
    Link: "https://github.com/eshwar-sai-pranay/AgirBot28.git",
    Description: "AI-powered chatbot for agricultural assistance"
  },
  
   
 
  {
    id: 3,
    Title: "WeCure",
    Img: "/weCure.png",
    Link: "https://wecure-eight.vercel.app/",
    Description: "Healthcare solution application (Front end Development)"
  },
  {
    id: 4,
    Title: "MRKT.AI",
    Img: "/mrkt.ai.png",
    Link: "https://mrkt-ai-eshwar-sai-pranay-projects.vercel.app/",
    Description: "AI-powered marketing platform (Front end Development)"
  },
];

// Tech stacks data
const techStacks = [
  { icon: "html.svg", language: "HTML" },
  { icon: "css.svg", language: "CSS" },
  { icon: "javascript.svg", language: "JavaScript" },
  { icon: "tailwind.svg", language: "Tailwind CSS" },
  { icon: "nextjs.svg", language: "Next.js" },
  { icon: "reactjs.svg", language: "React.js" },
  { icon: "vue.svg", language: "Vue 3" },
  { icon: "vite.svg", language: "Vite" },
  { icon: "github.svg", language: "GitHub" },
  { icon: "java.svg", language: "Java" },
  { icon: "python.svg", language: "Python" },
  { icon: "figma.svg", language: "Figma" },
  { icon: "firebase.svg", language: "Firebase" },
  { icon: "mongo.svg", language: "MongoDB" },
  { icon: "express.png", language: "Express.js" },
  { icon: "nodejs.svg", language: "Node.js" }
];

// Toggle Button Component from the original file
const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="
      px-3 py-1.5
      text-slate-300 
      hover:text-white 
      text-sm 
      font-medium 
      transition-all 
      duration-300 
      ease-in-out
      flex 
      items-center 
      gap-2
      bg-white/5 
      hover:bg-white/10
      rounded-md
      border 
      border-white/10
      hover:border-white/20
      backdrop-blur-sm
      group
      relative
      overflow-hidden
    "
  >
    <span className="relative z-10 flex items-center gap-2">
      {isShowingMore ? "See Less" : "See More"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`
          transition-transform 
          duration-300 
          ${isShowingMore ? "group-hover:-translate-y-0.5" : "group-hover:translate-y-0.5"}
        `}
      >
        <polyline points={isShowingMore ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}></polyline>
      </svg>
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500/50 transition-all duration-300 group-hover:w-full"></span>
  </button>
);

// TabPanel Component
function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function Portfolio() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const isMobile = window.innerWidth < 768;
  const initialItems = isMobile ? 4 : 6;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleShowMore = () => {
    setShowAllProjects(prev => !prev);
  };

  const displayedProjects = showAllProjects ? projects : projects.slice(0, initialItems);

  return (
    <div className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden" id="Portofolio">
      {/* Header Section */}
      <div className="text-center pb-10" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          <span style={{
            color: '#6366f1',
            backgroundImage: 'linear-gradient(45deg, #6366f1 10%, #a855f7 93%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Portfolio Showcase
          </span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Explore my journey through projects and technical expertise. 
          Each section represents a milestone in my continuous learning path.
        </p>
      </div>

      {/* Tabs Section */}
      <Box sx={{ width: "100%" }}>
        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: "transparent",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(180deg, rgba(139, 92, 246, 0.03) 0%, rgba(59, 130, 246, 0.03) 100%)",
              backdropFilter: "blur(10px)",
              zIndex: 0,
            },
          }}
          className="md:px-4"
        >
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="fullWidth"
            sx={{
              minHeight: "70px",
              "& .MuiTab-root": {
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontWeight: "600",
                color: "#94a3b8",
                textTransform: "none",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                padding: "20px 0",
                zIndex: 1,
                margin: "8px",
                borderRadius: "12px",
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: "rgba(139, 92, 246, 0.1)",
                  transform: "translateY(-2px)",
                  "& .lucide": {
                    transform: "scale(1.1) rotate(5deg)",
                  },
                },
                "&.Mui-selected": {
                  color: "#fff",
                  background: "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))",
                  boxShadow: "0 4px 15px -3px rgba(139, 92, 246, 0.2)",
                  "& .lucide": {
                    color: "#a78bfa",
                  },
                },
              },
              "& .MuiTabs-indicator": {
                height: 0,
              },
              "& .MuiTabs-flexContainer": {
                gap: "8px",
              },
            }}
          >
            <Tab
              icon={<Code className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Projects"
              {...a11yProps(0)}
            />
            <Tab
              icon={<Boxes className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Tech Stack"
              {...a11yProps(1)}
            />
          </Tabs>
        </AppBar>

        {/* Replaced SwipeableViews with Swiper */}
        <div style={{ width: '100%' }}>
          {value === 0 && (
            <TabPanel value={value} index={0} dir={theme.direction}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="container mx-auto"
              >
                <StyledWrapper className="flex justify-center">
                  <div className="cards">
                    {displayedProjects.map((project, index) => (
                      <motion.a
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        href={project.Link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card"
                        data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                        data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                      >
                        <div className="text-overlay">{project.Title}</div>
                        <img src={project.Img} alt={project.Title} />
                        <div className="description">{project.Description}</div>
                      </motion.a>
                    ))}
                  </div>
                </StyledWrapper>
                
                {projects.length > initialItems && (
                  <div className="mt-6 w-full flex justify-start">
                    <ToggleButton
                      onClick={toggleShowMore}
                      isShowingMore={showAllProjects}
                    />
                  </div>
                )}
              </motion.div>
            </TabPanel>
          )}

          {value === 1 && (
            <TabPanel value={value} index={1} dir={theme.direction}>
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="container mx-auto flex justify-center items-center overflow-hidden pb-[5%]"
              >
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-8 gap-5">
                  {techStacks.map((stack, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                      data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                    >
                      <TechStackIcon TechStackIcon={stack.icon} Language={stack.language} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabPanel>
          )}
        </div>
      </Box>
    </div>
  );
}

const StyledWrapper = styled.div`
  .cards {
    display: flex;
    flex-direction: row;
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;
  }
  .cards .card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    height: 300px;
    width: 350px;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    transition: 400ms;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.05), transparent);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  .cards .card img {
    height: 200px;
    width: 100%;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
  }
  .cards .card .description {
    padding: 10px;
    color: #94a3b8;
    font-size: 0.875rem;
    opacity: 0.8;
    transition: opacity 400ms;
  }
  .cards .card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(139, 92, 246, 0.2);
    z-index: 1;
  }
  .cards:hover > .card:not(:hover) {
    filter: blur(3px);
    transform: scale(0.95);
    opacity: 0.7;
  }
  .cards .card .text-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    opacity: 0;
    background: rgba(0, 0, 0, 0.7);
    transition: opacity 400ms;
    z-index: 2;
  }
  .cards .card:hover .text-overlay {
    opacity: 1;
  }
  
  @media (max-width: 768px) {
    .cards .card {
      width: 100%;
      max-width: 320px;
    }
  }
`;
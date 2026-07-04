import { useState } from "react";

// ================== IMAGES ==================

import p11 from "../assets/p11.jpg";
import p12 from "../assets/p12.jpg";
import p13 from "../assets/p13.jpg";

import p21 from "../assets/p21.png";
import p22 from "../assets/p22.png";
import p23 from "../assets/p23.png";

import p31 from "../assets/p31.png";
import p32 from "../assets/p32.png";
import p33 from "../assets/p33.png";
import p34 from "../assets/p34.png";

// ================== SWIPER ==================

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// ================== LIGHTBOX ==================

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// ================== PROJECTS ==================

const projects = [
  {
    id: 1,
    title: "AI Lead Qualification & CRM Automation",

    description:
      "Designed an end-to-end lead qualification and CRM automation system using n8n. Incoming leads are automatically scored with OpenAI, enriched and organized into a CRM-style Google Sheets pipeline, then routed to the right team via Gmail — eliminating manual lead sorting and follow-up delays",

    tech: [
      "n8n",
      "OpenAI",
      "Google Calendar",
      "Google Sheets",
      "Gmail",
    ],

    images: [p11, p12, p13],

    demo: "#",

    github: "#",
  },

  {
    id: 2,

    title: "AI Lead Qualification System",

    description:
      "An AI-powered workflow that automatically captures website leads, scores them using OpenAI, stores them in Google Sheets and notifies sales teams instantly.",

    tech: [
      "OpenAI",
      "n8n",
      "Google Sheets",
      "Gmail",
    ],

    images: [p21, p22, p23],

    demo: "#",

    github: "#",
  },

  {
    id: 3,

    title: "AI Appointment Booking Automation",

    description:
      "Built a complete appointment booking automation using n8n and Google Sheets. Incoming booking requests are automatically logged, checked for availability, confirmed and tracked in a live Sheets-based scheduling system, with automated Gmail confirmations and reminders — removing the need for manual back-and-forth scheduling.",

    tech: [
      "OpenAI",
      "n8n",
      "Webhook",
      "Google Drive",
    ],

    images: [p31, p32, p33, p34],

    demo: "#",

    github: "#",
  },
];

// ================== COMPONENT ==================

const Projects = () => {
  const [open, setOpen] = useState(false);

  const [slides, setSlides] = useState([]);

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section
      id="projects"
      className="bg-[#F3EEE6] py-28 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-28">

          <p className="uppercase tracking-[0.35em] text-[#B8935F] text-sm mb-4">

            Portfolio

          </p>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#1B2430] mb-6">

            Featured Projects

          </h2>

          <p className="max-w-2xl mx-auto text-[#1B2430]/70 leading-8">

            Explore a collection of AI automation systems designed to eliminate
            repetitive work, streamline business operations and improve
            productivity.

          </p>

        </div>

        <div className="space-y-40">

          {projects.map((project, index) => (

            <div
              key={project.id}
              className={`grid md:grid-cols-2 gap-16 items-center ${
                index % 2 === 1
                  ? "md:[&>*:first-child]:order-2"
                  : ""
              }`}
            >
              {/* ================= LEFT / RIGHT CONTENT ================= */}

              <div>

                <p className="uppercase tracking-[0.35em] text-[#B8935F] text-xs mb-3">
                  Project {String(project.id).padStart(2, "0")}
                </p>

                <h3 className="font-display text-3xl md:text-5xl text-[#1B2430] mb-6 leading-tight">
                  {project.title}
                </h3>

                <p className="text-[#1B2430]/70 text-lg leading-8 mb-8">
                  {project.description}
                </p>

                {/* Technologies */}

                <div className="flex flex-wrap gap-3 mb-10">

                  {project.tech.map((tech) => (

                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-[#B8935F]/10 text-[#1B2430] text-sm font-medium hover:bg-[#B8935F]/20 transition-colors duration-300"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* Buttons */}

                <div className="flex flex-wrap gap-4">

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-[#1B2430] text-[#F3EEE6] font-medium hover:scale-105 hover:bg-[#2d3948] transition-all duration-300"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full border-2 border-[#1B2430] text-[#1B2430] font-medium hover:bg-[#1B2430] hover:text-white transition-all duration-300"
                  >
                    GitHub
                  </a>

                </div>

              </div>

              {/* ================= IMAGE CAROUSEL ================= */}

              <div
                className="rounded-3xl overflow-hidden
                bg-white
                shadow-2xl
                border border-[#1B2430]/10
                hover:-translate-y-2
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.18)]
                transition-all duration-500"
              >

                {/* Browser Header */}

                <div className="bg-[#ECE7DE] h-10 flex items-center gap-2 px-5">

                  <div className="w-3 h-3 rounded-full bg-red-400"></div>

                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>

                  <div className="w-3 h-3 rounded-full bg-green-400"></div>

                </div>

                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  className="w-full"
                >

                  {project.images.map((img, i) => (

                    <SwiperSlide key={i}>

                      <img
                        src={img}
                        alt={`${project.title} ${i + 1}`}
                        className="w-full h-[520px] object-cover cursor-pointer transition-transform duration-700 hover:scale-105"
                        onClick={() => {

                          setSlides(
                            project.images.map((image) => ({
                              src: image,
                            }))
                          );

                          setCurrentIndex(i);

                          setOpen(true);

                        }}
                      />

                    </SwiperSlide>

                  ))}

                </Swiper>

              </div>

            </div>

          ))}

        </div>

                {/* Full Screen Image Viewer */}

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={slides}
          index={currentIndex}
        />

      </div>
    </section>
  );
};

export default Projects;
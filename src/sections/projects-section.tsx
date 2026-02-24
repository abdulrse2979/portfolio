import { useState } from "react";
import Section from "../components/section";
import Slider from 'react-slick';

// Interface define karein
interface Project {
    title: string;
    description: string;
    longDescription?: string[] | any; // Optional rakha hai agar data mein na ho
    image: string;
    tech?: string[];
}

const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3, // Desktop par 3 dikhaye ga
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } }
        ]
    };

export default function ProjectsSection() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const projects = [
        {
            title: "Delmonte QFS",
            description: "Funavry Technologies Project",
            longDescription: [
                "Managed implementation of secure, performant modules for MENA, NA, TM projects.",
                "Focused on scalability, modular code, Optimized application performance by 30%, implemented offline support and chatbot integration.",
                "Contributed to digital process optimization and smart enterprise workflows, aligning with regional digital transformation objectives."
            ],
            image: "/assets/Delmonte.png",
            tech: ["Figma", "Angular", "Bootstrap", "AWS"]
        },
        {
            title: "TeamErage",
            description: "Funavry Technologies Project",
            longDescription: [
                "Built the Angular 17 application from scratch using hybrid (standalone + modular) architecture.",
                "Developed scoring modules and handled client UAT and demos.",
                "Develop and maintained backend services especially for scoring during meet assignment."
            ],
            image: "/assets/Teamrage.png",
            tech: ["Figma", "Angular", "Node.js", "MySql", "AWS"]
        },
        {
            title: "Wallet Finder",
            description: "Funavry Technologies Project",
            longDescription: [
                "Developed and maintained a Next.js-based blockchain explorer for wallet and transaction insights with SEOfriendly SSR.",
                "Implemented dynamic routing, SSR/CSR optimization, and reusable React components for large-scale, dataheavy views.",
                "Integrated REST APIs for real-time blockchain data and optimized rendering performance.",
                "Collaborated with backend and product teams on feature releases, PR reviews, and frontend code quality standards.",
                "Improved overall application performance and user experience for high-traffic blockchain dashboards."
            ],
            image: "/assets/walletfine.png",
            tech: ["Next.Js", "React.js", "Figma"]
        },
        {
            title: "Rummy",
            description: "Funavry Technologies Project",
            longDescription: [
                "Fixed and optimized React-based web views for Unity WebGL game rendering in browsers.",
                "Improved loading flow from splash screen to gameplay for better user experience.",
                "Worked on browser compatibility issues and performance stability for web gameplay."

            ],
            image: "/assets/rummy.jpg",
            tech: ["React"]
        },
        {
            title: "VNC",
            description: "Funavry Technologies Project",
            longDescription: [
                "Implemented SCSS-based dark mode and enhanced channel subscription logic using NgRx.",
                "Improved UI state handling, date flows, and overall user experience."
            ],
            image: "/assets/vnc.png",
            tech: ["Zeplin", "Angular", "SCSS", "CSS","HTML"]
        },
        {
            title: "OCR CNIC Detection",
            description: "AXA Business Technologies Project",
            longDescription: [
                "Developed Angular frontend integrated with OCR services on Python to extract CNIC data from images.",
                "Delivered secure document scanning workflows with backend service integration."
            ],
            image: "/assets/OCR.jpg",
            tech: ["Python", "Angular", "Flask", "HTML"]
        },
        {
            title: "Telenor DMS, PTML-(UFONE & ONIC)",
            description: "AXA Business Technologies Project",
            longDescription: [
                "Developed enterprise Angular modules for telecom platforms with role-based access flows.",
                "Implemented SIM lifecycle management, localization, and permission handling.",
                "Delivered secure, role-based, and localized digital solutions for telecom and banking platforms, supporting smart services and financial inclusion goals."
            ],
            image: "/assets/ptmldms.png",
            tech: ["Angular", "Bootstrap", "Tailwind CSS"]
        },
        {
            title: "Renesas: IOT DM & SAL",
            description: "AXA Business Technologies Project",
            longDescription: [
                "Built Angular UI for IoT device management and smart lighting control.",
                "Implemented encrypted API interceptors and improved frontend modularity."
            ],
            image: "/assets/Renesas.jpg",
            tech: ["Angular", "Bootstrap"]
        },
        {
            title: "ZTBL",
            description: "AXA Business Technologies Project",
            longDescription: [
                "Built secure, form-intensive Angular modules for banking workflows.",
                "Implemented hierarchical data views, document uploads, and Google Maps integration."
            ],
            image: "/assets/ztbl.png",
            tech: ["Angular", "Tailwind CSS"]
        },
        {
            title: "Grazeo, My Garage",
            description: "Compilesol Projects",
            longDescription: [
                "Converted PSD designs into responsive Angular templates.",
                "Implemented CRUD workflows with REST API integration.",
                "Developed CRUD API's in Laravel followed by creating Table in MySql DB."
            ],
            image: "/assets/logo.jpg",
            tech: ["Angular", "Laravel", "MySql"]
        },
        {
            title: "AMRO",
            description: "Compilesol Project",
            longDescription: [
                "Added CRUD Apis, using .Net Framework and Oracle DB.",
                "Worked on PL/SQL for creating packages and procedures on Oracle DB."
            ],
            image: "/assets/webdev.jpg",
            tech: ["Oracle", "Pl/Sql", "MVC .Net Core"]
        },
        {
            title: "Foodika: FYP",
            description: "Self",
            longDescription: [
                "Designed and developed a complete food ordering platform as a final year project.",
                "Implemented vendor, order, and user workflows using Bootstrap, PHP and MySQL."
            ],
            image: "/assets/Foodika.png",
            tech: ["PHP", "Bootstrap", "MySQL"]
        },
    ];

    return (
        <Section title="Projects">
            {/* Is wrapper ko width dena zaroori hai */}
            <div className="w-full max-w-4xl ml-auto block">
                <Slider {...settings}>
                    {projects.map((project) => (
                        <div key={project.title} className="px-2 outline-none">
                            <div
                                onClick={() => setSelectedProject(project)}
                                className="cursor-pointer border border-gray-200 rounded-xl overflow-hidden bg-white hover:shadow-lg transition"
                            >
                                <img src={project.image} className="w-full h-42 object-cover" />
                                <div className="p-4">
                                    <h3 className="font-medium">{project.title}</h3>
                                    <p className="text-gray-500 text-sm">{project.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            {selectedProject && (
    <div 
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
        onClick={() => setSelectedProject(null)} // Bahar click karne se modal band ho jaye
    >
        <div 
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()} // Modal ke andar click karne se band na ho
        >
            {/* Header: Image aur Close Button */}
            <div className="relative">
                <img 
                    src={selectedProject.image} 
                    className="w-full h-64 object-cover" 
                    alt={selectedProject.title} 
                />
                <button 
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 bg-white/90 hover:bg-white text-black h-10 w-10 rounded-full flex items-center justify-center shadow-lg transition"
                >
                    ✕
                </button>
            </div>

            {/* Content Body */}
            <div className="p-6">
                <h2 className="text-3xl font-bold text-slate-900">{selectedProject.title}</h2>
                <p className="text-blue-600 font-medium mt-1">{selectedProject.description}</p>
                
                <hr className="my-4 border-gray-100" />

                <h4 className="font-semibold text-lg mb-2">Project Details</h4>
                <ul className="list-disc px-5 mt-6 text-gray-500 space-y-2">
                    {selectedProject.longDescription.map((description: string) => (
                                <li key={description}>{description}</li>
                            ))}
                </ul>

                {/* Tech Stack (Agar aapne array banaya hai) */}
                {selectedProject.tech && (
                    <div className="mt-6 flex flex-wrap gap-2">
                        {selectedProject.tech.map((t: string) => (
                            <span key={t} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider">
                                {t}
                            </span>
                        ))}
                    </div>
                )}

                {/* Actions */}
                <div className="mt-8">
                    <button 
                        onClick={() => setSelectedProject(null)}
                        className="w-full bg-slate-900 text-white py-3 rounded-xl font-semibold hover:bg-slate-800 transition shadow-md"
                    >
                        Close Preview
                    </button>
                </div>
            </div>
        </div>
    </div>
)}
        </Section>
    );
}
import Section from "../components/section";

export default function ExperienceSection() {
    const experience = [
        {
            image: "/assets/funavry.svg",
            title: "Software Engineer → Sr. Software Engineer",
            company: "Funavry Technologies",
            location: "Islamabad, Pakistan",
            start: "Aug 2023",
            end: "Jan 2026",
            description: [
                "Led the development of Angular and Next.js applications for large-scale enterprise and MENA digital platforms, with a strong focus on scalability, SSR performance, and maintainable frontend architecture.",
                "Designed and implemented state management solutions using NgRx and React state patterns, integrated REST APIs, and optimized frontend performance for production environments.",
                "Delivered high-performance enterprise modules following clean architecture principles and modern development standards.",
                "Collaborated closely with UI/UX teams to translate Figma designs into responsive, pixel-perfect interfaces.",
                "Mentored junior developers and promoted best practices through code reviews and cross-functional collaboration with backend, QA, and product teams.",
                "Managed Docker-based CI/CD pipelines to streamline development, testing, and deployment workflows.",
                "Prepared UAT reports and Excel dashboards to track bugs, test coverage, and release readiness in coordination with QA and product stakeholders."
            ],
        },
        {
            image: "/assets/axabiztech.svg",
            title: "Junior Software Engineer (Angular)",
            company: "AXA Business Technologies",
            location: "Islamabad",
            start: "Mar 2021",
            end: "Aug 2023",
            description: [
                "Built Angular libraries and custom architectures for enterprise clients.",
                "Developed Angular-based frontend applications for SaaS and FinTech platforms.",
                "Integrated OCR solutions using Flask and EasyOCR with React frontend.",
            ],
        },
        {
            image: "/assets/compilesol.svg",
            title: "Intern → Junior Full Stack Developer",
            company: "Compilesol",
            location: "Islamabad",
            start: "Sep 2020",
            end: "Feb 2021",
            description: [
                "Built ERP modules using Angular and Laravel with API integration.",
                "Delivered responsive UI from PSD designs and managed API services.",
            ],
        },
    ];

    return (
        <Section title="Experience">
            <div className="space-y-6">
                {experience.map((experience) => (
                    <div key={experience.title} className="w-full border border-gray-200 p-6 rounded-xl">
                        <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500">
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                                    <img
                                        src={experience.image}
                                        alt={experience.title}
                                        width={25}
                                        height={25}
                                    />
                                </div>
                                <div>
                                    <h3 className="text-base font-medium text-gray-800">
                                        {experience.title}
                                    </h3>
                                    <div>{experience.company}</div>
                                </div>
                            </div>
                            <div>{experience.start} - {experience.end}</div>
                        </div>
                        <ul className="list-disc px-5 mt-6 text-gray-500 space-y-2">
                            {experience.description.map((description) => (
                                <li key={description}>{description}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
}
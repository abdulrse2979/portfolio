import Section from "../components/section";

export default function ExperienceSection() {
    const experience = [
        {
            image: "/assets/funavry.svg",
            title: "Software Engineer → Sr. Software Engineer",
            company: "Funavry Technologies",
            location: "Islamabad, Pakistan",
            start: "Aug 2023",
            end: "Present",
            description: [
                "Led development of AI-integrated features, including LLM-powered chatbots with OpenAI API integration and prompt engineering.",
                "Led development of Angular and Next.js enterprise applications with scalable component-based architecture and high-performance frontend solutions.",
                "Developed and integrated Node.js REST APIs with MySQL, implementing secure authentication and reliable system communication.",
                "Managed CI/CD workflows and SDLC environments (DEV/UAT/PROD) while collaborating with QA and product teams for smooth releases.",
                "Mentored developers on AI-assisted development practices and evaluated AI tooling for team-wide adoption, alongside conducting technical interviews and supporting hiring.",
                "Supported technical coordination and troubleshooting during project delivery."
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
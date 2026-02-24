import Footer from "./components/footer";
import LenisScroll from "./components/lenis";
import AboutSection from "./sections/about-section";
import CertificationSection from "./sections/certification-section";
import ContactSection from "./sections/contact-section";
import EducationSection from "./sections/education-section";
import ExperienceSection from "./sections/experience-section";
import HeroSection from "./sections/hero-section";
import ProjectsSection from "./sections/projects-section";
import SkillsSection from "./sections/skills-section";

export default function App() {
    return (
        <main className="max-md:px-4">
            <LenisScroll />
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <EducationSection />
            <CertificationSection />
            <ContactSection />
            <Footer />
        </main>
    )
}
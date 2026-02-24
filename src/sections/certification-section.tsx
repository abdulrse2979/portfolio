import { useState } from "react";
import Section from "../components/section";
import Slider from 'react-slick';

// Interface define karein
interface Certification {
    title: string;
    issuingAuthority: string;
    description: string;
    certificate: string;
    dateIssued: string;
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

export default function CertificationSection() {
    const [selectedCertificate, setSelectedCertificate] = useState<Certification | null>(null);

    const certifications = [
        {
            title: "PY4E: Python for Everybody",
            issuingAuthority: "Coursera | UOM",
            description: "Course By Dr. Charles Severance (Dr. Chuck) from Michigan University which includes basics of Python Programming from print() to Functions, Loops, Arrays and Conditions.",
            certificate: "/assets/py4e.png",
            dateIssued: "Jul 08, 2020"
        },
        {
            title: "Getting Started with AWS ML",
            issuingAuthority: "Coursera | AWS",
            description: "Course By AWS, it is basically the training of different AWS products using Machine Learning.",
            certificate: "/assets/awsml.png",
            dateIssued: "May 30, 2020"
        },
        {
            title: "Soft Skills Training for Professionals",
            issuingAuthority: "OEC & ICMPD",
            description: "This course was introduced by OEC and ICMPD for working class who will work aboroad in coming",
            certificate: "/assets/sst.png",
            dateIssued: "December 17, 2025"
        },
    ];

    return (
        <Section title="Certifications">
            {/* Is wrapper ko width dena zaroori hai */}
            <div className="w-full max-w-4xl ml-auto block">
                <Slider {...settings}>
                    {certifications.map((certificate) => (
                        <div key={certificate.title} className="px-2 outline-none">
                            <div
                                onClick={() => setSelectedCertificate(certificate)}
                                className="cursor-pointer border border-gray-200 rounded-xl overflow-hidden bg-white hover:shadow-lg transition"
                            >
                                <img src={certificate.certificate} className="w-full h-42 object-cover" />
                                <div className="p-4">
                                    <h3 className="font-medium">{certificate.title}</h3>
                                    <p className="text-gray-500 text-sm">{certificate.issuingAuthority}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            {selectedCertificate && (
    <div 
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
        onClick={() => setSelectedCertificate(null)} // Bahar click karne se modal band ho jaye
    >
        <div 
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()} // Modal ke andar click karne se band na ho
        >
            {/* Header: Image aur Close Button */}
            <div className="relative">
                <img 
                    src={selectedCertificate.certificate} 
                    className="w-full h-64 object-cover" 
                    alt={selectedCertificate.title} 
                />
                <button 
                    onClick={() => setSelectedCertificate(null)}
                    className="absolute top-4 right-4 bg-white/90 hover:bg-white text-black h-10 w-10 rounded-full flex items-center justify-center shadow-lg transition"
                >
                    ✕
                </button>
            </div>

            {/* Content Body */}
            <div className="p-6">
                <h2 className="text-3xl font-bold text-slate-900">{selectedCertificate.title}</h2>
                <p className="text-blue-600 font-medium mt-1">{selectedCertificate.issuingAuthority}</p>
                
                <hr className="my-4 border-gray-100" />

                <h4 className="font-semibold text-lg mb-2">Certificate Details</h4>
                <p className="text-gray-600 leading-relaxed mt-1">{selectedCertificate.description}</p>
                
                <hr className="my-4 border-gray-100" />
                
                <h4 className="font-semibold text-lg mb-2">Date: <span className="text-blue-600 font-medium ml-2">{selectedCertificate.dateIssued}</span></h4>
                {/* Actions */}
                <div className="mt-8">
                    <button 
                        onClick={() => setSelectedCertificate(null)}
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
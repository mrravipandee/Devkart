import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ProblemSolutionProject {
    id: number;
    title: string;
    description: string;
    imageUrl?: string;
    category?: string;
}

interface ProblemSolutionSectionProps {
    title?: string;
    description?: string;
}

const ProblemSolutionSection: React.FC<ProblemSolutionSectionProps> = ({ 
    title = "From Ideas to Impact", 
    description = "Innovative Projects that Solve Meaningful Problems" 
}) => {
    const projects: ProblemSolutionProject[] = [
        {
            id: 1,
            title: "AI Waste Sorting",
            description: "Machine learning system for automated recycling",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6U15wnrnENax1bjTjSjdFkx9Af78dGWCu8A&s",
            category: "Sustainability"
        },
        {
            id: 2,
            title: "Traffic Flow Optimizer",
            description: "Real-time traffic management solution",
            imageUrl: "https://www.researchgate.net/publication/346030093/figure/fig1/AS:959936901173250@1605878200465/Traffic-Flow-Optimization-source5.png",
            category: "Urban Tech"
        },
        {
            id: 3,
            title: "Water Purification",
            description: "Low-cost filtration for developing regions",
            imageUrl: "https://www.euroteckindia.com/wp-content/uploads/2025/01/The-Future-of-Wastewater-Treatment-AI-and-Machine-Learning-in-Action-Outline-Euroteck-Environmental.png",
            category: "Health"
        },
        {
            id: 4,
            title: "Renewable Energy Grid",
            description: "Smart distribution for solar/wind power",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU1c058vB9OKL7ELklq891xVNW72Oyq2U0ng&s",
            category: "Energy"
        },
    ];

    return (
        <section className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
                <div>
                    <div className="flex items-center">
                        <div className="relative h-6 mr-2">
                            <svg
                                width="24"
                                height="30"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-blue-500 absolute top-1/2 -translate-y-1/2"
                            >
                                <rect
                                    x="4"
                                    y="4"
                                    width="14"
                                    height="20"
                                    rx="2"
                                    fill="currentColor"
                                />
                            </svg>
                            <h2 className="text-xl font-medium text-blue-600 relative z-10 pl-7">
                                {title}
                            </h2>
                        </div>
                    </div>
                    <p className="text-gray-900 text-2xl font-bold mt-2 max-w-lg lg:max-w-full">{description}</p>
                </div>

                <Link
                    href="/projects"
                    className="flex items-center gap-2 text-white transition-colors group"
                >
                    <span className="font-medium bg-blue-600 px-4 py-2 hover:bg-blue-700">View All</span>
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
};

const ProjectCard: React.FC<{ project: ProblemSolutionProject }> = ({ project }) => {
    return (
        <div className="bg-white rounded-xl overflow-hidden border transition-shadow duration-300 h-full flex flex-col">
            {project.imageUrl && (
                <div className="h-40 overflow-hidden">
                    <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                    />
                </div>
            )}

            <div className="p-5 flex flex-col flex-grow">
                {project.category && (
                    <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-2 self-start">
                        {project.category}
                    </span>
                )}

                <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm flex-grow">{project.description}</p>
            </div>
        </div>
    );
};

export default ProblemSolutionSection;
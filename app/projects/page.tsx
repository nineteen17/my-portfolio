"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ArrowUp } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import ScrollToTop from "react-scroll-to-top";

const projects = [
  {
    title: "NoteEarly - Full-Stack Educational Platform",
    description: [
      "Developed a comprehensive freemium educational platform designed to enhance reading comprehension skills for children aged 5-12, featuring a multi-tenant architecture supporting admin (parents/teachers) and student user roles with progressive learning modules and real-time analytics.",
      "Content Management System: Built a CRM-style dashboard enabling educators to create, organize, and manage custom reading modules with standardized templates and vocabulary integration.",
      "Progressive Learning System: Implemented 10-level reading modules with structured difficulty progression aligned to New Zealand educational standards.",
      "Multi-Tenant Architecture: Designed secure role-based access control supporting admin accounts (up to 50 students) and PIN-based student authentication.",
      "Subscription Management: Integrated Stripe payment processing with freemium model (Free/Home/$7mo/Pro/$19mo) including customer portal and webhook handling.",
      "Analytics & Progress Tracking: Developed comprehensive progress monitoring with visual dashboards, completion tracking, and performance insights.",
      "Mobile-First Design: Fully responsive interface optimized for tablets and mobile devices with touch-friendly navigation.",
      "Infrastructure as Code: Terraform modules for DigitalOcean droplet provisioning and DNS management with Docker Compose orchestration.",
      "Security-First Design: Cloudflare DNS management with WAF (Web Application Firewall) enabled for DDoS protection and comprehensive monitoring.",
    ],
    website: "https://noteearly.com",
    github: "https://github.com/nineteen17/note-early",
    technologies: [
      "Next.js 15",
      "TypeScript",
      "React",
      "TailwindCSS",
      "ShadCN UI",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Drizzle ORM",
      "Supabase Auth",
      "Stripe",
      "Docker",
      "Terraform",
      "DigitalOcean",
      "Cloudflare",
    ],
  },
  {
    title: "Protein Compare",
    description: [
      "Developed a web application to compare the cost of protein across products, addressing the challenge of confusing pricing caused by varying protein amounts in different brands. Built with Next.js 15, TypeScript, and Tailwind CSS.",
      "Deployed the application on Vercel for seamless scalability and performance.",
      "Designed with a mobile-first approach for full responsiveness and a clean, intuitive interface. Integrated modern UI components using ShadCN for consistency.",
      "Implemented state management with Zustand and form validation using React Hook Form and Zod to ensure smooth user interactions.",
      "Created to solve the problem of rising whey protein costs and unclear pricing comparisons, providing users with a simple and effective tool to make informed purchasing decisions.",
      "Currently tracks 100 daily users, monitored using Vercel analytics.",
    ],
    website: "https://www.protein-compare.com/",
    github: "https://github.com/nineteen17/Protein-Price-Calculator-App",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "ShadCN",
    ],
  },
  {
    title: "Microservice E-Commerce App",
    description: [
      "Microservice Architecture: Developed a scalable e-commerce app demonstrating expertise in designing and implementing independent services for user management, product catalog, and order processing.",
      "Container Orchestration: Implemented containerization with Docker and orchestrated services using Kubernetes, showcasing skills in deploying and managing microservices.",
      "Event-Driven Communication: Enhanced system responsiveness and decoupling through asynchronous messaging with RabbitMQ, including a message-driven synchronization mechanism. Services listen for RabbitMQ messages to update local data stores in real-time, ensuring consistent data across the application.",
      "Infrastructure Automation: Applied Infrastructure as Code (IaC) principles with Terraform for efficient cloud resource management.",
      "Frontend Development: Developed a frontend using React and TypeScript, served via NGINX for optimized content delivery.",
      "Security & Authentication: Implemented robust security measures including authentication, authorization, and rate limiting, supported by NGINX's request filtering and rate limiting capabilities.",
      "REST API Design & Implementation: Crafted and deployed RESTful APIs for microservices, facilitating seamless data exchange and integration between frontend and backend systems.",
      "Database Management: Leveraged MongoDB for efficient data storage and retrieval, implementing schemas for users, products, and orders to support the application's data persistence needs.",
      "CI/CD Implementation: Utilized ArgoCD for continuous deployment, automating and managing the delivery of application updates across environments.",
    ],
    website: null,
    github: "https://github.com/nineteen17/Microservice-E-Commerce-App",
    technologies: [
      "Docker",
      "Kubernetes",
      "RabbitMQ",
      "React",
      "Express.js",
      "TypeScript",
      "NGINX",
      "AWS",
      "EKS",
      "ArgoCD",
    ],
  },
  {
    title: "Property Rental App",
    description: [
      "Full-Stack Development: Developed a full-stack property rental application using MongoDB, Express.js, React, and Node.js with TypeScript. Implemented key features including a custom JWT auth solution, search filters, and watchlists.",
      "Cloud Deployment & Management: Successfully deployed and managed the application on Azure, utilizing Azure Kubernetes Service (AKS) for container orchestration, Azure Container Registry (ACR) for image storage, and Docker.",
      "CI/CD Implementation: Engineered a CI/CD pipeline using GitHub Actions, facilitating automated testing and deployment processes.",
    ],
    website: null,
    github: "https://github.com/nineteen17/Property-Rental-App",
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "TypeScript",
      "Azure",
      "GitHub Actions",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <main className="px-4 py-6 max-w-6xl mx-auto w-full">
      <div>
        <h1 className="text-4xl font-bold tracking-tight mt-4">Projects</h1>
        <p className="text-lg text-muted-foreground mt-2">
          A showcase of the projects I have created
        </p>
      </div>

      <div className="mt-8 space-y-6">
        {projects.map((project, index) => (
          <Card key={index} className="shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                {project.title}
              </CardTitle>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech, i) => (
                  <Badge key={i} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-4">
                {project.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="mt-4 flex gap-4">
                {project.website && (
                  <Link href={project.website} target="_blank">
                    <Button variant="link" size="sm">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit Website
                    </Button>
                  </Link>
                )}
                {project.github && (
                  <Link href={project.github} target="_blank">
                    <Button variant="outline" size="sm">
                      <Github className="mr-2 h-4 w-4" />
                      View GitHub
                    </Button>
                  </Link>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <ScrollToTop
        smooth
        top={200}
        style={{
          backgroundColor: "black",
          color: "white",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
        component={<ArrowUp />}
      />
    </main>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components//ui/button";
import { Github, Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Microservice E-Commerce App",
    description: [
      "Microservice Architecture: Developed a scalable e-commerce app demonstrating expertise in designing and implementing independent services for user management, product catalog, and order processing.",
      "Container Orchestration: Implemented containerization with Docker and orchestrated services using Kubernetes, showcasing skills in deploying and managing microservices.",
      "Event-Driven Communication: Enhanced system responsiveness and decoupling through asynchronous messaging with RabbitMQ, including a message-driven synchronization mechanism. Services listen for RabbitMQ messages to update local data stores in real-time, ensuring consistent data across the application.",
      "Infrastructure Automation: Applied Infrastructure as Code (IaC) principles with Terraform for efficient cloud resource management.",
      "Frontend Development: Developed a frontend using React and TypeScript, served via NGINX for optimized content delivery.",
      "Security & Authentication: Implemented robust security measures including authentication, authorization, and rate limiting, supported by NGINX’s request filtering and rate limiting capabilities.",
      "REST API Design & Implementation: Crafted and deployed RESTful APIs for microservices, facilitating seamless data exchange and integration between frontend and backend systems.",
      "Database Management: Leveraged MongoDB for efficient data storage and retrieval, implementing schemas for users, products, and orders to support the application’s data persistence needs.",
      "CI/CD Implementation: Utilized ArgoCD for continuous deployment, automating and managing the delivery of application updates across environments.",
    ],
    image: "",
    website: "",
    github: "https://github.com/nineteen17/Microservice-E-Commerce-App",
    visibility: "public",
  },
  {
    title: "Property Rental App",
    description: [
      "Full-Stack Development: Developed a full-stack property rental application using MongoDB, Express.js, React, and Node.js with TypeScript. Implemented key features including a custom JWT auth solution, search filters, and watchlists.",
      "Cloud Deployment & Management: Successfully deployed and managed the application on Azure, utilizing Azure Kubernetes Service (AKS) for container orchestration, Azure Container Registry (ACR) for image storage, and Docker.",
      "CI/CD Implementation: Engineered a CI/CD pipeline using GitHub Actions, facilitating automated testing and deployment processes.",
    ],
    image: "",
    website: "",
    github: "https://github.com/nineteen17/Property-Rental-App",
    visibility: "public",
  },
];

export default function Page() {
  return (
    <section className="px-4 flex flex-col py-6 max-w-3xl mx-auto w-full">
      <div>
        {/* <Button variant="ghost" className="mt-4" asChild>
          <Link href="/">
            <span>&larr; Go back</span>
          </Link>
        </Button> */}
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight mt-4">
          My Projects
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          A list of my projects
        </p>
      </div>
      <div className="mt-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="w-full flex flex-col justify-between mb-2"
          >
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <div>
                <ul className="list-disc ml-6">
                  {project.description.map((bullet, i) => (
                    <li key={i} className="text-sm text-muted-foreground">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Badge variant="secondary" className="w-fit capitalize mt-2">
                  {project.visibility}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <Image
                src={project.image}
                alt={``}
                width={128}
                height={128}
                className=""
              />
            </CardContent>
            <div className="p-4">
              <Link href={project.github} target="_blank">
                <Button variant="link" className="mr-4">
                  <Github className="mr-2" /> View on GitHub
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

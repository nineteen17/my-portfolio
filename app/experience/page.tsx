"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const experience = {
  company: "MEGA The Privacy Company",
  title: "Software Engineer",
  date: "June - September 2023",
  description: [
    "Mobile Web Experience Revamp: Contributed in overhauling user interaction and interface, enhancing the overall web experience.",
    "Feature Development: Led the development of features for handling non-preview files and improving file information accessibility.",
    "Vanilla JavaScript & OOP: Utilized these technologies for efficient and clean feature enhancement and updates.",
    "Debugging: Demonstrated advanced problem-solving skills by resolving complex issues within MEGA’s extensive codebase.",
    "Web UI Development: Focused on efficient DOM manipulations, optimizing node creation and minimizing re-renders for better web performance.",
    "Quality Assurance Testing: Conducted rigorous testing on Chrome and Safari for iOS, using TestRail for structured reporting.",
    "Version Control: Managed GitLab for code versioning, ensuring high standards through regular code reviews.",
    "Project Management Tools: Proficient in Jira for task management and Confluence for project documentation, contributing to organized project flow.",
    "Agile Methodology: Engaged in daily scrums and biweekly team sessions, promoting effective collaboration and communication.",
    "Team Communication: Maintained proactive and effective communication with team members using Slack.",
  ],
};

export default function Page() {
  return (
    <main className="px-4 flex flex-col py-6 max-w-3xl mx-auto w-full">
      <div>
        {/* <Button variant="ghost" className="mt-4" asChild>
          <Link href="/">
            <span>&larr; Go back</span>
          </Link>
        </Button> */}
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight mt-4">
          My Experience
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          A brief overview of my career
        </p>
      </div>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>{experience.title}</CardTitle>
            <CardDescription>
              {experience.company} &bull; {experience.date}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc ml-6 space-y-2">
              {experience.description.map((item, index) => (
                <li key={index} className="text-sm text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

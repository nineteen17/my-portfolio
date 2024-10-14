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
import Image from "next/image";

const certifications = [
  {
    title: "AWS Certified Developer - Associate",
    date: "Dec 2023",
    url: "https://www.credly.com/badges/7b003442-5d4f-4fa8-8d13-79535271428e/public_url",
    image:
      "https://images.credly.com/size/680x680/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png",
  },
  {
    title: "AWS Certified Solutions Architect - Associate",
    date: "Jan 2024",
    url: "https://www.credly.com/badges/78443741-51ce-43c9-9d19-e901b8878e1b/public_url",
    image:
      "https://images.credly.com/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
  },
  {
    title: "Microsoft Certified Azure Fundamentals",
    date: "June 2023",
    url: "https://www.credly.com/badges/9d2960b7-0211-4c58-8e1c-d91e313bef18/public_url",
    image: "https://images.credly.com/size/680x680/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png",
  },
];

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
          My Certifications
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          A list of my professional certifications
        </p>
      </div>

      <div className="mt-8">
        {certifications.map((cert, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{cert.title}</CardTitle>
              <CardDescription>{cert.date}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <Image
                src={cert.image}
                alt={`${cert.title} certification image`}
                width={150}
                height={150}
              />
              <Link
                href={cert.url}
                target="_blank"
                className="text-blue-500 mt-4"
              >
                View Credential
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}

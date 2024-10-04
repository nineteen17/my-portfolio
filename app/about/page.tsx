import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <main className="px-4 flex flex-col py-6 max-w-3xl mx-auto">
      <div>
        <Button variant="ghost" className="mt-4" asChild>
          <Link href="/">
            <span>&larr; Go back</span>
          </Link>
        </Button>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight mt-4">
          About Me
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          Get to know me better
        </p>
      </div>
      <div className="mt-8">
        <p className="leading-7">
          I am a software engineer with a strong focus on cloud computing and
          microservices architecture. Proficient in developing scalable,
          responsive systems using technologies like Kubernetes, Docker,
          RabbitMQ, React, Node.js, and MongoDB. Certified in AWS and Azure,
          with expertise in infrastructure automation, security, and REST API
          design. Experienced in agile methodologies, CI/CD pipelines, and team
          collaboration. Committed to delivering high-quality, efficient
          solutions in dynamic environments
        </p>

        <p className="leading-7 mt-6">

        </p>
      </div>
    </main>
  );
}

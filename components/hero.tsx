import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { Badge } from "./ui/badge";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
      {/* <Badge className="my-2" variant="secondary">
        Website in development
      </Badge> */}

      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center text-balance leading-tight lg:leading-[1.1]">
      Software & Cloud Engineer
      </h1>
      <p className="text-lg font-light max-w-xl text-center text-foreground">
      I am a software engineer with a strong focus on cloud computing and microservices architecture
      </p>
      <div className="flex gap-4 py-4 md:pb-10 items-center">
        <Button asChild>
          <Link href="/about">Learn more</Link>
        </Button>
        <Link
          href="https://github.com/nineteen17"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
        </Link>
      </div>
    </section>
  );
}

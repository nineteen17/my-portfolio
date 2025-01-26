import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import Link from "next/link";

export default function Page() {
  return (
    <main className="px-4 flex flex-col py-6 max-w-6xl mx-auto">
      <div>
        {/* <Button variant="ghost" className="mt-4" asChild>
          <Link href="/">
            <span>&larr; Go back</span>
          </Link>
        </Button> */}
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight mt-4">
          Reach out to me
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          {"I'm always open to new opportunities and collaborations."}
        </p>
      </div>

      <div className="mt-8">
        <Card>
          <CardContent>
            <p className="leading-7">
              {
                "Feel free to reach out if you'd like to discuss potential projects, job opportunities, or anything else, please get in touch via the links in the footer."
              }
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

import { Instagram, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="px-4 md:container py-12 align-bottom mt-auto"
      id="footer"
    >
      <ul className="flex flex-wrap gap-4 justify-center">
        {/* <li>
          <Link
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline">
              <Instagram className="h-4 w-4 mr-2" />
              @nickririnui
            </Button>
          </Link>
        </li> */}
        <li>
          <Link
            href="https://github.com/nineteen17"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline">
              <Github className="h-4 w-4 mr-2" />
              @nineteen17
            </Button>
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/nick-ririnui-9284a3279"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline">
              <Linkedin className="h-4 w-4 mr-2" />
              @nickririnui
            </Button>
          </Link>
        </li>
        <li>
          <Link href="mailto:nik-r07@live.com">
            <Button variant="outline">
              <Mail className="h-4 w-4 mr-2" />
              nik-r07@live.com
            </Button>
          </Link>
        </li>
      </ul>
    </footer>
  );
}

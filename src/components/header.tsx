import { FilmIcon, SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

function Header() {
  return (
    <header className="sticky top-0 z-30 bg-background border-b">
      <div className="container px-4 md:px-6 mx-auto flex items-center h-16">
        <Link href="#" className="flex items-center gap-2 font-bold text-lg" prefetch={false}>
          <FilmIcon className="w-6 h-6 text-primary" />
          CineFlix
        </Link>
        <nav className="ml-10 hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="#" className="hover:text-primary" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="hover:text-primary" prefetch={false}>
            Movies
          </Link>
          <Link href="#" className="hover:text-primary" prefetch={false}>
            TV Shows
          </Link>
          <Link href="#" className="hover:text-primary" prefetch={false}>
            New & Popular
          </Link>
        </nav>
        <div className="ml-auto flex items-center gap-4">
          <div className="relative">
            <Input type="search" placeholder="Search titles..." className="bg-muted/40 border-none focus:ring-0 focus:border-none rounded-full pr-10" />
            <div className="absolute inset-y-0 right-2 flex items-center">
              <SearchIcon className="w-5 h-5 text-muted-foreground" />
            </div>
          </div>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Image src="/placeholder.svg" width={36} height={36} alt="Avatar" className="rounded-full" style={{ aspectRatio: "36/36", objectFit: "cover" }} />
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;

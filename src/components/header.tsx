import { SearchIcon } from "lucide-react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Input } from "./ui/input";

function Header() {
  return (
    <header className="sticky top-0 z-30 bg-background border-b">
      <div className="container px-4 md:px-6 mx-auto flex items-center h-16">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-red-600" prefetch={false}>
          CineFlix
        </Link>
        <NavigationMenu className="ml-10 hidden md:flex items-center gap-6 text-sm font-medium">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Movies</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex min-w-[130px] flex-col gap-3 p-3">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href={"/movie/popular"} className="hover:bg-primary hover:text-secondary rounded-md p-2">
                        Popular
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href={"/movie/now_playing"} className="hover:bg-primary hover:text-secondary rounded-md p-2">
                        Now Playing
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href={"/movie/upcoming"} className="hover:bg-primary hover:text-secondary rounded-md p-2">
                        Upcoming
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href={"/movie/top_rated"} className="hover:bg-primary hover:text-secondary rounded-md p-2">
                        Top Rated
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>TV Shows</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex flex-col min-w-[130px] gap-3 p-3">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href={"/tv/popular"} className="hover:bg-primary hover:text-secondary rounded-md p-2">
                        Popular
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href={"/tv/top-rated"} className="hover:bg-primary hover:text-secondary rounded-md p-2">
                        Airing Today
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href={"/tv/trending"} className="hover:bg-primary hover:text-secondary rounded-md p-2">
                        On TV
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href={"/tv/upcoming"} className="hover:bg-primary hover:text-secondary rounded-md p-2">
                        Top Rated
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="ml-auto flex items-center gap-4">
          <div className="relative">
            <Input type="search" placeholder="Search titles..." className="bg-muted/40 border-none focus:ring-0 focus:border-none rounded-full pr-10" />
            <div className="absolute inset-y-0 right-2 flex items-center">
              <SearchIcon className="w-5 h-5 text-muted-foreground" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

"use client"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { useAuth } from "@clerk/nextjs";
import { Profile } from "../profile";
import { SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "../ui/sheet";
import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
import { Dialog } from "../ui/dialog";

import { Card, CardContent } from "@/components/ui/card"

const components = [
    { title: "Blog", href: "/resources/blog", description: "Deepen your knowledge with our blog." },
    { title: "Courses", href: "/coming-soon", description: "Take free courses and grow in faith." },
    { title: "Bible Study Tool", href: "/bible-study", description: "Enhance your Bible Study." },
];

export function NavBar() {
    const { userId } = useAuth();

    return (
        <div className="flex justify-between items-center w-full p-4 bg-transparent z-10">

          <Dialog>
                <SheetTrigger className="min-[825px]:hidden p-2 transition">
                    <GiHamburgerMenu />
                </SheetTrigger>
                <SheetContent side="left">
                    <SheetHeader>
                        <SheetTitle>Apostolic Church International Fellowship</SheetTitle>
                        <SheetDescription>
                            Grow In Grace. Grow In Knowledge.
                        </SheetDescription>
                    </SheetHeader>
                    <div className="flex flex-col space-y-3 mt-[1rem]">
                        <DialogClose asChild>
                            <Link href="/">
                                <Button variant="outline" className="w-full">Home</Button>
                            </Link>
                        </DialogClose>
                        <DialogClose asChild>
                            <Link href="/beliefs">
                                <Button variant="outline" className="w-full">Statement of Faith</Button>
                            </Link>
                        </DialogClose>
                        <DialogClose asChild>
                            <Link href="/give">
                                <Button variant="outline" className="w-full">Give</Button>
                            </Link>
                        </DialogClose>
                        <DialogClose asChild>

                            <Link href="/english-ministry">
                                <Button variant="outline" className="w-full">English Ministry</Button>
                            </Link>
                        </DialogClose>
                        <DialogClose asChild>
                            <Link href="/amharic-ministry">
                                <Button variant="outline" className="w-full">Amharic Ministry</Button>
                            </Link>
                        </DialogClose>
                        <DialogClose asChild>
                            <Link href="/resources/blog">
                                <Button variant="outline" className="w-full">Blog</Button>
                            </Link>
                        </DialogClose>
                        <DialogClose asChild>
                            <Link href="/contact-us">
                                <Button variant="outline" className="w-full">Contact Us</Button>
                            </Link>
                        </DialogClose>
                        <DialogClose asChild>
                            <Link href="/about">
                                <Button variant="outline" className="w-full">About Us</Button>
                            </Link>
                        </DialogClose>
                    </div>
                </SheetContent>
            </Dialog>



            <div className="flex items-center">
                <Link href="/">
                    <Image
                        src="/apo.jpg"
                        width={70}
                        height={60}
                        alt="logo"
                        className="cursor-pointer"
                    />
                </Link>
            </div>
            <NavigationMenu>
                <NavigationMenuList className="flex space-x-8 max-[825px]:hidden ">
                    <NavigationMenuItem>
                        <Link href="/beliefs" passHref>
                            <NavigationMenuLink className="cursor-pointer text-white text-xl font-serif font-semibold hover:text-gray-500">
                                Statement of Faith
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/give" passHref>
                            <NavigationMenuLink className="cursor-pointer text-white text-xl font-serif font-semibold hover:text-gray-500">
                                Give
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/news" passHref>
                            <NavigationMenuLink className="cursor-pointer text-white text-xl font-serif font-semibold hover:text-gray-500">
                                 News
                            </NavigationMenuLink>
                        </Link>
                        
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="hover:text-gray-500">
                            Resources
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid  p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                        <a
                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                            href="/"
                                        >
                                            <Image src="https://images.unsplash.com/photo-1447619297994-b829cc1ab44a" width={50} height={50} alt="logo" />
                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                Grace (ፀጋ) Bible Fellowship Church
                                            </div>
                                            <p className="text-sm leading-tight text-muted-foreground">
                                                Grow In Grace. Grow In Knowledge.
                                            </p>
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                <li>
                                <Link href="/books" title="English Church">
                                   Books
                                </Link>
                                </li>
                               <li>
                               <Link href="/magazines" title="Amharic Church">
                                    Magazines
                                </Link>
                               </li>
                               <li>
                               <Link href="/song" title="Amharic Church">
                                    ACE-Songs
                                </Link>
                               </li>
                               <li>
                               <Link href="/conference-videos" title="Amharic Church">
                                    Conference Videos
                                </Link>
                               </li>
                               <li>
                               <Link href="/teaching" title="Amharic Church">
                                    Teaching and Sermons 
                                </Link>
                               </li>
                               
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/contact-us" passHref>
                            <NavigationMenuLink className="cursor-pointer text-white text-xl font-serif font-semibold hover:text-gray-500">
                                Contact Us
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/articles" passHref>
                            <NavigationMenuLink className="cursor-pointer text-white text-xl font-serif font-semibold hover:text-gray-500">
                                 Articles
                            </NavigationMenuLink>
                        </Link>
                        
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/about" passHref>
                            <NavigationMenuLink className="cursor-pointer text-white text-xl font-serif font-semibold hover:text-gray-500">
                                About Us
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            {userId && <Profile />}
        </div>
    );
}

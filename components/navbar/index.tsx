"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/theme-toggle";
import { personalInfo } from "@/data";
import { navItems } from "@/constants/navItems";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils"; // Make sure you have a cn utility or use clsx
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const isMobile = windowWidth < 1200;
  const isTinyScreen = windowWidth < 460;
  const isVeryTinyScreen = windowWidth < 340;
  const pathname = usePathname();
  const activeRoute = pathname.replace("/#", "");

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize(); // Set on first load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    // Add any additional routing logic if needed
  };

  if (!hasMounted) {
    return null; // Prevent rendering on the server side
  }

  return (
    <NavigationMenu className="p-2 flex items-center justify-between bg-white w-full dark:bg-gray-800 shadow-md">
      {/* Logo & Name */}
      <Link href="/" className="flex items-center gap-2">
        <Avatar className="h-12 w-12 border-1 border-primary/40 shadow-lg">
          <AvatarImage src={personalInfo.profilePicture} alt={`${personalInfo.name}'s profile picture`} />
        </Avatar>
        <motion.div className="flex flex-col">
          <motion.span
            className="font-bold text-base sm:text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 8 }}
          >
            {personalInfo.name}
          </motion.span>
          <span className="text-sm text-muted-foreground -mt-1 hidden sm:block">{personalInfo.title}</span>
        </motion.div>
      </Link>

      <NavigationMenuList className="hidden xl:flex px-4 items-center border border-primary/30 rounded-3xl bg-white dark:bg-gray-800 shadow-sm">
        {navItems.map((item) => (
          <NavigationMenuItem key={item.name}>
            <NavigationMenuLink asChild>
              <Link
                href={item.href}
                className="flex flex-row items-center gap-2 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/10 rounded-full transition-colors"
              >
                {item.icon && <item.icon className="w-4 h-4" />}
                {item.name}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>

      <div className="flex items-center gap-2">
        {!isMobile && (
          <>
            <ModeToggle />
            <Button asChild
              variant="outline"
              size="sm"
              className="rounded-full text-xs group border-primary/20 hover:border-primary/50">
              <Link href="/resume" onClick={handleLinkClick}>
                <span className={isVeryTinyScreen ? "sr-only" : ""}>Resume</span>
              </Link>
            </Button>
          </>
        )}
        {/* Mobile Menu Toggle (shown when < 1200px) */}
        {isMobile && (
          <Button
            variant="ghost"
            size="icon"
            className="xl:hidden rounded-full h-8 w-8"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open mobile menu"
          >
            <Menu size={18} />
          </Button>
        )}
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 xl:hidden">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          {/* Drawer */}
          <motion.div
            className="absolute top-0 right-0 h-full w-[85%] max-w-sm bg-background/95 backdrop-blur-md shadow-xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex justify-between items-center p-4 border-b border-border/30">
                <Link href="/" className="flex items-center gap-2" onClick={handleLinkClick}>
                  <Avatar className="h-8 w-8 border-2 border-primary/20">
                    <AvatarImage src={personalInfo.profilePicture} alt={personalInfo.name} />
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-500">
                      {personalInfo.name}
                    </span>
                    <span className="text-[10px] text-muted-foreground -mt-1">{personalInfo.title}</span>
                  </div>
                </Link>
                <Button variant="ghost" size="icon" className="rounded-full h-8 w-8" onClick={() => setMobileMenuOpen(false)}>
                  <X size={isMobile ? 18 : 22} />
                </Button>
              </div>

              {/* Menu Items */}
              <motion.div
                className="flex-1 overflow-auto py-6 px-4"
                initial="hidden"
                animate="show"
                variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.07 } } }}
              >
                <div className={cn("space-y-2", isTinyScreen && "grid grid-cols-2 gap-2 space-y-0")}>
                  {navItems.map((item) => (
                    <motion.div key={item.name} variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } }}>
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center rounded-xl transition-all",
                          isTinyScreen ? "p-2 text-sm flex-col text-center gap-1" : "p-3 text-base gap-2",
                          activeRoute === item.href.replace("/#", "")
                            ? "bg-primary/10 text-primary font-medium shadow-sm"
                            : "text-foreground hover:bg-muted/50"
                        )}
                        onClick={handleLinkClick}
                      >
                        <div
                          className={cn(
                            "rounded-full bg-background/80 border border-border/30 flex items-center justify-center shadow-sm",
                            isTinyScreen ? "w-8 h-8" : "w-9 h-9 mr-3",
                            activeRoute === item.href.replace("/#", "")
                              ? "bg-primary/5 border-primary/20 text-primary"
                              : "text-muted-foreground"
                          )}
                        >
                          {item.icon && <item.icon className="w-4 h-4" />}
                        </div>
                        <span>{item.name}</span>
                        {!isTinyScreen && <ChevronRight className="ml-auto h-4 w-4 text-muted-foreground" />}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Bottom Bar */}
              <div className="p-4 border-t border-border/30 flex items-center justify-between">
                <ModeToggle />
                <Button
                  size="sm"
                  variant="outline"
                  className="rounded-full text-xs group border-primary/20 hover:border-primary/50"
                  asChild
                >
                  <Link href="/resume" onClick={handleLinkClick}>
                    <span className={isVeryTinyScreen ? "sr-only" : ""}>Resume</span>
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </NavigationMenu>
  );
}

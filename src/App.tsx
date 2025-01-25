import { useState } from "react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Cpu,
  Globe,
  Eye,
  Shield,
  Rocket,
  Box,
  Search,
  Palette,
  BookOpen,
  FileText,
  Newspaper,
} from "lucide-react";

export default function App() {
  return (
    <main className="relative w-full min-h-screen flex items-start md:items-center justify-center px-4 py-10">
      <div className="relative gap-5 flex flex-col items-center justify-center">
        <One />
        <Two />
      </div>
    </main>
  );
}

const Two = () => {
  type Props = {
    id: number;
    label: string;
    subMenus?: {
      title: string;
      items: {
        label: string;
        description: string;
        icon: React.ElementType;
      }[];
    }[];
    link?: string;
  };

  const NAV_ITEMS: Props[] = [
    {
      id: 1,
      label: "Products",
      subMenus: [
        {
          title: "DX Platform",
          items: [
            {
              label: "Previews",
              description: "Helping teams ship 6× faster",
              icon: Cpu,
            },
            {
              label: "AI",
              description: "Powering breakthroughs",
              icon: Search,
            },
          ],
        },
        {
          title: "Managed Infrastructure",
          items: [
            {
              label: "Rendering",
              description: "Fast, scalable, and reliable",
              icon: Globe,
            },
            {
              label: "Observability",
              description: "Trace every step",
              icon: Eye,
            },
            {
              label: "Security",
              description: "Scale without compromising",
              icon: Shield,
            },
          ],
        },
        {
          title: "Open Source",
          items: [
            {
              label: "Next.js",
              description: "The native Next.js platform",
              icon: Rocket,
            },
            {
              label: "Turborepo",
              description: "Speed with Enterprise scale",
              icon: Box,
            },
            {
              label: "AI SDK",
              description: "The AI Toolkit for TypeScript",
              icon: Palette,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      label: "Solutions",
      subMenus: [
        {
          title: "Use Cases",
          items: [
            {
              label: "AI Apps",
              description: "Deploy at the speed of AI",
              icon: Cpu,
            },
            {
              label: "Composable Commerce",
              description: "Power storefronts that convert",
              icon: Box,
            },
            {
              label: "Marketing Sites",
              description: "Launch campaigns fast",
              icon: Rocket,
            },
            {
              label: "Multi-tenant Platforms",
              description: "Scale apps with one codebase",
              icon: Globe,
            },
            {
              label: "Web Apps",
              description: "Ship features, not infrastructure",
              icon: Search,
            },
          ],
        },
        {
          title: "Users",
          items: [
            {
              label: "Platform Engineers",
              description: "Automate away repetition",
              icon: Cpu,
            },
            {
              label: "Design Engineers",
              description: "Deploy for every idea",
              icon: Palette,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      label: "Resources",
      subMenus: [
        {
          title: "Tools",
          items: [
            {
              label: "Resource Center",
              description: "Today's best practices",
              icon: BookOpen,
            },
            {
              label: "Marketplace",
              description: "Extend and automate workflows",
              icon: Search,
            },
            {
              label: "Templates",
              description: "Jumpstart app development",
              icon: FileText,
            },
            {
              label: "Guides",
              description: "Find help quickly",
              icon: BookOpen,
            },
            {
              label: "Partner Finder",
              description: "Get help from solution partners",
              icon: Search,
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "Customers",
              description: "Trusted by the best teams",
              icon: Newspaper,
            },
            {
              label: "Blog",
              description: "The latest posts and changes",
              icon: FileText,
            },
            {
              label: "Changelog",
              description: "See what shipped",
              icon: BookOpen,
            },
            {
              label: "Press",
              description: "Read the latest news",
              icon: Newspaper,
            },
          ],
        },
      ],
    },
    {
      id: 4,
      label: "Enterprise",
      link: "#",
    },
    {
      id: 5,
      label: "Docs",
      link: "#",
    },
    {
      id: 6,
      label: "Pricing",
      link: "#",
    },
  ];

  const [openMenu, setOpenMenu] = React.useState<string | null>(null);

  const handleHover = (menuLabel: string | null) => {
    setOpenMenu(menuLabel);
  };

  const [isHover, setIsHover] = useState<number | null>(null);
  return (
    <ul className="relative flex items-center space-x-0">
      {NAV_ITEMS.map((navItem) => (
        <li
          key={navItem.label}
          className="relative"
          onMouseEnter={() => handleHover(navItem.label)}
          onMouseLeave={() => handleHover(null)}
        >
          <button
            className="text-sm py-1.5 px-4 flex cursor-pointer group transition-colors duration-300 items-center justify-center gap-1 text-white/50 hover:text-white relative"
            onMouseEnter={() => setIsHover(navItem.id)}
            onMouseLeave={() => setIsHover(null)}
          >
            <span>{navItem.label}</span>
            {navItem.subMenus && (
              <ChevronDown
                className={`h-4 w-4 group-hover:rotate-180 duration-300 transition-transform
                ${openMenu === navItem.label ? "rotate-180" : ""}
                `}
              />
            )}
            {(isHover === navItem.id || openMenu === navItem.label) && (
              <motion.div
                layoutId="hover-bg"
                className="absolute inset-0 size-full bg-white/10"
                style={{
                  borderRadius: 99,
                }}
              />
            )}
          </button>

          <AnimatePresence>
            {openMenu === navItem.label && navItem.subMenus && (
              <div className="w-auto absolute left-0 top-full pt-2">
                <motion.div
                  className="bg-[#0A0A0A] border border-white/10 p-4 w-max"
                  style={{
                    borderRadius: 16,
                  }}
                  layoutId="menu"
                >
                  <div className="w-fit shrink-0 flex space-x-9 overflow-hidden">
                    {navItem.subMenus.map((sub) => (
                      <motion.div layout className="w-full" key={sub.title}>
                        <h3 className="mb-4 text-sm font-medium capitalize text-white/50">
                          {sub.title}
                        </h3>
                        <ul className="space-y-6">
                          {sub.items.map((item) => {
                            const Icon = item.icon;
                            return (
                              <li key={item.label}>
                                <a
                                  href="#"
                                  className="flex items-start space-x-3 group"
                                >
                                  <div className="border border-white/30 text-white rounded-md flex items-center justify-center size-9 shrink-0 group-hover:bg-white group-hover:text-[#0A0A0A] transition-colors duration-300">
                                    <Icon className="h-5 w-5 flex-none" />
                                  </div>
                                  <div className="leading-5 w-max">
                                    <p className="text-sm font-medium text-white shrink-0">
                                      {item.label}
                                    </p>
                                    <p className="text-xs text-white/50 shrink-0 group-hover:text-white transition-colors duration-300">
                                      {item.description}
                                    </p>
                                  </div>
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </li>
      ))}
    </ul>
  );
};

const One = () => {
  type Props = {
    id: number;
    tile: string;
  };

  const ITEMS: Props[] = [
    { id: 1, tile: "Overview" },
    { id: 2, tile: "Integrations" },
    { id: 3, tile: "Activity" },
    { id: 4, tile: "Domains" },
    { id: 5, tile: "Usage" },
    { id: 6, tile: "AI" },
    { id: 7, tile: "Settings" },
  ];

  const [active, setActive] = useState<Props>(ITEMS[0]);
  const [isHover, setIsHover] = useState<Props | null>(null);

  return (
    <ul className="flex items-center justify-center">
      {ITEMS.map((item) => (
        <button
          key={item.id}
          className="py-2 relative duration-300 transition-colors hover:!text-white"
          onClick={() => setActive(item)}
          onMouseEnter={() => setIsHover(item)}
          onMouseLeave={() => setIsHover(null)}
          style={{ color: active.id === item.id ? "#FFF" : "#888888" }}
        >
          <div className="px-5 py-2 relative">
            {item.tile}
            {isHover?.id === item.id && (
              <motion.div
                layoutId="hover-bg"
                className="absolute bottom-0 left-0 right-0 w-full h-full bg-white/10"
                style={{
                  borderRadius: 6,
                }}
              />
            )}
          </div>
          {active.id === item.id && (
            <motion.div
              layoutId="active"
              className="absolute bottom-0 left-0 right-0 w-full h-0.5 bg-white"
            />
          )}
          {isHover?.id === item.id && (
            <motion.div
              layoutId="hover"
              className="absolute bottom-0 left-0 right-0 w-full h-0.5 bg-white"
            />
          )}
        </button>
      ))}
    </ul>
  );
};

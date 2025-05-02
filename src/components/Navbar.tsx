"use client";
import { createElement, useState } from "react";
import { Menu, X } from "lucide-react";
import navigation, { isDropdown, getAllMenuItems } from "../config/navigation";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface NavItemProps {
  text: string;
  link?: string;
  icon?: LucideIcon;
  dropdownContent?: React.ReactNode;
}

export interface NavSectionSubItem {
  title: string;
  description: string;
  path: string;
  icon: LucideIcon;
}

export interface NavSectionItem {
  title: string;
  description: string;
  path: string;
  icon: LucideIcon;
  hasSubItems?: boolean;
  subItems?: NavSectionSubItem[];
}

export interface NavSection {
  title: string;
  items: NavSectionItem[];
}

export interface NavItem {
  text: string;
  path?: string;
  icon: LucideIcon;
  isDropdown?: boolean;
  sections?: NavSection[];
}

const SubDropdownMenu = ({ item }: { item: NavSectionItem }) => {
  if (!item.hasSubItems || !item.subItems?.length) {
    return (
      <a
        href={item.path}
        className="flex items-start gap-3 p-3 rounded-lg hover:bg-orange-500/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,165,0,0.4)]
 group/item"
      >
        <span className="text-orange-400 mt-1 flex-shrink-0">
          {createElement(item.icon, { size: 20 })}
        </span>
        <div className="flex-1">
          <span className="text-white block group-hover/item:text-orange-400 transition-colors text-base">
            {item.title}
          </span>
          <span className="text-sm text-gray-400">{item.description}</span>
        </div>
      </a>
    );
  }

  return (
    <div className="relative group/subdropdown">
      <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-orange-500/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,165,0,0.4)] group/item">
        <span className="text-orange-400 mt-1 flex-shrink-0">
          {createElement(item.icon, { size: 20 })}
        </span>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <span className="text-white block group-hover/item:text-orange-400 transition-colors text-base">
              {item.title}
            </span>
            <span className="text-sm transition-transform duration-300 group-hover/subdropdown:rotate-180">
              ▾
            </span>
          </div>
          <span className="text-sm text-gray-400">{item.description}</span>
        </div>
      </div>

      <div
        className="absolute left-0 top-full w-full min-w-[220px] bg-black/95 backdrop-blur-md 
                  border border-orange-500/30 rounded-xl p-2 opacity-0 invisible 
                  group-hover/subdropdown:opacity-100 group-hover/subdropdown:visible transform 
                  translate-y-2 group-hover/subdropdown:translate-y-0 transition-all duration-300
                  shadow-xl shadow-orange-900/30 z-50 ml-8"
      >
        {item.subItems?.map((subItem, index) => (
          <a
            key={index}
            href={subItem.path}
            className="block py-2 px-3 my-1 rounded-lg hover:bg-orange-500/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,165,0,0.4)]"
          >
            <div className="flex items-center gap-2">
              <span className="text-orange-400 flex-shrink-0">
                {createElement(subItem.icon, { size: 16 })}
              </span>
              <div>
                <span className="text-white block hover:text-orange-400 transition-colors text-sm">
                  {subItem.title}
                </span>
                <span className="text-xs text-gray-400">
                  {subItem.description}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

const NavItem = ({ text, link, icon, dropdownContent }: NavItemProps) => {
  if (dropdownContent) {
    return (
      <div className="relative group">
        <button
          className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-300 
                       hover:text-white hover:bg-orange-500/10 transition-all duration-300
                       hover:shadow-[0_0_15px_rgba(255,165,0,0.4)] font-medium
                       text-base"
        >
          {icon && (
            <span className="text-orange-400">
              {createElement(icon, { size: 20 })}
            </span>
          )}
          {text}
          <span className="text-sm transition-transform duration-300 group-hover:rotate-180">
            ▾
          </span>
        </button>
        <div
          className="absolute right-0 top-full w-[600px] bg-black/95 backdrop-blur-md 
                    border border-orange-500/30 rounded-xl p-4 opacity-0 invisible 
                    group-hover:opacity-100 group-hover:visible transform 
                    translate-y-2 group-hover:translate-y-0 transition-all duration-300
                    shadow-xl shadow-orange-900/30 z-50"
        >
          {dropdownContent}
        </div>
      </div>
    );
  }

  return (
    <a
      href={link || "#"}
      className="px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-orange-500/10 
                transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,165,0,0.4)] 
                font-medium flex items-center gap-2 text-base whitespace-nowrap"
    >
      {icon && (
        <span className="text-orange-400">
          {createElement(icon, { size: 18 })}
        </span>
      )}
      {text}
    </a>
  );
};

const MobileSubMenuItem = ({ item }: { item: NavSectionItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!item.hasSubItems || !item.subItems?.length) {
    return (
      <a
        href={item.path}
        className="block px-4 py-2 rounded-lg text-gray-400 hover:text-white 
                    hover:bg-orange-500/10 transition-colors text-xs sm:text-sm
                    flex items-center gap-2"
      >
        {createElement(item.icon, {
          size: 16,
          className: "text-orange-400",
        })}
        {item.title}
      </a>
    );
  }

  return (
    <div className="group/mobile-sub relative">
      <button
        onClick={() => setIsOpen(!isOpen)} // Keep click for mobile as it's more user-friendly
        className="w-full px-4 py-2 rounded-lg text-gray-400 hover:text-white 
                    hover:bg-orange-500/10 transition-colors text-xs sm:text-sm
                    flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          {createElement(item.icon, {
            size: 16,
            className: "text-orange-400",
          })}
          {item.title}
        </div>
        <span
          className={`text-xs transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        >
          ▾
        </span>
      </button>

      {isOpen && (
        <div className="pl-8 border-l border-orange-500/30 ml-4 mt-1">
          {item.subItems?.map((subItem, index) => (
            <a
              key={index}
              href={subItem.path}
              className="block px-4 py-2 rounded-lg text-gray-400 hover:text-white 
                                hover:bg-orange-500/10 transition-colors text-xs
                                flex items-center gap-2"
            >
              {createElement(subItem.icon, {
                size: 14,
                className: "text-orange-400",
              })}
              {subItem.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Get all menu items for mobile menu
  const allMenuItems = getAllMenuItems() as Array<
    NavSectionItem & { section?: string }
  >;

  // Get learn items
  const learnItems = allMenuItems.filter(
    (item) =>
      item.section &&
      ["Crypto Basics", "Advanced Topics"].includes(item.section),
  );

  // Get main navigation items (not in dropdowns)
  const mainNavItems = allMenuItems.filter((item) => !item.section);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black backdrop-blur-md z-50 border-b border-orange-500/20 shadow-lg shadow-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-25 md:h-18 lg:h-25">
          {/* Logo - Made smaller and with better spacing */}

          {/* Title and Navigation Container */}
          <div className="flex flex-1 items-center justify-between min-[1200px]:justify-between ">
            <div className="text-center flex-shrink-0 mx-2 md:mx-4">
              <Link href="/">
                <img
                  src="../images/Crypto-soc-Logo.png"
                  alt="Crypto Soc Logo"
                  className="h-20 md:h-20 mx-auto hover:border-orange-400"
                ></img>
              </Link>
            </div>

            {/* Desktop Navigation - Better spacing and organization */}
            <div className="hidden min-[1200px]:flex min-[1200px]:items-center min-[1200px]:space-x-2 lg:space-x-3 flex-shrink-0">
              {navigation.map((item, index) => (
                <NavItem
                  key={index}
                  text={item.text}
                  icon={item.icon}
                  link={isDropdown(item) ? undefined : item.path}
                  dropdownContent={
                    isDropdown(item) && item.sections ? (
                      <div className="grid grid-cols-2 gap-6">
                        {item.sections.map((section, sectionIndex) => (
                          <div key={sectionIndex}>
                            <h3 className="text-orange-400 font-semibold mb-3 pl-2 text-base">
                              {section.title}
                            </h3>
                            <div className="space-y-1">
                              {section.items.map((dropdownItem, itemIndex) => (
                                <SubDropdownMenu
                                  key={itemIndex}
                                  item={dropdownItem}
                                />
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : undefined
                  }
                />
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="min-[1200px]:hidden flex-shrink-0">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-orange-500/10 transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Improved Mobile menu with icons and better organization */}
      <div
        className={`${isMenuOpen ? "block" : "hidden"} min-[1200px]:hidden bg-black/95 backdrop-blur-md`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1">
          {/* Find Home item */}
          {mainNavItems.find((item) => item.title === "Home") && (
            <a
              href={mainNavItems.find((item) => item.title === "Home")?.path}
              className="block px-4 py-2 rounded-lg text-gray-300 hover:text-white 
                             hover:bg-orange-500/10 transition-colors text-sm sm:text-base
                             flex items-center gap-3"
            >
              {createElement(
                mainNavItems.find((item) => item.title === "Home")!.icon,
                {
                  className: "text-orange-400",
                },
              )}
              Home
            </a>
          )}

          {/* Learn Section */}
          {learnItems.length > 0 && (
            <div className="px-4 py-2">
              <div className="font-medium text-orange-400 mb-2 text-sm sm:text-base flex items-center gap-2">
                {createElement(
                  navigation.find((item) => item.text === "Learn")!.icon,
                  {
                    className: "text-orange-400",
                  },
                )}
                Learn
              </div>
              <div className="pl-4 space-y-2">
                {learnItems.map((item, index) => (
                  <MobileSubMenuItem
                    key={index}
                    item={item as NavSectionItem}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Other main sections */}
          {mainNavItems
            .filter((item) => item.title !== "Home")
            .map((item, index) => (
              <a
                key={index}
                href={item.path}
                className="block px-4 py-2 rounded-lg text-gray-300 hover:text-white 
                                 hover:bg-orange-500/10 transition-colors text-sm sm:text-base
                                 flex items-center gap-3"
              >
                {createElement(item.icon, {
                  size: 18,
                  className: "text-orange-400",
                })}
                {item.title}
              </a>
            ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

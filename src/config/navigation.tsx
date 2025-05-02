import {
  LucideIcon,
  BookText,
  Mail,
  Swords,
  Handshake,
  Book,
  Home,
} from "lucide-react";

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

// Export the actual navigation data
const navigation: NavItem[] = [
  {
    text: "Home",
    path: "/",
    icon: Home,
    isDropdown: false,
  },
  {
    text: "Whitepaper",
    path: "/whitepaper",
    icon: BookText,
    isDropdown: false,
  },

  {
    text: "DAO",
    path: "/dao",
    icon: Swords,
    isDropdown: false,
  },

  {
    text: "History",
    path: "/history",
    icon: Book,
    isDropdown: false,
  },
  {
    text: "Support us",
    path: "mailto:UCCryptoSocDAO@protonmail.com",
    icon: Handshake,
    isDropdown: false,
  },
  {
    text: "Contact",
    icon: Mail,
    path: "mailto:UCCryptoSocDAO@protonmail.com",
    isDropdown: false,
  },
];

// Helper function to determine if an item is a dropdown
export const isDropdown = (item: NavItem): boolean => {
  return item.isDropdown === true;
};

// Get all menu items in a flat array for mobile menu
export const getAllMenuItems = () => {
  const items: {
    title: string;
    path: string;
    icon: LucideIcon;
    section?: string;
    hasSubItems?: boolean;
    subItems?: NavSectionSubItem[];
  }[] = [];

  // Add main navigation items
  navigation.forEach((item) => {
    if (!isDropdown(item)) {
      items.push({
        title: item.text,
        path: item.path || "#",
        icon: item.icon,
      });
    } else {
      // Add dropdown items
      item.sections?.forEach((section) => {
        section.items.forEach((subItem) => {
          items.push({
            title: subItem.title,
            path: subItem.path,
            icon: subItem.icon,
            section: section.title,
            hasSubItems: subItem.hasSubItems,
            subItems: subItem.subItems,
          });
        });
      });
    }
  });

  return items;
};

export default navigation;

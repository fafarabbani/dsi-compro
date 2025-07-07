// icons from https://lucide.dev/
import { 
  Menu,
  X,
  ArrowDown,
  ArrowUpRight,
  Rocket,
  Eye,
  Users,
  Mail,
  Phone,
  Clock,
  MapPin,
  Loader2,
  CheckCircle2,
  XCircle,
  ExternalLink,
  Code,
  Instagram,
  Youtube,
} from "lucide-react";

// menu Items
export const MenuItems = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Our Brands", href: "#", subMenu: [
    { title: "Brand A", href: "/brands/brand-a" },
    { title: "Brand B", href: "/brands/brand-b" },
  ]},
  { title: "Our Products", href: "/products", subMenu: [
    { title: "Product X", href: "/products/product-x" },
    { title: "Product Y", href: "/products/product-y" },
  ]},
  { title: "News", href: "#" },
  { title: "Contact Us", href: "/contact" },
];

// Menus data
export const Menus = [
  {
    name: "Home",
  },
  {
    name: "About Us",
  },
  {
    name: "Our Brands",
    subMenuHeading: [
      "DSI Spandek",
      "DSI Tray",
      "DSI Epoxy"
    ],
    subMenu: [
      {
        name: "DSI Spandek",
      },
      {
        name: "DSI Tray",
      },
      {
        name: "DSI Epoxy",
      },
    ],
    gridCols: 3,
  },
  {
    name: "Our Products",
    subMenuHeading: [
      "Louver Steel Panel",
      "Zinc Steel Panel",
      "Spandek Steel Panel",
      "Ladder Tray",
      "Duct Tray",
      "Mesh Tray",
      "Punched Tray",
      "Hi Tec Tray System",
      "Race Way System",
      "Chanel Support System"
    ],
    subMenu: [
      {
        name: "DSI Spandek",
      },
      {
        name: "DSI Tray",
      },
      {
        name: "DSI Epoxy",
      },
    ],
    gridCols: 3,
  },
  {
    name: "News",
    subMenuHeading: ["", ""],
    subMenu: [
      {

      }
    ],
  },
  {
    name: "Contac Us",
    subMenuHeading: ["", ""],
    subMenu: [
      {

      }
    ],
  },
]


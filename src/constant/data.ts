import { TimePeriod } from "@/components/sales-chart-header";
import {
	Home,
	Briefcase,
	Users,
	FileText,
	FileCheck,
	CheckSquare,
	Type as type,
	LucideIcon,
	Toolbox,
	UserIcon,
} from "lucide-react";


export const navItems: { value: string; label: string; icon: LucideIcon }[] = [
	{ value: "dashboard", label: "Dashboard", icon: Home },
	{ value: "listings", label: "Listings", icon: Briefcase },
	{ value: "users", label: "Users", icon: UserIcon },
	{ value: "request", label: "Request", icon: FileText },
	{ value: "applications", label: "Applications", icon: FileCheck },
	{ value: "tasks", label: "Tasks", icon: CheckSquare },
];

export const items = [
	{
		id: "1",
		name: "calculator",
		icon: "/icons/calculator.svg",
	},
	{
		id: "2",
		name: "calendar",
		icon: "/icons/calendar.svg",
	},
	{
		id: "3",
		name: "search",
		icon: "/icons/search.svg",
	},
	{
		id: "4",
		name: "wallet",
		icon: "/icons/wallet.svg",
	},
	{
		id: "5",
		name: "shop",
		icon: "/icons/shop.svg",
	},
]

export const metrics = [
  {
    value: "₦120,000,000.00",
    label: "Total Inflow",
    color: "#4545FE",
    trend: 2.5,
    isPositive: true,
  },
  {
    value: "₦50,000,000.00",
    label: "MRR",
    color: "#12B76A",
    trend: 2.5,
    isPositive: true,
  },
  {
    value: "₦200,000,000.00",
    label: "Commission Revenue",
    color: "#14B8A6",
    trend: 0.5,
    isPositive: true,
  },
  {
    value: "₦100,000,000.00",
    label: "GMV",
    color: "#F04438",
    trend: 0.5,
    isPositive: false,
  },
]


export const yearData = [
	{ month: "Jan", value1: 30, value2: 20, value3: 15, value4: 10 },
	{ month: "Feb", value1: 25, value2: 30, value3: 12, value4: 8 },
	{ month: "Mar", value1: 35, value2: 15, value3: 20, value4: 18 },
	{ month: "Apr", value1: 28, value2: 25, value3: 18, value4: 15 },
	{ month: "May", value1: 20, value2: 22, value3: 16, value4: 12 },
	{ month: "Jun", value1: 48, value2: 35, value3: 22, value4: 20 },
	{ month: "Jul", value1: 32, value2: 38, value3: 28, value4: 18 },
	{ month: "Aug", value1: 30, value2: 25, value3: 20, value4: 22 },
	{ month: "Sep", value1: 42, value2: 30, value3: 25, value4: 20 },
]

export const monthData = [
	{ month: "Week 1", value1: 35, value2: 25, value3: 18, value4: 12 },
	{ month: "Week 2", value1: 40, value2: 30, value3: 20, value4: 15 },
	{ month: "Week 3", value1: 32, value2: 28, value3: 22, value4: 18 },
	{ month: "Week 4", value1: 38, value2: 32, value3: 24, value4: 20 },
]

export const weekData = [
	{ month: "Mon", value1: 12, value2: 8, value3: 6, value4: 4 },
	{ month: "Tue", value1: 15, value2: 10, value3: 8, value4: 5 },
	{ month: "Wed", value1: 18, value2: 12, value3: 10, value4: 7 },
	{ month: "Thu", value1: 14, value2: 11, value3: 9, value4: 6 },
	{ month: "Fri", value1: 20, value2: 15, value3: 12, value4: 8 },
	{ month: "Sat", value1: 16, value2: 13, value3: 10, value4: 7 },
	{ month: "Sun", value1: 10, value2: 7, value3: 5, value4: 3 },
]


export const timeButtons: { value: TimePeriod; label: string }[] = [
  { value: "week", label: "1 Week" },
  { value: "month", label: "1 Month" },
  { value: "year", label: "1 Year" },
]


export const properties = [
    {
    label: "HOTTEST LISTING",
    title: "Urban Prime Plaza Premiere",
    image: "https://res.cloudinary.com/olubebe/image/upload/v1769889680/Metric_item_kuyinv.png"
  },

  {
    label: "MOST CLICKED",
    title: "Urban Prime Plaza Premiere",
    image: "https://res.cloudinary.com/olubebe/image/upload/v1769889545/img_wcuwew.png"
  },
  {
    label: "MOST WATCHLISTED",
    title: "Urban Prime Plaza Premiere",
    image: "https://res.cloudinary.com/olubebe/image/upload/v1769889575/imgg_hxrarw.png"
  },
]

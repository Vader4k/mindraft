import { BsFileEarmarkRichtext } from "react-icons/bs";
import { LuPencilLine, LuPenTool } from "react-icons/lu";
import { BsCardImage } from "react-icons/bs";
import { PiScissorsLight, PiCertificateLight } from "react-icons/pi";

export const navLinks = [
  {
    name: "features",
    link: "#features",
  },
  {
    name: "pricing",
    link: "#pricing",
  },
  {
    name: "reviews",
    link: "#reviews",
  },
  {
    name: "contact",
    link: "#contact",
  },
];

export const sliderData = [
  {
    big: "50K+",
    small: "Content Pieces Created",
  },
  {
    big: "10K+",
    small: "Happy Users",
  },
  {
    big: "99.9%",
    small: "Uptime",
  },
  {
    big: "24/7",
    small: "AI Availability",
  },
];

export const features = [
  {
    icon: BsFileEarmarkRichtext,
    title: "Article generator",
    text: "Generate high-quality, engaging articles on any topic with AI assistance.",
    path: "/dashboard/article",
  },
  {
    icon: LuPencilLine,
    title: "Blog title creator",
    text: "Create catchy, SEO-optimized blog titles that drives clicks and user engagements",
    path: "/dashboard/blog",
  },
  {
    icon: BsCardImage,
    title: "AI image generator",
    text: "create stunning, unique umages from text descriptions using advanced AI models",
    path: "/dashboard/generate-images",
  },
  {
    icon: PiScissorsLight,
    title: "Background removal",
    text: "Remove backgrounds from images instantly with precision AI technology",
    path: "/dashboard/background-removal",
  },
  {
    icon: LuPenTool,
    title: "Object Removal",
    text: "Remove unwanted Objects from photo seamlessly with intelligent AI editing technology",
    path: "/dashboard/object-removal",
  },
  {
    icon: PiCertificateLight,
    title: "Resume Reviewer",
    text: "Get AI-powered feedback and suggestions to improve your resume and land your dream job",
    path: "/dashboard/resume-review",
  },
];

export const works = [
  {
    id: 1,
    title: "Choose Your Tool",
    text: "Select from our suite of AI-powered creative based tools based on your needs",
  },
  {
    id: 2,
    title: "Provide Input",
    text: "Give our AI the context, keywords, or files it needs to work its nagic",
  },
  {
    id: 3,
    title: "Get Results",
    text: "Receive high-quality, professional results in seconds, ready to use",
  },
];

export const testimonies = [
  {
    name: "Sarah",
    job: "Content Creator & Blogger",
    test: "Mindraft has revolutionized my content creation process. I can generate high-quality articles and images in minutes instead of hours. It's like having a creative team at my fingertips!",
  },
  {
    name: "Mark",
    job: "E-commerce Owner",
    test: "The image editing tools are incredible! Background removal and object removal work flawlessly. I've saved hundreds of hours on photo editing for my e-commerce business.",
  },
  {
    name: "Emily",
    job: "Software Engineer",
    test: "The image editing tools are incredible! Background removal and object removal work flawlessly. I've saved hundreds of hours on photo editing for my e-commerce business.",
  },
];

export const footerLinks = [
  { name: "Home", link: "/" },
  { name: "About us", link: "/" },
  { name: "Contact Us", link: "/" },
  { name: "Privacy Policy", link: "/" },
];

export const sidebarLinks = [
  {
    name: 'Article Generator',
    url: "/dashboard/article",
    icon: BsFileEarmarkRichtext
  },
  {
    name: "Blog Title Creator",
    url: "/dashboard/blog",
    icon: LuPencilLine
  },
  {
    name: "Image Generator",
    url: '/dashboard/generate-images',
    icon: BsCardImage
  },
  {
    name: "Background Removal",
    url: "/dashboard/background-removal",
    icon: PiScissorsLight
  },
  {
    name: "Object Removal",
    url: "/dashboard/object-removal",
    icon: LuPenTool
  },
  {
    name: "Resume Reviewer",
    url: "/dashboard/resume-review",
    icon: PiCertificateLight
  }
]
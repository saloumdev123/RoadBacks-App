import img1 from "./images/tour-1.jpeg";
import img2 from "./images/tour-2.jpeg";
import img3 from "./images/tour-8.jpeg";
import img4 from "./images/tour-9.jpeg";

export const PageLink = [
  { id: 1, href: "#home", text: "home" },
  { id: 1, href: "#about", text: "about" },
  { id: 1, href: "#services", text: "services" },
  { id: 1, href: "#tours", text: "tours" },
];

export const SocialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 2, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 3, href: "https://www.youtube.com", icon: "fab fa-youtube" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    icon: "fas fa-map",
    image: img1,
    duration: 2,
    date: "20 Janvier 2023",
    title: "best of java",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quoexercitationem fugit, qui corporis.",
    cost: "2000",
    location: "Senegal",
  },
  {
    id: 2,
    icon: "fas fa-map",
    image: img2,
    duration: 4,
    date: "18 Fevrier 2023",
    title: "Tibet Adventure",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quoexercitationem fugit, qui corporis.",
    cost: "1200",
    location: "Tchad",
  },
  {
    id: 3,
    icon: "fas fa-map",
    image: img3,
    duration: 6,
    date: "1 Octobre 2023",
    title: "explore hong kong",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quoexercitationem fugit, qui corporis.",
    cost: "8900",
    location: "Saoudi",
  },
  {
    id: 4,
    icon: "fas fa-map",
    image: img4,
    duration: 12,
    date: "12 Decembre 2023",
    title: "kenya highlights",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quoexercitationem fugit, qui corporis.",
    cost: "8900",
    location: "Saoudi",
  },
];

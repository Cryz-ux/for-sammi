import { GridCard } from "./components/grid-card";
import { Navbar } from "./components/navbar";
import  TappingGame  from "./components/tapping-game";
import { LandingPage } from "./components/landing-page";
import Reasons from "./components/reasons";
import { useState } from "react";
import { LetterArchive } from "./components/LetterArchive";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "game" | "letterArchive" | "reasons">("home");

  const items = [
    {
      id: 1,
      title: "Design Systems",
      description: "Build consistent and scalable design systems for your products",
      color: "from-purple-200 to-purple-300"
    },
    {
      id: 2,
      title: "User Interface",
      description: "Create beautiful and intuitive user interfaces",
      color: "from-pink-200 to-purple-200"
    },
    {
      id: 3,
      title: "Responsive Design",
      description: "Ensure your designs work seamlessly across all devices",
      color: "from-purple-300 to-pink-200"
    },
    {
      id: 4,
      title: "Prototyping",
      description: "Rapidly prototype and test your ideas",
      color: "from-lavender-200 to-purple-200"
    },
    {
      id: 5,
      title: "Collaboration",
      description: "Work together with your team in real-time",
      color: "from-purple-200 to-purple-300"
    },
    {
      id: 6,
      title: "Development",
      description: "Bridge the gap between design and development",
      color: "from-pink-100 to-purple-200"
    },
    {
      id: 7,
      title: "Animation",
      description: "Bring your designs to life with smooth animations",
      color: "from-purple-300 to-pink-300"
    },
    {
      id: 8,
      title: "Accessibility",
      description: "Design inclusive experiences for everyone",
      color: "from-purple-200 to-pink-200"
    },
    {
      id: 9,
      title: "Components",
      description: "Build reusable components for faster workflows",
      color: "from-pink-200 to-purple-300"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100/30 via-pink-100/40 to-lavender-100/30" style={{ backgroundColor: '#faf8fc' }}>
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      
      {currentPage === "home" ? (
        <LandingPage onNavigate={setCurrentPage} />
      ) : currentPage === "game" ? (
        <TappingGame />
      ) : currentPage === "letterArchive" ? (
        <LetterArchive />
      ) : currentPage === "reasons" ? (
        <Reasons />
      ) : null}
    </div>
  );
}
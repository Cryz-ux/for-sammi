import { Menu, X } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  onNavigate: (page: "home" | "game" | "letterArchive" | "reasons") => void;
  currentPage: "home" | "game"| "letterArchive"| "reasons";
}

export function Navbar({ onNavigate, currentPage }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", page: "home" as const },
    { label: "Daily Reminder", page: "game" as const },
    { label: "Letter Archive", page: "letterArchive" as const },
    { label: "Reasons why ily", page: "reasons" as const }
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo + label */}
          <div className="flex items-center space-x-3">
            <div
              className="w-8 h-8 bg-gradient-to-br from-purple-300 to-pink-300 rounded-lg flex items-center justify-center"
              role="img"
              aria-label="Heart logo"
            >
              <svg
                className="w-4 h-4 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 21s-7-4.35-9-7.01C1.2 11.1 2.5 7.5 5.5 6.5 7.04 5.95 8.7 6.3 9.75 7.36L12 9.6l2.25-2.24c1.05-1.06 2.71-1.41 4.25-.86 3 1 4.3 4.6 2.5 7.49C19 16.65 12 21 12 21z" />
              </svg>
            </div>

            <span className="ml-2 text-sm font-semibold text-gray-900" style={{ marginLeft: "0.5rem" }}>
                to my sammi baby
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  onNavigate(item.page);
                  setIsMenuOpen(false);
                }}
                className={`transition-colors ${
                  currentPage === item.page
                    ? "text-purple-400"
                    : "text-gray-600 hover:text-purple-400"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    onNavigate(item.page);
                    setIsMenuOpen(false);
                  }}
                  className={`text-left transition-colors px-2 ${
                    currentPage === item.page
                      ? "text-purple-400"
                      : "text-gray-600 hover:text-purple-400"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button className="px-4 py-2 bg-gradient-to-r from-purple-300 to-pink-300 text-white rounded-lg hover:shadow-lg transition-shadow">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
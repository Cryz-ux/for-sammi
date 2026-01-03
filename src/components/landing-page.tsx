import { GridCard } from "./grid-card";
import { ArrowRight, Sparkles, Zap, Shield } from "lucide-react";

export function LandingPage({ onNavigate }: { onNavigate: (page: "home" | "game" | "letterArchive" | "reasons") => void }) {
  const features = [
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
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-purple-200/50 mb-8">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400">Welcome to your website, Sam.</span>
            </div>
            
            <p className="text-gray-900 mb-6 max-w-4xl mx-auto text-4xl font-bold">
              Everything made easy, only for you.
            </p>
            
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
             I know you love rereading the letters I’ve made for you, and listening to the
             reasons why I love you. So I made this little website to keep everything in one
             place — just for you. I love you, baby.
            </p>
            
            
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl -z-10" />
      </section>

      

      

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-purple-300 to-pink-300 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="mb-4">Ready to Get Started?</h2>
              <p className="mb-8 text-white/90">
                These buttons lead to their corresponding page
              </p>
              <button
                onClick={() => onNavigate("letterArchive")}
                className="px-8 py-4 bg-white text-purple-400 rounded-lg hover:shadow-lg transition-all hover:scale-105" style={{marginLeft: "1rem", marginTop: "1rem"}}
              >
                Letter Archive
              </button>
              
              <button
                onClick={() => onNavigate("game")}
                className="px-8 py-4 bg-white text-purple-400 rounded-lg hover:shadow-lg transition-all hover:scale-105" style={{ marginLeft: "1rem", marginTop: "1rem" }}
              >
                Daily Reminder  
              </button>

              <button
                onClick={() => onNavigate("reasons")}
                className="px-8 py-4 bg-white text-purple-400 rounded-lg hover:shadow-lg transition-all hover:scale-105" style={{ marginLeft: "1rem", marginTop: "1rem" }}
              >
                Reasons why ily
              </button>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          </div>
        </div>
      </section>
    </div>
  );
}


import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center glass p-10 rounded-xl max-w-md mx-auto">
        <h1 className="text-6xl font-bold mb-6 text-white">404</h1>
        <p className="text-xl text-white/70 mb-8">Sidan kunde inte hittas</p>
        <a href="/" className="bg-primary px-6 py-3 rounded-full text-white hover:bg-primary/80 transition-colors inline-block">
          Tillbaka till startsidan
        </a>
      </div>
    </div>
  );
};

export default NotFound;

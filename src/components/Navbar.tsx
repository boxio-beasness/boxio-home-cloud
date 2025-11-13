import { Link } from "react-router-dom";
import { LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import boxioLogo from "@/assets/boxio-logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border animate-fade-in">

      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src={boxioLogo} 
            alt="Boxio Logo" 
            className="h-8 w-auto transition-transform group-hover:scale-105"
          />
        </Link>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="gap-2" asChild>
            <Link to="/auth">
              <LogIn className="w-4 h-4" />
              Login
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

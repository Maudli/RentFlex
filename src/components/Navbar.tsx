
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img src="/lovable-uploads/7ce1ed79-2795-4554-a464-ca3b198f093b.png" alt="RentFlex Logo" className="h-16 w-auto" />
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/properties" className="text-rentflex-gray hover:text-rentflex-blue px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Properties
              </Link>
              <Link to="/about" className="text-rentflex-gray hover:text-rentflex-blue px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-rentflex-gray hover:text-rentflex-blue px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <Button variant="ghost">Sign In</Button>
              <Button>Get Started</Button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-rentflex-gray hover:text-rentflex-blue focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/properties" className="text-rentflex-gray hover:text-rentflex-blue block px-3 py-2 rounded-md text-base font-medium">
                Properties
              </Link>
              <Link to="/about" className="text-rentflex-gray hover:text-rentflex-blue block px-3 py-2 rounded-md text-base font-medium">
                About
              </Link>
              <Link to="/contact" className="text-rentflex-gray hover:text-rentflex-blue block px-3 py-2 rounded-md text-base font-medium">
                Contact
              </Link>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-5">
                <Button variant="ghost" className="w-full justify-center">Sign In</Button>
              </div>
              <div className="mt-3 px-2">
                <Button className="w-full justify-center">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};


import { Button } from "./ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-blue-50 pt-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-rentflex-dark mb-6"
          >
            Rent Smart,{" "}
            <span className="text-rentflex-blue">Live Flexible</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-rentflex-gray max-w-2xl mx-auto mb-8"
          >
            Experience hassle-free renting with instant security deposits, seamless city transfers, 
            and smart corporate relocation solutions.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="text-lg px-8">
              Find Properties
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              List Your Property
            </Button>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-rentflex-dark mb-2">Instant Deposits</h3>
            <p className="text-rentflex-gray">Secure your dream home instantly with our flexible security deposit options.</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-rentflex-dark mb-2">City Transfers</h3>
            <p className="text-rentflex-gray">Relocate seamlessly between cities without breaking your lease agreement.</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-rentflex-dark mb-2">Smart Solutions</h3>
            <p className="text-rentflex-gray">AI-powered insights to help you make informed rental decisions.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

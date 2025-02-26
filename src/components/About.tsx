
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-rentflex-dark mb-6">
            Revolutionizing the Rental Experience
          </h2>
          <p className="text-lg text-rentflex-gray mb-8">
            RentFlex is pioneering a new era in rental solutions, bringing together tenants, 
            landlords, and corporate clients on a single, seamless platform. Our innovative 
            approach combines cutting-edge technology with practical solutions to address 
            the most pressing challenges in the rental market.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-rentflex-dark mb-3">For Tenants</h3>
              <p className="text-rentflex-gray">Find your perfect home with flexible terms and instant approvals.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-rentflex-dark mb-3">For Landlords</h3>
              <p className="text-rentflex-gray">Maximize your rental income with guaranteed payments and efficient management.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-rentflex-dark mb-3">For Corporates</h3>
              <p className="text-rentflex-gray">Streamline employee relocation with our comprehensive housing solutions.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

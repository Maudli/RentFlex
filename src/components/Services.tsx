
import { motion } from "framer-motion";
import { Shield, Building2, Users } from "lucide-react";

export const Services = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-rentflex-dark mb-6">
            Our Services
          </h2>
          <p className="text-lg text-rentflex-gray max-w-2xl mx-auto">
            Comprehensive rental solutions tailored to meet the needs of tenants,
            landlords, and corporate clients.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
          >
            <Shield className="w-12 h-12 text-rentflex-blue mb-6" />
            <h3 className="text-xl font-semibold text-rentflex-dark mb-4">For Tenants</h3>
            <ul className="space-y-3 text-rentflex-gray">
              <li>• Flexible security deposits</li>
              <li>• Seamless intercity transfers</li>
              <li>• Instant property approvals</li>
              <li>• 24/7 maintenance support</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
          >
            <Building2 className="w-12 h-12 text-rentflex-blue mb-6" />
            <h3 className="text-xl font-semibold text-rentflex-dark mb-4">For Landlords</h3>
            <ul className="space-y-3 text-rentflex-gray">
              <li>• Guaranteed monthly rent</li>
              <li>• Property management services</li>
              <li>• Tenant screening</li>
              <li>• Regular property maintenance</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
          >
            <Users className="w-12 h-12 text-rentflex-blue mb-6" />
            <h3 className="text-xl font-semibold text-rentflex-dark mb-4">For Corporates</h3>
            <ul className="space-y-3 text-rentflex-gray">
              <li>• Employee relocation services</li>
              <li>• Bulk booking discounts</li>
              <li>• Customized housing solutions</li>
              <li>• Dedicated account manager</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

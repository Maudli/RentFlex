
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Link } from "react-scroll";

export const PropertyListings = () => {
  const properties = [
    {
      id: 1,
      title: "Modern Downtown Apartment",
      location: "Financial District",
      price: "$2,500/month",
      beds: "2",
      baths: "2",
      image: "/lovable-uploads/7ce1ed79-2795-4554-a464-ca3b198f093b.png"
    },
    {
      id: 2,
      title: "Luxury Waterfront Condo",
      location: "Harbor View",
      price: "$3,200/month",
      beds: "3",
      baths: "2",
      image: "/lovable-uploads/7ce1ed79-2795-4554-a464-ca3b198f093b.png"
    },
    {
      id: 3,
      title: "Cozy Studio Apartment",
      location: "Arts District",
      price: "$1,800/month",
      beds: "1",
      baths: "1",
      image: "/lovable-uploads/7ce1ed79-2795-4554-a464-ca3b198f093b.png"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-rentflex-dark mb-6">
            Featured Properties
          </h2>
          <p className="text-lg text-rentflex-gray max-w-2xl mx-auto">
            Discover our selection of premium properties available for rent.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={property.image}
                  alt={property.title}
                  className="object-cover w-full h-48"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-rentflex-dark mb-2">
                  {property.title}
                </h3>
                <p className="text-rentflex-gray mb-4">{property.location}</p>
                <div className="flex justify-between items-center">
                  <span className="text-rentflex-blue font-semibold">
                    {property.price}
                  </span>
                  <div className="text-rentflex-gray">
                    {property.beds}b • {property.baths}ba
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link to="services" smooth={true} duration={500}>
            <Button variant="outline" size="lg">
              Back to Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

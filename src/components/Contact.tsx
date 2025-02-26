
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

export const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
  };

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-rentflex-dark mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-rentflex-gray max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  className="w-full"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="w-full"
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  className="w-full min-h-[150px]"
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
          >
            <h3 className="text-xl font-semibold text-rentflex-dark mb-6">
              Contact Information
            </h3>
            <div className="space-y-4 text-rentflex-gray">
              <p>
                <strong className="text-rentflex-dark">Address:</strong>
                <br />
                123 Business Avenue
                <br />
                Tech District, CA 94107
              </p>
              <p>
                <strong className="text-rentflex-dark">Email:</strong>
                <br />
                info@rentflex.com
              </p>
              <p>
                <strong className="text-rentflex-dark">Phone:</strong>
                <br />
                +1 (555) 123-4567
              </p>
              <p>
                <strong className="text-rentflex-dark">Hours:</strong>
                <br />
                Monday - Friday: 9:00 AM - 6:00 PM
                <br />
                Saturday: 10:00 AM - 4:00 PM
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

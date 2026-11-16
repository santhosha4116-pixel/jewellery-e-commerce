
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {

  const footerLinks = [
    {
      title: "EXPLORE",
      links: [
        { name: "Home", path: "/" },
        { name: "Collections", path: "/collections" },
        { name: "Products", path: "/products" },
        { name: "About Us", path: "/about" },
        { name: "FAQ", path: "/faq" },
      ],
    },
    {
      title: "CUSTOMER CARE",
      links: [
        { name: "My Account", path: "/profile" },
        { name: "Shopping Cart", path: "/cart" },
        { name: "Checkout", path: "/checkout" },
        { name: "Custom Orders", path: "/customorder" },
      ],
    },
    {
      title: "FOLLOW US",
      links: [
        { name: "Instagram", path: "#" },
        { name: "Facebook", path: "#" },
        { name: "Pinterest", path: "#" },
        { name: "Contact Us", path: "mailto:hello@aurelia.com" },
      ],
    },
  ];

  const animation = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  return (
    <footer className="bg-[#29251F] text-[#F7F3ED] overflow-hidden">

      <div className="max-w-[1450px] mx-auto px-6 md:px-12 pt-12">

        {/* MAIN FOOTER */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-10">

          {/* CONTACT */}
          <motion.div
            variants={animation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >

            <p className="text-[#B08D57] text-xs tracking-[3px] mb-4">
              CALL US
            </p>

            <p className="text-sm mb-4">
              +91 XXXXX XXXXX
            </p>

            <motion.a
              href="mailto:hello@aurelia.com"
              whileHover={{ color: "#B08D57" }}
              className="inline-flex items-center gap-3
              text-2xl sm:text-3xl md:text-4xl
              font-medium tracking-tight transition-colors"
            >
              HELLO@AURELIA.COM
              <span className="text-[#B08D57] text-2xl">↗</span>
            </motion.a>

          </motion.div>

          {/* NAVIGATION */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">

            {footerLinks.map((section, index) => (

              <motion.div
                key={section.title}
                variants={animation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >

                <h3 className="text-[#B08D57] text-[10px]
                tracking-[2px] mb-5">
                  {section.title}
                </h3>

                <ul className="space-y-3">

                  {section.links.map((link) => (

                    <li key={link.name}>

                      {link.path.startsWith("mailto:") ||
                      link.path === "#" ? (

                        <a
                          href={link.path}
                          className="text-sm text-[#F7F3ED]/90
                          hover:text-[#B08D57] transition-colors duration-300"
                        >
                          {link.name}
                        </a>

                      ) : (

                        <Link
                          to={link.path}
                          className="text-sm text-[#F7F3ED]/90
                          hover:text-[#B08D57] transition-colors duration-300"
                        >
                          {link.name}
                        </Link>

                      )}

                    </li>

                  ))}

                </ul>

              </motion.div>

            ))}

          </div>

        </div>

        {/* LARGE BRAND NAME */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative border-t border-[#D9C6A5]/20
          pt-5 overflow-hidden"
        >
        </motion.div>

        {/* BOTTOM BAR */}
        <div className="
        py-5 flex flex-col sm:flex-row
        justify-between items-center gap-3">

          <p className="text-[10px] text-[#F7F3ED]/60 tracking-wider">
            © {new Date().getFullYear()} AURELIA. ALL RIGHTS RESERVED.
          </p>

          <p className="text-[10px] text-[#B08D57] tracking-[2px]">
            TIMELESS BEAUTY. ETERNAL ELEGANCE.
          </p>

          <a
            href="#top"
            className="text-[10px] text-[#F7F3ED]/70
            hover:text-[#B08D57] transition-colors"
          >
            BACK TO TOP ↑
          </a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;

import { FaFacebookF, FaInstagram } from "react-icons/fa";
import footerData from "../data/Footer.json"; // Import the JSON data

const Footer = () => {
  const { sections, newsletter, contact, copyright } = footerData;

  return (
    <footer className="bg-[#1E306E] text-white">
      <div className="md:flex gap-3 sm:grid p-8">
        <div className="container mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 px-4">
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-normal mb-4">{section.title}</h3>
              <ul className="space-y-3 font-extralight text-sm">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href={link.url} className="hover:text-gray-300">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="md:col-span-2 sm:w-1/2 py-6">
          <h3 className="text-md font-normal mb-4">{newsletter.title}</h3>
          <div className="flex mb-4">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 p-4 text-black rounded-l-md"
            />
            <button className="bg-[#A5CDE9] rounded-r-md px-4 py-2">
              {newsletter.submitText}
            </button>
          </div>
          <div className="flex space-x-4 mb-4">
            <a
              href={contact.facebookUrl}
              className="hover:text-gray-300 p-2 rounded-3xl border"
            >
              <FaFacebookF />
            </a>
            <a
              href={contact.instagramUrl}
              className="hover:text-gray-300 p-2 rounded-3xl border"
            >
              <FaInstagram />
            </a>
          </div>
          <div className="text-md">
            <a href={`tel:${contact.phone}`} className="hover:text-gray-300">
              {contact.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Copyright */}
      <div className="border-t border-gray-700 mt-8 p-4 font-light text-center text-sm bg-[#526599]">
        <p>
          &copy; {copyright.year}{" "}
          {copyright.links.map((link, index) => (
            <a key={index} href={link.url} className="hover:text-gray-300 mr-4">
              {link.label}
            </a>
          ))}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

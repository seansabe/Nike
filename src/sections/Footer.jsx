import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col">
          <a href="/">
            <img src={footerLogo} alt="Logo" width={150} />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready forthe new term at your nearest Nike store. Join now and get rewards.
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon, index) => (
              <div key={index} className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <img src={icon.src} alt={icon.alt} width={24} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">{section.title}</h4>
              <ul>
                {section.links.map((link, index) => (
                  <li key={index} className="mt-3 text-white-400 hover:text-slate-gray font-montserrat text-base leading-normal">
                    <a href={link.link} className="">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img src={copyrightSign} alt="Copyright" width={20} className="rounded-full m-0" />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
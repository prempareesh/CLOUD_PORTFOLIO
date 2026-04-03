'use client';
import { FOOTER_LINKS } from "../../constants/footer";
import Image from "next/image";

const BottomIcons = () => {
  return (
    <div className="bottom-icons" id="bottom-icons-container">
      {FOOTER_LINKS.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <Image src={`/${link.icon}`} alt={link.name} width={24} height={24} />
        </a>
      ))}
    </div>
  );
};

export default BottomIcons;

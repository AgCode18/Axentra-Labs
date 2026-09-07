"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "917665227565";

  const message = encodeURIComponent(
    "Hi Axentra Labs, I'm interested in your services."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact Axentra Labs on WhatsApp"
      className="
        group fixed bottom-6 right-6 z-[9999]
        flex h-14 w-14 items-center justify-center
        rounded-full
        bg-[#25D366]
        text-white
        shadow-[0_0_18px_rgba(37,211,102,0.3)]
        transition-all duration-300 ease-out
        hover:-translate-y-1
        hover:scale-110
        hover:bg-[#20c963]
        hover:shadow-[0_0_35px_rgba(37,211,102,0.85)]
      "
    >
      <FaWhatsapp
        size={30}
        className="transition-transform duration-300 group-hover:scale-110"
      />
    </a>
  );
}
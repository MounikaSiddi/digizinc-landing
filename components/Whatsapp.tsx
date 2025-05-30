import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  return (
    <a
      href=""  // replace with your WhatsApp number in international format without +
      target="_blank"
      rel="noopener noreferrer"
      className="text-green-600 hover:text-green-800 text-3xl"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}

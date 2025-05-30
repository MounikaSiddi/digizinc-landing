import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  return (
    <a
    href="https://wa.me/919701563362"  // Updated with the WhatsApp number in international format
    target="_blank"
    rel="noopener noreferrer"
    className="text-green-600 hover:text-green-800 text-3xl"
    aria-label="Chat on WhatsApp"
  >
      <FaWhatsapp />
    </a>
  );
}

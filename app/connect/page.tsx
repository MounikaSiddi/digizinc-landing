import { Metadata } from 'next';
import DigitalBusinessCard from './DigitalBusinessCardClient';

export const metadata: Metadata = {
  title: "Connect with Bhargava Raj - Digizinc",
  description: "Connect with Bhargava Raj, the Founder & CEO of Digizinc. Get in touch, download contact details, and explore collaboration opportunities.",
  keywords: ["Bhargava Raj", "Digizinc", "contact", "connect", "founder", "CEO", "digital marketing", "branding"],
  openGraph: {
    title: "Connect with Bhargava Raj - Digizinc",
    description: "Connect with Bhargava Raj, the Founder & CEO of Digizinc. Get in touch, download contact details, and explore collaboration opportunities.",
    images: [
      {
        url: "https://digizinc.com/founder-image.jpg",
        width: 800,
        height: 600,
        alt: "Bhargava Raj, Founder & CEO of Digizinc",
      },
    ],
  },
};

const ConnectPage = () => {
  return <DigitalBusinessCard />;
};

export default ConnectPage;

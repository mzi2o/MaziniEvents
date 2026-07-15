import { MessageCircle } from "lucide-react";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { settings } from "@/data/settings";

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const link = generateWhatsAppLink(
    settings.whatsappNumber,
    "Hello Mazini Events, I would like to inquire about your services."
  );

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300 transform",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      )}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} className="fill-current" />
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-[#25D366]"></span>
      </span>
    </a>
  );
}

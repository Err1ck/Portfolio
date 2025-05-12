import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailJS from "@emailjs/browser";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    /*emailJS.sendForm(
      "service_n05ba9v",
      "template_1dwin8j",
      e.target,
      "CoYc9H6j3buU69f_7"
    );*/

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      e.target.reset();
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Ponte en <span className="text-primary">Contacto</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          ¿Tienes un proyecto en mente o te gustaría colaborar? No dudes en
          ponerte en contacto. Siempre estoy dispuesto a explorar nuevas
          oportunidades.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Información de contacto
            </h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div className="flex flex-col justify-between items-center w-[72%]">
                  <h4>Correo electrónico</h4>
                  <a
                    href="mailto:erick.a.cabezas.gallart@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    erick.a.cabezas.gallart@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div className="flex flex-col justify-between items-center w-[72%]">
                  <h4>Teléfono</h4>
                  <a
                    href="tel:+34666934846"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +34 666 93 48 47
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div className="flex flex-col justify-between items-center w-[72%]">
                  <h4>Ubicación</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Tarragona, Cataluña, España
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4 ">Mis redes</h4>
              <div className="flex space-x-4 justify-center">
                {/*
                <a href="https://www.linkedin.com/in/erickcabezas/" target="_blank">
                  <Linkedin />
                </a>
                */}
                <a href="https://www.instagram.com/er1ck.cg/" target="_blank">
                  <Instagram />
                </a>
                <a href="https://x.com/Erryck" target="_blank">
                  <Twitter />
                </a>
              </div>
            </div>
          </div>

          <div
            className="bg-card p-8 rounded-lg shadow-xs"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6">Envíame un mensaje</h3>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Tu nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary/80 text-gray-500"
                  placeholder="Nombre..."
                ></input>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Tu Correo
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary text-gray-500"
                  placeholder="name12AB@gmail.com"
                ></input>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Tu mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary text-gray-500"
                  placeholder="Hola, me gustaría hablar sobre..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

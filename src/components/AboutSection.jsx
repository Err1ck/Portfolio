import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {""}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Sobre <span className="text-primary"> Mí</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-4xl font-semibold">
              Apasionado por el desarrollo web
            </h3>
            <p className="text-muted-foreground">
              Especializado en el desarrollo de aplicaciones web modernas,
              accesibles, rápidas y adaptables a cualquier dispositivo.
            </p>
            <p className="text-muted-foreground">
              Me apasiona crear soluciones elegantes para problemas complejos y
              estoy en constante aprendizaje para mantenerme al día con las
              tecnologías web más actuales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {""}
                Contáctame
              </a>
              {/**Crear cv component */}
              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Descargar CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className=" font-semibold text-lg">Programación Web</h4>
                  <p className="text-muted-foreground">
                    Desarrollo de sitios y aplicaciones web adaptables con
                    tecnologías modernas.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className=" font-semibold text-lg">Diseño UI/UX</h4>
                  <p className="text-muted-foreground">
                    Diseño de interfaces intuitivas y experiencias de usuario
                    fluidas.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className=" font-semibold text-lg">
                    Gestión de Proyectos
                  </h4>
                  <p className="text-muted-foreground">
                    Dirigiendo proyectos desde su inicio hasta su finalización
                    con metodologías ágiles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

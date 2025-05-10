import { ArrowDown } from "lucide-react";

export const MainSection = () => {
  return (
    <section
      id="main"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className=" space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hola, soy</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Erick
            </span>
            <span className="text-gradient  opacity-0 animate-fade-in-delay-2">
              {" "}
              Cabezas
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Esta web es mi espacio personal para documentar y compartir lo que
            voy aprendiendo en el mundo del desarrollo web. Mi objetivo es
            seguir creciendo como programador y dejar constancia de cada paso,
            error y logro en el camino.
          </p>
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              Ver Mis Proyectos
            </a>
          </div>
        </div>
      </div>
      <div className=" absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Desliza</span>
        <ArrowDown className="H-5 W-5 text-primary " />
      </div>
    </section>
  );
};

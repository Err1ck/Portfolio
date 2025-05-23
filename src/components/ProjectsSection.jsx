import { ArrowRight, ExternalLink, Github } from "lucide-react";



const projects = [
  {
    id: 1,
    title: "Pancake Swap",
    description: "Replica de la web de Pancake Swap como proyecto de Bootcamp",
    image: "/projects/pancake-swap.png",
    tags: ["HTML", "CSS", "SCSS", "JavaScript"],
    demoUrl: "https://pancake-swap-roan.vercel.app/",
    gitHubUrl: "https://github.com/Develhope-e3/pancake-swap",
  },
  /*{
    id: 2,
    title: "Blog",
    description: "Pagina web hecha con MERN",
    image: "/projects/project2.png",
    tags: ["MongoDB", "Express", "React", "Next.js"],
    demoUrl: "#",
    gitHubUrl: "#",
  },*/
  /*{
    id: 3,
    title: "SOON",
    description: "Descripcion 3",
    image: "/projects/project3.png",
    tags: ["SOON", "SOON", "SOON"],
    demoUrl: "#",
    gitHubUrl: "#",
  },*/
];
export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Mis <span className="text-primary">Proyectos</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Aquí tienes algunos de mis proyectos más recientes. Cada uno fue
          cuidadosamente elaborado con atención al detalle, el rendimiento y la
          experiencia del usuario.
        </p>
        <div className="flex justify-center gap-6"/**className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" */
        >
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.gitHubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Err1ck"
          >
            Visita mi GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const projects = [
  {
    title: "CRM & Management Platform",
    desc: "A comprehensive customer relationship management system with analytics, task management, and automated workflows.",
    tech: ["Vue.js", "Node.js", "MongoDB", "Tailwind CSS"],
    gradient: "from-primary/40 to-primary/10",
    image: "/crm-website.png",
  },
  {
    title: "Sports Training Marketplace",
    desc: "An online marketplace connecting athletes with trainers, featuring scheduling, payments, and progress tracking.",
    tech: ["Nuxt.js", "Laravel", "MongoDB", "SCSS"],
    gradient: "from-primary/30 to-accent/20",
    image: "/sport-website.jpg"
  },
  {
    title: "Real Estate Web Platform",
    desc: "A property listing and management platform with advanced search, virtual tours, and agent dashboards.",
    tech: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
    gradient: "from-primary/20 to-primary/40",
    image: "/real-esteat-website.png"
  },
  {
    title: "Education & Learning Platform",
    desc: "An e-learning platform with course management, video streaming, quizzes, and student progress analytics.",
    tech: ["Vue.js", "Symfony", "MongoDB", "Bootstrap"],
    gradient: "from-accent/30 to-primary/20",
    image: "/learning-website.jpg"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          A selection of projects I've contributed to
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <Card
              key={i}
              className="group overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm"
            >
              {/* Abstract illustration */}
              <div className={`h-48 bg-gradient-to-br ${p.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 left-4 w-20 h-20 border-2 border-background/30 rounded-full" />
                  <div className="absolute bottom-6 right-8 w-32 h-32 border-2 border-background/20 rounded-full" />
                  <div className="absolute top-8 right-12 w-8 h-8 bg-background/20 rounded-lg rotate-45" />
                </div>
                {/* <span className="text-2xl font-bold text-background/60 font-['Space_Grotesk'] relative z-10">
                  0{i + 1}
                </span> */}
                <div className="object-bottom object-contain mt-40">
                <img src={p.image} alt="Image not found!" />
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <Badge key={t} variant="secondary" className="text-xs font-medium">
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Code2, Server, Database, Wrench } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const categories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["HTML", "CSS", "JavaScript", "Vue.js", "React.js", "Bootstrap", "Tailwind CSS", "SCSS"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MongoDB"],
  },
  {
    title: "CMS & Tools",
    icon: Wrench,
    skills: ["WordPress", "TypeScript"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Skills & <span className="text-gradient">Expertise</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          Technologies I work with to bring ideas to life
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Card
              key={cat.title}
              className="group hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <cat.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold text-lg mb-4">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {s}
                    </span>
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

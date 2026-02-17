import { Briefcase } from "lucide-react";

const responsibilities = [
  "Developing modern web applications with scalable frontend architectures",
  "Collaborating with designers and backend teams for seamless integration",
  "Implementing responsive UI, API integrations, and performance optimizations",
  "Writing clean, maintainable code following best practices",
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Work <span className="text-gradient">Experience</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          My professional journey so far
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-primary/20 ml-4 md:ml-8">
            <div className="relative pl-10 md:pl-14">
              {/* Dot */}
              <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                <Briefcase className="text-primary-foreground" size={12} />
              </div>

              <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-sm">
                <span className="text-sm text-primary font-medium">2022 – Present</span>
                <h3 className="text-xl font-bold mt-2">Web Developer</h3>
                <p className="text-muted-foreground font-medium mt-1">Zignuts Technolab</p>
                <ul className="mt-4 space-y-3">
                  {responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

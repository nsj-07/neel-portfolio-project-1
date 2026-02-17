import { GraduationCap, User } from "lucide-react";

const education = [
  { degree: "Master of Computer Applications (MCA)", year: "2020 – 2022" },
  { degree: "Bachelor of Computer Applications (BCA)", year: "2017 – 2020" },
];

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          About <span className="text-gradient">Me</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          Get to know my background and journey
        </p>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Bio */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <User className="text-primary" size={20} />
              </div>
              <h3 className="text-xl font-semibold">Who I Am</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              I'm a Full Stack Developer experienced in HTML, CSS, JavaScript, Vue.js, React.js, Node.js, and MongoDB. I'm passionate about creating intuitive UI/UX and high-performance web solutions that make a real impact.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With a strong foundation in both frontend and backend technologies, I build scalable applications that deliver exceptional user experiences. I thrive in collaborative environments and constantly seek to learn and adopt new technologies.
            </p>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap className="text-primary" size={20} />
              </div>
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <div className="relative border-l-2 border-primary/20 ml-5 space-y-8">
              {education.map((e, i) => (
                <div key={i} className="relative pl-8">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  <p className="text-sm text-primary font-medium">{e.year}</p>
                  <p className="font-semibold mt-1">{e.degree}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

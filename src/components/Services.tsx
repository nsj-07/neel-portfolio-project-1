import { Palette, Layout, Code, Layers, Globe } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const services = [
  { title: "UI/UX Design", desc: "User-centered, modern, and accessible designs that delight users.", icon: Palette },
  { title: "Web Design", desc: "Responsive and visually appealing layouts tailored to your brand.", icon: Layout },
  { title: "Frontend Development", desc: "Vue.js, React.js, and Nuxt.js based performant interfaces.", icon: Code },
  { title: "Full Stack Development", desc: "End-to-end application development from database to deployment.", icon: Layers },
  { title: "Website Development", desc: "Business, portfolio, and custom web solutions that scale.", icon: Globe },
];

export default function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-gradient">Services</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          What I can do for you
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Card
              key={s.title}
              className="group hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm text-center"
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <s.icon size={26} className="text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

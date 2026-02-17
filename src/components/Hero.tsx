import { ArrowDown, Sparkles, Code2, Layers, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const roles = ["Full Stack Developer", "UI/UX Enthusiast", "Web Architect"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-40">
      {/* Animated background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background to-accent/5" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[80px] animate-pulse [animation-delay:1s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      {/* Floating decorative icons */}
      <div className="absolute top-28 left-[12%] p-3 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 shadow-lg animate-bounce [animation-duration:3s]">
        <Code2 className="text-primary" size={20} />
      </div>
      <div className="absolute top-1/3 right-[8%] p-3 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 shadow-lg animate-bounce [animation-duration:4s] [animation-delay:0.5s]">
        <Layers className="text-primary" size={20} />
      </div>
      <div className="absolute bottom-1/3 left-[8%] p-3 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 shadow-lg animate-bounce [animation-duration:3.5s] [animation-delay:1s]">
        <Zap className="text-primary" size={20} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-40 lg:gap-56">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="text-sm font-medium text-foreground/80">Available for projects</span>
            </div>

            {/* Name */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.95] tracking-tight font-['Space_Grotesk']">
                {/* <span className="text-gradient">Neel</span>
                <br />
                <span className="text-foreground">Joshi</span> */}
                Full Stack Developer Crafting <span className="text-gradient">Intelligent</span> Web Experiences
              </h1>
            </div>

            {/* Typing role */}
            <div className="h-8 flex items-center justify-center lg:justify-start">
              <span className="text-lg md:text-xl font-medium text-primary font-['Space_Grotesk']">
                {displayed}
              </span>
              <span className="inline-block w-0.5 h-6 bg-primary ml-0.5 animate-pulse" />
            </div>

            {/* Tagline */}
            <p className="text-base md:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Building modern, scalable, and user-centric web applications with cutting-edge technologies.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
              <Button
                size="lg"
                onClick={() => scrollTo("projects")}
                className="rounded-full px-8 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-0.5"
              >
                View Portfolio
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollTo("contact")}
                className="rounded-full px-8 backdrop-blur-sm hover:-translate-y-0.5 transition-all duration-300"
              >
                Contact Me
              </Button>
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-8 justify-center lg:justify-start pt-4">
              {[
                { value: "3+", label: "Years Exp." },
                { value: "10+", label: "Projects" },
                { value: "5+", label: "Technologies" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-bold text-foreground font-['Space_Grotesk']">{stat.value}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Profile visual */}
          <div className="flex-shrink-0">
            <div className="relative group">
              {/* Outer glow ring */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-2xl group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-700" />

              {/* Profile circle */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary/20 via-card to-primary/10 border border-border/50 backdrop-blur-sm flex items-center justify-center shadow-2xl">
                <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-muted to-card flex items-center justify-center overflow-hidden">
                  <span className="text-6xl md:text-7xl font-bold text-primary/30 font-['Space_Grotesk'] select-none">
                    <img src="/my_img.PNG" alt="" />
                  </span>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-2 -right-2 p-3 bg-primary rounded-2xl shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="text-primary-foreground" size={22} />
              </div>

              {/* Orbiting dot */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full shadow-lg shadow-primary/50 animate-spin [animation-duration:8s] origin-[50%_160px] md:origin-[50%_200px]" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
          <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-muted-foreground/50 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}

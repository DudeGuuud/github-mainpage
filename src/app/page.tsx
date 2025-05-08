import Image from "next/image";
import { MovingGradient } from "@/components/ui/moving-gradient";
import { GlowingText } from "@/components/ui/glowing-text";
import { Card3d } from "@/components/ui/3d-card";
import { TechCard } from "@/components/ui/tech-card";
import { ProjectCard } from "@/components/ui/project-card";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconCode,
  IconDatabase,
  IconDeviceDesktop,
  IconBrain
} from "@tabler/icons-react";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <MovingGradient
        containerClassName="absolute inset-0 z-0"
        colors={["#0f172a", "#1e293b", "#334155", "#1e40af", "#1e3a8a"]}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <header className="mb-16 text-center">
          <div className="mx-auto mb-8 h-32 w-32 overflow-hidden rounded-full border-4 border-cyan-500/30 bg-slate-900 p-1 shadow-lg shadow-cyan-500/20">
            <Image
              src="https://github.com/identicons/github.png"
              alt="Profile"
              width={120}
              height={120}
              className="rounded-full"
            />
          </div>
          <GlowingText
            text="Your Name"
            className="mb-2 text-4xl sm:text-5xl"
            glowColor="cyan"
          />
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Full-Stack Developer | AI Enthusiast | Open Source Contributor
          </p>

          <div className="mt-6 flex justify-center space-x-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-slate-800 p-3 text-slate-200 transition-all hover:bg-slate-700 hover:text-cyan-400 hover:shadow-md hover:shadow-cyan-500/20"
            >
              <IconBrandGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-slate-800 p-3 text-slate-200 transition-all hover:bg-slate-700 hover:text-cyan-400 hover:shadow-md hover:shadow-cyan-500/20"
            >
              <IconBrandLinkedin size={24} />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-slate-800 p-3 text-slate-200 transition-all hover:bg-slate-700 hover:text-cyan-400 hover:shadow-md hover:shadow-cyan-500/20"
            >
              <IconBrandTwitter size={24} />
            </a>
          </div>
        </header>

        <section className="mb-16">
          <GlowingText
            text="About Me"
            className="mb-8 text-center text-3xl"
            glowColor="cyan"
          />
          <Card3d className="mx-auto max-w-3xl p-6 sm:p-8">
            <p className="mb-4 text-slate-300">
              Hi there! I&apos;m a passionate developer with expertise in building modern web applications.
              I love working with cutting-edge technologies and creating beautiful, functional user experiences.
            </p>
            <p className="text-slate-300">
              With a background in computer science and several years of industry experience,
              I specialize in full-stack development, AI integration, and cloud architecture.
              I&apos;m always looking to collaborate on interesting projects!
            </p>
          </Card3d>
        </section>

        <section className="mb-16">
          <GlowingText
            text="Skills & Technologies"
            className="mb-8 text-center text-3xl"
            glowColor="purple"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <TechCard
              title="Frontend"
              description="React, Next.js, TypeScript, Tailwind CSS, Framer Motion"
              icon={<IconDeviceDesktop size={24} />}
            />
            <TechCard
              title="Backend"
              description="Node.js, Express, Python, Django, GraphQL"
              icon={<IconCode size={24} />}
            />
            <TechCard
              title="Database"
              description="PostgreSQL, MongoDB, Redis, Supabase"
              icon={<IconDatabase size={24} />}
            />
            <TechCard
              title="AI & ML"
              description="TensorFlow, PyTorch, Hugging Face, OpenAI"
              icon={<IconBrain size={24} />}
            />
          </div>
        </section>

        <section className="mb-16">
          <GlowingText
            text="Featured Projects"
            className="mb-8 text-center text-3xl"
            glowColor="green"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="AI Image Generator"
              description="A web application that uses AI to generate images from text descriptions."
              tags={["React", "Node.js", "OpenAI"]}
              link="https://github.com/yourusername/project1"
            />
            <ProjectCard
              title="E-commerce Platform"
              description="A full-featured e-commerce platform with payment processing and inventory management."
              tags={["Next.js", "Stripe", "PostgreSQL"]}
              link="https://github.com/yourusername/project2"
            />
            <ProjectCard
              title="Real-time Chat App"
              description="A real-time chat application with end-to-end encryption and file sharing."
              tags={["React", "Socket.io", "Firebase"]}
              link="https://github.com/yourusername/project3"
            />
          </div>
        </section>

        <footer className="mt-16 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <p className="mt-2">
            Built with Next.js, Tailwind CSS, and Framer Motion. Inspired by Aceternity UI.
          </p>
        </footer>
      </div>
    </div>
  );
}

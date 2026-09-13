import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Mail, ExternalLink, Code2, Palette, Rocket } from "lucide-react";

const projects = [
  {
    title: "Проект 1",
    description: "Современное веб-приложение на Next.js и Shadcn UI.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    link: "#",
  },
  {
    title: "Проект 2",
    description: "Адаптивный дизайн для всех устройств с поддержкой тёмной темы.",
    tags: ["React", "Shadcn UI", "Framer Motion"],
    link: "#",
  },
  {
    title: "Проект 3",
    description: "Full-stack приложение с авторизацией, базой данных и API.",
    tags: ["Full Stack", "Prisma", "PostgreSQL"],
    link: "#",
  },
];

const skills = [
  { name: "Frontend разработка", icon: Code2, items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { name: "UI/UX дизайн", icon: Palette, items: ["Figma", "Shadcn UI", "Адаптивный дизайн"] },
  { name: "Инструменты", icon: Rocket, items: ["Git", "Vercel", "Docker", "CI/CD"] },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Секция Hero */}
      <section className="container mx-auto px-4 py-24 md:py-32">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-3xl font-bold">Я</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Привет, я <span className="text-primary">Разработчик</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Я full-stack разработчик, создаю элегантные веб-приложения на современном стеке технологий.
          </p>
          <div className="flex gap-4">
            <Button asChild>
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" /> Связаться
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Секция проектов */}
      <section id="projects" className="container mx-auto px-4 py-24">
        <h2 className="text-3xl font-bold text-center mb-12">Мои проекты</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col">
              <CardHeader>
                <div className="aspect-video rounded-md bg-muted mb-4 flex items-center justify-center">
                  <span className="text-muted-foreground">Превью проекта</span>
                </div>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                <Button variant="ghost" className="w-full" asChild>
                  <a href={project.link}>
                    Подробнее <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Секция навыков */}
      <section id="skills" className="container mx-auto px-4 py-24">
        <h2 className="text-3xl font-bold text-center mb-12">Навыки</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <Card key={skill.name}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Icon className="h-6 w-6 text-primary" />
                    <CardTitle className="text-lg">{skill.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <Badge key={item} variant="outline">{item}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Секция контактов */}
      <section id="contact" className="container mx-auto px-4 py-24">
        <Card className="max-w-2xl mx-auto text-center">
          <CardHeader>
            <CardTitle className="text-2xl">Давайте работать вместе</CardTitle>
            <CardDescription>
              Если у вас есть интересный проект или идея — свяжитесь со мной.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button size="lg" asChild>
              <a href="mailto:hello@example.com">
                <Mail className="mr-2 h-4 w-4" /> hello@example.com
              </a>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Футер */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Портфолио разработчика. Сделано на Next.js и Shadcn UI.</p>
        </div>
      </footer>
    </div>
  );
}
import { projectsData } from "@/data/projects";
import ProjectDetails from "./ProjectDetails";

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  return <ProjectDetails slug={slug} />;
}

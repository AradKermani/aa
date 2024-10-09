//app/projects/[id]/page.ts
"use client";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { ProjectContext } from "../../../context/ProjectContext";
import Link from "next/link";
import Image from "next/image";

const ProjectItem = () => {
  const pathname = usePathname();
  const { projects, loading, error } = useContext(ProjectContext) || {
    loading: true,
  };

  const id = pathname.split("/").pop(); 

  if (loading) return <div>Loading...</div>; 
  if (error) return <div>Error: {error}</div>; 

  if (!id) return <div>No ID found</div>;

  const project = projects.find((project) => project.id === Number(id));

  if (!project) return <div>Project not found</div>; 

  return (
    <div className="project-item-page-box">
      <h2>Project Item</h2>
      <div className="project-item-page">
        <div className="box">
          <Image
            src={project.image}
            alt={project.name}
            width={300}
            height={300}
            // layout="responsive"
          />
        </div>
        <div className="box">
          <div className="title">{project.name}</div>
          <p className="description">{project.description}</p>
          <p className="brand">Brand: {project.brand}</p>
          <p className="category">Category: {project.category}</p>
          <Link href="/projects" className="back-link">
            <button>Back to Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;

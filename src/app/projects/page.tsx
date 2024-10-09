import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import Loader from "../../components/loading";

const Header = dynamic(() => import("../../components/Header"), {
  suspense: true,
});
const Footer = dynamic(() => import("../../components/Footer"), {
  suspense: true,
});
const ProjectsHeroSection = dynamic(() => import("../../components/projects/ProjectsHeroSection"), {
  suspense: true,
});
const ProjectList = dynamic(() => import("../../components/projects/ProjectsList"), {
  suspense: true,
});

const Projects = () => {
  return (
    <Suspense fallback={<Loader />}>
      <div className="projects-page">
        <Header />
        <ProjectsHeroSection />
        <ProjectList />
        <Footer />
      </div>
    </Suspense>
  );
};

export default Projects;

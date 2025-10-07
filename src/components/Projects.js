import React from "react";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-vh-100 text-light py-5"
    >
      <h2 className="section-title text-center m-5">Projects</h2>
      <div className="row gy-4">
        {projects.map((p) => (
          <div className="col-md-4" key={p.id}>
            <ProjectCard {...p} />
          </div>
        ))}
      </div>
    </section>
  );
}

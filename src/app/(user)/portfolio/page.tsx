import React from "react";
import { IProject } from "../../../../type";
import { getAllProject } from "@/sanity/api/project";

import ProjectCard from "@/app/components/ProjectCard";

async function getAllProjects() {
  try {
    const data: IProject[] = await getAllProject();
    return data;
  } catch (err) {
    throw new Error("Something went wrong! Please try again later");
  }
}

export default async function Portfolio() {
  const data: IProject[] = await getAllProjects();
  return (
    <section className="max-padd-container">
      <h1 className="text-3xl font-semibold lg:text-4xl pt-5">Portfolio</h1>
      <p className="text-muted-foreground mt-2">
        Check out what projects I have created
      </p>
      <div className="py- grid grid-cols-1 md:grid-cols-2 gap-4 sm:grid-6 md:gap-8 lg:gap-12">
        {data?.map((project: IProject) => {
          return <ProjectCard project={project} key={project._id} />;
        })}
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { IProject } from "../../../type";

interface Props {
  project: IProject;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{
        scale: "100%",
        transition: { duration: 0.4, delay: 0.2 },
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <a
        href={project.linkToBuild}
        target="_blank"
        key={project._id}
        className="group block shadow-md rounded-md"
      >
        <div className="aspect-w-16 aspect-h-12 overflow-hidden relative shadow-md">
          <Image
            src={project?.imgUrl}
            alt={project?.title}
            fill
            className="object-cover group-hover:scale-125 transition-transform duration-500 ease-in-out"
            priority
          />
        </div>
        <div className="mt-4 p-2">
          <h2 className="font-medium text-lg hover:underline">
            {project?.title}
          </h2>
          <p className="mt-1 text-muted-foreground line-clamp-1">
            {project?.summary}
          </p>
          <div className="mt-3 flexCenter flex-wrap gap-1">
            {project?.technologies?.map((tech, i) => (
              <div
                key={i}
                className="flex flex-row rounded-md bg-primary/10 p-1 ring-2 ring-inset ring-primary/20 "
              >
                <div className="flexCenter rounded-full">
                  <Image
                    src={tech?.imgUrl}
                    alt={tech?.title}
                    width={20}
                    height={20}
                    className="object-cover rounded-full w-[20px] h-[20px]"
                  />
                </div>
                <span className="inline-flex items-center  px-3 py-1.5 text-xs sm:text-sm font-medium text-primary">
                  {tech.title}
                </span>
              </div>
            ))}
          </div>
          <br />
        </div>
      </a>
    </motion.div>
  );
};

export default ProjectCard;

import Image from "next/image";
import React from "react";
import { IProject } from "../../../type";
import { getFavoriteProject } from "@/sanity/api/project";
import ProjectCard from "./ProjectCard";

const FavoriteProject = async () => {
  const data: IProject[] = await getFavoriteProject();
  return (
    <div className="py-10 grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 grid-cols-1">
      {data.map((item, i) => (
        <ProjectCard key={i} project={item} />
        // <a
        //   href={item.linkToBuild}
        //   key={item._id}
        //   className="group block"
        //   target="_blank"
        // >
        //   <div className="aspect-w-16 aspect-h-12 overflow-hidden rounded-2xl relative">
        //     <Image
        //       src={item.imgUrl}
        //       alt="Image Description"
        //       fill
        //       className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-2xl"
        //     />
        //   </div>
        //   <div className="mt-4">
        //     <h2 className="font-medium text-lg hover:underline">
        //       {item.title}
        //     </h2>
        //     <p className="mt-1 text-muted-foreground line-clamp-3">
        //       {item.summary}
        //     </p>
        //     <div className="mt-3 flex flex-wrap gap-2">
        //       {item.tags.map((tagItem, index) => (
        //         <span
        //           className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1.5 text-xs sm:text-sm font-medium text-primary ring-2 ring-inset ring-primary/20"
        //           key={index}
        //         >
        //           {tagItem}
        //         </span>
        //       ))}
        //     </div>
        //   </div>
        // </a>
      ))}
    </div>
  );
};

export default FavoriteProject;

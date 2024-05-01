export interface IProject {
  _id?: string;
  title: string;
  summary: string;
  imgUrl: string;
  linkToBuild: string;
  technologies: ITechnology[];
}
export interface ITechnology {
  _id?: string;
  title: string;
  imgUrl: string;
}

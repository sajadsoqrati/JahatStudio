export type ProjectsType = {
  id: number;
  name: string;
  src: string;
  category: string;
};
export const projectsData: ProjectsType[] = [
  {
    id: 1,
    name:"Phonix",
    src:"http://localhost:5000/images/projects/Billboard.jpg",
    category:"Billboard"
  },
  {
    id: 2,
    name:"Jewelry",
    src:"http://localhost:5000/images/projects/Photography.jpg",
    category:"Photography"
  },
  {
    id: 3,
    name:"CVA LoGo",
    src:"http://localhost:5000/images/projects/Branding.jpg",
    category:"Branding"
  },
  {
    id: 4,
    name:"Ibit",
    src:"http://localhost:5000/images/projects/Print.jpg",
    category:"Print"
  },{
    id: 5,
    name:"jahat",
    src:"http://localhost:5000/images/projects/Jwl 2.jpg",
    category:"Photography"
  },{
    id: 6,
    name:"Jewelry",
    src:"http://localhost:5000/images/projects/Jahat.jpg",
    category:"Photography"
  },
  {
    id: 7,
    name:"Betonic",
    src:"http://localhost:5000/images/projects/Betonicc.jpg",
    category:"Video"
  }
];

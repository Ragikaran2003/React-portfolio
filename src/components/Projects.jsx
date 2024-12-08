import websiteImg1 from "../assets/ecommerce-websites.jpg";
import websiteImg2 from "../assets/food-ecommerce.jpg";
import websiteImg3 from "../assets/website-blog.jpg";

export const Projects = () => {
  const config = {
    projects: [
      {
        image: websiteImg1,
        description: "A Ecommerce Website. Built with MERN stack.",
        link: "",
      },
      {
        image: websiteImg2,
        description:
          "Food Ecommerce Website Like Swiggy . Built with Angular & NodeJs",
        link: "",
      },
      {
        image: websiteImg3,
        description: "Basic Blog Website Built with Node Js & MongoDB",
        link: "",
      },
    ],
  };
  return (
    <section
      className="flex flex-col py-20 px-5 justify-center bg-primary text-white"
      id="projects"
    >
      <div className="w-full">
        <div className="px-10 flex flex-col py-5">
          <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[140px] font-bold">
            Projects
          </h1>
          <p>
            These are some of my best projects. I have built these with React,
            MERN and vanilla CSS. Check them out.
          </p>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col md:flex-row px-10 gap-5">
          {config.projects.map((project,index) => (
            <div className="relative" key={index}>
              <img className="h-[200px] w-[400px]" src={project.image} alt="" />
              <div className="project-dec">
                <p className="text-center px-5 py-5">
                  {project.description}
                </p>
              <div className="flex justify-center">
                <a className="btn" href={project.link} target="_blank">View Project</a>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

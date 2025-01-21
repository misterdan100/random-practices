import { getProjects } from "@/actions";
import { ProjectItem } from "./projectItem/ProjectItem";

export default async function page() {
  const projects = await getProjects();

  if (!projects) return <p>There are not projects to show</p>;

  return (
    <div className="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full">
      <div className=" mb-4">
        <h3 className="text-xl font-bold leading-none text-gray-900">
          Todo list
        </h3>

        <div className="flex flex-col mt-8">
          <div className="overflow-x-auto rounded-lg">
            <div className="align-middle inline-block min-w-full">
              <div className="shadow overflow-hidden sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">

                  {/* <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Tasks
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      ></th>
                      <th
                        scope="col"
                        className="px-4 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      ></th>
                    </tr>
                  </thead> */}

                  <tbody className="bg-white">
                    {/* Render tasks -------- */}
                    {projects.map( project => <ProjectItem 
                        key={project.id}
                        project={project}
                    />)}
                    
                  </tbody>

                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

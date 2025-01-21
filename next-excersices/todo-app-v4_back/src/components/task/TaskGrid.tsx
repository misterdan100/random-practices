import TaskItem from "./TaskItem";

export default function TaskGrid() {
  
  
  return (
    <div className="flex flex-col mt-8">
          <div className="overflow-x-auto rounded-lg">
            <div className="align-middle inline-block min-w-full">
              <div className="shadow overflow-hidden sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
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
                      >

                      </th>
                      <th
                        scope="col"
                        className="px-4 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">

                    {/* Render tasks -------- */}
                    <TaskItem />
                    <TaskItem />
                    <TaskItem />
                    <TaskItem />
                    

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
  )
}
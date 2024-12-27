import React from "react";
import { FileCode2, Slack, LucideMountainSnow,Github, SquareCode, Shapes } from "lucide-react";

const projects = [
  { id: 1, name: "Asana", budget: "$2,500", status: "working", completion: 60, icon: <Shapes/>,color:"text-lime-500"},
  { id: 2, name: "Github", budget: "$5,000", status: "done", completion: 100, icon: <Github/>,color:"text-gray-500" },
  { id: 3, name: "Atlassian", budget: "$3,400", status: "canceled", completion: 30, icon: <LucideMountainSnow />,color:"text-blue-500" },
  { id: 4, name: "Bootstrap", budget: "$14,000", status: "working", completion: 80, icon: <SquareCode/>,color:"text-yellow-500" },
  { id: 5, name: "Slack", budget: "$1,000", status: "canceled", completion: 0, icon: <Slack />,color:"text-orange-500" },
  { id: 6, name: "Devto", budget: "$2,300", status: "done", completion: 100, icon: <FileCode2 />,color:"text-violet-500" },
];

export default function Projectstable() {
  return (
    <div className="m-5 rounded-lg">
      <div className="bg-white rounded-lg">
        <div className="bg-pink-500 text-white px-8 py-4 rounded-t-lg font-bold text-lg">
          Projects Table
        </div>
        <table className="w-full table-fixed rounded-lg">
          <thead>
            <tr className="text-gray-500 border-b bg-gray-100">
              <th className="w-1/4 p-3 text-left">PROJECT</th>
              <th className="w-1/4 p-3 text-left">BUDGET</th>
              <th className="w-1/4 p-3 text-left">STATUS</th>
              <th className="w-1/4 p-3 text-left">COMPLETION</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="hover:bg-gray-50 hover:rounded-b-lg">
                <td className={`p-3 flex items-center gap-2 ${project.color}`}>
                  {project.icon}
                  {project.name}
                </td>
                <td className="p-3">{project.budget}</td>
                <td
                  className={`p-3 capitalize ${
                    project.status === "done" ? "text-green-500" : project.status === "canceled" ? "text-red-500" : "text-blue-500"
                  }`}
                >
                  {project.status}
                </td>
                <td className="p-3">
                  <div className="flex items-center gap-2">
                    <span>{project.completion}%</span>
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div
                        className={`h-2 rounded-full ${
                          project.status === "done" ? "bg-green-500" : project.status === "canceled" ? "bg-red-500" : "bg-blue-500"
                        }`}
                        style={{ width: `${project.completion}%` }}
                      ></div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

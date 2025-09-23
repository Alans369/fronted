import { useEffect } from "react";
import { useFormStatus } from "react-dom"


function CategoriasTable() {


    useEffect(() => {
   
     },[]);

    

  return (
    <div>
        <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100 whitespace-nowrap">
          <tr>
            <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
              Name
            </th>
            <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
              Email
            </th>
            <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
              Role
            </th>
            <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
              Joined At
            </th>
            <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200 whitespace-nowrap">
          <tr>
            <td className="px-4 py-4 text-sm text-slate-900 font-medium">
              John Doe
            </td>
            <td className="px-4 py-4 text-sm text-slate-600 font-medium">
              john@example.com
            </td>
            <td className="px-4 py-4 text-sm text-slate-600 font-medium">
              Admin
            </td>
            <td className="px-4 py-4 text-sm text-slate-600 font-medium">
              2022-05-15
            </td>
            <td className="px-4 py-4 text-sm">
              <button className="cursor-pointer text-blue-600 font-medium mr-4">Edit</button>
              <button className="cursor-pointer text-red-600 font-medium">Delete</button>
            </td>
          </tr>

          <tr>
            <td className="px-4 py-4 text-sm text-slate-900 font-medium">
              Jane Smith
            </td>
            <td className="px-4 py-4 text-sm text-slate-600 font-medium">
              jane@example.com
            </td>
            <td className="px-4 py-4 text-sm text-slate-600 font-medium">
              User
            </td>
            <td className="px-4 py-4 text-sm text-slate-600 font-medium">
              2022-07-20
            </td>
            <td className="px-4 py-4 text-sm">
              <button className="cursor-pointer text-blue-600 font-medium mr-4">Edit</button>
              <button className="cursor-pointer text-red-600 font-medium">Delete</button>
            </td>
          </tr>

          <tr>
            <td className="px-4 py-4 text-sm text-slate-900 font-medium">
              Alen doe
            </td>
            <td className="px-4 py-4 text-sm text-slate-600 font-medium">
              alen@example.com
            </td>
            <td className="px-4 py-4 text-sm text-slate-600 font-medium">
              User
            </td>
            <td className="px-4 py-4 text-sm text-slate-600 font-medium">
              2022-07-21
            </td>
            <td className="px-4 py-4 text-sm">
              <button className="cursor-pointer text-blue-600 font-medium mr-4">Edit</button>
              <button className="cursor-pointer text-red-600 font-medium">Delete</button>
            </td>
          </tr>

          <tr>
            <td className="px-4 py-4 text-sm text-slate-900 font-medium">
              Dustin
            </td>
            <td className="px-4 py-4 text-sm text-slate-600 font-medium">
              dustin@example.com
            </td>
            <td className="px-4 py-4 text-sm text-slate-600 font-medium">
              User
            </td>
            <td className="px-4 py-4 text-sm text-slate-600 font-medium">
              2022-07-21
            </td>
            <td className="px-4 py-4 text-sm">
              <button className="cursor-pointer text-blue-600 font-medium mr-4">Edit</button>
              <button className="cursor-pointer text-red-600 font-medium">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
      
    </div>
  )
}

export default CategoriasTable

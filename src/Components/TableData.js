import React, { useState } from "react";

function TableData({ slicedData }) {
 
  const [selectAll,setSelectAll]=useState(false)

  const convertDateFormat = (date) => {
    const dateStr = date;
    const [day, month, year] = dateStr.split("/");
    const dateObj = new Date(`${year}-${month}-${day}`);
    const formattedDate = dateObj.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    return formattedDate;
  };

  const checkItem=(isChecked,item)=>{
    item.isChecked=isChecked
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            <input type="checkbox" onChange={(e)=>setSelectAll(e.target.checked)}/>
          </th>
          <th>#</th>
          <th>Project Name</th>
          {/* <th>PM</th> */}
          <th>Status</th>
          <th>Last Update</th>
          <th>Resources</th>
          <th>Project Timeline</th>
          <th>Estimation</th>
        </tr>
      </thead>
      <tbody>
        {slicedData.map((item) => (
          <tr key={item.id}>
            <td className="text-center">
              <input type="checkbox" checked={selectAll || item.isChecked} onChange={(e)=>checkItem(e.target.checked,item)}/>
            </td>
            <td className="text-center">{item.id}</td>
            <td className="text-center">{item.projectName}</td>
            <td className="text-center">{item.status}</td>
            <td className="text-center">
              {convertDateFormat(item.lastUpdate)}
            </td>
            <td className="text-center">{item.resources}</td>
            <td className="text-center mx-2">
              <p className="">
                <span className="bg-secondary text-white px-1">
                  {convertDateFormat(item.projectTimeLine.startDate)}
                </span>
                <span className="mx-4  px-1 pb-1 ">{`>`}</span>
                <span className="bg-secondary text-white px-1">
                  {convertDateFormat(item.projectTimeLine.endDate)}
                </span>
              </p>
            </td>
            <td className="text-center">{item.estimation}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableData;

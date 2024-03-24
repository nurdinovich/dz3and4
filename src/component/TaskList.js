import React from "react";

const TaskList = ({ tasks }) => {
  return (
    <div className="container">
      <table>
        <tr>
          <th>Today</th>
          <th>Tomorrow</th>
          <th>Day after tomorrow</th>
        </tr>
        <tr>
          <td>Take a walk</td>
          <td>I'll go to iftar</td>
          <td>I'll ride with the horse</td>
        </tr>

        {tasks.map((task, index) => (
          <tr>
            <th key={index}>{task}</th>
            <td key={index}>{task}</td>
            <th key={index}>{task}</th>
          </tr>
          
        ))}
      </table>
    </div>
  );
};

export default TaskList;

import { useState } from "react"; //Enter

const ToDo = () => {
  const [value, setValue] = useState("");
  const [editValue, setEditValue] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [isSave, setIsSave] = useState(false);
  const [index, setIndex] = useState(null);

  const handleClick = () => {
    setValue("");
    setTaskList([...taskList, value]);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const container = {
    width: "40vw",
    border: "3px solid black",
    borderRadius: 15,
    padding: "20px 10px",
    margin: 10
  };

  const handleDelete = (index) => {
    const array = [...taskList];
    array.splice(index, 1);
    setTaskList(array);
  };

  const handleEdit = (task, index) => {
    setIndex(index);
    setIsSave(true);
  };

  const handleSave = () => {
    const newTaskList = [...taskList];
    newTaskList[index] = editValue;
    setTaskList(newTaskList);
    setIsSave(false);
    setEditValue("");
  };

  return (
    <div>
      <input
        type="text"
        placeHolder="Enter Task"
        value={value}
        onChange={handleChange}
      />

      <button onClick={handleClick} disabled={value?.trim() === ""}>
        Add
      </button>

      {taskList &&
        taskList.map((task, i) => {
          return (
            <div style={container}>
              {isSave && i === index ? (
                <input
                  type="text"
                  placeHolder="Enter Task"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
              ) : (
                <span>{task}</span>
              )}
              <button
                style={{ float: "right" }}
                onClick={() => handleDelete(i)}
              >
                Delete{" "}
              </button>
              {isSave && i === index ? (
                <button onClick={handleSave}>Save</button>
              ) : (
                <button
                  style={{ float: "right" }}
                  onClick={() => handleEdit(task, i)}
                >
                  Edit{" "}
                </button>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default ToDo;

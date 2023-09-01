import React, { useState } from "react";
import { Task } from "./Task"; // Task 타입을 별도의 파일에서 불러옴

const TodoList: React.FC = () => {
  // 할 일 목록을 상태로 관리
  const [tasks, setTasks] = useState<Task[]>([]);

  // 입력창의 값 상태로 관리
  const [inputValue, setInputValue] = useState<string>("");

  // 입력창의 값이 변경될 때마다 호출되는 함수
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // 입력창에서 키를 눌렀을 때 호출되는 함수. 엔터키를 누르면 새 할 일을 추가함.
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      if (tasks.length >= 7) {
        alert("더 추가 못함");
        return;
      }

      const newTask: Task = {
        id: Date.now(), // 고유한 ID로 현재 시간을 사용
        text: inputValue,
        checked: false,
      };
      setTasks([newTask, ...tasks]); // 새로운 할 일을 기존 목록 앞에 추가
      setInputValue(""); // 입력창 초기화
    }
  };

  // 체크박스를 클릭하여 할 일의 완료 상태를 토글하는 함수
  const toggleTask = (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, checked: !task.checked } : task
    );
    setTasks(updatedTasks);
  };

  // 할 일을 삭제하는 함수
  const deleteTask = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li key={task.id} style={{ display: "flex", alignItems: "center" }}>
            {/* 할 일의 텍스트 표시. 완료된 경우에는 중간 선을 그어서 표시 */}
            <span
              style={{
                textDecoration: task.checked ? "line-through" : "none",
                color: task.checked ? "gray" : "black",
                marginRight: "10px",
                flexGrow: 1,
              }}
            >
              {index + 1}. {task.text}
            </span>
            {/* 할 일 완료 상태를 토글하는 체크박스 */}
            <input
              type="checkbox"
              checked={task.checked}
              onChange={() => toggleTask(task.id)}
              style={{ marginRight: "10px" }}
            />
            {/* 할 일을 삭제하는 버튼 */}
            <button onClick={() => deleteTask(task.id)}>삭제</button>
          </li>
        ))}
      </ul>
      {/* 새로운 할 일을 입력하는 창 */}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="할 일을 입력하세요..."
      />
    </div>
  );
};

export default TodoList;

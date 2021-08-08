import React from "react";
import PropTypes from "prop-types";

TodoList.propTypes = {
  todoProps: PropTypes.array,
  onTodoClick: PropTypes.func,
};

// Nếu props todoProps hoặc OnTodoClick không đc truyền xuống thì giá trị mặc định là [] hoặc onClick = null
TodoList.defaultProps = {
  todoProps: [],
  onTodoClick: null,
};

function TodoList(props) {
  const { todoProps, onTodoClick } = props;

  const handleClick = (item) => {
    if (onTodoClick) {
      onTodoClick(item);
    }
  };
  return (
    <ul className="todo-list">
      {/* Duyệt mảng todos và trả về danh sách title */}
      {todoProps.map((item) => (
        <li onClick={() => handleClick(item)} key={item.id}>
          {item.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;

// -----Các bước thực hiện-----
// Sử dụng 2 file là App.js và index.jsx
// Hướng dẫn trong file docs phần 4

// Cứ cho render jsx ra trước
// truyền state -> props từ app.js sang index.jsx
// nhận và check dữ liệu bằng propTypes và gán dữ liệu mặc đinh bằng defaultProps
// clone props
// duyệt mảng todoProps và xuất ra title

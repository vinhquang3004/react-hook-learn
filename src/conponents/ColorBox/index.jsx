//rsfp  --> snippets
import React, { useState } from "react";
import './ColorBox.scss';

ColorBox.propTypes = {};
// const handleBoxClick()=> {
// }

const getRandomColor = () => {
  const colorList = ["black", "blue", "green", "red", "yellow"];
  const randomIndex = Math.floor(Math.random() * colorList.length);
  return colorList[randomIndex];
};

function ColorBox() {
  //khoi tao useState
  const [colorBox, setColorBox] = useState(() => {
    // Lấy dữ liệu từ localStorage làm giá trị initial
    const initColor = localStorage.getItem("box_color") || "green";
    return initColor;
  });

  const handleBoxClick = () => {
    const newColor = getRandomColor();
    setColorBox(newColor);
    // Lưu random color vừa khởi tạo vào trong localStorage
    localStorage.setItem("box_color", newColor);
  };
  //render len web -> xu li click
  return (
    <div
      className="color-box"
      onClick ={handleBoxClick}
      style = {{backgroundColor: colorBox}}
    >
      click to change background color
    </div>
  );
}

export default ColorBox;

// -----Bai tap 1: click để đổi màu box-----
//  cac buoc thuc hien:
//  render div len web
//  Khai bao useState
//  truyen state vao div
//  xu ly onClick (handleBoxClick)
//  handleBoxClick --> setState

//  -----Bai tap 2: giữ lại màu khi render lại trang-----
//  lưu lại màu khi onLick trong localStorage
//  khởi tạo biến init vào trong useState

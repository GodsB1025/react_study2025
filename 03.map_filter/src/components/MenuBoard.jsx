import React, { useState } from "react";
import menuData from "../assets/data/coffee_menu.json";
import MenuItem from "./MenuItem";
import MenuNav from "./MenuNav";

const MenuBoard = () => {
    const [menus, setMenus] = useState(menuData);

    const menuFilter = (cate) => {
        if (cate === "All") {
            setMenus(menuData);
        } else {
            setMenus(menuData.filter((menu) => menu.category === cate));
        }
    };

    return (
        <div className="menu-board">
            <h1>메뉴판</h1>
            <MenuNav onFilter={menuFilter} />
            <div className="menu-list">
                {menus.map((menu) => (
                    <MenuItem key={menu.id} info={menu} />
                ))}
            </div>
        </div>
    );
};

export default MenuBoard;

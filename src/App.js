import React, { useState } from "react";
import Menu from "./menuComponent/Menu";
import Categories from "./menuComponent/Categories";
import items from "./data";

const App = () => {
  const allCategories = items.map((item) => item.category);
  const uniqueCategories = ["all", ...new Set(allCategories)];

  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCcategories] = useState(uniqueCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="section menu">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} categories={categories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default App;

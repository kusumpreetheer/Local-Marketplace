"use client"

import { useEffect, useState } from "react";
import { HelpDesk } from "@/public/assets/icons/HelpDesk";
import { TableBell } from "@/public/assets/icons/TableBell";
import { Technical } from "@/public/assets/icons/Technical";
import { Professional } from "@/public/assets/icons/Professional";
import { Creative } from "@/public/assets/icons/Creative";
import { Logistic } from "@/public/assets/icons/Logistic";
import { Collaboratory } from "@/public/assets/icons/Collaboratory";
import { Clinic } from "@/public/assets/icons/Clinic";
import { Tools } from "@/public/assets/icons/Tools";

const CategoryFilter = ({onCategorySelect}: {onCategorySelect: (category: string) => void}) => {
  const [categories, setCategories] = useState<{_id: string; name: string}[]>([
    {_id: "1", name: "Home"},
    {_id: "2", name: "Personal"},
    {_id: "3", name: "Tech"},
    {_id: "4", name: "Advisory"},
    {_id: "5", name: "Creative"},
    {_id: "6", name: "Logistic"},
    {_id: "7", name: "Collab"},
    {_id: "8", name: "Health"}
  ]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const icons: { [key: string]: JSX.Element } = {
    "All": <TableBell />,
    "Home": <Tools />,
    "Personal": <HelpDesk />,
    "Tech": <Technical />,
    "Advisory": <Professional />,
    "Creative": <Creative />,
    "Logistic": <Logistic />,
    "Collab": <Collaboratory />,
    "Health": <Clinic />
  }

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
    if (category == "All") { category = "Recommendations" }
    onCategorySelect(category);
  };

  const FilterCard = ({ category }: { category: string }) => {
    return (
      // each card has the same width
      <div onClick={() => handleSelectCategory(category)}  
          className={`hover-scale category-filter-card ${category === selectedCategory ? "bg-secondary" : "bg-transparent hover:bg-secondary-light"}`}>
          <div className="h2-bold">{icons[category]}</div>
        <div className="p6-regular h-[20%] text-[16px] text-center leading-4 tracking-wide">{category}</div>
      </div>
    )
  }

  return (
    <div className="flex gap-x-2 pl-4 pr-0 pb-2 pt-3 overflow-x-auto scrollbar-hide">
      <FilterCard category="All" />
      {categories.map(category => (
        <FilterCard key={category._id} category={category.name} />
      ))}
    </div>
  )
}

export default CategoryFilter;
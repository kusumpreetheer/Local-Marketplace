"use client"

import { use, useEffect, useRef, useState } from "react";
import { HelpDesk } from "@/public/assets/icons/HelpDesk";
import { TableBell } from "@/public/assets/icons/TableBell";
import { Technical } from "@/public/assets/icons/Technical";
import { Professional } from "@/public/assets/icons/Professional";
import { Creative } from "@/public/assets/icons/Creative";
import { Logistic } from "@/public/assets/icons/Logistic";
import { Collaboratory } from "@/public/assets/icons/Collaboratory";
import { Clinic } from "@/public/assets/icons/Clinic";
import { Tools } from "@/public/assets/icons/Tools";
import Category, { ICategory } from "@/lib/database/models/category.model";
import { ArrowLeft } from "@/public/assets/icons/ArrowLeft";
import { ArrowRight } from "@/public/assets/icons/ArrowRight";

type CategoryFilterProps = {
  categories: ICategory[];
  onCategorySelect: (categoryId: string) => void;
}

// rename categories to parentCategories
const CategoryFilter = ({ categories, onCategorySelect }: CategoryFilterProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Recommendations");

  // Icons for each category
  const icons: { [key: string]: JSX.Element } = {
    "Recommendations": <TableBell />,
    "Home": <Tools />,
    "Personal": <HelpDesk />,
    "Tech": <Technical />,
    "Advisory": <Professional />,
    "Creative": <Creative />,
    "Logistic": <Logistic />,
    "Collab": <Collaboratory />,
    "Health": <Clinic />,
    "Tutor": <HelpDesk />
  }

  // Handle category selection, sending the category id to the parent component
  const handleSelectCategory = (category: { _id: string, name: string }) => {
    setSelectedCategory(category.name);
    onCategorySelect(category._id);
  };

  // Filter card component
  const FilterCard = ({ category }: { category: { _id: string, name: string } }) => {
    return (
      // each card has the same width
      <div onClick={() => handleSelectCategory(category)}
        className={`hover-scale category-filter-card ${category.name === selectedCategory ? "bg-secondary" : "bg-transparent hover:bg-secondary-light shadow-none"}`}>
        <div className="h2-bold">{icons[category.name]}</div>
        <div className="p6-regular h-[20%] text-[16px] text-center leading-4 tracking-wide">{category._id === "recommendations" ? "All" : category.name}</div>
      </div>
    )
  }

  const containerRef = useRef<HTMLDivElement>(null);

  //scroll by function
  const scrollBy = (offset: number) => {
    if (containerRef.current) { containerRef.current.scrollLeft += offset; }
  };

  return (
    <div className="relative [&_#card-prev-next-button]:hover:opacity-50">
      <div
        ref={containerRef}
        className="flex pt-2 pl-4 pr-0 overflow-x-auto gap-x-2 scrollbar-hide"
      >
        {categories.map(category => (
          <FilterCard key={category._id} category={category} />
        ))}

        {/* Next Prev button */}
        <button
          id="card-prev-next-button"
          onClick={() => scrollBy(-400)}
          className="left-0 hidden md:block"
        >
          <ArrowLeft className='text-[22px]' />
        </button>
        <button
          id="card-prev-next-button"
          onClick={() => scrollBy(400)}
          className="right-0 hidden md:block"
        >
          <ArrowRight className='text-[22px]' />
        </button>
      </div>
    </div>
  )
}

export default CategoryFilter;
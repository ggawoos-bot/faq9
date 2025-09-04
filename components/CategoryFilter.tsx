
import React from 'react';
import { Category } from '../types';

interface CategoryFilterProps {
  categories: Category[];
  activeCategory: string;
  setActiveCategory: (categoryId: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, activeCategory, setActiveCategory }) => {
  const allCategories = [{ id: 'all', name: 'All' }, ...categories];

  return (
    <div className="flex flex-wrap gap-2">
      {allCategories.map(category => (
        <button
          key={category.id}
          onClick={() => setActiveCategory(category.id)}
          className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
            activeCategory === category.id
              ? 'bg-indigo-600 text-white'
              : 'bg-white text-slate-600 hover:bg-slate-100'
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;

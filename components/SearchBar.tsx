
import React from 'react';
import { SearchIcon } from './icons';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative mb-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
        <SearchIcon className="h-5 w-5 text-slate-400" />
      </div>
      <input
        type="text"
        placeholder="Search for questions..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="block w-full rounded-lg border-slate-300 py-3 pl-11 pr-4 text-slate-800 shadow-sm placeholder:text-slate-400 focus:border-indigo-500 focus:ring-indigo-500"
      />
    </div>
  );
};

export default SearchBar;

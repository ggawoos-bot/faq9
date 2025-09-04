
import React from 'react';
import { HelpCircleIcon } from './icons';

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-10 border-b border-slate-200">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center">
          <HelpCircleIcon className="w-8 h-8 text-indigo-600" />
          <span className="ml-3 text-xl font-semibold text-slate-800">
            FAQ Center
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;

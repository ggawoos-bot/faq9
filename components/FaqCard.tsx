
import React from 'react';
import { FAQ } from '../types';
import { ChevronRightIcon } from './icons';

interface FaqCardProps {
  faq: FAQ;
  onSelect: (faq: FAQ) => void;
}

const FaqCard: React.FC<FaqCardProps> = ({ faq, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(faq)}
      className="group flex items-center justify-between p-6 bg-white rounded-lg shadow-sm hover:shadow-md hover:bg-slate-50 transition-all duration-200 cursor-pointer border border-transparent hover:border-indigo-200"
    >
      <div>
        <h3 className="font-semibold text-lg text-slate-800 group-hover:text-indigo-600 transition-colors">
          {faq.title}
        </h3>
        <p className="text-sm text-slate-500 mt-1 line-clamp-1">{faq.content}</p>
      </div>
      <ChevronRightIcon className="w-6 h-6 text-slate-400 group-hover:text-indigo-600 transition-transform duration-200 group-hover:translate-x-1 flex-shrink-0 ml-4" />
    </div>
  );
};

export default FaqCard;

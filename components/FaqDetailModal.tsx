
import React from 'react';
import { FAQ } from '../types';
import { XIcon, TagIcon, EyeIcon, CalendarIcon } from './icons';

interface FaqDetailModalProps {
  faq: FAQ;
  onClose: () => void;
}

const FaqDetailModal: React.FC<FaqDetailModalProps> = ({ faq, onClose }) => {
  return (
    <div 
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60" 
        onClick={onClose}
        aria-modal="true"
        role="dialog"
    >
      <div 
        className="relative w-full max-w-2xl bg-white rounded-lg shadow-2xl m-4 animate-fade-in-up"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-6 sm:p-8">
            <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-slate-900">{faq.title}</h2>
                <button
                    onClick={onClose}
                    className="p-1 rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
                    aria-label="Close modal"
                >
                    <XIcon className="w-6 h-6" />
                </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto pr-4 -mr-4">
                <p className="text-slate-600 whitespace-pre-wrap leading-relaxed">
                    {faq.content}
                </p>
            </div>
        </div>
        
        <div className="bg-slate-50 px-6 sm:px-8 py-4 border-t border-slate-200 rounded-b-lg">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500">
                <div className="flex items-center gap-1.5">
                    <CalendarIcon className="w-4 h-4" />
                    <span>Published: {new Date(faq.createdAt).toLocaleDateString()}</span>
                </div>
                 <div className="flex items-center gap-1.5">
                    <EyeIcon className="w-4 h-4" />
                    <span>{faq.viewCount.toLocaleString()} views</span>
                </div>
                {faq.tags.length > 0 && (
                     <div className="flex items-center gap-1.5">
                        <TagIcon className="w-4 h-4" />
                         <div className="flex flex-wrap gap-1">
                             {faq.tags.map(tag => (
                                 <span key={tag} className="bg-slate-200 text-slate-700 px-2 py-0.5 rounded-full text-xs font-medium">
                                     {tag}
                                 </span>
                             ))}
                         </div>
                    </div>
                )}
            </div>
        </div>
      </div>
       <style>{`
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(20px) scale(0.95); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.3s ease-out forwards;
          }
      `}</style>
    </div>
  );
};

export default FaqDetailModal;

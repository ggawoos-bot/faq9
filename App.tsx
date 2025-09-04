
import React, { useState, useMemo, useEffect } from 'react';
import { FAQ, Category } from './types';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import FaqCard from './components/FaqCard';
import FaqDetailModal from './components/FaqDetailModal';
import { SparklesIcon, LoaderIcon } from './components/icons';
import { db } from './firebase';
// FIX: Changed import from 'firebase/firestore' to '@firebase/firestore' for consistency and to avoid potential module resolution issues.
import { collection, getDocs, query, where, orderBy, Timestamp } from '@firebase/firestore';

const App: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedFaq, setSelectedFaq] = useState<FAQ | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch Categories ordered by the 'order' field
        const categoriesQuery = query(collection(db, 'categories'), orderBy('order'));
        const categoriesSnapshot = await getDocs(categoriesQuery);
        const categoriesData = categoriesSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })) as Category[];
        setCategories(categoriesData);

        // Fetch FAQs that are published and order by creation date
        const faqsQuery = query(
          collection(db, 'faqs'),
          where('isPublished', '==', true),
          orderBy('createdAt', 'desc'),
        );
        const faqsSnapshot = await getDocs(faqsQuery);
        const faqsData = faqsSnapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            ...data,
            // Convert Firestore Timestamp to ISO string for consistency
            createdAt: (data.createdAt as Timestamp).toDate().toISOString(),
          } as FAQ;
        });
        setFaqs(faqsData);
      } catch (err) {
        console.error('Error fetching data from Firestore:', err);
        setError('Failed to load data. Please try refreshing the page.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredFaqs = useMemo(() => {
    let currentFaqs = faqs;

    if (activeCategory !== 'all') {
      currentFaqs = currentFaqs.filter(faq => faq.category === activeCategory);
    }

    if (searchTerm.trim() !== '') {
      const lowercasedSearchTerm = searchTerm.toLowerCase();
      currentFaqs = currentFaqs.filter(
        faq =>
          faq.title.toLowerCase().includes(lowercasedSearchTerm) ||
          faq.content.toLowerCase().includes(lowercasedSearchTerm),
      );
    }

    return currentFaqs;
  }, [searchTerm, activeCategory, faqs]);

  const handleSelectFaq = (faq: FAQ) => {
    setSelectedFaq(faq);
  };

  const handleCloseModal = () => {
    setSelectedFaq(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            How can we help you?
          </h1>
          <p className="text-lg text-slate-600">
            Find answers to your questions quickly and easily.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-8">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </div>

        <div className="max-w-3xl mx-auto">
          {loading ? (
            <div className="text-center py-16 flex flex-col items-center justify-center">
              <LoaderIcon className="w-12 h-12 text-indigo-600 animate-spin" />
              <p className="mt-4 text-slate-500">Loading questions...</p>
            </div>
          ) : error ? (
            <div className="text-center py-16 px-6 bg-white rounded-lg shadow-sm border border-red-200">
              <h3 className="text-xl font-semibold text-red-600 mb-2">An Error Occurred</h3>
              <p className="text-slate-500">{error}</p>
            </div>
          ) : filteredFaqs.length > 0 ? (
            <div className="space-y-4">
              {filteredFaqs.map(faq => (
                <FaqCard key={faq.id} faq={faq} onSelect={handleSelectFaq} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 px-6 bg-white rounded-lg shadow-sm">
                <SparklesIcon className="w-12 h-12 mx-auto text-indigo-400 mb-4" />
                <h3 className="text-xl font-semibold text-slate-800 mb-2">No Results Found</h3>
                <p className="text-slate-500">
                    Try adjusting your search term or selecting a different category.
                </p>
            </div>
          )}
        </div>
      </main>
      
      {selectedFaq && <FaqDetailModal faq={selectedFaq} onClose={handleCloseModal} />}
    </div>
  );
};

export default App;
import React, { useState, useEffect, useRef } from 'react';
import Fuse from 'fuse.js';
import { Link } from 'react-router-dom';

export type SearchItem = {
  title: string;
  path: string;
};

interface SearchBarProps {
  items: SearchItem[];
  placeholder?: string;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ items, placeholder = 'Sök tjänst…', className }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchItem[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const fuse = new Fuse(items, {
    keys: ['title'],
    includeScore: true,
    threshold: 0.4,
    ignoreLocation: true,
  });

  useEffect(() => {
    if (query.trim().length === 0) {
      setResults([]);
      return;
    }
    const q = query.toLowerCase();
    const res = fuse.search(q).map(r => ({ item: r.item, score: r.score as number }));

    // Prioritera titlar som börjar med sökfrasen
    res.sort((a, b) => {
      const aStarts = a.item.title.toLowerCase().startsWith(q);
      const bStarts = b.item.title.toLowerCase().startsWith(q);
      if (aStarts && !bStarts) return -1;
      if (!aStarts && bStarts) return 1;
      return a.score - b.score;
    });

    setResults(res.slice(0, 8).map(r => r.item));
  }, [query]);

  // Stäng dropdown när man klickar utanför
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`relative ${className || ''}`}>
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setShowDropdown(true)}
        placeholder={placeholder}
        className="glass w-48 lg:w-56 xl:w-64 px-4 py-2 rounded-full text-sm placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary"
      />

      {showDropdown && results.length > 0 && (
        <div className="absolute left-0 mt-2 w-full glass rounded-xl overflow-hidden z-50">
          {results.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className="block px-4 py-2 text-white/90 hover:bg-white/10 transition-colors text-sm"
              onClick={() => {
                setQuery('');
                setShowDropdown(false);
              }}
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar; 
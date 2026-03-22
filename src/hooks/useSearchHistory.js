import { useState, useEffect } from 'react';

const STORAGE_KEY = 'github-search-history';
const MAX_HISTORY = 8;

export const useSearchHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setHistory(JSON.parse(stored));
      } catch (e) {
        console.warn('Failed to parse search history:', e);
      }
    }
  }, []);

  const addToHistory = (username) => {
    if (!username || username.trim().length < 3) return;

    const trimmed = username.trim();
    setHistory(prev => {
      const filtered = prev.filter(item => item !== trimmed);
      const newHistory = [trimmed, ...filtered].slice(0, MAX_HISTORY);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newHistory));
      return newHistory;
    });
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  return { history, addToHistory, clearHistory };
};
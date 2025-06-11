// components/RefreshButton.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface RefreshButtonProps {
  inline?: boolean;
  className?: string;
}

export default function RefreshButton({ inline = false, className = '' }: RefreshButtonProps) {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const router = useRouter();

  const handleRefresh = async () => {
    setIsRefreshing(true);
    
    try {
      // Force a fresh fetch by adding a cache-busting parameter
      const currentUrl = new URL(window.location.href);
      currentUrl.searchParams.set('refresh', Date.now().toString());
      
      // Navigate to the same page with cache-busting parameter
      router.push(currentUrl.pathname + currentUrl.search);
      
      // Alternative: Hard refresh (uncomment if needed)
      // window.location.reload();
      
    } catch (error) {
      console.error('Error refreshing:', error);
    } finally {
      // Reset the loading state after a delay
      setTimeout(() => {
        setIsRefreshing(false);
      }, 1000);
    }
  };

  const buttonClasses = inline 
    ? `inline-flex items-center gap-2 px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${className}`
    : `flex items-center gap-2 px-3 py-1.5 bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white rounded-md transition-colors duration-200 text-sm border border-gray-600/30 hover:border-gray-500/50 disabled:opacity-50 disabled:cursor-not-allowed ${className}`;

  return (
    <button
      onClick={handleRefresh}
      disabled={isRefreshing}
      className={buttonClasses}
      title="Refresh to get latest posts"
    >
      <svg 
        className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" 
        />
      </svg>
      {isRefreshing ? 'Refreshing...' : 'Refresh'}
    </button>
  );
}
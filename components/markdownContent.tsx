'use client'
import React, { useEffect } from "react";
import "katex/dist/katex.min.css";
import renderMathInElement from "katex/contrib/auto-render";

interface MarkdownContentProps {
  content: string;
}

const MarkdownContent: React.FC<MarkdownContentProps> = ({ content }) => {
  useEffect(() => {
    // Render math inside the article (supporting inline & display math)
    const el = document.getElementById("markdown-content");
    if (el) {
      renderMathInElement(el, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "\\[", right: "\\]", display: true },
          { left: "$", right: "$", display: false },
          { left: "\\(", right: "\\)", display: false },
        ],
        throwOnError: false,
      });
    }
  }, [content]);

  return (
    <article
      id="markdown-content"
      className="prose max-w-3xl mx-auto px-6 py-16
                 prose-headings:text-yellow-400 prose-headings:font-bold prose-headings:drop-shadow-sm
                 prose-a:text-yellow-400 prose-a:no-underline hover:prose-a:underline
                 prose-a:transition prose-a:duration-300
                 prose-code:bg-gray-800 prose-code:text-yellow-400 prose-code:px-1 prose-code:rounded
                 prose-pre:bg-gray-900 prose-pre:rounded prose-pre:p-4 prose-pre:overflow-x-auto
                 prose-blockquote:border-l-4 prose-blockquote:border-yellow-400 prose-blockquote:bg-gray-900 prose-blockquote:text-yellow-200 prose-blockquote:italic prose-blockquote:px-4 prose-blockquote:py-2
                 prose-ul:list-disc prose-ul:pl-6 prose-ol:list-decimal prose-ol:pl-6
                 prose-p:text-gray-300 prose-p:leading-relaxed
                 dark:prose-invert"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default MarkdownContent;

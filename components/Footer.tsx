import { CodeBracketIcon, LinkIcon, XMarkIcon } from '@heroicons/react/24/outline';
import NextLink from 'next/link';

export default function Footer() {
  return (
    <footer className="relative z-10 py-6 px-4 sm:px-6 md:px-12 border-t border-gray-800" style={{ backgroundColor: 'var(--color-background)', color: 'var(--color-foreground)' }}>
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center sm:items-start">
          <p className="text-gray-500 dark:text-gray-300 text-sm sm:text-base">© 2025 Raj. All rights reserved.</p>
          <nav className="mt-2 flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4">
            <NextLink href="/about" className="text-gray-500 dark:text-gray-300 hover:text-yellow-400 text-sm sm:text-base">About</NextLink>
            <NextLink href="/experience" className="text-gray-500 dark:text-gray-300 hover:text-yellow-400 text-sm sm:text-base">Work</NextLink>
            <NextLink href="/projects" className="text-gray-500 dark:text-gray-300 hover:text-yellow-400 text-sm sm:text-base">Projects</NextLink>
            <NextLink href="/blog" className="text-gray-500 dark:text-gray-300 hover:text-yellow-400 text-sm sm:text-base">Blog</NextLink>
            <NextLink href="/contact" className="text-gray-500 dark:text-gray-300 hover:text-yellow-400 text-sm sm:text-base">Contact</NextLink>
          </nav>
        </div>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a
            href="https://github.com/Rajendran2201"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-500 hover:text-yellow-400"
            aria-label="GitHub"
          >
            <CodeBracketIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/rajendran-s-02b222270/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-500 hover:text-yellow-400"
            aria-label="LinkedIn"
          >
            <LinkIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a
            href="https://x.com/rajastwt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-500 hover:text-yellow-400"
            aria-label="Twitter"
          >
            <XMarkIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
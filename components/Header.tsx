import Image from 'next/image';
import Link from 'next/link';
import { UserGroupIcon, AdjustmentsHorizontalIcon, PencilSquareIcon, ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/outline';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6 bg-black">
      <Link href="/">
        <Image
          src="/favicon.ico"
          alt="Raj's Logo"
          width={40}
          height={40}
          className="object-contain"
        />
      </Link>
      <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex space-x-10 font-mono text-base">
        <Link href="/about" className="flex items-center gap-2 text-yellow-500 hover:text-yellow-400">
          <UserGroupIcon className="w-5 h-5" />
          Who am I?
        </Link>
        <Link href="/experience" className="flex items-center gap-2 text-yellow-500 hover:text-yellow-400">
          <AdjustmentsHorizontalIcon className="w-5 h-5" />
          What I do?
        </Link>
        <Link href="/blog" className="flex items-center gap-2 text-yellow-500 hover:text-yellow-400">
          <PencilSquareIcon className="w-5 h-5" />
          What I write?
        </Link>
        <Link href="/contact" className="flex items-center gap-2 text-yellow-500 hover:text-yellow-400">
          <ChatBubbleLeftEllipsisIcon className="w-5 h-5" />
          Wanna contact me?
        </Link>
      </nav>
      <div className="w-10 h-10" />
    </header>
  );
}
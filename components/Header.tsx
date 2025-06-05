import Image from "next/image";
import Link from "next/link";
import {
  UserGroupIcon,
  AdjustmentsHorizontalIcon,
  PencilSquareIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6 bg-black">
      <Link href="/">
        <Image
          src="/favicon.png"
          alt="Raj's Logo"
          width={40}
          height={40}
          className="object-contain"
        />
      </Link>
      <nav className="flex space-x-10 font-mono text-base">
        <Link href="/about" className="flex items-center gap-2 text-yellow-500 hover:text-yellow-400 group">
          <UserGroupIcon className="w-5 h-5 text-yellow-400" />
          <span className="text-white group-hover:text-yellow-400">
            Who am I?
          </span>
        </Link>
        <Link href="/experience" className="flex items-center gap-2 group">
          <AdjustmentsHorizontalIcon className="w-5 h-5 text-yellow-400" />
          <span className="text-white group-hover:text-yellow-400">
            What I do?
          </span>
        </Link>
        <Link href="/blog" className="flex items-center gap-2 group">
          <PencilSquareIcon className="w-5 h-5 text-yellow-400" />
          <span className="text-white group-hover:text-yellow-400">
            What I write?
          </span>
        </Link>
        <Link href="/contact" className="flex items-center gap-2 group">
          <ChatBubbleLeftEllipsisIcon className="w-5 h-5 text-yellow-400" />
          <span className="text-white group-hover:text-yellow-400">
            Wanna contact me?
          </span>
        </Link>
      </nav>
      <div className="w-10 h-10" />
    </header>
  );
}
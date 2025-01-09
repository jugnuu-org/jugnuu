import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-white">
      <Link href="/" passHref>
        <div className="flex items-center cursor-pointer">
          <Image src="/logo.svg" alt="Logo" width={30} height={30} />
          <h1 className="ml-2 text-2xl text-green-786">jugnuu</h1>
        </div>
      </Link>
      <nav>
        <ul className="flex space-x-8">
        <li><a href="/watch" className="text-black hover:text-green-786">Watch</a></li>
        <li><a href="/donate" className="text-black hover:text-green-786">Donate</a></li>
        <li><a href="/impact" className="text-black hover:text-green-786">Impact</a></li>
        <li><a href="/about" className="text-black hover:text-green-786 pr-8">About</a></li>
        </ul>
      </nav>
    </header>
  )
}

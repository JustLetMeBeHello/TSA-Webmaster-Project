import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex space-x-4">
                <li>
                    <Link href="/" className="text-white hover:text-blue-400">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/Directory" className="text-white hover:text-blue-400">
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/services" className="text-white hover:text-blue-400">
                        Services
                    </Link>
                </li>
                <li>
                    <Link href="/citations" className="text-white hover:text-blue-400">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
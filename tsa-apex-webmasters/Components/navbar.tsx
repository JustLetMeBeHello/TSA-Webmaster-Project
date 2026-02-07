import Link from 'next/link';

export default function Navbar() {
    return (
        // Added 'rounded-lg' for visible rounded corners
        <nav className="bg-green-700 p-4 rounded-lg">
            {/* Added 'justify-center' to center items horizontally */}
            <ul className="flex justify-center space-x-6 text-white font-medium">

                <li>
                    <Link href="/" className="text-white hover:text-blue-400">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/Directory" className="text-white hover:text-blue-400">
                        Directory
                    </Link>
                </li>

                <li>
                    <Link href="/Citations" className="text-white hover:text-blue-400">
                        Citations
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
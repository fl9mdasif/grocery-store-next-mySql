import Link from "next/link";

const Navbar = () => {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

                    <span className="ml-3 text-xl">SadaMart</span>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link href="/components/about" className="mr-5 hover:text-gray-900">About</Link>
                    <Link href="/components/contact" className="mr-5 hover:text-gray-900">Contact</Link>


                </nav>
                <Link href="/components/cart" className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Cart</Link>
            </div>
        </header>
    );
};

export default Navbar;
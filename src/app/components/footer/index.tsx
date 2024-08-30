import Link from "next/link";
import Logo from "../navigation/logo";

const Footer = () => {
  return (
    <footer className="bg-white shadow dark:bg-gray-900">
      <div className="container mx-auto p-4 h-full">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Logo />
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="/" className="hover:underline me-4 md:me-6">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:underline me-4 md:me-6">
                Products
              </Link>
            </li>
            <li>
              <Link href="/brands" className="hover:underline me-4 md:me-6">
                Brands
              </Link>
            </li>
            <li>
              <Link href="/contacts" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-4 border-gray-200 sm:mx-auto dark:border-gray-700" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <Link href="/" className="hover:underline">
            PT Leeden™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
export default Footer;

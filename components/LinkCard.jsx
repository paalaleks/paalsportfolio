import Link from 'next/link';

export default function LinkCard({ icon, title, description, href }) {
  return (
    <Link
      className="hover:bg-eerie_black-500 cursor-pointer bg-opacity-40 bg-eerie_black-500 rounded-lg transition duration-300 ease-in-out flex flex-col justify-center items-center px-3 py-4"
      href={href}
    >
      <h3 className=" font-bold inline-flex items-center mb-1">
        {icon}
        {title}
      </h3>
      <p className="text-color2 text-base xs:text-sm text-center">
        {description}
      </p>
    </Link>
  );
}

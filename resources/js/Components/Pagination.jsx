import { Link } from "@inertiajs/react";

export default function Pagination({ links }) {
    return (
        <nav className="text-center mt-4">
            {links.map((link, index) => (
                <Link
                    className={
                        "inline-block m-1 py-2 px-4 rounded-lg text-gray-500 " +
                        (link.active ? " bg-gray-600 text-gray-100 " : "") +
                        (!link.url
                            ? " text-gray-300 cursor-not-allowed"
                            : "hover:bg-gray-600 ")
                    }
                    key={index}
                    href={link.url || ""}
                    dangerouslySetInnerHTML={{ __html: link.label }}
                ></Link>
            ))}
        </nav>
    );
}

import React from "react";
import { useTheme } from "../context/ThemeContext";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const { theme } = useTheme();

  // Style per theme
  let cardClass = "flex flex-col transition shadow p-4 h-full bg-white dark:bg-gray-800";
  let btnClass = "";
  let titleClass = "";
  let fontClass = "";
  if (theme === "theme1") {
    // Minimal, light
    cardClass += " border rounded-lg font-sans";
    btnClass =
      "mt-4 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded focus:outline focus:ring-2 focus:ring-blue-400";
    titleClass = "text-lg font-semibold mb-1 text-white";
    fontClass = "font-sans text-base";
  } else if (theme === "theme2") {
    // Dark, serif, shadow, extra space, less color
    cardClass += " border-2 border-gray-700 rounded-xl font-serif text-lg";
    btnClass =
      "mt-4 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded focus:outline focus:ring-2 focus:ring-gray-400";
    titleClass = "font-bold text-xl mb-1";
    fontClass = "font-serif text-lg";
  } else {
    // Colorful, playful, card shadow, larger, more space + Pacifico
    cardClass += " bg-gradient-to-br from-pink-200 to-orange-100 shadow-lg border-0 rounded-3xl font-pacifico text-lg";
    btnClass =
      "mt-4 bg-primary hover:bg-pink-600 text-white px-6 py-2 rounded-3xl font-bold focus:outline focus:ring-2 focus:ring-primary";
    titleClass = "text-2xl font-pacifico mb-2";
    fontClass = "font-pacifico text-lg";
  }

  return (
    <article className={cardClass + " mb-4"}>
      <img
        src={product.image}
        alt={product.title}
        className="h-48 w-full object-contain mb-4 bg-white rounded-t"
        loading="lazy"
      />
      <h2 className={titleClass}>{product.title}</h2>
      <p className={`${fontClass} flex-grow text-gray-700 dark:text-gray-500 mb-2`}>
        {product.description.length > 100 ? product.description.substring(0, 100) + "..." : product.description}
      </p>
      <div className="font-bold text-indigo-600 dark:text-indigo-400">${product.price.toFixed(2)}</div>
      <button className={btnClass}>Buy Now</button>
    </article>
  );
};

export default ProductCard;

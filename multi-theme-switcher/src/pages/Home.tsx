import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import { useTheme } from "../context/ThemeContext";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        setProducts(data);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  // Different grid styles per theme
  let gridClass = "grid gap-6";
  if (theme === "theme1") {
    gridClass += " grid-cols-1 sm:grid-cols-2 md:grid-cols-3";
  } else if (theme === "theme2") {
    gridClass += " grid-cols-1 sm:grid-cols-2"; // More minimal for dark
  } else {
    gridClass += " grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"; // Big grid for card theme
  }

  return (
    <section>
      <h1
        className={`mb-4 font-bold ${
          theme === "theme1"
            ? "text-3xl font-sans"
            : theme === "theme2"
            ? "text-4xl font-serif"
            : "text-4xl font-pacifico"
        }`}
      >
        Product Catalog
      </h1>
      <p className={`mb-6 ${theme === "theme3" ? "font-pacifico text-lg" : ""}`}>Browse our featured products below.</p>
      {loading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}
      {!loading && !error && (
        <div className={gridClass}>
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Home;

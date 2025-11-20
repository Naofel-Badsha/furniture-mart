import React, { useState } from "react";
import { products } from "../../Utils/products";
import ProductCard from "./ProductCard";
import { FaLongArrowAltRight } from "react-icons/fa";

const Products = ({ headline }) => {
  const categories = ["Chair", "Beds", "Sofa", "Lamp"];
  const [selectedCategory, setSelectedCategory] = useState("Chair");
  const [visibleProduct, setVisibleProduct] = useState(4)
  const filteredProducts = products.filter((product) => product.category === selectedCategory);

  const loadMoreProduct = () => {
     setVisibleProduct((prev) => prev + 4);
  }

  return (
    <section className="max-w-screen-2xl container mx-auto py-6 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-black text-center">{headline}</h2>
      {/*-----------Category----Tab-----------*/}
      <div className="bg-[#eeeeee] w-fit mx-auto sm:rounded-full md:p-2.5 mt-7 mb-16">
        <div className="flex flex-wrap py-2 md:py-0 md:flex-row items-center md:justify-between justify-center gap-4 ">
          {categories.map((categorie) => (
            <button
              onClick={() => {
                setSelectedCategory(categorie);
                setVisibleProduct(4);
              }}
              key={categorie}
              className={`py-1.5 sm:px-5 px-8 rounded-full hover:bg-[#FFA704] hover:text-white transition-colors cursor-pointer ${
                selectedCategory === categorie
                  ? "bg-[#FFA704] text-white"
                  : null
              }`}
            >
              {categorie}
            </button>
          ))}
        </div>
      </div>

      {/*----------Product------Grid--------*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 ">
        {filteredProducts.slice(0, visibleProduct).map((product, index) => (
          <ProductCard product={product} key={index}></ProductCard>
        ))}
      </div>

      {/*-----------loadMore--------Product-----------*/}
      <div className="flex items-center justify-center py-10">
        {visibleProduct < filteredProducts.length && (
          <div>
            <button
              onClick={loadMoreProduct}
              className="text-sm text-orange-400 flex items-center justify-center gap-1 border py-2 px-6 rounded-full hover:bg-orange-400 hover:text-white cursor-pointer"
            >
              LoadMore <FaLongArrowAltRight className="mt-1" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;

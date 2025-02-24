import React, { useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/layout/layout.module";
import Card from "@/components/card/card.module";
import { data, DataProduct } from "@/dummy/data";

export default function Product() {
  const [search, setSearch] = useState<string>("");
  const [category, setCatergory] = useState<string>("All");
  const [sort, setSort] = useState<string>("None");

  const router = useRouter();

  const sortOptions = ['None', 'Harga Terendah ke Harga Tertinggi', 'Harga Tertinggi ke Terendah']
  const categories = ["All", "Beras", "Minyak", "Gula", "Telur"];

  const filteredProducts = data
    .filter((product) =>
      category === "All" ? true : product.category === category
    )
    .filter((product: DataProduct) =>
      [product.title, product.description, product.price.toString()].some(
        (field) => field.toLowerCase().includes(search.toLocaleLowerCase())
      )
    )
    .sort((low, high) => {
      if (sort === "Harga Terendah ke Harga Tertinggi") {
        return low.price - high.price;
      } else if (sort === "Harga Tertinggi ke Terendah") {
        return (high.price = low.price);
      } else {
        return 0;
      }
    });

  return (
    <div>
      <Layout>
        <div className="w-full h-full flex p-5 bg-red-500">
          <input
            type="text"
            placeholder="Search ..."
            onChange={(e) => setSearch(e.target.value)}
            className="border p-2 rounded w-1/2"
          />
          <select
            value={category}
            onChange={(e) => setCatergory(e.target.value)}
            className="border p-2 rounded-md"
          >
            {categories.map((item) => (
              <option>{item}</option>
            ))}
          </select>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border p-2 rounded-md"
          >
            {sortOptions.map((item) => (
              <option>{item}</option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-3 gap-5 p-5">
          {filteredProducts.map((item: DataProduct) => (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              image={item.image}
              category={item.category}
              onClick={() => router.push(`/product/${item.id}`)}
            />
          ))}
        </div>
      </Layout>
      {/* <button onClick={logout}>Logout</button> */}
    </div>
  );
}

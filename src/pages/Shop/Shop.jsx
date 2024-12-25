import { useState } from "react";
import ProductData from "/src/components/ProductData.js";
import ProductCard from "/src/components/ProductCard.jsx";
import "./Shop2.css";
import { NavLink } from "react-router-dom";
import Remark from "../../components/Remark";

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("default");
  const [filterCategory, setFilterCategory] = useState("All");

  // Filter Products
  const filteredProducts = ProductData.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      filterCategory === "All" || product.category === filterCategory;

    return matchesSearch && matchesCategory;
  });

  // Sort Products
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortType === "priceLowHigh") return a.price - b.price;
    if (sortType === "priceHighLow") return b.price - a.price;
    return 0; // Default sorting
  });

  return (
    <>
      <div className="container-fluid p-0">
        {/* Hero Section */}
        <section className="shop-landing d-flex align-items-center justify-content-center text-center">
          <div>
            <h1 className="display-4 fw-bold merriweather-bold">Our Shop</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item">
                  <NavLink
                    href="/Home"
                    className="text-decoration-none text-light"
                  >
                    Home
                  </NavLink>
                </li>
                <li
                  className="breadcrumb-item active text-light"
                  aria-current="page"
                >
                  Shop
                </li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Search, Sort, and Filter */}
        <div className="container py-4">
          <div className="row mb-4">
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="col-md-4">
              <select
                className="form-select"
                value={sortType}
                onChange={(e) => setSortType(e.target.value)}
              >
                <option value="default">Sort by</option>
                <option value="priceLowHigh">Price: Low to High</option>
                <option value="priceHighLow">Price: High to Low</option>
              </select>
            </div>
            <div className="col-md-4">
              <select
                className="form-select"
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
              >
                <option value="All">All Categories</option>
                <option value="skincare">Skincare</option>
                <option value="makeup">Makeup</option>
                <option value="hair growth">Hair Growth</option>{" "}
                {/* Fixed value */}
              </select>
            </div>
          </div>
          {/* Product Cards */}
          <div className="row">
            {sortedProducts.length > 0 ? (
              sortedProducts.map((product) => (
                <div className="col-md-4 mb-4" key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))
            ) : (
              <p className="text-center">No products match your criteria.</p>
            )}
          </div>
        </div>
      </div>
      <Remark />
    </>
  );
};

export default Shop;

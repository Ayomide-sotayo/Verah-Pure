import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Basic Swiper styles
import "swiper/css/pagination"; // Pagination styles
import "swiper/css/navigation"; // Navigation styles
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import ProductCard from "./ProductCard";
import products from "../components/ProductData";
import "../components/css/shop.css";

const ProductList = () => {
  return (
    <section className="Shop">
      <div className="container mb-4">
        <div className="head text-center mb-4">
          <p className="color ubuntu-regular">VISIT OUR SHOP</p>
          <h1 className="color ubuntu-regular">ENJOY OUR SELECTION</h1>
        </div>
        <Swiper
          modules={[Pagination, Navigation, Autoplay]} // Add Autoplay module
          spaceBetween={20} // Gap between slides
          slidesPerView={1} // Default: 1 slide per view
          breakpoints={{
            768: { slidesPerView: 2 }, // 2 slides on medium screens
            1024: { slidesPerView: 3 }, // 3 slides on large screens
          }}
          autoplay={{
            delay: 3000, // Auto-slide every 3 seconds
            disableOnInteraction: true, // Allow manual interaction without stopping autoplay
          }}
          // navigation
          className="mySwiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>{" "}
      </div>
    </section>
  );
};

export default ProductList;

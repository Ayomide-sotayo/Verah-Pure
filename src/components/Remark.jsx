import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../components/css/Remark.css";
import img1 from "../assets/owner.jpg";
import img2 from "../assets/owner.jpg";
import img3 from "../assets/owner.jpg";
import img4 from "../assets/owner.jpg";

const customers = [
  {
    id: 1,
    name: "John Doe",
    feedback:
      "This product transformed my skin in just a week! Highly recommended.",
    image: img1, // Replace with actual image URL
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    feedback:
      "The carrot oil is absolutely amazing. My hair is healthier than ever.",
    image: img2, // Replace with actual image URL
    rating: 4,
  },
  {
    id: 3,
    name: "Michael Brown",
    feedback: "I love the glow oil. It gives me the perfect radiance.",
    image: img3, // Replace with actual image URL
    rating: 5,
  },
  {
    id: 4,
    name: "Sarah Johnson",
    feedback: "The face cream is the best skincare product I’ve ever used.",
    image: img4, // Replace with actual image URL
    rating: 4,
  },
];

function Remark() {
  return (
    <section id="Remark" className="py-5 Remark">
      <h2 className="text-center mb-4">What Our Customers Say</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 3000, // Adjust auto-slide delay (in milliseconds)
          disableOnInteraction: false, // Keeps autoplay active after user interaction
        }}
        className="customer-carousel container"
      >
        {customers.map((customer) => (
          <SwiperSlide key={customer.id}>
            <div className="card text-center">
              <img
                src={customer.image}
                alt={customer.name}
                className="card-img-top mx-auto rounded-circle"
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{customer.name}</h5>
                <p className="card-text">{customer.feedback}</p>
                <div className="rating">
                  {Array.from({ length: customer.rating }, (_, i) => (
                    <i key={i} className="bi bi-star-fill text-warning"></i>
                  ))}
                  {Array.from({ length: 5 - customer.rating }, (_, i) => (
                    <i key={i} className="bi bi-star text-muted"></i>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Remark;

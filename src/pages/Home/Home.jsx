import About from "../../components/About";
import BackToTopButton from "../../components/BackToTopButton";
import Blog from "../../components/Blog";
import Contact from "../../components/Contact";
import Crediblity from "../../components/Crediblity";
import HomeLanding from "../../components/HomeLanding";
import ProductList from "../../components/ProductList";

function Home() {
  return (
    <div>
      <HomeLanding />
      <Crediblity />
      <ProductList />
      <About />
      <Blog />
      <Contact />
      <BackToTopButton />
    </div>
  );
}

export default Home;

import Category from "./CATEGORY/Category";
import FeaturedMenu from "./FEATURED_MENU/FeaturedMenu";
import HeroCarousel from "./HERO_CAROUSEL/HeroCarousel";
import OurMenu from "./OUR_MENU/OurMenu";

const Home = () => {
  return (
    <div>
      <HeroCarousel></HeroCarousel>
      <Category></Category>
      <OurMenu></OurMenu>
      <FeaturedMenu></FeaturedMenu>
    </div>
  );
};

export default Home;

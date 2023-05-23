import DynamicSectionTitle from "../../../COMPONENTS/SECTION_TITLE/DynamicSectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";
const FeaturedMenu = () => {
  return (
    <>
      <section className="featured-menu-container text-white">
        <DynamicSectionTitle
          subHeading="check it out"
          heading="Featured menu"
        />
        <section className="md:flex gap-4 justify-center items-center pb-20 pt-12 px-16">
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div className="md:ml-10 ">
            <p>Aug 23,2023</p>
            <h1 className="uppercase">where can i get some</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
              ad, dolorem error corrupti quia quam consectetur neque. Ad eos
              quam nulla, et cupiditate sequi aliquid soluta? Quae distinctio
              provident odit tempora enim veritatis voluptatibus harum tempore
              cumque. Voluptates, magnam fugit quia ea, aspernatur excepturi
              tempore sunt iste non recusandae quaerat.
            </p>
            <button className="btn btn-outline bnt-primary">Order Some</button>
          </div>
        </section>
      </section>
    </>
  );
};

export default FeaturedMenu;

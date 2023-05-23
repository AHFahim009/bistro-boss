import { useEffect, useState } from "react";
import DynamicSectionTitle from "../../../COMPONENTS/SECTION_TITLE/DynamicSectionTitle";
import SingleMenu from "../../SHARED/SINGLE_MENU/SingleMenu";

const OurMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        // filet only  category: popular =>
        const popularMenu = data.filter((menu) => menu.category === "popular");

        setMenu(popularMenu);
      });
  }, []);
  return (
    <>
      <section className="mb-12">
        <DynamicSectionTitle
          subHeading="popular menu"
          heading="from our menu"
        />
        <div className="grid lg:grid-cols-2 gap-8">
          {menu.map((singleMenu) => (
            <SingleMenu key={singleMenu._id} singleMenu={singleMenu} />
          ))}
        </div>
      </section>
    </>
  );
};

export default OurMenu;

const SingleMenu = ({ singleMenu }) => {
  const { image, price, name, recipe } = singleMenu;
  return (
    <>
      <section className="flex space-x-5 items-center justify-center">
        <img
          style={{ borderRadius: "0 200px 200px 200px" }}
          className="w-[100px]"
          src={image}
          alt=""
        />
        {/* text part */}
        <div>
          <h1>{name}........</h1>
          <p>{recipe}</p>
        </div>
        <p>{price}</p>
      </section>
    </>
  );
};

export default SingleMenu;

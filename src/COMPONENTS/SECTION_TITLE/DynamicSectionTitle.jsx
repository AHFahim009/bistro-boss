const DynamicSectionTitle = ({ subHeading, heading }) => {
  return (
    <div className="space-y-5 flex flex-col justify-center items-center py-12">
      <p className="text-yellow-600  ">
        <span className="border-b-2 pb-2 border-red-600">
          ----{subHeading}----
        </span>
      </p>
      <h1 className="text-4xl uppercase">
        <span className="border-b-2 pb-2 border-red-600">{heading}</span>
      </h1>
   </div>
  );
};

export default DynamicSectionTitle;

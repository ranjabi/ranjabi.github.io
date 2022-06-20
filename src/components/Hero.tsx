const Hero = () => {
  const profilePicture = require('./profile-picture.jpg');

  return (
    <div className="md:flex md:h-[410px] lg:h-[650px]  md:bg-secondary">
      <div
        id="left"
        className="md:flex md:items-center px-8 md:px-20 pt-24 pb-12 md:pt-16 md:w-1/2 md:h-full lg:flex lg:items-center lg:px-24 xl:px-40  bg-primary"
      >
        <div>
          <h1 className="text-2xl lg:text-4xl font-semibold">
            Front-end <br /> Web Developer
          </h1>
          <p className="mt-2 lg:text-xl">
            3rd year computer science student,
            <br /> gunpla builder
          </p>
        </div>
      </div>
      <div
        id="right"
        className="pb-8 md:pb-0 md:w-1/2 flex self-center justify-center bg-primary md:bg-secondary"
      >
        {/* doesn't need relative? */}
        <div className="">
          <img
            src={profilePicture}
            alt=""
            className="h-[120px] absolute z-10"
          />
          <div className="mt-0.5 ml-0.5 h-[124px] w-[124px] border-2 border-secondary md:border-primary"></div>
        </div>
      </div>
    </div>
  );
};
export default Hero;

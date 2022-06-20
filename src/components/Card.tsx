const Card = (props: any) => {
  return (
    <a
      href={props.github}
      className="relative w-full m-4 p-4 md:w-5/12 lg:w-3/12 drop-shadow-xl rounded-[6px] bg-primary  z-[1]"
    >
      <h1 className="mb-4 text-xl font-semibold">{props.title}</h1>
      <img
        src={props.img}
        alt=""
        className="h-40 xl:h-52 object-cover w-full rounded-[4px]"
      />
      <p className="mt-4 mb-10 text-gray-600 font-medium">
        {props.description}
      </p>
      <p className="absolute bottom-0 pb-4 text-sm font-bold text-gray-700 tracking-widest">
        {props.tech}
      </p>
      {/* <div className="bg-secondary top-[12px] left-[12px] rounded-[6px] ">&nbsp;</div> */}
    </a>
  );
};

export default Card;

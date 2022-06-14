const Card = (props: any) => {
  return (
      <div className="m-4 p-4 md:w-5/12 lg:w-3/12 drop-shadow-xl rounded-[6px] bg-primary  z-[1]">
        <h1 className="mb-4 text-xl font-semibold">{props.title}</h1>
        <img
          src={props.img}
          alt=""
          className="rounded-[4px]"
        />
        <p className="mt-4 text-gray-600 font-medium">
          {props.description}
        </p>
        <p className="mt-5 text-sm font-bold text-gray-700 tracking-widest">
          {props.tech}
        </p>
        {/* <div className="bg-secondary top-[12px] left-[12px] rounded-[6px] ">&nbsp;</div> */}
      </div>
  );
};

export default Card;

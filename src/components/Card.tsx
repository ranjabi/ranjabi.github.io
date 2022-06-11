const Card = (props: any) => {
  return (
    <div className="bg-white w-96 rounded-xl p-8">
      {props.children}
    </div>
  )
};

export default Card;
const Card = (props: any) => {
  return (
    <div className="relative w-[342px] h-[465px]">
      <div className="bg-primary w-[342px] h-[465px] rounded-[6px] p-5 border-[1px] border-secondary absolute z-[1]">
        {props.children}
      </div>
      <div className="bg-secondary w-[342px] h-[465px] top-[12px] left-[12px] rounded-[6px] absolute">&nbsp;</div>
    </div>
  )
};

{/* <Card>
            <h1 className="pb-4 text-xl font-semibold">DNA Tester</h1>
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" className="mb-4 item-center" />
            <p>Knuth-Morris-Pratt dan Boyer-Moore untuk String Matching, algoritma Longest Common Subsequence untuk menghitung tingkat similaritas, serta Regular Expression untuk filter pada pencarian dan sanitasi input.</p>
          </Card> */}

export default Card;
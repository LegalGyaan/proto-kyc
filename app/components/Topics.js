"use client";
export const Topics = ({ tag, filterHandler }) => {
  const handleClick = () => {
    console.log("clicked");
    filterHandler(tag);
  };

  return (
    <div
      className=" m-2 rounded-full bg-slate-300 p-2 hover:bg-green-400 hover:ease-in "
      onClick={handleClick}
    >
      {tag}
    </div>
  );
};

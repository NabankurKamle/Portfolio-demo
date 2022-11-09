const Skill = ({ title, knowledge }) => {
  return (
    <div className=" w-[20rem]  lg:w-[32rem] flex items-center justify-between px-2 sm:px-0">
      <h3 className="text-sm text-[#006EE5]">{title}</h3>
      <div className="flex items-center">
        <div className="h-[12px] px-[4px]  w-[8rem] lg:w-[20rem] rounded-full bg-transparent shadow-neoInsetButton relative flex items-center mr-5">
          <div
            style={{ width: `calc(${knowledge}% - 8px)` }}
            className="h-[7px] bg-gradient-to-r from-[#61D2FE] to-[#006EE5] rounded-full"
          ></div>
        </div>
        <p className="text-sm text-[#95ADC7] mr-10">{knowledge}%</p>
      </div>
    </div>
  );
};

export default Skill;

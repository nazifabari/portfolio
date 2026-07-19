

function Skills({ icon, name }) {
  return (
    <div className=" hover:-translate-y-2 transition-transform duration-200 flex items-center md:px-[12px] px-[5px] bg-[#C8AEA7]/[0.70] md:py-[4px] py-[2px] rounded-4xl md:gap-4 gap-1 border-2 border-[#e8dbcc] hover:bg-[#F4C9D6]/[0.50]">
      {icon}
      <span className="font-semibold md:text-[15px] text-[#030712] text-[13px]">{name}</span>
    </div>
  )
}

export default Skills


function Skills({ icon, name }) {
  return (
    <div className="flex items-center px-[10px] bg-[#C8AEA7] py-[10px] rounded-4xl gap-2 border-2 border-[#e8dbcc]">
      {icon}
      <span className="font-semibold text-[14px]">{name}</span>
    </div>
  )
}

export default Skills
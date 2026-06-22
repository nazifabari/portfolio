

function Skills({ icon, name }) {
  return (
    <div className="flex items-center px-[1.3vw] bg-[#C8AEA7] py-[1.5vh] rounded-4xl min-w-[2vw] min-h-[6vh] gap-3 border-2 border-[#e8dbcc]">
      {icon}
      <span className="font-semibold text-[#7B4E42]">{name}</span>
    </div>
  )
}

export default Skills


function Skills({ icon, name }) {
  return (
    <div className="flex items-center justify-center px-[3vw] bg-[#C8AEA7] py-[2vh] rounded-4xl min-w-[15vw] min-h-[8vh] gap-2 border-4 border-[#e8dbcc]">
      {icon}
      <span className="font-semibold text-[#7B4E42]">{name}</span>
    </div>
  )
}

export default Skills
const Navbar = () => {
  return (
    <nav className="flex items-center text-white h-[110px] text-xl font-medium">
      <div className="bg-secondary pt-[40px] w-1/2 h-[110px]">
        <a href="" className="ml-36 text-primary">Fikri Ranjabi</a>
      </div>
      <div className="bg-primary text-secondary w-1/2 pr-[160px] h-[110px] flex justify-end items-center">
        <a href="" className="navbar">Contact</a>
        <a href="" className="navbar mr-0">Project</a>
      </div>
    </nav>
  )
};

export default Navbar;
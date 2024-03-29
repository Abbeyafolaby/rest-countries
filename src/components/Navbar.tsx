import { IoMoonSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="bg-dark-blue text-white text-sm md:text-base flex justify-between items-center p-6 shadow-md mb-8">
        <h1 className="">Where in the world?</h1>
        <p className="flex items-center gap-x-1"><IoMoonSharp /> Dark Mode</p>
    </nav>
  )
}

export default Navbar
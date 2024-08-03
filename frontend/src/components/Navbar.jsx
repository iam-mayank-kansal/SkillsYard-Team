import { Link } from "react-router-dom";
import SkillsYard_Logo from "../assets/Skills Yard logo.png"

function Navbar() {
  return (
    <>
      <div className="flex items-center justify-between px-[50px] py-[20px] text-[22px] z-10 relative top-0">
        <div>
          <Link to="/"><img src={SkillsYard_Logo} className="h-[30px]" /></Link>
        </div>
        <ul className="flex gap-[70px]">
          <Link to="/"><li className="cursor-pointer">Home</li></Link>
          <Link to="/userprofiles"><li className="cursor-pointer">User Profiles</li></Link>
          <Link to="/signup"><li className="cursor-pointer">Sign Up</li></Link>
        </ul>
      </div>
    </>
  )
}
export default Navbar;

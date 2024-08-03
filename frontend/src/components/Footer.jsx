import { Link } from "react-router-dom";
import SkillsYard_Logo from "../assets/Skills Yard logo.png"
function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center gap-[20px] text-[23px] py-[20px]">
            <ul className="flex gap-[50px]">
                <Link to="/"><li>Home</li></Link>
                <Link to="/userprofiles"><li>User Profiles</li></Link>
                <Link to="/signup"><li>Sign Up</li></Link>
            </ul>
            <aside>
                <p className="flex items-center">Copyright © {new Date().getFullYear()} - All right reserved <Link to="/"><img src={SkillsYard_Logo} className=" mx-[13px] h-[20px]" /></Link> Designed by Mayank Kansal</p>
            </aside>
        </footer>
    )
}
export default Footer;
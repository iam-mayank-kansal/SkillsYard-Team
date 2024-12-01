import { Link } from "react-router-dom";
import SkillsYard_Logo from "../assets/Skills Yard logo.png";

function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center gap-5 text-[23px] py-5 sm:gap-8 sm:py-10">
            <ul className="flex gap-10 sm:gap-20 flex-wrap justify-center">
                <Link to="/"><li className="hover:underline">Home</li></Link>
                <Link to="/userprofiles"><li className="hover:underline">User Profiles</li></Link>
                <Link to="/signup"><li className="hover:underline">Sign Up</li></Link>
            </ul>
            <aside className="text-center">
                <p className="flex items-center justify-center text-sm sm:text-base">
                    Copyright © {new Date().getFullYear()} - All rights reserved 
                    <Link to="/" className="ml-2">
                        <img src={SkillsYard_Logo} className="mx-2 h-[20px] sm:h-[30px]" alt="Skills Yard Logo" />
                    </Link>
                    Designed by Mayank Kansal
                </p>
            </aside>
        </footer>
    );
}

export default Footer;

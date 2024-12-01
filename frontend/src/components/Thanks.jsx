import SkillsYard_Logo from "../assets/Skills Yard logo.png";

function Thanks() {
    return (
        <div className="h-screen w-full bg-black flex items-center justify-center -z-10">
            <h1 className="flex gap-[20px] items-center justify-center text-center translate-y-[-80px] px-4 sm:px-0">
                <span className="text-[50px] sm:text-[70px] md:text-[80px] text-white">
                    Thanks for Signing up with
                </span>
                <span>
                    <img 
                        src={SkillsYard_Logo} 
                        alt="SkillsYard-Logo" 
                        className="h-[45px] sm:h-[55px] md:h-[70px] transition-all"
                    />
                </span>
            </h1>
        </div>
    );
}

export default Thanks;

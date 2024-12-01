import SkillsYard_Logo from "../assets/Skills Yard logo.png";

function HomeBody() {
    return (
        <div className="h-screen w-full bg-black -z-10 flex items-center justify-center">
            <h1 className="flex items-center justify-center gap-5 sm:gap-10">
                <span className="text-[50px] sm:text-[100px] text-white">
                    Welcome to
                </span>
                <span>
                    <img 
                        src={SkillsYard_Logo} 
                        alt="SkillsYard-Logo" 
                        className="h-[50px] sm:h-[80px]" 
                    />
                </span>
            </h1>
        </div>
    );
}

export default HomeBody;

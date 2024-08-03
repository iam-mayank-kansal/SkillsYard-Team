import SkillsYard_Logo from "../assets/Skills Yard logo.png"
function Thanks() {
    return (
        <div className="h-screen w-full bg-black -z-10">
            <h1 className="flex gap-[20px] items-center justify-center h-full translate-y-[-80px]">
                <span className="text-[70px]">Thanks for Signing up with</span>
                <span><img src={SkillsYard_Logo} alt="SkillsYard-Logo" className="h-[55px]" /></span>
            </h1>
        </div>
    )
}
export default Thanks;
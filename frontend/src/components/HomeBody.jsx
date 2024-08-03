import SkillsYard_Logo from "../assets/Skills Yard logo.png"
function HomeBody() {
    return (
        <div className="h-screen w-full bg-black -z-10">
            <h1 className="flex gap-[20px] items-center justify-center h-full translate-y-[-80px]">
                <span className="text-[100px]">Welcome to </span>
                <span><img src={SkillsYard_Logo} alt="SkillsYard-Logo" className="h-[80px]" /></span>
            </h1>
        </div>
    )
}
export default HomeBody;
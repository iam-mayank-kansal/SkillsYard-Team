import { useEffect, useState } from "react";
import defaultUserProfile from "../assets/UserProfileImage.png";
import setting from "../assets/setting.png";
import cross from "../assets/cross.png";

export const Users = () => {
  const [usersAPI, setUsersAPI] = useState(null);
  const [settingClick, setSettingClick] = useState([]);

  useEffect(() => {
    async function fetchAPI() {
      try {
        let response = await fetch("/backend/UserApi");
        response = await response.json();
        setUsersAPI(response);
        setSettingClick(new Array(response.length).fill(false)); // Initialize state for each user
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchAPI();
  }, []);

  function settingClicked(index) {
    setSettingClick(prev => {
      const newSettingClick = [...prev];
      newSettingClick[index] = !newSettingClick[index];
      return newSettingClick;
    });
  }

  return (
    <section className="py-[20px] flex flex-col gap-[30px]">
      <h1 className="text-center text-[70px] uppercase text-white mb-[20px] font-serif tracking-wider">SkillsYard Team</h1>
      {
        usersAPI
          ? usersAPI.map((user, userIndex) => (
            <div
              className="border-2 border-white flex w-[90vw] mx-auto gap-[50px] items-center p-[20px] px-[40px] text-white justify-between rounded-[15px]"
              key={userIndex}
            >
              <div>
                <img src={defaultUserProfile} alt="defaultUserProfile" className="w-[100px]" />
              </div>
              <div className="translate-y-[-5px] w-full text-left">
                <h2 className="text-[40px]">{user.name}</h2>
                <p className="text-[20px]">{user.email}</p>
              </div>
              <div className="relative">
                <img
                  src={settingClick[userIndex] ? cross : setting}
                  alt="setting"
                  width="50px"
                  className="cursor-pointer"
                  onClick={() => settingClicked(userIndex)}
                />
                {settingClick[userIndex] &&
                  <div className="absolute bg-white text-black px-[50px] py-[15px] flex flex-col gap-[10px] rounded-[10px] top-[-130px] left-[50%] translate-x-[-50%] transition-transform duration-500 scale-100">
                    <h3 className="text-[23px] font-semibold cursor-pointer">Update</h3>
                    <h3 className="text-[23px] font-semibold cursor-pointer">Delete</h3>
                  </div>
                }
              </div>
            </div>
          ))
          : <p>Loading...</p>
      }
    </section>
  );
};

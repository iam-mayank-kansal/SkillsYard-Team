import { useEffect, useState } from "react";
import defaultUserProfile from "../assets/UserProfileImage.png";
import setting from "../assets/setting.png";
import cross from "../assets/cross.png";

export const Users = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [updateIndex, setUpdateIndex] = useState(null); // Track the index of the user being updated

  // API of user from backend
  const [usersAPI, setUsersAPI] = useState(null);

  const [settingClick, setSettingClick] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  // Fetch Users API
  const fetchUsers = async () => {
    try {
      let response = await fetch("https://skillsyard-team.onrender.com/backend/userapi");
      response = await response.json();
      setUsersAPI(response);
      setSettingClick(new Array(response.length).fill(false)); // Initialize state for each user
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Handle Setting Click
  const handleSettingClick = (index) => {
    setSettingClick((prev) => {
      const newSettingClick = [...prev];
      newSettingClick[index] = !newSettingClick[index];
      return newSettingClick;
    });
  };

  // Handle Update User
  const handleUpdateUser = (index, user) => {
    setName(user.name);
    setEmail(user.email);
    setPassword(user.password);
    setUpdateIndex(index);
    setSettingClick((prev) => prev.map((_, i) => (i === index ? false : prev[i])));
  };

  // Delete User
  const handleDeleteUser = async (user) => {
    console.log("Delete User");
    try {
      const response = await fetch("https://skillsyard-team.onrender.com/backend/deleteuser", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        console.log("User Deleted");
        fetchUsers();
      } else {
        console.error("Failed to Delete User");
      }
    } catch (error) {
      console.error("Error Deleting user profile:", error);
    }
  };

  // Handle Cancel Update
  const handleCancelUpdate = () => {
    setUpdateIndex(null);
  };

  // Handle Update User 
  const handleUpdateBTN = async (user) => {
    console.log("Updating User");
    try {
      const Updatedresponse = await fetch("https://skillsyard-team.onrender.com/backend/updateUser", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (Updatedresponse.ok) {
        console.log("User Updated");
        fetchUsers(); // Refresh the user list after update
        handleCancelUpdate(); // Close the update form
      }
    } catch (error) {
      console.error("unable to Update User", error);
    }
  };

  return (
    <section className="py-[20px] flex flex-col gap-[30px]">
      <h1 className="text-center text-[50px] sm:text-[70px] font-serif tracking-wider text-white mb-[20px]">SkillsYard Team</h1>
      {usersAPI
        ? usersAPI.map((user, userIndex) => (
          <div
            className="border-2 border-white flex w-[90vw] sm:w-[80vw] lg:w-[70vw] mx-auto gap-[20px] sm:gap-[50px] items-center p-[20px] px-[30px] sm:px-[40px] text-white justify-between rounded-[15px] hover:bg-gray-800 transition-all"
            key={userIndex}
          >
            <div>
              <img src={defaultUserProfile} alt="defaultUserProfile" className="w-[80px] sm:w-[100px]" />
            </div>
            <div className="text-left w-full">
              <h2 className="text-[30px] sm:text-[40px]">{user.name}</h2>
              <p className="text-[16px] sm:text-[20px]">{user.email}</p>
            </div>
            <div className="relative">
              <img
                src={settingClick[userIndex] ? cross : setting}
                alt="setting"
                width="40px"
                className="cursor-pointer"
                onClick={() => handleSettingClick(userIndex)}
              />
              {settingClick[userIndex] && (
                <div className="absolute bg-white text-black px-[30px] sm:px-[50px] py-[10px] sm:py-[15px] flex flex-col gap-[10px] rounded-[10px] top-[-130px] left-[50%] translate-x-[-50%] transition-transform duration-500 scale-100">
                  <h3
                    className="text-[18px] sm:text-[23px] font-semibold cursor-pointer"
                    onClick={() => handleUpdateUser(userIndex, user)}
                  >
                    Update
                  </h3>
                  <h3
                    className="text-[18px] sm:text-[23px] font-semibold cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      handleDeleteUser(user);
                    }}
                  >
                    Delete
                  </h3>
                </div>
              )}
            </div>
            {updateIndex === userIndex && (
              <div
                className="fixed bg-white h-[60vh] sm:h-[70vh] w-[80vw] sm:w-[30vw] top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] rounded-[10px] flex justify-center items-center z-[1000] overflow-y-auto"
              >
                <form className="px-[20px] sm:px-[50px] w-full">
                  <h1 className="text-[35px] sm:text-[45px] font-bold text-black font-sans text-center pb-[30px] uppercase">
                    Updation Form
                  </h1>
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="text-gray-800 w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="text-gray-800 w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                      required
                      autoComplete="username"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="text-gray-800 w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                      required
                      autoComplete="current-password"
                    />
                  </div>
                  <div className="flex gap-[20px]">
                    <button
                      type="button"
                      className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 transition-transform duration-300 transform mt-[30px]"
                      onClick={handleCancelUpdate}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600 transition-transform duration-300 transform mt-[30px]"
                      onClick={(e) => {
                        e.preventDefault();
                        handleUpdateBTN({ ...user, name, email, password }); // Pass updated details
                      }}
                    >
                      Update
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        ))
        : <p>Loading...</p>
      }
    </section>
  );
};

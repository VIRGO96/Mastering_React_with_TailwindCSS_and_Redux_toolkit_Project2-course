import { React, useState } from "react";
import Container from "./Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import lakers from "../assets/Lakers.png";
import Nuggets from "../assets/Nuggets.png";
import suns from "../assets/Suns.png";
import warriors from "../assets/Warriors.png";
import player from "../assets/PlayerPerson.png";

const userList = [
  "LeBron James",
  "Lnash Kjasi",
  "Lorem ipsum",
  "James lands",
  "Jian Kian",
  "Leoan Kisn",
];

let teamList = [
  { logo: lakers, name: "Lakers" },
  { logo: Nuggets, name: "Nuggets" },
  { logo: suns, name: "Suns" },
  { logo: warriors, name: "Warriors" },
];
const OrderDetails = () => {
  const [dropdown, setDropdown] = useState(false);
  const [dropdownUser, setDropdownUser] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(teamList[0]);
  const [selectedUser, setSelectedUser] = useState(userList[0]);
  return (
    <Container>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Order Details</h1>
        <div className="relative">
          <button
            className="bg-secondary text-white text-xs md:text-base px-4 py-2 rounded hover:bg-black"
            onClick={() => setDropdown(!dropdown)}
            onBlur={() => setDropdown(false)}
          >
            <span className="mr-2">Switch Team</span>
            {!dropdown ? (
              <FontAwesomeIcon icon={faAngleDown} />
            ) : (
              <FontAwesomeIcon icon={faAngleUp} />
            )}
          </button>
          {dropdown && (
            <div className="absolute top-10 right-10 bg-secondary rounded-lg border border-gray-200 shadow-md z-10 w-[170px]">
              {teamList.map((team, index) => (
                <div
                  key={index}
                  className="flex items-center px-4 py-2 text-white hover:bg-white hover:text-black"
                >
                  <img src={team.logo} alt="teamlogo" className="w-8 h-8" />
                  <span
                    className={`ml-2 ${
                      selectedTeam == team ? "font-bold" : ""
                    }`}
                  >
                    {team.name}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="md:flex mt-7 bg-secondary rounded-xl overflow-hidden ">
        <div className="md:w-1/3 bg-yellow-400 flex justify-center items-end ">
          <img src={player} alt="" className="" />
        </div>
        <div className="p-5 md:p-10 md:w-2/3">
          <div className="flex items-center">
            <label className="text-white text-xs md:text-base lg:text-lg">
              Ticker :
            </label>{" "}
            <span className="ml-1 text-yellow-400 text-xs md:text-base lg:text-lg">
              LBJ06
            </span>
          </div>
          <div className="flex justify-between items-center w-full mt-2">
            <div className="relative">
              <div
                className="text-lg md:text-2xl lg:text-4xl text-white"
                onClick={() => setDropdownUser(!dropdownUser)}
                onBlur={() => setDropdownUser(!dropdownUser)}
              >
                <span className="mr-2 font-bold">{selectedUser}</span>
                {!dropdownUser ? (
                  <FontAwesomeIcon icon={faAngleDown} />
                ) : (
                  <FontAwesomeIcon icon={faAngleUp} />
                )}
              </div>
              {dropdownUser && (
                <div className="absolute top-10 right-0 bg-secondary rounded-lg border border-gray-200 shadow-md z-10 w-[250px]">
                  {userList.map((user) => (
                    <div
                      onClick={() => {
                        setSelectedUser(user);
                        setDropdownUser(false);
                      }}
                      className="flex items-center px-4 py-2 text-white hover:bg-white hover:text-black"
                    >
                      <span className="">{user}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="flex items-center text-white">
              <FontAwesomeIcon
                icon={faStar}
                className="bg-primary text-secondary p-1 rounded-full text-xs"
              />
              <label className="text-base ml-2">Point Guard</label>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 text-white  mt-3">
            <div className="w-full bg-white bg-opacity-10 rounded-md px-1 py-2 md:p-3 grid gap-2">
              <h4 className="text-[10px] lg:text-base">Current Market Price</h4>
              <h1 className="text-2xl lg:text-5xl">%80.77</h1>
              <div className="lg:text-lg text-green-700">+2.739%</div>
            </div>
            <div className="w-full bg-white bg-opacity-10 rounded-md px-1 py-2 md:p-3 grid gap-2">
              <h4 className="text-[10px] lg:text-base">
                Player Importance Score
              </h4>
              <h1 className="text-2xl lg:text-5xl">15.84</h1>
              <div className="lg:text-lg text-green-700">+2.739%</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 text-white  mt-2">
            <div className="w-full bg-white bg-opacity-10 rounded-md px-1 py-2 md:p-3 grid gap-2 border-l-4 border-primary">
              <h4 className="text-[10px] lg:text-base">Enter Quantity</h4>
              <label className="text-base lg:text-2xl h-[28px] md:h-[38px] lg:h-[48px]">
                <input
                  type="number"
                  value="0"
                  className="w-full bg-transparent border-b h-full outline-none appearance-none  p-0"
                />
              </label>
            </div>
            <div className="w-full bg-white bg-opacity-10 rounded-md px-1 py-2 md:p-3 grid gap-2 border-l-4 border-primary">
              <h4 className="text-[10px] lg:text-base">
                Your Lakers Ownership
              </h4>
              <h1 className="text-base lg:text-2xl">0%</h1>
            </div>
          </div>

          <div className="w-full md:w-2/3 bg-white bg-opacity-10 mt-2 text-white rounded-md px-1 py-2 md:p-3 grid gap-2 border-l-4 border-primary">
            <h4 className="text-[10px] lg:text-base">
              Approxmiate Investment Amount
            </h4>
            <h1 className="text-base lg:text-2xl">$0</h1>
          </div>
          <div className="w-full md:w-2/3 flex gap-2 mt-4">
            <button className="w-full text-white lg:p-3 p-2 bg-green-700 hover:bg-green-500 rounded-md">
              Buy
            </button>
            <button className="w-full text-white lg:p-3 p-2 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-md">
              Sell
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default OrderDetails;

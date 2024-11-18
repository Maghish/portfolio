import TagsBox from "./TagsBox";
import {
  FaLocationDot,
  FaClockRotateLeft,
  FaSquareInstagram,
  FaInstagram,
  FaX,
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaDiscord,
} from "react-icons/fa6";
import { FaSignature } from "react-icons/fa";

export default function LeftBar() {
  return (
    <div className="flex flex-col bg-barBackground h-[40.82%] w-full xl:h-full xl:w-[40.82%] rounded-3xl px-6 py-8 overflow-auto xl:overflow-hidden">
      <h2 className="text-2xl text-primaryColor w-full text-center font-inter font-bold tracking-wide">
        Maghish
      </h2>
      <div className="my-[20px]"></div>
      <TagsBox />
      <div className="mt-[25px] mb-[20px] border-t-2 w-full h-0 border-accentColor"></div>
      <div className="w-full mb-[20px] inline-flex justify-around items-center h-auto">
        <div className="flex flex-col gap-y-[2px]">
          <span className="font-bold font-inter text-white text-sm gap-x-2 inline-flex items-center">
            <FaSignature size={20} />
            (A.k.a.) QSp
          </span>
          <span className="font-bold font-inter text-white text-sm gap-x-2 inline-flex items-center">
            <FaLocationDot size={15} />
            India
          </span>
          <span className="font-bold font-inter text-white text-sm gap-x-2 inline-flex items-center">
            <FaClockRotateLeft /> 2 years
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-[10px] gap-y-[10px] max-w-[160px] h-full">
          {/* I know I should have turned this into components, but meh */}
          <a href="https://www.instagram.com/qsp_real/">
            <button className="bg-accentColor w-[40px] h-[40px] rounded-lg">
              <FaInstagram className="m-auto" color="#FFFFFF" size={30} />
            </button>
          </a>
          <a href="https://x.com/qsp_real">
            <button className="bg-accentColor w-[40px] h-[40px] rounded-lg">
              <FaXTwitter className="m-auto" color="#FFFFFF" size={30} />
            </button>
          </a>
          <a href="https://github.com/Maghish">
            <button className="bg-accentColor w-[40px] h-[40px] rounded-lg">
              <FaGithub className="m-auto" size={30} color="#FFFFFF" />
            </button>
          </a>
          <a href="https://www.linkedin.com/in/maghish-m-56b533290/">
            <button className="bg-accentColor w-[40px] h-[40px] rounded-lg">
              <FaLinkedin className="m-auto" size={30} color="#FFFFFF" />
            </button>
          </a>
          <a href="https://discord.com/users/978672079291449424">
            <button className="bg-accentColor w-[40px] h-[40px] rounded-lg">
              <FaDiscord className="m-auto" size={30} color="#FFFFFF" />
            </button>
          </a>
        </div>
      </div>
      <div className="mt-auto">
        <img
          className="w-full"
          src="https://streak-stats.demolab.com?user=Maghish&theme=transparent&hide_border=true&hide_longest_streak=true"
          alt="streakCard"
        ></img>
      </div>

      {/* <h2 className="mt-[200px] text-2xl text-primaryColor w-full text-center font-inter font-bold tracking-wide animate-spin">
        UNDER DEVELOPMENT!
      </h2> */}
      {/* <div className="order-2 flex flex-col flex-shrink-0 gap-y-[10px] px-10">
        <img
          className="flex-shrink-0 h-full w-full object-fill"
          src="https://github-readme-stats.vercel.app/api?username=Maghish&show_icons=true&title_color=DCDFE4&text_color=cbcdd2&icon_color=a1ffefb9&border_color=a1ffef7e&bg_color=353638"
          alt="statsCard"
        ></img>
        <img
          className="flex-shrink-0 h-full w-full object-fill"
          src="https://streak-stats.demolab.com?user=Maghish&border_radius=2.6&border=A1FFEF7E&background=3536387E&stroke=A1FFEF7E&ring=A1FFEFB9&currStreakNum=CBCDD2&sideNums=CBCDD2&sideLabels=CBCDD2&fire=A1FFEFB9&currStreakLabel=CBCDD2&dates=CBCDD2&excludeDaysLabel=CBCDD2&hide_longest_streak=false"
          alt="streakCard"
        ></img>
      </div> */}
    </div>
  );
}

import TagsBox from "./TagsBox";

export default function LeftBar() {
  return (
    <div className="bg-barBackground h-[40.82%] w-full xl:h-full xl:w-[40.82%] rounded-3xl px-6 py-8 overflow-auto xl:overflow-hidden">
      <h2 className="text-2xl text-primaryColor w-full text-center font-inter font-bold tracking-wide">
        Maghish
      </h2>
      <div className="my-[20px]"></div>
      <TagsBox />
      <div className="mt-[25px] mb-[20px] border-t-2 w-full h-0 border-accentColor"></div>
      <div className="w-full mb-[20px] inline-flex justify-around items-center h-auto">
        <div className="flex flex-col gap-y-[2px]">
          <span className="font-bold font-inter text-white text-sm">QSp</span>
          <span className="font-bold font-inter text-white text-sm">India</span>
          <span className="font-bold font-inter text-white text-sm">
            2 years
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-[10px] gap-y-[10px] max-w-[160px] h-full">
          <button className="bg-gray-600 w-[40px] h-[40px]"></button>
          <button className="bg-gray-600 w-[40px] h-[40px]"></button>
          <button className="bg-gray-600 w-[40px] h-[40px]"></button>
          <button className="bg-gray-600 w-[40px] h-[40px]"></button>
          <button className="bg-gray-600 w-[40px] h-[40px]"></button>
        </div>
      </div>
      <h2 className="mt-[200px] text-2xl text-primaryColor w-full text-center font-inter font-bold tracking-wide animate-spin">
        UNDER DEVELOPMENT!
      </h2>
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

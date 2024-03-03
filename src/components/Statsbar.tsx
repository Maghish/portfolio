function Statsbar() {
  return (
    <div className="bg-bgThemeGray border-y-2 border-r-2 border-borderDarkerGreenColor order-3 max-w-[400px] h-[560px] max-h-[560px] p-5 hidden xl:flex xl:flex-col xl:flex-shrink-0">
      <img
        className="flex-shrink-0 mb-auto"
        src="https://github-readme-activity-graph.vercel.app/graph?username=Maghish&height=600&bg_color=353638&color=cbcdd2&line=a1ffef7e&point=a1ffefb9&border_color=a1ffef7e&area=true&hide_border=false"
        alt="activityGraph"
      ></img>
      <img
        className="flex-shrink-0 mb-auto"
        src="https://github-readme-stats.vercel.app/api?username=Maghish&show_icons=true&title_color=DCDFE4&text_color=cbcdd2&icon_color=a1ffefb9&border_color=a1ffef7e&bg_color=353638"
        alt="statsCard"
      ></img>
      <img
        className="flex-shrink-0 mb-auto"
        src="https://streak-stats.demolab.com?user=Maghish&border_radius=2.6&border=A1FFEF7E&background=3536387E&stroke=A1FFEF7E&ring=A1FFEFB9&currStreakNum=CBCDD2&sideNums=CBCDD2&sideLabels=CBCDD2&fire=A1FFEFB9&currStreakLabel=CBCDD2&dates=CBCDD2&excludeDaysLabel=CBCDD2&hide_longest_streak=false"
        alt="streakCard"
      ></img>
    </div>
  );
}

export default Statsbar;

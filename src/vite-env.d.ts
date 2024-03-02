/// <reference types="vite/client" />

interface InfoNavBarTagComponent {
  name: string;
  currentTabShowing: string;
  setCurrentTabShowing: React.Dispatch<React.SetStateAction<string>>;
}

interface InfoBarComponent {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

interface TechStackTagComponent {
  name: string;
}

interface ProjectCardComponent {
  name: string;
  description: string;
  tags: string[];
  projectLink: string;
}

export {
  InfoNavBarTagComponent,
  InfoBarComponent,
  TechStackTagComponent,
  ProjectCardComponent,
};

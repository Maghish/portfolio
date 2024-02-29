/// <reference types="vite/client" />

interface InfoNavBarTagComponent {
  name: string;
  currentTabShowing: string;
  setCurrentTabShowing: React.Dispatch<React.SetStateAction<string>>;
}

export { InfoNavBarTagComponent };

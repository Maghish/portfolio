/// <reference types="vite/client" />

interface InfoNavBarTagComponent {
  name: string;
  currentTabShowing: boolean;
  setCurrentTabShowing: React.Dispatch<React.SetStateAction<boolean>>;
}

export { InfoNavBarTagComponent };

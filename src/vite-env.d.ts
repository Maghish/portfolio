/// <reference types="vite/client" />

interface CommandAsProp {
  command: string;
}

interface CommandBoxProps {
  onEnterPressed: Function | any;
  ID?: string;
}

export { CommandAsProp, CommandBoxProps };

/// <reference types="vite/client" />

interface CommandAsProp {
  command: string;
}

interface CommandBoxProps {
  onEnterPressed: Function | any;
  REF?: React.MutableRefObject<any>;
}

export { CommandAsProp, CommandBoxProps };

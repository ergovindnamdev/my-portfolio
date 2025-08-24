import { createContext } from "react";

interface AppContextType {
  sharedState: {
    portfolio: {
      NavBar: {
        IntervalEvent: (() => void) | null;
        scrolling: boolean | null;
        scrollSizeY: number | null;
      };
      Scrolling: {
        IntervalEvent: (() => void) | null;
      };
    };
    userdata: {
      timerCookieRef: React.RefObject<any>;
      windowSizeTracker: React.RefObject<any>;
      mousePositionTracker: React.RefObject<any>;
    };
    typing: {
      keyboardEvent: (() => void) | null;
      eventInputLostFocus: (() => void) | null;
    };
    finishedLoading: boolean;
  };
  setSharedState: (state: any) => void;
}

const AppContext = createContext<AppContextType | null>(null);

export default AppContext;

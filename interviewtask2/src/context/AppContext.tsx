import { useReducer, createContext } from "react";
import { ActionType,Appdata } from "src/utilities/constant/types";

interface Action {
  type: ActionType;
  payload?: any;
}
interface Props {
  children: React.ReactNode;
}

const initialState: Appdata = {
  isToggleSideBar:false
};
const reducer = (state: Appdata, action: Action) => {
  const { type } = action;
  switch (type) {
    case ActionType.setToggleSideBar:
      return {
        ...state,
        isToggleSideBar:!state.isToggleSideBar,
      };
    default:
      return state;
  }
};

const DataValueContext = createContext<{
  state: Appdata;
  dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => {} });

const DataValueProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataValueContext.Provider value={{ state, dispatch }}>
      {children}
    </DataValueContext.Provider>
  );
};

export { DataValueContext, DataValueProvider };

import { createContext, useContext } from "react";
import FC, { IContextComp } from "../../types/types";

/**
 * обычный хук для реализации конеткста, 
 * ни какой логики не нисёт.
 */
const ContextForMain = createContext({})
export const ContextComp: FC<IContextComp> = ({ children, data  }) => {
	return (
		<ContextForMain.Provider value = { data } >
			{ children }
		</ContextForMain.Provider>
	)
}
export const useContextComp = () => useContext( ContextForMain )
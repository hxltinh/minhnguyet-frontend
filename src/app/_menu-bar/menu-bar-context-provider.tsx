import { createContext, ReactNode, useContext, useState } from "react";
import { MenuItemName } from "./types";

const MenuContext = createContext<MenuContextProps | null>(null);

export const MenuBarContextProvider = ({
    children,
}: MenuBarContextProviderProps) => {
    const [selectedMenuItem, setSelectedMenuItem] =
        useState<MenuItemName>("Home");

    return (
        <MenuContext.Provider value={{ selectedMenuItem, setSelectedMenuItem }}>
            {children}
        </MenuContext.Provider>
    );
};

type MenuBarContextProviderProps = {
    children: ReactNode;
};

type MenuContextProps = {
    selectedMenuItem: string;
    setSelectedMenuItem: (item: MenuItemName) => void;
};

export const useMenuContext = () => {
    const context =  useContext(MenuContext);

    if (!context) {
        throw new Error(
            "menu bar is not initialized. Please wrap your component with MenuBarContextProvider."
        );
    }

    return context;
};

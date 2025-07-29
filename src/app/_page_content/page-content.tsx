"use client";

import { MenuBar } from "../_menu-bar/menu-bar";
import { MenuBarContextProvider } from "../_menu-bar/menu-bar-context-provider";

export const PageContent = ({ children }: PageContentProps) => {
    return (
        <MenuBarContextProvider>
            <MenuBar />
            <div>{children}</div>
        </MenuBarContextProvider>
    );
};

type PageContentProps = { children: React.ReactNode };

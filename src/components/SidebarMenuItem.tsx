'use client';

import { usePathname } from "next/navigation";
import { JSX } from "react";

import styles from "./ActiveSidebarMenuLink.module.css";
import Link from "next/link";

interface Props {
    path: string;
    icon: JSX.Element;
    title: string; 
    subTitle: string;
    
}


export const SidebarMenuItem = ({ path, icon, title, subTitle }: Props) => {

    const pathName = usePathname();

    return (
        <Link
            href={ path }
            className={`${styles.link}  ${ (pathName === path ) && styles['active-link']}`}
            >
            <div>
                { icon }
            </div>
            <div className="flex flex-col">
                <span className="text-lg font-bold leading-5 text-white">
                { title }
                </span>
                <span className="text-sm text-white/50 hidden md:block">
                { subTitle}
                </span>
            </div>
            </Link>
    )
}

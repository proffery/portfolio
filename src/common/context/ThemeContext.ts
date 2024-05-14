import { createContext } from "react";
import {ThemeType} from "../../App";

export const ThemeContext = createContext<ThemeType>('dark')
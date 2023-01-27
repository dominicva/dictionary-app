import { useContext } from "react";
import { FontContext } from "../Contexts";

export default function Layout({ children }) {
  const fontType = useContext(FontContext);

  return (
    <div
      className={`h-screen overflow-scroll bg-white p-6 pb-12 md:p-10 font-${fontType} dark:bg-gray-darkest`}
    >
      {children}
    </div>
  );
}

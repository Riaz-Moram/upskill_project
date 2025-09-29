import React from "react";
import Styles from "./Style";
import { Navbar } from "./Components/index";
export default function App() {
  return (
    <>
      <div className="bg-primary w-full overflow-hidden text-white">
        <div className={`${Styles.paddingX} ${Styles.flexCenter}`}>
          <div className={`${Styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
      </div>
    </>
  );
}

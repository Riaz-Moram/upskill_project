import React from "react";
import Styles from "./Style";
import {
  Billing,
  Clients,
  FeedbackCard,
  Footer,
  Hero,
  Navbar,
  Stats,
} from "./Components/index";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeedbackCard />
      <Stats />
      <Clients />
      <Billing />
      {/* <Footer /> */}
    </>
  );
}

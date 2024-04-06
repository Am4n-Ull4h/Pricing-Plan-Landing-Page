// Home.js
import { Fragment } from "react";
import Footer from "./Component/Footer/Footer";
import Navbar from "./Component/Navbar/Navbar";
import Contact from "./Component/Contact/Contact";
import Brave from "./Component/Brave/Brave";
import Table from "./Component/Table/Table";
import Faqs from "./Component/Faqs/Faqs";
import Plans from "./Component/Plans/Plans";
import './Component/Style.css'
export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <Plans />
      <Brave />
      <Table />
      <Faqs />
      <Contact />
      <Footer />
    </Fragment>
  );
}

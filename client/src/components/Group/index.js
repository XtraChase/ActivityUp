import React from "react";
import Header from "./Header";
import EventDetails from "./EventDetails";
import Chat from "./Chat/Chat";
import Calender from "./Calender";
import AdvertisedActivities from "../AdvertisedActivities";
import Footer from "../Footer";
import "./style.scss";

function Group() {
  return (
    <div>
      <Header />
      <div className="headerBuffer"></div>
      <div className="upperGroupArea">
        <EventDetails />
        <Chat />
      </div>
      <Calender />
      <AdvertisedActivities />
      <Footer />
    </div>
  );
}

export default Group;
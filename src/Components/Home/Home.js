import React from "react";
import "./Home.css";
import Banner from "../Banner/Banner";
import Card from "./Card";
function Home() {
  return (
    <div className="home">
      {/* <h1>Home Component</h1> */}
      <Banner />
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."
        />
        <Card
        src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
        title="Unique stays"
        description="Spaces that are more thanjust a place to sleep."
        />
        <Card
        src= "https://d2n4wb9orp1vta.cloudfront.net/cms/brand/am/2020-am/0920-am-mightybuildings-1.jpg;maxWidth=720"
        title="Entire homes"
        description="Comfortable private places, with room for friends or family."
        />

      </div>
      <div className="home__section">
        <Card
        src="https://a0.muscache.com/im/pictures/db85737b-90d2-47c2-8a6d-9b7bb8044947.jpg?im_w=720"
        title="3 Bedroom Villa in Bournemouth"
        description="Superhost with astunning view of the beach side in Sunny Bournemouth "
        price="£130/night."
        />
        <Card
        src="https://a0.muscache.com/im/pictures/miso/Hosting-47130843/original/e79292fd-c104-4500-ac8a-beea4a0d49b9.jpeg?im_w=720"
        title="5 Bedroom Villa in London "
        description="A picturesque hideaway enveloped in nature's bounty and the perfect location"
        price="£160/night"
        />
        <Card
        src= "https://a0.muscache.com/im/pictures/miso/Hosting-49185079/original/44356106-fb99-4ca2-9cce-bb0cc0571b21.jpeg?im_w=720"
        title="4 Bedroom Villa in Manchester"
        description="Nestled in the picturesque Manchester Hills and cold night are the best here."
        price="£145/night"
        />
      </div>
    </div>
  );
}








export default Home;

//   {/* {Header} */}

//   {/* {Banner} */}
//       {/* {Search bar} */}

//   {/* {Cards} */}

//   {/* {Footer} */}
//rfce to get template

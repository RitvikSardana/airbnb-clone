import React from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult/SearchResult";
function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays · 26-30 August · 2Guests</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More Filters</Button>
      </div>
      <SearchResult
        img="https://a0.muscache.com/im/pictures/miso/Hosting-33350824/original/e5f30e48-1a0a-4800-b3d5-368bd8a57e55.jpeg?im_w=240"
        location="Private room in London"
        title="Stay at this spacious Edwardian House"
        description="2 guest · 1bed · 1 Shared bathroom · WiFi · Kitchen · Free Parking · Washing Machine"
        star={3.5}
        price="£30/night"
        total="£117/night"
      />
      <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
        location="Private room in London"
        title="Stay at this spacious Edwardian House"
        description="2 guest · 1bed · 1 Shared bathroom · WiFi · Kitchen · Free Parking · Washing Machine"
        star={3.5}
        price="£30/night"
        total="£117/night"
      />
      <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
        location="Private room in London"
        title="Stay at this spacious Edwardian House"
        description="2 guest · 1bed · 1 Shared bathroom · WiFi · Kitchen · Free Parking · Washing Machine"
        star={3.5}
        price="£30/night"
        total="£117/night"
      />
    </div>
  );
}

// img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"


export default SearchPage;

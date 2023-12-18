import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, updatedListings, setListings }) {

  const handleDeleteCard = (deleteCard) => {
    const updatedCards = listings.filter((card) => card.id !== deleteCard.id);
    setListings(updatedCards);
  }
  function setRenderListing(list){
  const listingsArr = list.map((listing) => {
    return (
      <ListingCard key={listing.id} listing={listing} onDeleteCard={handleDeleteCard} />
    )
  })
  return listingsArr;
}


  return (
    <main>
      <ul className="cards">
        {(listings.length !== updatedListings.length) ? setRenderListing(updatedListings) : setRenderListing(listings)}
      </ul>
    </main>
  );
}

export default ListingsContainer;

import React, { useState } from "react";

function ListingCard({listing,onDeleteCard}) {
  const [isFav,setIsFav] = useState(false);

  const handleFav = ()=> {
    setIsFav((prevFav) => !prevFav)
  }

  const handleDelete = () => {
    fetch(`http://localhost:6001/listings/${listing.id}`,{
      method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => onDeleteCard(listing))
    .catch((err) => console.error(err))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {isFav ? (
          <button className="emoji-button favorite active" onClick={handleFav}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFav}>☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={handleDelete} >🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;

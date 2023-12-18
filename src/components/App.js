import React, { useState ,useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [updatedListings, setUpdatedListings] = useState([]);

    useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(res => res.json())
    .then(data => setListings(data))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const handleSearchListings = (searchedCard) => {
    // console.log({ searchedCard })
    // if (searchedCard === '') {
    //   console.log({listings})
    //   setListings(listings)
    // } else {
      const updatedCards = listings.filter((card) => {

        return searchedCard === '' ? card :(card.description.toLowerCase().includes(searchedCard))
      })
      console.log({listings})
      console.log({updatedCards})
      setUpdatedListings(updatedCards);
    // }
  }

  return (
    <div className="app">
      <Header setListings={setListings} setUpdatedListings={setUpdatedListings}  onSearchListings={handleSearchListings} />
      <ListingsContainer listings={listings} updatedListings={updatedListings } setListings={setListings} />
    </div>
  );
}

export default App;

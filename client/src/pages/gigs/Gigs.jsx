import React, { useRef, useState } from "react";
import "./Gigs.css";
// import { gigs } from "../../data";
import GigCard from "../../components/gigCard/GigCard";
import newRequest from "../../utils/newRequest";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";

function Gigs() {
  
  //storing the value of sort selected 
  // currently we are storing as sales as this would be applied in the API req from backend
  const [sort, setSort] = useState("sales");

  // menu open and close
  const [open, setOpen] = useState(false);
  
  const minRef = useRef();
  const maxRef = useRef();

  const {search} = useLocation(); 

  const {isLoading, error, data, refetch} = useQuery({
    queryKey: ['repoData'],
    // queryFn: () => newRequest('/gigs')
    // .then(res => {return res.data})
    queryFn: () => newRequest.get(`/gigs${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`)
    .then(res => {
      return res.data
    })
  });

  console.log(data);




  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  const apply = ()=>{
    refetch();
  }

  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">Hirely > Graphics & Design ></span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with Hirely's AI artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input ref={minRef} type="number" placeholder="min" />
            <input ref={maxRef} type="number" placeholder="max" />
            <button onClick={apply}>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">Sort by</span>
            <span className="sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                  )}
                  <span onClick={() => reSort("sales")}>Popular</span>
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {
              isLoading ? "loading" : error ? "something went wrong" : 
              data.map(gig => (<GigCard key={gig._id} item={gig} />))
          }

  
        </div>
      </div>
    </div>
  );
}

export default Gigs;

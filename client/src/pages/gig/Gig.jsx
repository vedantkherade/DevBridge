// import React from "react";
// import "./Gig.scss";
// import { Slider } from "infinite-react-carousel/lib";

import React from "react";
import "./Gig.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; // Add this CSS import
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useParams } from "react-router-dom";

function Gig() {

  const {id} = useParams();

  const {isLoading, error, data} = useQuery({
    queryKey: ['gig', id],
    queryFn: () =>
      newRequest.get(`/gigs/single/${id}`)
      .then(res => res.data),
     enabled: !!id   //will run only if id exists
  }); 

  console.log("data value is", data);



const userId = data?.userId;

  const {
    isLoading: isLoadingUser, 
    error: errorUser, 
    data: dataUser
  } = useQuery({
    queryKey: ["user"],
    queryFn: () => 
      newRequest.get(`/user/${userId}`).then((res) => res.data),

    enabled: !!userId, // will run only if id exists
   
  });








  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    }
  };
  return (
    <div className="gig">
      {isLoading ? "loading" : error ? "something went wrong" : data ? 
      (
        <div className="container">
        <div className="left">
          <span className="breadcrumbs">Hirely {">"} Graphics & Design {">"}</span>
          <h1>{data.title}</h1>
          
          {isLoadingUser ? "loading" : errorUser ? "something went wrong" : dataUser ? (
             <div className="user">
            <img
              className="pp"
              src={dataUser.img || "/img/noavatar.jpg"}
              alt=""
            />
            <span>{dataUser.username}</span>

            {!isNaN(data.totalStars / data.totalStars) && (
              <div className="stars">
                {Array(Math.round(data.totalStars / data.starNumber))
                .fill()
                .map((item, i) => (
                  <img src="/img/star.png" alt="" key={i}/>
                ))}
                <span>{Math.round(data.totalStars / data.starNumber)}</span>
              </div>
            )}

          </div>
          ) : null
        }
          
          <Carousel 
            responsive={responsive}
            arrows={true}
            infinite={true}
            draggable={true}
            swipeable={true}
            className="slider"
          >

            {data.images.map((img) => (
              <img
              key={img}
              src={img}
              alt=""
            />
            ))}
            
          </Carousel>

          <h2>About This Gig</h2>
          <p>
            {data.desc}
          </p>

           {isLoadingUser ? "loading" : errorUser ? "something went wrong" : dataUser ? (
              <div className="seller">
            <h2>About The Seller</h2>
            <div className="user">
              <img
                src={dataUser.img || "/img/noavatar.jpg"}
                alt=""
              />
              <div className="info">
                <span>{dataUser.username}</span>
                {/* <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div> */}

                {!isNaN(data.totalStars / data.totalStars) && (
              <div className="stars">
                {Array(Math.round(data.totalStars / data.starNumber))
                .fill()
                .map((item, i) => (
                  <img src="/img/star.png" alt="" key={i}/>
                ))}
                <span>{Math.round(data.totalStars / data.starNumber)}</span>
              </div>
            )}

                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">{dataUser.country}</span>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">Aug 2022</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">4 hours</span>
                </div>
                <div className="item">
                  <span className="title">Last delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr />
              <p>
                {dataUser.desc}
              </p>
            </div>
            </div>
           ) : null}
         


          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Garner David</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                I just want to say that art_with_ai was the first, and after
                this, the only artist Ill be using on Fiverr. Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Sidney Owen</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png"
                      alt=""
                    />
                    <span>Germany</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                The designer took my photo for my book cover to the next level!
                Professionalism and ease of working with designer along with
                punctuality is above industry standards!! Whatever your project
                is, you need this designer!
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Lyle Giles </span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                Amazing work! Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
          </div>

        </div>

        <div className="right">
          <div className="price">
            <h3>{data.shortTitle}</h3>
            <h2>$ {data.price}</h2>
          </div>
          <p>
            I will create a unique high quality AI generated image based on a
            description that you give me
          </p>
          <div className="details">
            <div className="item">
              <img src="/img/clock.png" alt="" />
              <span>{data.deliveryTime} Days Delivery</span>
            </div>
            <div className="item">
              <img src="/img/recycle.png" alt="" />
              <span>{data.revisionNumber} Revisions</span>
            </div>
          </div>
          <div className="features">
            {data.features.map((feature) => (
              <div className="item" key={feature}>
                <img src="/img/greencheck.png" alt="" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
            
          <button>Continue</button>
        </div>
      </div>
      ) : null
    }
     
      
    </div>
  );
}

export default Gig;

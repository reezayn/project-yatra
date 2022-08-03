import React from "react";
import styled from "styled-components";
import Destination1 from "../assets/Destination1.png";
import Destination2 from "../assets/Destination2.png";
import Destination3 from "../assets/Destination3.png";
import Destination4 from "../assets/Destination4.png";
import Destination5 from "../assets/Destination5.png";
import Destination6 from "../assets/Destination6.png";
import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";

const Destinations = () => {
  const data = [
    {
      image: Destination1,
      title: "Pashupatinath",
      subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      cost: "38,800",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination2,
      title: "Swyambhunath",
      subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      cost: "54,200",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination3,
      title: "Lumbini",
      subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      cost: "45,500",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination4,
      title: "Muktinath",
      subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      cost: "24,100",
      duration: "Approx 1 night trip",
    },
    {
      image: Destination5,
      title: "Janaki Temple",
      subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      cost: "95,400",
      duration: "Approx 2 night 2 day trip",
    },
    {
      image: Destination6,
      title: "Changunaryan Temple",
      subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      cost: "38,800",
      duration: "Approx 3 night 2 day trip",
    },
  ];
  return (
    <Section id="destinations" className="max-w-[1240px] mx-auto py-16 px-4 text-center">
      <h1>Recommended Destinations</h1>
      <p className="py-5 pb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        facere sed nobis maiores, illo ratione?
      </p>
      <div className="destinations">
        {data.map((destination) => {
          return (
            <div className="destination">
              <img src={destination.image} alt="" />
              <h3>{destination.title}</h3>
              <p>{destination.subTitle}</p>
              <div className="info">
                <div className="services">
                  <img src={info1} alt="" />
                  <img src={info2} alt="" />
                  <img src={info3} alt="" />
                </div>
                <h4>{destination.cost}</h4>
              </div>
              <div className="distance">
                <span>1000 Kms</span>
                <span>{destination.duration}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div id='destinationsLast' className="h-0">{/* this is created so that navbar doesnot covers content of section following this div, which is explore section in this case  */}
      </div>
    </Section>
  );
};

export default Destinations;
const Section = styled.section`
.destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #dbdaf8;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;

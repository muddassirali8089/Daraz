import React, { useState, useEffect } from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBRow,
  MDBCol,
} from 'mdb-react-ui-kit';
import "../style/Cards.css"
import { Link } from 'react-router-dom';

const Cards = () => {
  const cardData = [
    {
      imageSrc: 'https://static-01.daraz.pk/p/31d271867193e06a03034456d8dd8eea.jpg',
      text: '22mm Silicone Band for All Galaxy Watches Sports Strap Compatible With Only (22mm)',
      discountPrice: 'Rs.672',
      actualPrice: 'Rs.800',
    },
    {
      imageSrc: 'https://static-01.daraz.pk/p/205c487f152be28676e07cc4a843b592.jpg',
      text: 'Super Woman Workout Cape | - Black | shawls for women Warm cape shawls women',
      discountPrice: 'Rs.672',
      actualPrice: 'Rs.800',
    },
    {
      imageSrc: 'https://static-01.daraz.pk/p/2ae48e3816953ee26a56cb9eadf59368.jpg',
      text: ' Soft Portable Eye Mask Black Fast Sleeping Eyeshade Cover Eye Masks Baby Wipes Sensitive Baby Wipes (5 Packs) (70 Wet Sheets Each)',
      discountPrice: 'Rs.642',
      actualPrice: 'Rs.8300',
    },
    {
      imageSrc: 'https://static-01.daraz.pk/p/49c722b41afb3f451586c9d6d17134aa.jpg',
      text: 'Silicone Rubber Case for Tronsmart Onyx Ace Earbuds – Black (Earbuds not Included)',
      discountPrice: 'Rs.672',
      actualPrice: 'Rs.800',
    },
    {
      imageSrc: 'https://static-01.daraz.pk/p/808168e2570f724214cfd596a6fb6589.jpg',
      text: 'Saeed Ghani Sunblock SPF 60 with Vitamin C',
      discountPrice: 'Rs.672',
      actualPrice: 'Rs.800',
    },
    {
      imageSrc: 'https://static-01.daraz.pk/p/9e7d7d43478d1a30bf9d3c00bf2c0714.jpg',
      text: 'Soft-Creme Cotton Baby Wipes (5 Packs) (70 Wet Sheets Each)',
      discountPrice: 'Rs.672',
      actualPrice: 'Rs.1800',
    },
  ];

  const DigitalWatch = () => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(30);
    const [seconds, setSeconds] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(interval);
        } else {
          if (minutes === 0 && seconds === 0) {
            setHours((prevHours) => prevHours - 1);
            setMinutes(59);
            setSeconds(59);
          } else if (seconds === 0) {
            setMinutes((prevMinutes) => prevMinutes - 1);
            setSeconds(59);
          } else {
            setSeconds((prevSeconds) => prevSeconds - 1);
          }
        }
      }, 1000);
  
      return () => {
        clearInterval(interval);
      };
    }, [hours, minutes, seconds]);
  
    return (
      <div>
        <h1>{`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</h1>
      </div>
    );
  };

  const calculatePercentageDiscount = (discountPrice, actualPrice) => {
    const discount = parseFloat(discountPrice.replace('Rs.', ''));
    const actual = parseFloat(actualPrice.replace('Rs.', ''));
    const percentage = ((actual - discount) / actual) * 100;
    return Math.round(percentage);
  };

  return (

  

      
        <div className="container-fluid" style={{ width: '90%', backgroundColor: 'white' }}>
          
      <div className='row '>
        <div className='col-6 d-flex align-items-center '>
          <p className="m-0 me-2">On Sale Now</p>
          <p className="m-0 me-2 ml-5"><DigitalWatch /></p>
        </div>
      </div>

      <MDBRow className="row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-xl-6 g-0 border">
     
        {cardData.map((card, index) => (
          <MDBCol key={index} style={{ padding: '10px' }}>
            <MDBCard className="h-100 card-hover-effect custom-card">
              <div style={{ position: 'relative', paddingBottom: '100%', overflow: 'hidden', maxHeight: '100%' }}>
                <Link>
                  <MDBCardImage
                    src={card.imageSrc}
                    alt="..."
                    position="top"
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                    className="img-fluid "
                  />
                </Link>
              </div>
              <MDBCardBody>
                <p
                  className="card-text"
                  style={{
                    maxHeight: '5em',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    marginBottom: "2px",
                    
                    fontSize: '12px', // Decreased font size
                  
                  }}
                >
                  {card.text}
                </p>
                <MDBCardTitle style={{ color: 'orange' , margin: "0px" }}>{card.discountPrice}</MDBCardTitle>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span  className="text-muted" style={{ textDecoration: 'line-through', marginRight: '8px' }}>{card.actualPrice}</span>
                  <span >{`-${calculatePercentageDiscount(card.discountPrice, card.actualPrice)}% `}</span>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
    </div>

    
  );
};

export default Cards;

import React from 'react';
import {
  MDBCardImage,
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardTitle
 
} from 'mdb-react-ui-kit';

const Footer2 = () => {
  const cardData = [
    {
      imageSrc: 'https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp',
      text: 'Card 1 Text'
    },
    {
      imageSrc: 'https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp',
      text: 'Card 2 Text'
    },
    {
      imageSrc: 'https://mdbcdn.b-cdn.net/img/new/fluid/city/111.webp',
      text: 'Card 3 Text'
    },
    {
      imageSrc: 'https://mdbcdn.b-cdn.net/img/new/fluid/city/112.webp',
      text: 'Card 4 Text'
    },
    {
      imageSrc: 'https://mdbcdn.b-cdn.net/img/new/fluid/city/114.webp',
      text: 'Card 5 Text'
    },
    {
      imageSrc: 'https://mdbcdn.b-cdn.net/img/new/fluid/city/115.webp',
      text: 'Card 6 Text'
    },
    {
      imageSrc: 'https://mdbcdn.b-cdn.net/img/new/fluid/city/116.webp',
      text: 'Card 7 Text'
    },
    {
      imageSrc: 'https://mdbcdn.b-cdn.net/img/new/fluid/city/116.webp',
      text: 'Card 7 Text'
    },
    {
      imageSrc: 'https://mdbcdn.b-cdn.net/img/new/fluid/city/116.webp',
      text: 'Card 7 Text'
    },
    {
      imageSrc: 'https://mdbcdn.b-cdn.net/img/new/fluid/city/116.webp',
      text: 'Card 7 Text'
    },
    {
      imageSrc: 'https://mdbcdn.b-cdn.net/img/new/fluid/city/116.webp',
      text: 'Card 7 Text'
    },
    {
      imageSrc: 'https://mdbcdn.b-cdn.net/img/new/fluid/city/116.webp',
      text: 'Card 7 Text'
    },
    {
      imageSrc: 'https://mdbcdn.b-cdn.net/img/new/fluid/city/116.webp',
      text: 'Card 7 Text'
    },
    {
      imageSrc: 'https://mdbcdn.b-cdn.net/img/new/fluid/city/116.webp',
      text: 'Card 7 Text'
    },
    {
      imageSrc: 'https://mdbcdn.b-cdn.net/img/new/fluid/city/116.webp',
      text: 'Card 7 Text'
    },
    {
      imageSrc: 'https://mdbcdn.b-cdn.net/img/new/fluid/city/116.webp',
      text: 'Card 7 Text'
    },
    {
      imageSrc: 'https://mdbcdn.b-cdn.net/img/new/fluid/city/116.webp',
      text: 'Card 7 Text'
    },
    {
      imageSrc: 'https://mdbcdn.b-cdn.net/img/new/fluid/city/116.webp',
      text: 'Card 7 Text'
    },
    {
      imageSrc: 'https://mdbcdn.b-cdn.net/img/new/fluid/city/116.webp',
      text: 'Card 7 Text'
    },
    {
      imageSrc: 'https://mdbcdn.b-cdn.net/img/new/fluid/city/116.webp',
      text: 'Card 7 Text'
    } 
  ];

  return (
    
    <div className="container-fluid" style={{ width: '90%', backgroundColor: 'white' }}>
      <MDBRow className="row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-xl-6 g-0">
        {cardData.map((card, index) => (
          <MDBCol key={index} style={{ padding: '10px' }}>
            <MDBCard className="h-100">
              <div style={{ position: 'relative', paddingBottom: '50%', overflow: 'hidden', maxHeight: '100%' }}>
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
                  className="img-fluid"
                />
              </div>
              <MDBCardBody>
                <div
                  className="card-text"
                 
                >
                  {card.text}
                </div>
              
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
    </div>
  
    

   
  );
};

export default Footer2;

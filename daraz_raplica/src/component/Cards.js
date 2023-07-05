import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

const Cards = () => {
  const cardData = [
    {
      imageSrc: 'https://static-01.daraz.pk/p/31d271867193e06a03034456d8dd8eea.jpg',
      title: 'RS.672',
      text: '22mm Silicone Band for All Galaxy Watches Sports Strap Compatible With Only (22mm)'
    },
    {
      imageSrc: 'https://static-01.daraz.pk/p/205c487f152be28676e07cc4a843b592.jpg',
      title: 'RS.672',
      text: 'Super Woman Workout Cape | - Black | shawls for women Warm cape shawls women'
    },
    {
      imageSrc: 'https://static-01.daraz.pk/p/2ae48e3816953ee26a56cb9eadf59368.jpg',
      title: 'RS.672',
      text: 'Baby Wipes Sensitive Baby Wipes (5 Packs) (70 Wet Sheets Each)'
    },
    {
      imageSrc: 'https://static-01.daraz.pk/p/49c722b41afb3f451586c9d6d17134aa.jpg',
      title: 'RS.672',
      text: 'Silicone Rubber Case for Tronsmart Onyx Ace Earbuds – Black (Earbuds not Included)'
    },
    {
      imageSrc: 'https://static-01.daraz.pk/p/808168e2570f724214cfd596a6fb6589.jpg',
      title: 'RS.672',
      text: 'Saeed Ghani Sunblock SPF 60 with Vitamin C'
    },
    {
      imageSrc: 'https://static-01.daraz.pk/p/9e7d7d43478d1a30bf9d3c00bf2c0714.jpg',
      title: 'RS.672',
      text: 'Soft-Creme Cotton Baby Wipes (5 Packs) (70 Wet Sheets Each)'
    },
  ];

  return (
    <div className="container-fluid" style={{ width: '90%', backgroundColor: 'white' }}>
      <MDBRow className="row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-xl-6 g-0">
        {cardData.map((card, index) => (
          <MDBCol key={index} style={{ padding: '10px' }}>
            <MDBCard className="h-100">
              <div style={{ position: 'relative', paddingBottom: '100%', overflow: 'hidden', maxHeight: '100%' }}>
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
                  style={{
                    maxHeight: '2.8em',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    fontWeight: 'bold',
                  }}
                >
                  {card.text}
                </div>
                <MDBCardTitle style={{ color: 'orange' }}>{card.title}</MDBCardTitle>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
    </div>
  );
};

export default Cards;

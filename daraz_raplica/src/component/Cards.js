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
      imageSrc: 'https://mdbootstrap.com/img/new/standard/city/041.webp',
      title: 'Card title 1',
      text: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
    },
    {
      imageSrc: 'https://mdbootstrap.com/img/new/standard/city/041.webp',
      title: 'Card title 1',
      text: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
    },
    {
      imageSrc: 'https://mdbootstrap.com/img/new/standard/city/041.webp',
      title: 'Card title 1',
      text: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
    },
    {
      imageSrc: 'https://mdbootstrap.com/img/new/standard/city/041.webp',
      title: 'Card title 1',
      text: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
    },
    {
      imageSrc: 'https://mdbootstrap.com/img/new/standard/city/041.webp',
      title: 'Card title 1',
      text: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
    },
    {
      imageSrc: 'https://mdbootstrap.com/img/new/standard/city/041.webp',
      title: 'Card title 1',
      text: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
    },
    {
      imageSrc: 'https://gcp-img.slatic.net/lazada/298b1220-df61-4c09-9ffa-b8f533e9217e_PK-1920-300.png',
      title: 'Card title 1',
      text: 'This  natural lead-in to additional content. This content is a little bit longer.'
    },
    {
      imageSrc: 'https://gcp-img.slatic.net/lazada/298b1220-df61-4c09-9ffa-b8f533e9217e_PK-1920-300.png',
      title: 'Card title 1',
      text: 'This is  content. This content is a little bit longer.'
    },
    // Add more card objects as needed
  ];

  return (
    <div className="container-fluid">
      <MDBRow className="row-cols-2  row-cols-sm-3 row-cols-md-4 row-cols-xl-6 g-0">
        {cardData.map((card, index) => (
          <MDBCol key={index} style={{ padding: '0' }}>
            <MDBCard className="h-100">
              <div style={{ position: 'relative', paddingBottom: '100%', overflow: 'hidden' }}>
                <MDBCardImage
                  src={card.imageSrc}
                  alt="..."
                  position="top"
                  style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <MDBCardBody>
                <MDBCardTitle>{card.title}</MDBCardTitle>
                <MDBCardText>{card.text}</MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
    </div>
  );
}

export default Cards;

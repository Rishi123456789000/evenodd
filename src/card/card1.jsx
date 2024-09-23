import React from 'react';
import Card from 'react-bootstrap/Card';

function Evencard({ number, onClick }) {
  return (
    <Card style={{ width: '18rem', cursor: 'pointer' }} onClick={onClick}>
      <Card.Body>
        <Card.Title>{number}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default Evencard;

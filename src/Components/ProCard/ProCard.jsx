import React from 'react';
import './ProCard.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from "../../assets/Projects/1.png"

function ProCard(prop) {
  return (
    <Card className='pro_main'>
      <Card.Img className='pro_img' src={prop.thumbnail} />
      <Card.Body className='pro_body'>
        <Card.Title className='pro_title' >{prop.id} - {prop.name}</Card.Title>
        <Card.Text className='pro_desc'>
          {prop.desc}
        </Card.Text>
        <a href={prop.url} target='_blank'>
          <Button className='pro-button'>Visit</Button>
        </a>
      </Card.Body>
    </Card>
  );
}

export default ProCard;
// Player.js
import React from 'react';
import Card from 'react-bootstrap/Card';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <div style={{ width: '18rem', margin: '10px'}}>
      <Card style={{ border: "5px solid black" }}>
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body style={{backgroundColor: "yellow"}}>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Team: {team}<br />
            Nationality: {nationality}<br />
            Jersey Number: {jerseyNumber}<br />
            Age: {age}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Player;
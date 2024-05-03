import React from "react";
import { Card, Button, Container } from "react-bootstrap";
export default function Sobre() {
    return (
      <div>
      <p className="title">Teconologias Utilizadas: </p>
      <Container className="grid">
            <Card>
                <Card.Body>    
                    <Card.Img className="img" variant="top" src="https://www.techforretail.com/wp-content/uploads/2023/05/logo_vercel.jpg.webp" />  
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>    
                    <Card.Img className="img" variant="top" src="https://pbs.twimg.com/profile_images/1372304699601285121/5yBS6_3F_400x400.jpg" />  
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>    
                    <Card.Img className="img" variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" />  
                </Card.Body>
            </Card>
        </Container>
      </div>
    );
}
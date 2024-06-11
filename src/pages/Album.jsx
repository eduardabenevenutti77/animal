// import React from "react";
// import { Card, Button, Container } from "react-bootstrap";

// const Album = () => {
//     return (
//         <Container className="grid">
//             <Card>
//                 <Card.Body>
//                         <Card.Img className="img" variant="top" src="https://blog.cobasi.com.br/wp-content/uploads/2021/01/mini-coelho-capa.png" />  
//                         <Card.Title>This is a bunny 🐰🤍</Card.Title>
//                         <Card.Text>Esta é uma breve descrição do álbum.</Card.Text>
//                         <Button className="button">Abrir</Button>
//                 </Card.Body>
//             </Card>
//             <Card>
//                 <Card.Body>
//                     <Card.Img className="img" variant="top" src="https://blog.cobasi.com.br/wp-content/uploads/2021/01/mini-coelho-capa.png" />  
//                     <Card.Title>This is a bunny 🐰🤍</Card.Title>
//                     <Card.Text>Esta é uma breve descrição do álbum.</Card.Text>
//                     <Button className="button">Abrir</Button>
//                 </Card.Body>
//             </Card>
//             <Card>
//                 <Card.Body>    
//                     <Card.Img className="img" variant="top" src="https://blog.cobasi.com.br/wp-content/uploads/2021/01/mini-coelho-capa.png" />  
//                     <Card.Title>This is a bunny 🐰🤍</Card.Title>
//                     <Card.Text>Esta é uma breve descrição do álbum.</Card.Text>
//                     <Button className="button">Abrir</Button>
//                 </Card.Body>
//             </Card>
//             <Card>
//                 <Card.Body>   
//                     <Card.Img className="img" variant="top" src="https://blog.cobasi.com.br/wp-content/uploads/2021/01/mini-coelho-capa.png" />  
//                     <Card.Title>This is a bunny 🐰🤍</Card.Title>
//                     <Card.Text>Esta é uma breve descrição do álbum.</Card.Text>
//                     <Button className="button">Abrir</Button>
//                 </Card.Body>
//             </Card>
//             <Card>
//                 <Card.Body>    
//                 <   Card.Img className="img" variant="top" src="https://blog.cobasi.com.br/wp-content/uploads/2021/01/mini-coelho-capa.png" />  
//                     <Card.Title>This is a bunny 🐰🤍</Card.Title>
//                     <Card.Text>Esta é uma breve descrição do álbum.</Card.Text>
//                     <Button className="button">Abrir</Button>
//                 </Card.Body>
//             </Card>
//             <Card>
//                 <Card.Body>    
//                     <Card.Img className="img" variant="top" src="https://blog.cobasi.com.br/wp-content/uploads/2021/01/mini-coelho-capa.png" />  
//                     <Card.Title>This is a bunny 🐰🤍</Card.Title>
//                     <Card.Text>Esta é uma breve descrição do álbum.</Card.Text>
//                     <Button className="button">Abrir</Button>
//                 </Card.Body>
//             </Card>
//             <Card>
//                 <Card.Body>   
//                     <Card.Img className="img" variant="top" src="https://blog.cobasi.com.br/wp-content/uploads/2021/01/mini-coelho-capa.png" />  
//                     <Card.Title>This is a bunny 🐰🤍</Card.Title>
//                     <Card.Text>Esta é uma breve descrição do álbum.</Card.Text>
//                     <Button className="button">Abrir</Button>
//                 </Card.Body>
//             </Card>
//             <Card>
//                 <Card.Body>   
//                     <Card.Img className="img" variant="top" src="https://blog.cobasi.com.br/wp-content/uploads/2021/01/mini-coelho-capa.png" />  
//                     <Card.Title>This is a bunny 🐰🤍</Card.Title>
//                     <Card.Text>Esta é uma breve descrição do álbum.</Card.Text>
//                     <Button className="button">Abrir</Button>
//                 </Card.Body>
//             </Card>
//             <Card>
//                 <Card.Body>  
//                     <Card.Img className="img" variant="top" src="https://blog.cobasi.com.br/wp-content/uploads/2021/01/mini-coelho-capa.png" />  
//                     <Card.Title>This is a bunny 🐰🤍</Card.Title>
//                     <Card.Text>Esta é uma breve descrição do álbum.</Card.Text>
//                     <Button className="button">Abrir</Button>
//                 </Card.Body>
//             </Card>
//         </Container>
//     );
// };

// export default Album;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';

const AnimalCard = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    // Função para buscar a imagem da Dog API
    const fetchDogImage = async () => {
      try {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random');
        setImageUrl(response.data.message);
      } catch (error) {
        console.error('Erro ao buscar a imagem do cachorro:', error);
      }
    };

    fetchDogImage();
  }, []);

  return (
    <Card>
      <Card.Body>
        <Card.Img className="img" variant="top" src={imageUrl || "https://blog.cobasi.com.br/wp-content/uploads/2021/01/mini-coelho-capa.png"} />
        <Card.Title>This is a bunny 🐰🤍</Card.Title>
        <Card.Text>Esta é uma breve descrição do álbum.</Card.Text>
        <Button className="button">Abrir</Button>
      </Card.Body>
    </Card>
  );
};

export default AnimalCard;

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
  const [animal, setAnimal] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAnimalData = async () => {
      try {
        // Primeira requisição: obter o token de acesso
        const authResponse = await axios.post('https://api.petfinder.com/v2/oauth2/token', {
          grant_type: 'client_credentials',
          client_id: 'YOUR_CLIENT_ID',
          client_secret: 'YOUR_CLIENT_SECRET'
        });

        const token = authResponse.data.access_token;
        
        // Segunda requisição: obter dados do animal
        const animalResponse = await axios.get('https://api.petfinder.com/v2/animals?limit=1', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        const animalData = animalResponse.data.animals[0];
        setAnimal(animalData);
        setImageUrl(animalData.photos.length > 0 ? animalData.photos[0].medium : '');
      } catch (error) {
        console.error('Erro ao buscar dados do animal:', error);
        setError('Erro ao buscar dados do animal.');
      }
    };

    fetchAnimalData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Card>
      <Card.Body>
        <Card.Img className="img" variant="top" src={imageUrl || "https://via.placeholder.com/150"} />
        <Card.Title>{animal ? animal.name : 'Nome do Animal'}</Card.Title>
        <Card.Text>{animal ? animal.description : 'Descrição do animal não disponível.'}</Card.Text>
        <Button className="button">Abrir</Button>
      </Card.Body>
    </Card>
  );
};

export default AnimalCard;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Container } from 'react-bootstrap';

const AnimalCard = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDogImages = async () => {
      try {
        // Array para armazenar promessas de requisições
        const requests = Array.from({ length: 9 }, () => axios.get('https://dog.ceo/api/breeds/image/random'));

        // Esperar que todas as promessas sejam resolvidas
        const responses = await Promise.all(requests);

        // Extrair URLs das respostas
        const imageUrls = responses.map(response => response.data.message);
        setImages(imageUrls);
      } catch (error) {
        console.error('Erro ao buscar imagens dos cães:', error);
        setError('Erro ao buscar imagens dos cães.');
      }
    };

    fetchDogImages();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Container className="grid">
      {images.map((imageUrl, index) => (
        <Card key={index}>
          <Card.Body>
            <Card.Img className="img" variant="top" src={imageUrl || "https://via.placeholder.com/150"} />
            <Card.Title>Cão Aleatório</Card.Title>
            <Card.Text>Esta é uma imagem aleatória de um cão obtida da API dog.ceo.</Card.Text>
            <Button className="button" onClick={() => window.open(imageUrl, '_blank')}>Abrir</Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default AnimalCard;
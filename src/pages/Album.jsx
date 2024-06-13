import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Container } from 'react-bootstrap';

const Album = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState('');
  const adoptionInfo = [
    { nome: 'Max', idade: '2 anos', descricao: 'Cão amigável e ativo.' },
    { nome: 'Bella', idade: '3 anos', descricao: 'Companheira amorosa e leal.' },
    { nome: 'Charlie', idade: '1 ano', descricao: 'Cão brincalhão e inteligente.' },
    { nome: 'Lucy', idade: '4 anos', descricao: 'Cão protetor e inteligente.' },
    { nome: 'Cooper', idade: '2 anos', descricao: 'Cão energético e amigável.' },
    { nome: 'Daisy', idade: '2 anos', descricao: 'Cão curioso e carinhoso.' },
    { nome: 'Rocky', idade: '3 anos', descricao: 'Cão independente e leal.' },
    { nome: 'Luna', idade: '1 ano', descricao: 'Cão adorável e brincalhão.' },
    { nome: 'Milo', idade: '2 anos', descricao: 'Cão afetuoso e gentil.' },
  ];
  useEffect(() => {
    const fetchDogImages = async () => {
      try {
        const requests = Array.from({ length: 9 }, () => axios.get('https://dog.ceo/api/breeds/image/random'));
        const responses = await Promise.all(requests);
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
          <Card.Img className="img img-card" variant="top" src={imageUrl || "https://via.placeholder.com/150"} />
          <Card.Body>
            <Card.Title>{adoptionInfo[index].nome}</Card.Title>
            <Card.Text className='subject'>
              <strong>Idade:</strong> {adoptionInfo[index].idade} <br />
              <strong>Descrição:</strong> {adoptionInfo[index].descricao} <br />
            </Card.Text>
            <Button className="button" onClick={() => window.open(imageUrl, '_blank')}>Entre em Contato</Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};
export default Album;
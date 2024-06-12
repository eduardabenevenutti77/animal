import { useState } from 'react';
import { Container } from 'react-bootstrap';

export default function Contato() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cep, setCep] = useState('');
  const [street, setStreet] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [error, setError] = useState('');
  const [theme, setTheme] = useState('light');

  const handleCepChange = async (e) => {
    const newCep = e.target.value;
    setCep(newCep);

    if (newCep.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${newCep}/json/`);
        const data = await response.json();

        if (data.erro) {
          setError('CEP não encontrado');
          setStreet('');
          setNeighborhood('');
          setCity('');
        } else {
          setStreet(data.logradouro);
          setNeighborhood(data.bairro);
          setCity(data.localidade);
          setError('');
        }
      } catch (error) {
        setError('Erro ao buscar CEP');
        setStreet('');
        setNeighborhood('');
        setCity('');
      }
    } else {
      setStreet('');
      setNeighborhood('');
      setCity('');
      setError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nome cadastrado: ${name}`);
    alert(`Email cadastrado: ${email}`);
    alert(`Telefone cadastrado: ${phone}`);
    alert(`CEP cadastrado: ${cep}`);
    alert(`Rua cadastrada: ${street}`);
    alert(`Bairro cadastrado: ${neighborhood}`);
    alert(`Cidade cadastrada: ${city}`);
    console.log({ name, email, phone, cep, street, neighborhood, city });
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Container className={`form-container ${theme}`}>
      <p className='title'>Cadastre as suas informações ao nosso sistema!</p>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label className="form-label">
            Nome:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-input" />
          </label>
          <label className="form-label">
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-input" />
          </label>
        </div>
        <div className="form-row">
          <label className="form-label">
            Telefone:
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-input" />
          </label>
          <label className="form-label">
            CEP:
            <input type="text" value={cep} onChange={handleCepChange} className="form-input" />
          </label>
        </div>
        {error && <p className="form-error">{error}</p>}
        <div className="form-row">
          <label className="form-label">
            Rua:
            <input type="text" value={street} readOnly className="form-input" />
          </label>
          <label className="form-label">
            Bairro:
            <input type="text" value={neighborhood} readOnly className="form-input" />
          </label>
        </div>
        <div className="form-row">
          <label className="form-label">
            Cidade:
            <input type="text" value={city} readOnly className="form-input" />
          </label>
        </div>
        <button type="submit" className="form-button">Compartilhar Dados</button>
        <button type="button" onClick={toggleTheme} className="theme-button">Alterar Tema ☀</button>
      </form>
    </Container>
  );
}
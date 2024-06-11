import { useState } from 'react'; 

export default function Contato() { 
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [theme, setTheme] = useState('');

  const handleSubmit = (e) => { e.preventDefault(); 
  console.log({ name, email, theme }); 
  }; 
  return ( 
    <form onSubmit={handleSubmit}> 
      <label> Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} /> </label> 
      <label> Email: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /> </label> 
      <label> Theme: <input type="text" value={theme} onChange={(e) => setTheme(e.target.value)} /> </label> 
      <button type="submit">Submit</button> 
    </form> 
  ); 
} 

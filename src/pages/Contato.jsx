import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function Contato() {

  return (
    <Form>
      <h1 className="title">Informe seus dados de contato</h1>
      <fieldset>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

    <div className='groupButton'>
      <Button className='delete' type="submit">
        Submit
      </Button>
      <Button className='post' type="submit">
        Submit
      </Button>
    </div>
      </fieldset>
    </Form>
  );
}

  //   return (
  //     <div>
  //       <h1 className="title">Contato</h1>
  //       <p className="conteudo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eligendi animi porro aperiam impedit corrupti minus quos veritatis suscipit exercitationem quo hic temporibus, libero recusandae id perspiciatis quisquam, sapiente nostrum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi ipsum porro earum voluptates, est cumque deserunt, ipsam exercitationem provident eveniet ea neque quas autem aperiam perferendis eaque quam, reprehenderit harum? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit veritatis dignissimos natus atque possimus soluta quo quia accusantium laborum ipsam! Minima porro eligendi maiores impedit sed harum, nulla aspernatur ut!</p>
  //       <p className="conteudo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eligendi animi porro aperiam impedit corrupti minus quos veritatis suscipit exercitationem quo hic temporibus, libero recusandae id perspiciatis quisquam, sapiente nostrum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi ipsum porro earum voluptates, est cumque deserunt, ipsam exercitationem provident eveniet ea neque quas autem aperiam perferendis eaque quam, reprehenderit harum? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit veritatis dignissimos natus atque possimus soluta quo quia accusantium laborum ipsam! Minima porro eligendi maiores impedit sed harum, nulla aspernatur ut!</p>
  //       <p className="conteudo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eligendi animi porro aperiam impedit corrupti minus quos veritatis suscipit exercitationem quo hic temporibus, libero recusandae id perspiciatis quisquam, sapiente nostrum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi ipsum porro earum voluptates, est cumque deserunt, ipsam exercitationem provident eveniet ea neque quas autem aperiam perferendis eaque quam, reprehenderit harum? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit veritatis dignissimos natus atque possimus soluta quo quia accusantium laborum ipsam! Minima porro eligendi maiores impedit sed harum, nulla aspernatur ut!</p>
  //       <p className="container"></p>
  //     </div>
  //   );
  // }  


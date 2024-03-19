// export default function Sobre() {
//     return (
//       <div>
//         <h1 className="title">Sobre</h1>
//         <p className="conteudo">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi fuga nesciunt consequatur dicta sapiente quam et temporibus fugiat soluta commodi vero, eaque recusandae odit in amet adipisci, consectetur voluptatum dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet hic blanditiis tempora error, obcaecati totam quibusdam in maxime, assumenda, eaque dolore repudiandae molestiae. Nesciunt voluptates officia sit culpa harum quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aut voluptatem facilis quo quia amet deleniti ea illum quis nemo cumque sit, quas autem ex aliquam ipsa laborum repudiandae consequuntur.</p>
//         <p className="conteudo">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi fuga nesciunt consequatur dicta sapiente quam et temporibus fugiat soluta commodi vero, eaque recusandae odit in amet adipisci, consectetur voluptatum dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet hic blanditiis tempora error, obcaecati totam quibusdam in maxime, assumenda, eaque dolore repudiandae molestiae. Nesciunt voluptates officia sit culpa harum quis.</p>
//         <p className="conteudo">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi fuga nesciunt consequatur dicta sapiente quam et temporibus fugiat soluta commodi vero, eaque recusandae odit in amet adipisci, consectetur voluptatum dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet hic blanditiis tempora error, obcaecati totam quibusdam in maxime, assumenda, eaque dolore repudiandae molestiae. Nesciunt voluptates officia sit culpa harum quis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium sed, sint cum officiis temporibus quod esse aliquid voluptatum mollitia dolores nihil quo beatae. Ipsa eaque hic tempora provident at deleniti?</p>
//         <p className="conteudo">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi fuga nesciunt consequatur dicta sapiente quam et temporibus fugiat soluta commodi vero, eaque recusandae odit in amet adipisci, consectetur voluptatum dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet hic blanditiis tempora error, obcaecati totam quibusdam in maxime, assumenda, eaque dolore repudiandae molestiae. Nesciunt voluptates officia sit culpa harum quis.</p>
//         <p className="conteudo">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi fuga nesciunt consequatur dicta sapiente quam et temporibus fugiat soluta commodi vero, eaque recusandae odit in amet adipisci, consectetur voluptatum dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet hic blanditiis tempora error, obcaecati totam quibusdam in maxime, assumenda, eaque dolore repudiandae molestiae. Nesciunt voluptates officia sit culpa harum quis.</p>
//       </div>
//     );
//   }
  

import Accordion from 'react-bootstrap/Accordion';

export default function Sobre() {
  return (
    <div className='grid'>
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  );
}


import Description from './Description';
import Name from './Name';
import Card from 'react-bootstrap/Card';
import Price from './Price';
import Image from './Image';
import './product.css'
// Pour importer des fichiers précédents dans ce fichier pour faciliter le travail
const Product=()=> {
  return (
    <Card className='card' >
      <Image/>
      <Card.Body>
        <Card.Title>  <Name /></Card.Title>
        <Card.Text>
        <Description />
        </Card.Text>
        <Card.Text>
        <Price />
        </Card.Text>
       
      </Card.Body>
    </Card>
  );
}

export default Product;
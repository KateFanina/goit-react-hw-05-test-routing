import { Link, useLocation } from 'react-router-dom';
import { Container, Card, ProductName } from '../components/ProductList.styled';

export const ProductList = ({ products }) => {
  const location = useLocation();
  return (
    <Container>
      {products.map(product => (
        <Card>
          <Link to={`${product.id}`} state={{from:location}}>
            <img src="https://via.placeholder.com/200x100" alt="" />
            <ProductName>{product.name}</ProductName>
          </Link>
        </Card>
      ))}
    </Container>
  );
};

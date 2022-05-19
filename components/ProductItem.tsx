import { memo } from "react";

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    title: string;
  };
}

// usado para mostrar os dados do produto
function ProductItemComponent({ product }: ProductItemProps) {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
    </div>
  );
}

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    // evita renderização desnecessária caso a condição abaixo não seja satisfeita
    return Object.is(prevProps.product, nextProps.product);
  }
);

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    title: string;
  };
}

// usado para mostrar os dados do produto
export function ProductItem({ product }: ProductItemProps) {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
    </div>
  );
}

import { memo, useState, lazy, Suspense } from "react";
import lodash from "lodash";

const AddProductToWishlist = lazy(() => {
  return import("./AddProductToWishlist");
});

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  };
  onAddToWishlist: (id: number) => void;
}

// usado para mostrar os dados do produto
function ProductItemComponent({ product, onAddToWishlist }: ProductItemProps) {
  const [isAddingToWishlist, setIsAddingToWishlist] = useState(false);

  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishlist(true)}>
        Adicionar aos favoritos
      </button>
      {isAddingToWishlist && (
        <Suspense fallback={<span>Carregando ...</span>}>
          {" "}
          <AddProductToWishlist
            onAddToWishlist={() => onAddToWishlist(product.id)}
            onRequestClose={() => setIsAddingToWishlist(false)}
          />{" "}
        </Suspense>
      )}
    </div>
  );
}

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    // evita renderização desnecessária caso a condição abaixo não seja satisfeita
    // lodash.isEqual -> verifica se duas informações são iguais
    return lodash.isEqual(prevProps.product, nextProps.product);
  }
);

import { useMemo } from "react";
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>;
}

export function SearchResults({ results }: SearchResultsProps) {
  // 1 - função -> calculo que será memorizado
  // 2 - array de dependências -> quando calculo será refeito
  const totalPrice = useMemo(() => {
    return results.reduce((total, product) => {
      return total + product.price;
    }, 0);
  }, [results]);

  return (
    <div>
      <h2>{totalPrice}</h2>

      <Component totalPrice={totalPrice} />

      {results.map((product) => {
        return <ProductItem product={product} />;
      })}
    </div>
  );
}

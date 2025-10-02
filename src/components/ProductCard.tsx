import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Product, useCart } from '@/contexts/CartContext';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <Card className="overflow-hidden group hover:shadow-lifted transition-smooth">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
          />
        </div>
      </Link>
      <CardContent className="p-4">
        <div className="mb-2">
          <span className="text-xs text-muted-foreground">{product.category}</span>
        </div>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif font-semibold text-lg mb-2 group-hover:text-primary transition-smooth">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {product.description}
        </p>
        <p className="text-xl font-semibold text-primary">£{product.price}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button onClick={handleAddToCart} className="w-full" size="sm">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;

import { useParams, Link } from 'react-router-dom';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';
import ProductCard from '@/components/ProductCard';
import { Badge } from '@/components/ui/badge';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-serif font-bold mb-4">Product Not Found</h2>
          <Link to="/shop">
            <Button>Return to Shop</Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Link to="/shop" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-smooth">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Shop
        </Link>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="rounded-lg overflow-hidden shadow-lifted">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-3">{product.category}</Badge>
              <h1 className="text-4xl font-serif font-bold mb-4">{product.name}</h1>
              <p className="text-3xl font-semibold text-primary mb-6">£{product.price}</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Description</h3>
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold">Product Details</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Handcrafted on the Isle of Lismore</li>
                <li>• Made with natural, sustainable materials</li>
                <li>• Eco-friendly packaging</li>
                <li>• UK-wide shipping available</li>
              </ul>
            </div>

            <Button onClick={handleAddToCart} size="lg" className="w-full md:w-auto">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-3xl font-serif font-bold mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map(relatedProduct => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;

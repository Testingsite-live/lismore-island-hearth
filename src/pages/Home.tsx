import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import Newsletter from '@/components/Newsletter';
import { products } from '@/data/products';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Home = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Featured Products */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Featured Products</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Handcrafted essentials from the Isle of Lismore, celebrating sustainable island living and natural beauty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Link to="/shop">
            <Button size="lg" variant="outline">
              View All Products
            </Button>
          </Link>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="animate-slide-up">
              <h2 className="text-3xl font-serif font-bold mb-4">Our Island Story</h2>
              <p className="text-muted-foreground mb-4">
                For over 12 years, Lismore Island Home has been sharing the natural beauty and sustainable practices of island life. Founded by Eva Tombs, our business grew from a passion for biodynamic farming and a deep connection to this special place.
              </p>
              <p className="text-muted-foreground mb-6">
                Every product we create is inspired by the windswept shores, physic gardens, and artisan traditions of the Isle of Lismore in Argyll and Bute, Scotland.
              </p>
              <Link to="/about">
                <Button variant="outline">Learn More About Us</Button>
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lifted">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4"
                alt="Scottish landscape"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
};

export default Home;

import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-lismore-sunset.jpg';

const Hero = () => {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 drop-shadow-lg">
          Discover the Heart of Scottish Island Living
        </h1>
        <p className="text-xl md:text-2xl text-white/95 mb-8 drop-shadow-md font-light">
          Natural Goods from Our Home to Yours
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/shop">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lifted">
              Shop Now
            </Button>
          </Link>
          <Link to="/about">
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20">
              Our Story
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Gift, Home, Leaf, Package } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Gift className="h-8 w-8 text-primary" />,
      title: 'Personalized Gift Curation',
      description: 'Let us create a bespoke gift collection tailored to your recipient. Perfect for special occasions, corporate gifting, or celebrating Scottish heritage.',
      price: 'From £50',
    },
    {
      icon: <Home className="h-8 w-8 text-primary" />,
      title: 'Island-Inspired Consultations',
      description: 'One-on-one guidance on bringing island living principles into your home. We cover sustainable practices, natural decor, and biodynamic gardening.',
      price: '£75/hour',
    },
    {
      icon: <Leaf className="h-8 w-8 text-primary" />,
      title: 'Physic Garden Workshops',
      description: 'Virtual or in-person workshops on creating your own herb garden, understanding medicinal plants, and natural product making.',
      price: 'From £100',
    },
    {
      icon: <Package className="h-8 w-8 text-primary" />,
      title: 'Subscription Boxes',
      description: 'Receive a curated selection of seasonal island essentials delivered quarterly. Each box celebrates the changing seasons of Lismore.',
      price: '£45/quarter',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="gradient-hero py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-xl text-white/95 max-w-2xl mx-auto">
            Beyond products, we offer personalized services to bring the spirit of Lismore into your life.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="shadow-soft hover:shadow-lifted transition-smooth">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-2xl font-serif">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <p className="text-lg font-semibold text-primary mb-4">{service.price}</p>
                <Link to="/contact">
                  <Button variant="outline" className="w-full">
                    Inquire Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Additional Info */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-6">Why Choose Our Services?</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              With over 12 years of experience in sustainable island living and biodynamic practices, 
              Eva brings authentic knowledge and passion to every service. Whether you're looking for 
              the perfect gift, seeking to adopt more sustainable practices, or wanting to learn about 
              natural products, we're here to help.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="font-semibold mb-2">Remote Consultations</h3>
                <p className="text-sm text-muted-foreground">
                  Available UK-wide via video call
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Flexible Scheduling</h3>
                <p className="text-sm text-muted-foreground">
                  Book at your convenience
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Personalized Approach</h3>
                <p className="text-sm text-muted-foreground">
                  Tailored to your needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

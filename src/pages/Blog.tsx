import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import blogGardenImage from '@/assets/blog-garden.jpg';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'Sustainable Living on Lismore',
      excerpt: 'Discover how island life has taught us the true meaning of sustainability, from reducing waste to living in harmony with nature.',
      date: 'March 15, 2024',
      image: blogGardenImage,
      category: 'Lifestyle',
    },
    {
      id: 2,
      title: 'Behind Our Biodynamic Garden',
      excerpt: 'A deep dive into the principles and practices that make our physic garden thrive, season after season.',
      date: 'March 8, 2024',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399',
      category: 'Gardening',
    },
    {
      id: 3,
      title: 'The Art of Natural Soap Making',
      excerpt: 'Learn the traditional methods we use to create our handcrafted soaps, using herbs from our own garden.',
      date: 'February 28, 2024',
      image: 'https://images.unsplash.com/photo-1600428099789-3f35e04c4f0f',
      category: 'Crafts',
    },
    {
      id: 4,
      title: 'A Year on the Isle of Lismore',
      excerpt: 'Follow us through the changing seasons and discover how each brings its own gifts and challenges to island living.',
      date: 'February 15, 2024',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
      category: 'Island Life',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="gradient-hero py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Our Blog
          </h1>
          <p className="text-xl text-white/95 max-w-2xl mx-auto">
            Stories from island life, sustainable living tips, and insights into our craft.
          </p>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto bg-muted/30 p-6 rounded-lg text-center">
          <h2 className="text-2xl font-serif font-semibold mb-3">Stay Updated</h2>
          <p className="text-muted-foreground mb-4">
            Subscribe to receive our latest stories and updates from the Isle of Lismore.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md border border-input bg-background"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map(post => (
            <Card key={post.id} className="overflow-hidden shadow-soft hover:shadow-lifted transition-smooth group">
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-bold group-hover:text-primary transition-smooth">
                  {post.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <Button variant="outline" size="sm">
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;

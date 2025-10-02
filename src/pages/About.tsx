import aboutImage from '@/assets/about-island-home.jpg';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutImage})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 drop-shadow-lg animate-fade-in">
            Our Story
          </h1>
          <p className="text-xl text-white/95 drop-shadow-md">Life on the Isle of Lismore</p>
        </div>
      </section>

      {/* Eva's Story */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold mb-6">From Island Home to Your Home</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Welcome to Lismore Island Home. I'm Eva Tombs, and for over 12 years, I've called the beautiful Isle of Lismore in Argyll and Bute, Scotland, my home. What began as a personal journey into sustainable living and biodynamic farming has grown into a business that celebrates the natural beauty and artisan traditions of island life.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Living on Lismore has taught me the value of simplicity, sustainability, and connection to the land. Our physic garden, carefully tended with biodynamic practices, provides many of the herbs and flowers that go into our products. Every item we create carries a piece of this island's spirit—from the wild herbs gathered on windswept shores to the natural materials sourced with care.
            </p>

            <h3 className="text-2xl font-serif font-semibold mt-12 mb-4">Our Values</h3>
            
            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="bg-muted/30 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-3">Sustainability</h4>
                <p className="text-sm text-muted-foreground">
                  We practice biodynamic farming and use eco-friendly packaging, ensuring our impact on this beautiful island remains gentle.
                </p>
              </div>
              <div className="bg-muted/30 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-3">Community</h4>
                <p className="text-sm text-muted-foreground">
                  Our business supports local artisans and celebrates traditional Scottish crafts, keeping island traditions alive.
                </p>
              </div>
              <div className="bg-muted/30 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-3">Quality</h4>
                <p className="text-sm text-muted-foreground">
                  Every product is handcrafted with attention to detail, using the finest natural ingredients from our island home.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-serif font-semibold mt-12 mb-4">Our Journey</h3>
            
            <div className="space-y-6 border-l-2 border-primary pl-6 my-8">
              <div>
                <h4 className="font-semibold mb-2">2011 - The Beginning</h4>
                <p className="text-sm text-muted-foreground">
                  Started Lismore Island Home with a small physic garden and a dream of sharing island life.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">2015 - Growing Roots</h4>
                <p className="text-sm text-muted-foreground">
                  Expanded to include home decor and gifts, working with local artisans across Scotland.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">2020 - Going National</h4>
                <p className="text-sm text-muted-foreground">
                  Launched UK-wide shipping, bringing the essence of Lismore to homes across the country.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Today</h4>
                <p className="text-sm text-muted-foreground">
                  Continuing to grow while staying true to our values of sustainability, quality, and community.
                </p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Thank you for supporting Lismore Island Home. Every purchase helps sustain our island way of life and supports the artisan community we're proud to be part of. We hope our products bring a touch of Scottish island serenity to your home.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

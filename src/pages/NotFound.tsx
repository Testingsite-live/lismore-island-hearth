import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-gradient-subtle">
      <div className="text-center px-4 max-w-2xl mx-auto">
        <h1 className="text-6xl font-serif font-bold text-foreground mb-4">404</h1>
        <h2 className="text-2xl font-serif font-semibold mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          The page you're looking for seems to have drifted away like mist over the loch.
        </p>
        <Link to="/">
          <Button size="lg">
            <Home className="h-4 w-4 mr-2" />
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

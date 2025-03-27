
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import PageLayout from "@/components/layouts/PageLayout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageLayout>
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
        <div className="text-center max-w-3xl mx-auto reveal-on-scroll">
          <h1 className="text-6xl md:text-8xl font-bold text-fe-blue mb-6">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-fe-teal mb-6">Page Not Found</h2>
          <p className="text-gray-600 mb-8 text-lg">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link to="/" className="button-primary">
            Return to Home
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default NotFound;

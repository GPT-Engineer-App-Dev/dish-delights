import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl mb-4">Welcome to Recipe Share</h1>
      <p className="mb-8">Discover and share amazing recipes with the community.</p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Featured Recipe 1</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Short description of the featured recipe.</p>
            <Link to="/recipe/1" className="text-blue-500">Read more</Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Featured Recipe 2</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Short description of the featured recipe.</p>
            <Link to="/recipe/2" className="text-blue-500">Read more</Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Featured Recipe 3</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Short description of the featured recipe.</p>
            <Link to="/recipe/3" className="text-blue-500">Read more</Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
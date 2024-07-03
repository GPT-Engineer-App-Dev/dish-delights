import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const fetchMyRecipes = async () => {
  const response = await fetch("/api/my-recipes");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const MyRecipes = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["myRecipes"],
    queryFn: fetchMyRecipes,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1 className="text-3xl mb-4">My Recipes</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data.map((recipe) => (
          <Card key={recipe.id}>
            <CardHeader>
              <CardTitle>{recipe.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{recipe.description}</p>
              <Button variant="outline" className="mr-2">Edit</Button>
              <Button variant="destructive">Delete</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MyRecipes;
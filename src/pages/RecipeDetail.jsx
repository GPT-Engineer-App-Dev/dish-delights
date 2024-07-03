import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const fetchRecipe = async (id) => {
  const response = await fetch(`/api/recipes/${id}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const RecipeDetail = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useQuery({
    queryKey: ["recipe", id],
    queryFn: () => fetchRecipe(id),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1 className="text-3xl mb-4">{data.title}</h1>
      <img src={data.image} alt={data.title} className="mb-4" />
      <h2 className="text-2xl mb-2">Ingredients</h2>
      <p className="mb-4">{data.ingredients}</p>
      <h2 className="text-2xl mb-2">Instructions</h2>
      <p>{data.instructions}</p>
    </div>
  );
};

export default RecipeDetail;
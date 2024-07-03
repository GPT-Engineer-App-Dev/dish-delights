import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, List, PlusCircle, User } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/sidebar"; // Use the sidebar layout
import Index from "./pages/Index.jsx";
import AllRecipes from "./pages/AllRecipes.jsx";
import SubmitRecipe from "./pages/SubmitRecipe.jsx";
import MyRecipes from "./pages/MyRecipes.jsx";
import RecipeDetail from "./pages/RecipeDetail.jsx";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "All Recipes",
    to: "/all-recipes",
    icon: <List className="h-4 w-4" />,
  },
  {
    title: "Submit Recipe",
    to: "/submit-recipe",
    icon: <PlusCircle className="h-4 w-4" />,
  },
  {
    title: "My Recipes",
    to: "/my-recipes",
    icon: <User className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="all-recipes" element={<AllRecipes />} />
              <Route path="submit-recipe" element={<SubmitRecipe />} />
              <Route path="my-recipes" element={<MyRecipes />} />
              <Route path="recipe/:id" element={<RecipeDetail />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
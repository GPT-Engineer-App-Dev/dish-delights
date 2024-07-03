import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const SubmitRecipe = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission logic here
    reset();
  };

  return (
    <div>
      <h1 className="text-3xl mb-4">Submit a Recipe</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        <Input
          type="text"
          placeholder="Recipe Title"
          {...register("title", { required: true })}
        />
        <Textarea
          placeholder="Ingredients"
          {...register("ingredients", { required: true })}
        />
        <Textarea
          placeholder="Instructions"
          {...register("instructions", { required: true })}
        />
        <Input
          type="file"
          {...register("image", { required: true })}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default SubmitRecipe;
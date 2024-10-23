import { useEffect, useState } from "react";
import Recipe from "./recipe/Recipe";

const OurRecipes = () => {
  const [ourRecipes, setOurRecipes] = useState([]);

  useEffect(() => {
    fetch("recipesdata.json")
      .then((res) => res.json())
      .then((data) => setOurRecipes(data));
  }, []);

  return (
    <div>
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-4xl font-bold">Our Recipes</h2>
        <p>
          We serve some delicious food with a healthy recipes.As you can see{" "}
          <br /> in our food we added so many healthy items that is good for
          your body. Happy meal sir.
        </p>
      </div>
      <div className="flex gap-8">
        <div className="col-span-1 grid grid-cols-2 gap-5 w-3/5">
          {ourRecipes.map((ourRecipe) => (
            <Recipe key={ourRecipe.recipe_id} ourRecipe={ourRecipe}></Recipe>
          ))}
        </div>
        <div className="w-2/5">
          <h3 className="text-2xl">Want To Cook:1</h3>
        </div>
      </div>
    </div>
  );
};

export default OurRecipes;

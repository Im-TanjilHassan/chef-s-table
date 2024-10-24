import { useEffect, useState } from "react";
import Recipe from "./recipe/Recipe";
import Cooking from "./cooking/Cooking";

const OurRecipes = () => {
  const [ourRecipes, setOurRecipes] = useState([]);
  const [cookingItems, setCookingItems] = useState([])

  useEffect(() => {
    fetch("recipesdata.json")
      .then((res) => res.json())
      .then((data) => setOurRecipes(data));
  }, []);

  const wantToCook = (foodItem) => {
    const findDuplicate = cookingItems.find(
      (cookingItem) => cookingItem.recipe_id === foodItem.recipe_id
    );

    if (findDuplicate === undefined) {
      setCookingItems([...cookingItems, foodItem]) 
    }
    else {
      <div className="toast toast-top toast-end">
        <div className="alert alert-info">
          <span>New mail arrived.</span>
        </div>
      </div>;
    }

    const markAsClicked = document.getElementById(`${foodItem.recipe_id}`);
    markAsClicked.style.backgroundColor = "#6f31fa";
  };

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
            <Recipe
              wantToCook={wantToCook}
              key={ourRecipe.recipe_id}
              ourRecipe={ourRecipe}
            ></Recipe>
          ))}
        </div>
        <div className="w-2/5">
          <Cooking cookingItems={cookingItems}></Cooking>
        </div>
      </div>
    </div>
  );
};

export default OurRecipes;

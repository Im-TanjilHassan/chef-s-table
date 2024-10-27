import { useEffect, useState } from "react";
import Recipe from "./recipe/Recipe";
import Cooking from "./cooking/Cooking";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OurRecipes = () => {
  const [ourRecipes, setOurRecipes] = useState([]);
  const [cookingItems, setCookingItems] = useState([]);
  const [prepareItems, setPrepareItems] = useState([])

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
      toast("This Item Already Exists");
    }

    const markAsClicked = document.getElementById(`${foodItem.recipe_id}`);
    markAsClicked.style.backgroundColor = "#6f31fa";
  };

  const preparingFoodItem = (foodItem) => {
    const restItem = cookingItems.filter(cookingItem => cookingItem.recipe_id !== foodItem.recipe_id);
    setCookingItems(restItem);

    setPrepareItems([...prepareItems, foodItem])
    
  }

  return (
    <div className="mb-10">
      <ToastContainer />
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-4xl font-bold">Our Recipes</h2>
        <p className="px-3 lg:px-0">
          We serve some delicious food with a healthy recipes.As you can see in our food we added so many healthy items that is good for <br />
          your body. Happy meal sir.
        </p>
      </div>
      <div className="flex flex-col lg:flex lg:flex-row lg:gap-8 space-y-5 lg:space-y-0 px-3 lg:px-0 ">
        <div className="lg:col-span-1 lg:grid lg:grid-cols-2 lg:gap-5 lg:w-3/5 space-y-5 lg:space-y-0">
          {ourRecipes.map((ourRecipe) => (
            <Recipe
              wantToCook={wantToCook}
              key={ourRecipe.recipe_id}
              ourRecipe={ourRecipe}
            ></Recipe>
          ))}
        </div>
        <div className="lg:w-2/5">
          <Cooking
            cookingItems={cookingItems}
            preparingFoodItem={preparingFoodItem}
            prepareItems={prepareItems}
          ></Cooking>
        </div>
      </div>
    </div>
  );
};

export default OurRecipes;

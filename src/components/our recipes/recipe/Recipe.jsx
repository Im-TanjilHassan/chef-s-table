import { CiClock2 } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
import PropTypes from "prop-types";

const Recipe = ({ ourRecipe, wantToCook }) => {
  const {
    recipe_image,
    recipe_name,
    recipe_id,
    short_description,
    ingredients,
    preparing_time,
    calories,
    } = ourRecipe;

  return (
    <div>
      <div className="border border-[#a09aff] hover:border-[#7951ff] p-5 rounded-xl space-y-5 h-full">
        <img className="rounded-2xl h-auto" src={recipe_image} alt="" />
        <h3 className="text-2xl font-bold">{recipe_name}</h3>
        <p className="text-gray-400">{short_description}</p>
        <p className="font-bold">Ingredients: {ingredients.length}</p>
        <ul className="ml-4">
          {ingredients.map((ingredient, idx) => (
            <li className="text-gray-400 list-disc" key={idx}>
              {ingredient}
            </li>
          ))}
        </ul>
        <div className="flex gap-5">
          <div className="flex items-center gap-3">
            <CiClock2 />
            <p>{preparing_time}</p>
          </div>
          <div className="flex items-center gap-3">
            <FaFire />
            <p>{calories}</p>
          </div>
        </div>
        <button
          id={recipe_id}
          onClick={() => wantToCook(ourRecipe)}
          className="border bg-[#7951ff] w-40 py-2 rounded-3xl text-white font-bold hover:bg-[#6f31fa]"
        >
          Want To Cook
        </button>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  ourRecipe: PropTypes.object.isRequired,
  wantToCook:PropTypes.func.isRequired
};

export default Recipe;

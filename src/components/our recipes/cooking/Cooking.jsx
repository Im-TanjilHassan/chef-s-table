import PropTypes from "prop-types";

const Cooking = ({ cookingItems, preparingFoodItem, prepareItems }) => {

  let totalPrepareTime = 0;
  let totalCalories = 0;

  prepareItems.map(prepareItem => {
    totalPrepareTime = totalPrepareTime + parseInt(prepareItem.preparing_time);
    totalCalories = totalCalories + parseInt(prepareItem.calories);
  })
  return (
    <div>
      <div className="border border-[#a09aff] p-5 rounded-md space-y-4">
        <h2 className="text-center font-bold text-2xl">
          Want to cook: {cookingItems.length}
        </h2>
        <hr className="text-black font-3xl font-bold h-1 bg-gray-300" />
        <div>
          <table className="table-auto w-full mb-10">
            <thead>
              <tr>
                <th></th>
                <th className="p-3 text-center text-gray-500">Name</th>
                <th className="p-3 text-center text-gray-500">Time</th>
                <th className="p-3 text-center text-gray-500">calories</th>
              </tr>
            </thead>
            <tbody>
              {cookingItems.map((cookingItem, idx) => (
                <tr key={cookingItem.recipe_id}>
                  <td className="font-bold text-center">{idx + 1}</td>
                  <td className="p-3 text-center text-gray-500">
                    {cookingItem.recipe_name}
                  </td>
                  <td className="p-3 text-center text-gray-500">
                    {cookingItem.preparing_time} Min
                  </td>
                  <td className="p-3 text-center text-gray-500">
                    {cookingItem.calories} Calories
                  </td>
                  <td className="p-3 text-center text-gray-500">
                    <button
                      onClick={() => preparingFoodItem(cookingItem)}
                      className="bg-[#7951ff] hover:bg-[#6f31fa] text-white font-bold px-4 py-2 rounded-3xl"
                    >
                      Preparing
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2 className="text-center font-bold text-2xl">
          Currently Cooking: {prepareItems.length}
        </h2>
        <hr className="text-black font-3xl font-bold h-1 bg-gray-300" />
        <div>
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th></th>
                <th className="p-3 text-center text-gray-500">Name</th>
                <th className="p-3 text-center text-gray-500">Time</th>
                <th className="p-3 text-center text-gray-500">calories</th>
              </tr>
            </thead>
            <tbody>
              {prepareItems.map((prepareItem, idx) => (
                <tr key={idx}>
                  <td className="font-bold text-center">{idx + 1}</td>
                  <td className="p-3 text-center text-gray-500">
                    {prepareItem.recipe_name}
                  </td>
                  <td className="p-3 text-center text-gray-500">
                    {prepareItem.preparing_time} Min
                  </td>
                  <td className="p-3 text-center text-gray-500">
                    {prepareItem.calories} Calories
                  </td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td className="p-3 text-center text-gray-500"></td>
                <td className="p-3 text-center text-gray-500 font-bold">
                  Total Time = {totalPrepareTime} Minutes
                </td>
                <td className="p-3 text-center text-gray-500 font-bold">
                  Total Calories = {totalCalories} calories 
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

Cooking.propTypes = {
  cookingItems: PropTypes.array.isRequired,
  preparingFoodItem: PropTypes.func.isRequired,
  prepareItems: PropTypes.array.isRequired
};

export default Cooking;

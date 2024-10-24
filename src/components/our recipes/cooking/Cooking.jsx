import PropTypes from "prop-types";

const Cooking = ({ cookingItems }) => {

    console.log(cookingItems)

  return (
    <div>
      <div className="border border-[#a09aff] p-5 rounded-md space-y-4">
        <h2 className="text-center font-bold text-2xl">Want to cook: 1</h2>
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
              <tr>
                <td className="font-bold">1</td>
                <td className="p-3 text-center text-gray-500">fried chicken</td>
                <td className="p-3 text-center text-gray-500">30min</td>
                <td className="p-3 text-center text-gray-500">
                  120gm calories
                </td>
                <td className="p-3 text-center text-gray-500">
                  <button className="bg-[#7951ff] hover:bg-[#6f31fa] text-white font-bold px-4 py-2 rounded-3xl">
                    Preparing
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 className="text-center font-bold text-2xl">
          Currently Cooking: 02
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
              <tr>
                <td className="font-bold">1</td>
                <td className="p-3 text-center text-gray-500">fried chicken</td>
                <td className="p-3 text-center text-gray-500">30min</td>
                <td className="p-3 text-center text-gray-500">
                  120gm calories
                </td>
              </tr>
              <tr>
                <td></td>
                <td className="p-3 text-center text-gray-500"></td>
                <td className="p-3 text-center text-gray-500 font-bold">
                  Total Time = 45 minutes
                </td>
                <td className="p-3 text-center text-gray-500 font-bold">
                  Total Calories = 1050 calories
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
cookingItems: PropTypes.array.isRequired
}

export default Cooking;

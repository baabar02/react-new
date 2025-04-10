// import FishIngredient from "@/components/Fishingredient";
// import RecipeIngredient from "@/components/Ingredient";

import { Mainprofile } from "@/components/Sidebaritem";

// const Home = () => {
//   const ingredients = [
//     { name: "Salmon", amount: 1, measurement: "lb" },
//     { name: "Pine Nuts", amount: 1, measurement: "cup" },
//     { name: "Butter Lettuce", amount: 2, measurement: "cups" },
//     { name: "Yellow Squash", amount: 1, measurement: "med" },
//     { name: "Olive Oil", amount: 0.5, measurement: "cup" },
//     { name: "Garlic", amount: 3, measurement: "cloves" },
//   ];

//   return (
//     <div>
//       <div>
//         <h1>Delicious Recipes</h1>
//       </div>

//       <div style={{ border: "1px dotted orange", padding: 8 }}>
//         <Recipe name="Baked Salmon" />
//         <ul>
//           {ingredients.map((ingredient) => (
//             <RecipeIngredient
//               name={ingredient.name}
//               amount={ingredient.amount}
//               measurement={ingredient.measurement}
//             />
//           ))}
//         </ul>
//         <h2>Cooking Instructions</h2>
//         <ol>
//           {steps.map((step) => (
//             <Step key={step} text={step} />
//           ))}
//         </ol>
//       </div>
//       <div style={{ border: "1px dotted orange", padding: 8 }}>
//         <Recipe name="Fish Tacos" />
//         <ul>
//           {fishIngredients.map((ingredient, index) => (
//             <RecipeIngredient
//               key={index}
//               name={ingredient.name}
//               amount={ingredient.amount}
//               measurement={ingredient.measurement}
//             />
//           ))}
//         </ul>
//         <h2>Cooking instructions</h2>
//         <ol>
//           {fishsteps.map((fishstep, index) => (
//             <Fishstep key={index} text={fishstep} />
//           ))}
//         </ol>
//       </div>
//     </div>
//   );
// };

// const Recipe = ({ name }) => {
//   return <h3>{name}</h3>;
// };

// const steps = [
//   "Preheat the oven to 350 degrees.",
//   "Spread the olive oil around a glass baking dish.",
//   "Add the salmon, garlic, and pine nuts to the dish.",
//   "Bake for 15 minutes.",
//   "Add the yellow squash and put back in the oven for 30 mins.",
//   "Remove from oven and let cool for 15 minutes. Add the lettuce and serve.",
// ];

// const Step = ({ text }) => {
//   return <li>{text}</li>;
// };

// const Fishstep = ({ text, stepNumber }) => {
//   return (
//     <li>
//       {text} {stepNumber}
//     </li>
//   );
// };

// const fishIngredients = [
//   { name: "Whitefish", amount: 1, measurement: "lb" },
//   { name: "Cheese", amount: 1, measurement: "cup" },
//   { name: "Iceberg Lettuce", amount: 2, measurement: "cups" },
//   { name: "Tomatoes", amount: 2, measurement: "large" },
//   { name: "Tortillas", amount: 3, measurement: "med" },
// ];

// const fishsteps = [
//   "Cook the fish on the grill until hot.",
//   "Place the fish on the 3 tortillas.",
//   "Top them with lettuce, tomatoes, and cheese.",
// ];

// export default Home;
// import { Sidebaritem } from "@/components/Sidebaritem";
// import {} from "lucid-react";
//
// const Home = () => {
//   const sideBarItems = [
//     {
//       icon: "<user/>",
//       name: "Baabar",
//     },
//     {
//       icon: "Profile",
//       name: "Baabar",
//     },
//     {
//       icon: "Profile",
//       name: "Baabar",
//     },
//     {
//       icon: "Profile",
//       name: "Baabar",
//     },
//     {
//       icon: "Video",
//       name: "Video",
//     },
//     {
//       icon: "Marketplace",
//       name: "Marketplace",
//     },
//   ];

//   return (
//     <div style={{ display: "flex", flexDirection: "column" }}>
//       {sideBarItems.map(({ icon, name: itemName }, index) => {
//         return <Sidebaritem key={index} icon={icon} item={itemName} />;
//       })}
//     </div>
//   );
// };

// export default Home;
import { Apple } from "lucide-react";
import { Comment } from "@/components/comment";
const Home = () => {
  // const data = [
  //   { icon: "", name: "", text: "", zurag: "" },
  //   { icon: "", name: "", text: "", zurag: "" },
  //   { icon: "", name: "", text: "", zurag: "" },
  // ];

  return (
    //   {
    //  const Maindata= data.map(()=>{
    //     return
    //   })

    //   }
    // )

    <div style={{ height: "400px", width: "700px", backgroundColor: "grey" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Mainprofile
          photo={
            <div
              style={{
                border: "0.5px solid red",
                height: "fit-content",
                borderRadius: "50%",
                padding: "4px",
              }}
            >
              <Apple style={{}} />
            </div>
          }
          identify="Baatarvan Tumurbaatar"
        />
      </div>
      <Comment text="React-Ended" />
      <Apple />
    </div>
  );
};

export default Home;

import FishIngredient from "@/components/Fishingredient";
import RecipeIngredient from "@/components/Ingredient";


const Home = () => {

  const ingredients = [
    { name: "Salmon", amount: 1, measurement: "lb" },
    { name: "Pine Nuts", amount: 1, measurement: "cup" },
    { name: "Butter Lettuce", amount: 2, measurement: "cups" },
    { name: "Yellow Squash", amount: 1, measurement: "med" },
    { name: "Olive Oil", amount: 0.5, measurement: "cup" },
    { name: "Garlic", amount: 3, measurement: "cloves" },
  ];

  return (
    <div>
      <div>
        <h1>Delicious Recipes</h1>
      </div>

      <div style={{border:"1px dotted orange", padding: 8}}>
        <Recipe name="Baked Salmon" />
        <ul>
          {
          ingredients.map((ingredient) => (
            <RecipeIngredient
             
              name={ingredient.name}
              amount={ingredient.amount}
              measurement={ingredient.measurement}
            />
          ))
          }
        </ul>
      <h2>Cooking Instructions</h2>
      <ol>
        {
          steps.map((step, index) => (
            <Step key={step} text={step} stepNumber={index + 1}/>
          ))
          }
      </ol>    
      </div>
      <Recipe name="Fish Tacos"/>
      <ul>
        {
        fishIngredients.map((ingredient,index)=>
      <RecipeIngredient
          key={index}
          name={ingredient.name}
          amount={ingredient.amount}
          measurement={ingredient.measurement}
        />
         )
        }
      </ul>
      <h2>Cooking instructions</h2>
      <ol>
        {fishsteps.map((fishstep, index)=> (
          <Fishstep key={index} text={fishstep} stepNumber={index +1 }/>
        ))
        }
      </ol>
    </div>
  );
};

const Recipe = ({ name }) => {  
  return (
      <h3>{name}</h3>  
  );
}

const steps = [
            "Preheat the oven to 350 degrees.",
            "Spread the olive oil around a glass baking dish.",
            "Add the salmon, garlic, and pine nuts to the dish.",
            "Bake for 15 minutes.",
            "Add the yellow squash and put back in the oven for 30 mins.",
            "Remove from oven and let cool for 15 minutes. Add the lettuce and serve."
        ]


const Step = ({text}) => {
  return (


  <li>
   {text}
  </li>
  )
} 

const fishIngredients = [

{ name: "Whitefish", amount: 1, measurement: "lb" },
{ name: "Cheese", amount: 1, measurement: "cup" },
{ name: "Iceberg Lettuce", amount: 2, measurement: "cups" },
{ name: "Tomatoes", amount: 2, measurement: "large" },
{ name: "Tortillas", amount: 3, measurement: "med" },
]

const Fishstep = ({text, stepNumber}) =>{
  return (
    <li>
     {text} {stepNumber}
    </li>
  )
}

const fishsteps = [
              "Cook the fish on the grill until hot.",
              "Place the fish on the 3 tortillas.",
              "Top them with lettuce, tomatoes, and cheese."
]



export default Home;


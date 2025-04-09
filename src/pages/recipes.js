import Ingredient from "@/components/Ingredient";

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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        height: "100vh",
      }}
    >
      <div>
        <h1>Deliciuos Recipes</h1>
        <div>
          <h3>Baked Salmon</h3>
          <Ingredient name="Butter Lettuce" amount="1" measurenment="lb" />

          {/* <Ingredient name="Salmon" amount="1" measurenment="cups" />
          <Ingredient name="Pine Nuts" amount="2" measurenment="cups" />
          <Ingredient name="Yellow Squash" amount="2" measurenment="med" />
          <Ingredient name="Olive Oil" amount="0.5" measurenment="cup" />
          <Ingredient name="Garlic" amount="3" measurenment="cloves" /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;

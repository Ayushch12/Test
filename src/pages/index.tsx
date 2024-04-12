// pages/index.js (or .tsx if using TypeScript)
import PropertyList from "../components/PropertyList";
import data from "../data/properties.json";
  // Adjust the path to where you have your CSV in the public directory
  console.log("data",data)

const Home = () => {

  return (
    <div className="container mx-auto px-4">
      <PropertyList properties={data} />
    </div>
  );
};

export default Home;





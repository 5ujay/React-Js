import Card from "./Card";

function App() {
  return (
    <div className="flex gap-6 px-6">
      <Card LaptopName={"Hp"} Price={"50000 ₹"} />
      <Card LaptopName={"Lenevo"} Price={"60000 ₹"} />
      <Card LaptopName={"Dell"} Price={"65000 ₹"} />
    </div>
  );
}

export default App;

import City from "./city/City";
import Header from "./header/Header";
import Navbar from "./navbar/Navbar";
import Type from "./type/Type";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <City />
      <Type />
    </div>
  );
};

export default Home;

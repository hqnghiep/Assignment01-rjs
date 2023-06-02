import City from "./city/City";
import Header from "./header/Header";
import HotelList from "./hotel_list/HotelList";
import Navbar from "./navbar/Navbar";
import Type from "./type/Type";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <City />
      <Type />
      <HotelList />
    </div>
  );
};

export default Home;

import City from "./city/City";
import Footer from "../../Ui/footer/Footer";
import Form from "./form/Form";
import Header from "./header/Header";
import HotelList from "./hotel_list/HotelList";
import Navbar from "../../Ui/navbar/Navbar";
import Type from "./type/Type";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <City />
      <Type />
      <HotelList />
      <Form />
      <Footer />
    </div>
  );
};

export default Home;

import Banner from "../../components/home/Banner/Banner";
import BannerBottom from "../../components/home/Banner/BannerBottom";
import BestSellers from "../../components/home/BestSellers/BestSellers";
import Featured from "../../components/home/Featured/Featured";
import NewArrivals from "../../components/home/NewArrivals/NewArrivals";

const Home = () => {
  return (
    <div className="w-full mx-auto">
      <Banner />
      <BannerBottom />
      <div className="max-w-container mx-auto px-16">
        <NewArrivals />
        <BestSellers />
        <Featured />
      </div>
    </div>
  );
};

export default Home;

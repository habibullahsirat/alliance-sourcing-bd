import Hero from "./Hero";
import AllServices from "./AllServices";
import WorkProcess from "./WorkProcess";
import BuyingHouse from "./BuyingHouse";
import BuyingHouseServices from "./BuyingHouseService";
import Catalog from "./Catalog";
import FactoryAndMachinery from "./FactoryAndMachinery";
import ConnectWithUs from "./ConnectWithUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AllServices />
      <WorkProcess />
      <BuyingHouse />
      <BuyingHouseServices />
      <Catalog />
      <FactoryAndMachinery />
      <ConnectWithUs />
    </>
  );
}

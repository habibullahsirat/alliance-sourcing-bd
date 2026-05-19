import Hero from "./homepage/Hero";
import AllServices from "./homepage/AllServices";
import WorkProcess from "./homepage/WorkProcess";
import BuyingHouse from "./homepage/BuyingHouse";
import BuyingHouseServices from "./homepage/BuyingHouseService";
import Catalog from "./homepage/Catalog";
import FactoryAndMachinery from "./homepage/FactoryAndMachinery";
import ConnectWithUs from "./homepage/ConnectWithUs";

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

import type { Route } from "../+types/root";
import Hero from "./aboutuspage/Hero";
import BuyingHouse from "./homepage/BuyingHouse";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Alince Sourcing BD | About Us" },
    { name: "description", content: "About us" },
  ];
}

export default function AboutUs() {
  return (
    <>
      <Hero />
      <BuyingHouse />
    </>
  );
}

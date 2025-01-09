import Hero from "@/components/Hero";
import OfferList from "@/components/OfferList";
import React from "react";

export default function HomePage() {
  return (
    <section className="mx-auto max-w-[1220px]">
      <Hero />
      <OfferList />
    </section>
  );
}

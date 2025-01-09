import OfferCard from "./OfferCard";

export default function OfferList() {
  return (
    <section className="pt-16 pb-[72px] border-y">
      <h2 className="font-semibold text-center text-[32px] capitalize mb-6">
        Exclusive offers
      </h2>
      <div className="grid grid-cols-3 gap-6">
        <OfferCard />
        <OfferCard />
        <OfferCard />
        <OfferCard />
        <OfferCard />
        <OfferCard />
      </div>
    </section>
  );
}

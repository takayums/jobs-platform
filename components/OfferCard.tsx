import { Album } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function OfferCard() {
  return (
    <div className="border rounded-md flex flex-col p-4 max-w-[392px]">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative border-2 border-neutral-shade-100 p-1 size-10 rounded-full">
            <Image
              src={"/images.png"}
              alt="Logo Company"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="font-medium text-sm text-neutral-shade-60">
            ASMA Company
          </p>
        </div>
        <Album size={24} className="text-neutral-shade-60" />
      </div>
      {/* Content */}
      <div className="mb-6 space-y-2">
        <p className="font-medium text-xl text-black">Developer</p>
        <p className="font-medium text-sm text-neutral-shade-60">
          Barcelona, Spain{" "}
          <span className="text-neutral-shade-30">(Hybrid)</span>
        </p>
      </div>
      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <span className="py-2 px-4 rounded-full font-semibold text-xs border border-primary-shade-60 text-primary-shade-60 bg-white">
            Easy Applay
          </span>
          <span className="py-2 px-4 rounded-full font-semibold text-xs border border-primary-shade-60 text-primary-shade-60 bg-primary-thin-10">
            Multipele Candidat
          </span>
        </div>
        <p className="text-black font-medium text-sm">1d</p>
      </div>
    </div>
  );
}

import { getCategoryById } from "@/actions/category";
import { getJobById } from "@/actions/job";
import { Gift, MapPinned, PhoneCall } from "lucide-react";
import Image from "next/image";
import { Clock, Mail, Zap } from "react-feather";

export default async function DetailJobPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { data, message } = await getJobById(slug);
  const dataCategory = await getCategoryById(data.category);

  return (
    <section>
      <div className="container mx-auto max-w-2xl">
        {/* Component Detail   */}
        <div>
          <div className="mb-[56px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="avatar">
                <div className="w-8 relative overflow-hidden rounded-full">
                  <Image
                    src={
                      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    }
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="100vw"
                    alt="Tailwind-CSS-Avatar-component"
                  />
                </div>
              </div>
              <p className="font-semibold font-base text-link-100">
                {data.companyName}
              </p>
            </div>
            <p className="font-semibold text-2xl mb-3">
              {dataCategory.data.name} - {data.title}
            </p>
            <p className="font-medium text-sm bg-primary-shade-100 inline-block p-1 rounded-full">
              {data.remote ? "remote" : "on-site"}
            </p>
          </div>

          <div className="space-y-2">
            <p className="flex items-center gap-2">
              <MapPinned /> {data.address}
            </p>
            <p className="flex items-center gap-2">
              <Gift /> Rp.{data.salary}
            </p>
            <p className="flex items-center gap-2">
              <Clock /> {data.jobType}
            </p>
            <button className="btn bg-primary-shade-100 font-semibold text-sm">
              <Zap />
              Easy Apply
            </button>
          </div>

          <div className="space-y-10 mt-[56px]">
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-neutral-shade-70">
                Requirements
              </h3>
              <p className="font-sm">{data.requirements}</p>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-neutral-shade-70">
                Benefits
              </h3>
              <p className="font-sm">{data.benefits}</p>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-neutral-shade-70">
                Contact
              </h3>
              <p className="font-sm flex items-center gap-2">
                <Mail />
                {data.contactEmail}
              </p>
              <p className="font-sm flex items-center gap-2">
                <PhoneCall />
                {data.contactPhone}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

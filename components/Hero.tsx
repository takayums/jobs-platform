import Tag from "./Tag";

export default function Hero() {
  return (
    <div className="pt-16 pb-12">
      <div className="flex flex-col flex-1 items-center">
        <h1 className="font-semibold text-[32px] text-primary-shade-10">
          Start Your Job Journey
        </h1>
        <form className="max-w-[808px] w-full mt-[32px]">
          <label className="w-full input h-20 rounded-full py-5 pe-2 ps-[32px] text-xl placeholder:font-medium input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Junior or Intern Position"
            />
            <div className="rounded-full bg-primary-shade-100 size-16 flex items-center justify-center border">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-6 w-6 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </label>
        </form>
        <p className="text-base font-medium text-black mt-6">
          Employers?{" "}
          <span className="font-semibold text-link-100">
            Post your job here
          </span>
        </p>
      </div>

      {/* Tag */}
      <div className="flex items-center justify-center mt-[72px] flex-wrap gap-x-2 gap-y-4">
        <Tag name="Easy Applay" />
        <Tag name="Part-Time" />
        <Tag name="costumer Service" />
        <Tag name="Data Analyst" />
        <Tag name="Delivery Driver" />
        <Tag name="Engineering" />
        <Tag name="Marketing" />
        <Tag name="Nurse" />
        <Tag name="Medical" />
        <Tag name="Project Manager" />
        <Tag name="sles" />
        <Tag name="Warehouse" />
        <Tag name="it" />
        <Tag name="welder" />
      </div>
    </div>
  );
}

import Link from "next/link";

const items = [
  {
    href: "/objects/jilguera",
    label: ".jilguera",
    type: "jewelry collection",
    material: "glass, silver",
    year: "2026",
  },
  {
    href: "/objects/quinquillera",
    label: ".quinquillera",
    type: "jewelry collection",
    material: "glass",
    year: "2025",
  },
  {
    href: "/objects/xeic",
    label: ".xeic",
    type: "jewelry collection",
    material: "plexiglass",
    year: "2023",
  },
];

export default function Page() {
  return (
    <main className="flex-1 flex flex-col justify-end">
      <div className="px-6 pb-6 sm:px-10 sm:pb-8 lg:px-[100px] lg:pb-[60px]">
        <h1 className="m-0 whitespace-nowrap text-[14vw] font-thin leading-none sm:text-[9vw] lg:text-[140px]">
          .objects
        </h1>

        <div className="mt-4 w-full lg:mt-8">
          {items.map((item) => (
            <div key={item.href}>
              <div className="h-px w-full bg-black opacity-80" />
              <Link
                href={item.href}
                className="link grid grid-cols-[2fr_2fr_1.5fr_0.7fr] items-center py-2.5 pl-6 pr-6 sm:pl-10 sm:pr-10 lg:py-3.5 lg:pl-16 lg:pr-16"
              >
                <span className="text-lg md:text-2xl font-light leading-tight">
                  {item.label}
                </span>
                <span className="text-lg md:text-2xl font-light leading-tight">
                  {item.type}
                </span>
                <span className="text-lg md:text-2xl font-light leading-tight">
                  {item.material}
                </span>
                <span className="text-lg md:text-2xl font-light leading-tight text-right">
                  {item.year}
                </span>
              </Link>
            </div>
          ))}
          <div className="h-px w-full bg-black opacity-80" />
        </div>
      </div>
    </main>
  );
}
import Link from "next/link";

export const Content = ({ data }: any) => {
  return (
    <section className="">
      <ul className="px-[2rem] mt-[3rem] flex flex-wrap items-center justify-start gap-[3rem]">
        {data?.map((beer: any) => {
          return (
            <Link
              href={`/beer/${beer?.id}`}
              key={beer?.id}
              className="w-[100%] max-w-[270px] min-h-[320px] shadow-lg rounded-[10px] relative cursor-pointer transition-all hover:scale-105  "
            >
              <li className="">
                <div className="bg-amber-200 w-[100%] h-[60%] flex items-center justify-center rounded-t-lg p-3 border border-zinc-400">
                  <img
                    src={beer?.image_url || ""}
                    alt="Cerveja"
                    width={500}
                    height={500}
                    className="w-[50px] h-[130px]"
                  />
                </div>
                <div className="p-[1rem]">
                  <p className="font-bold">{beer?.name}</p>
                  <p className="font-light text-gray-600 mt-[0.8rem]">
                    {beer?.tagline}
                  </p>
                  <p className="font-medium text-[1] absolute bottom-2 right-2">
                    abv: {beer?.abv}%
                  </p>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </section>
  );
};

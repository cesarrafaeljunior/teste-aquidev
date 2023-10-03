"use client";

export const PaginationHome = ({ page, setPage }: any) => {
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  const nextPage = () => {
    page < 13 ? setPage(page + 1) : setPage(1);
  };

  const previousPage = () => {
    page > 1 ? setPage(page - 1) : setPage(13);
  };

  const setActuallyPage = (pageAct: number) => {
    setPage(pageAct);
  };

  return (
    <section className="w-full h-full flex flex-wrap items-center justify-center mt-[3rem]">
      <button
        className="hidden border border-amber-400 font-medium p-[0.5rem] bg-amber-500 hover:brightness-90 rounded-[8px] lg:flex"
        onClick={previousPage}
      >
        Prev
      </button>
      {pages.map((pageAct) => (
        <button
          key={pageAct}
          className={`cursor-pointer border p-[0.5rem] ml-[1rem] mt-[1rem] lg:mt-0 ${
            pageAct == page ? "bg-gray-400" : "bg-white"
          }`}
          onClick={() => setActuallyPage(pageAct)}
        >
          {pageAct}
        </button>
      ))}
      <div className="mt-[1rem] lg:mt-0">
        <button
          className="border border-amber-400 font-medium p-[0.5rem] bg-amber-500 hover:brightness-90 rounded-[8px] lg:hidden"
          onClick={previousPage}
        >
          Prev
        </button>
        <button
          className="border  border-amber-400 font-medium p-[0.5rem] bg-amber-500 ml-[1rem] hover:brightness-90 rounded-[8px]"
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </section>
  );
};

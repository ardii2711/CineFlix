import PopularMovie from "@/components/popular-movie";

function PopularPage() {
  return (
    <main className="container px-4 md:px-6 my-6 md:my-12 mx-auto">
      <div className="flex justify-between items-center pb-2 mb-3 md:mb-6">
        <h2 className="text-2xl font-bold">Popular Movies</h2>
      </div>
      <PopularMovie />
    </main>
  );
}

export default PopularPage;

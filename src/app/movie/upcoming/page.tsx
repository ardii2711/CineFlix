import UpcomingMovie from "@/components/upcoming-movie";

function UpcomingPage() {
  return (
    <main className="container px-4 md:px-6 my-6 md:my-12 mx-auto">
      <div className="flex justify-between items-center pb-2 mb-3 md:mb-6">
        <h2 className="text-2xl font-bold">Upcoming Movies</h2>
      </div>
      <UpcomingMovie/>
    </main>
  );
}

export default UpcomingPage;

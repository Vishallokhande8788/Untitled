import Header from "@/components/Header";
import Aside from "@/components/Aside";
import Form from "@/components/Form";

function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 px-4 py-3 md:px-8">
      <Header />
      <main className="grid grid-cols-8">
        <div className="col-span-2 hidden md:block">
          <Aside />
        </div>
        <div className="col-span-full rounded-lg p-5 md:col-span-6 md:bg-lime-400">
          <Form />
        </div>
      </main>
    </div>
  );
}

export default Home;
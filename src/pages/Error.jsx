import { Link, useLocation } from "react-router-dom";
import Header from "@/components/Header";

function Home() {
  const location = useLocation();
  const badWord = location.state?.badWord || "Bad Word";

  return (
    <div className="min-h-screen bg-zinc-50 px-4 py-3 md:px-8">
      <Header />
      <main className="rounded-lg bg-red-300 p-3">
        <h1 className="text-2xl">Form Submission Failed 📛</h1>
        <p className="my-1 text-lg">
          Your form submission is flagged due to: {badWord}
        </p>
        <p className="text-slate-800">
          Fill out the form again{" "}
          <Link className="text-blue-600 underline" to="/">
            here.
          </Link>
        </p>
      </main>
    </div>
  );
}

export default Home;

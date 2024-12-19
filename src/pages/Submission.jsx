import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import configs from "@/utils/configs";

function Home() {
  const location = useLocation();
  const name = location.state?.name || "Anonymous";

  return (
    <div className="min-h-screen bg-zinc-50 px-4 py-3 md:px-8">
      <Header />
      <main className="rounded-lg bg-lime-300 p-3">
        <h1 className="text-2xl">Form Submission Success 🎉</h1>
        <p className="my-1 text-lg">{name} your form has been accepted.</p>
        <p className="text-slate-800">
          Go and check the entry here{" "}
          <a
            className="text-blue-600 underline"
            href={configs.userResponses}
            target="_blank"
          >
            here.
          </a>
        </p>
      </main>
    </div>
  );
}

export default Home;
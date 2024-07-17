export default function App() {
  return (
    <>
      <main className="container mx-auto min-h-screen grid place-content-center">
        <section className="bg-white grid grid-cols-2 max-w-screen-sm rounded-2xl shadow-xl">
          <div className="bg-blue-800 text-center text-white p-8 rounded-2xl">
            <p>Your Result</p>
            <div className="bg-blue-400 grid place-content-center leading-none p-2 rounded-full size-36 mx-auto m-4">
              <p className="text-5xl font-bold">76</p>
              <p className="text-xs">of 100</p>
            </div>
            <p className="text-2xl font-bold">Great</p>
            <p className="text-sm mt-4">
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
          <div className="p-8">
            <p>Summary</p>
            <ul className="list flex flex-col gap-4 mt-4 mb-4">
              <li>
                Reaction <span>80 / 100</span>
              </li>
              <li>
                Memory <span>92 / 100</span>
              </li>
              <li>
                Verbal <span>61 / 100</span>
              </li>
              <li>
                Visual <span>72 / 100</span>
              </li>
            </ul>
            <button className="w-full bg-slate-700 rounded-full text-white">
              Continue
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

import CircleResult from "./components/CircleResult";
import ListItem from "./components/ListItem";

export default function App() {
  return (
    <>
      <main className="container mx-auto min-h-screen grid place-content-center">
        <section className="card bg-white grid grid-cols-2 max-w-screen-sm rounded-2xl shadow-xl">
          <div className="bg-result text-center text-white p-10 rounded-2xl">
            <p className="color-light font-bold">Your Result</p>
            <CircleResult />
            <p className="text-2xl font-bold">Great</p>
            <p className="color-light text-sm mt-4">
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
          <div className="flex flex-col justify-between gap-4 p-10">
            <p className="font-bold">Summary</p>
            <ListItem />
            <button className="text-sm">Continue</button>
          </div>
        </section>
      </main>
    </>
  );
}

import data from "../utils/data.json";

export default function CircleResult() {
  const averageScore = Math.round(
    data.reduce((acc, item) => acc + item.score, 0) / data.length
  );

  return (
    <>
      <div className="bg-note grid place-content-center leading-none p-2 rounded-full size-36 mx-auto m-4">
        <p className="text-5xl font-bold">{averageScore}</p>
        <p className="color-light text-xs">of 100</p>
      </div>
    </>
  );
}

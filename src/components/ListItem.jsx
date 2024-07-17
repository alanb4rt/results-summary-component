import data from "../utils/data.json";

export function Item({ category, score, icon }) {
  const pathIcon = `./src/${icon}`;
  return (
    <>
      <li className="item">
        <div className="flex items-center gap-2">
          <img src={pathIcon} className="size-4" alt={`Icon ${category}`} />
          <p className="item-category">{category}</p>
        </div>
        <span className="item-score">
          <b>{score}</b> / 100
        </span>
      </li>
    </>
  );
}
export default function ListItem() {
  return (
    <>
      <ul className="list flex flex-col gap-4">
        {data.map((item, index) => (
          <Item
            key={index}
            category={item.category}
            score={item.score}
            icon={item.icon}
          />
        ))}
      </ul>
    </>
  );
}

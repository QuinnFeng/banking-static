const categories = [
  "My Accounts",
  "Transfers & Deposits",
  "Payments",
  "Statements",
  "My Info",
  "Alerts & Massages",
];
const types = [
  "Summary",
  "External Accounts",
  "Automatic Savings Plan",
  "Refer a Friend",
  "My Savings Goals",
];

interface Navigations {
  category: string;
  setCategory: (category: string) => void;
  type: string;
  setType: (setType: string) => void;
}

export const Navigations = ({
  category,
  setCategory,
  type,
  setType,
}: Navigations) => {
  return (
    <>
      <section className="container flex-column">
        <div className="categories">
          {categories.map((c) => (
            <span
              className="category"
              key={c}
              onClick={() => setCategory(c)}
            >
              {c}
              <i className="fa-sharp fa-solid fa-play fa-rotate-90" />
            </span>
          ))}
          <hr />
        </div>
        <div className="types">
          {types.map((t) => (
            <span
              className="category"
              key={t}
              onClick={() => setType(t)}
            >
              {t}
            </span>
          ))}
          <hr />
        </div>
      </section>
    </>
  );
};

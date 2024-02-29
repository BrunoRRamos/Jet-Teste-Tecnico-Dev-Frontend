type Data = {
  available: boolean;
};

const backgroundColor = (available: boolean) => {
  return available
    ? "bg-green-100 decoration-green-800"
    : "bg-red-100 decoration-red-800";
};

const labelText = (available: boolean) => {
  return available ? "AVAILABLE" : "UNAVAILABLE";
};

export function StatusBadge({ available }: Data) {
  return (
        <label
          className={`px-2.5 py-0.5 rounded-md ${backgroundColor(available)}`}
        >
          {labelText(available)}
        </label>
  );
}

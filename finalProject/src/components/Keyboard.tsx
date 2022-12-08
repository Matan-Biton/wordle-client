export function Keyboard() {
  const rows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Enter", "Z", "X", "C", "V", "B", "N", "M", "Back"],
  ];
  return (
    <>
      <div className="keyboard">
        {rows.map((row) => (
          <div className="line">
            {row.map((key) => (
                <button className="key" value={key}>{key}</button>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

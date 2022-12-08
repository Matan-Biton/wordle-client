interface AttemptProps {
  attempt: string[];
}
export function Attempt(props: AttemptProps) {
  const { attempt } = props;

  return (
    <>
      <div className="attempt">
        {attempt.map((char) => (
          <input type="text" className="tile" value={char} />
        ))}
      </div>
    </>
  );
}

type P = {
  name: string;
};
export function About(props: P) {
  return (
    <>
      <p>{props.name}</p>
    </>
  );
}

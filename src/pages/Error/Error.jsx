import { Link } from "react-router-dom";

export default function Error() {
  return (
    <>
      <h1>OOps</h1>
      <p>Seemed that you are trying to reach nonexisting page</p>
      <div>
        <span>Go</span>
        <Link to="/">Home</Link>
      </div>
    </>
  );
}

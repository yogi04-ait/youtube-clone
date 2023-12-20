import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Oops</h1>
        <h2 className="text-2xl">Something went wrong!!</h2>
        <h2 className="text-2xl">{err.status + " : " + err.statusText}</h2>
      </div>
    </div>
  );
};

export default Error;

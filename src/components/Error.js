import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="error-page">
      <h1>Oops! something went wrong</h1>
      <h3>
        {err.status} : {err.statusText}
      </h3>
    </div>
  );
};

export default Error;

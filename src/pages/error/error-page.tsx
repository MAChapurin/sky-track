import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export function ErrorPage() {
  const error = useRouteError();

  console.error(error);

  let message: string;

  if (isRouteErrorResponse(error)) {
    message = `${error.status} ${error.statusText}`;
  } else if (error instanceof Error) {
    message = error.message;
  } else {
    message = "Unknown error";
  }

  return (
    <div
      id="error-page"
      className="h-screen flex flex-col items-center justify-center text-center p-4"
    >
      <h1 className="text-4xl font-bold text-red-500">Oops!</h1>
      <p className="text-lg mt-2">Sorry, an unexpected error has occurred.</p>
      <p className="mt-4 text-sm text-gray-400">
        <i>{message}</i>
      </p>
    </div>
  );
}

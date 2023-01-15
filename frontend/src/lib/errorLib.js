export function onError(error) {
  let message = error.toString();

  // Auth errors
  // The Auth package throws errors in a different format, so all this code does is alert the error message we need. And in all other cases simply alert the error object itself.
  if (!(error instanceof Error) && error.message) {
    message = error.message;
  }

  alert(message);
}

export const handler = async (event) => {
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: `Hello, New World! Your request was received at ${event.requestContext.time}.`,
  };
};

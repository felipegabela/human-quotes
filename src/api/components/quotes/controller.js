/* eslint-disable no-unused-vars */
/** The controller class handles incoming requests,
 * validates them and sends the response data back to the client.
 * It uses the service class to interact with the database. */

const getRandomQuote = (req, res, next) => {
  res.status(200).json({ message: 'hi' });
};

export default { getRandomQuote };

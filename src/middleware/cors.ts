import { NextFunction, Request, Response } from "express";

/**
 * CORS middleware
 * @description This middleware is used to allow all cross domain CORS requests
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers
 * @param {Request} request - Express request object
 * @param {Response} response - Express response object
 * @param {NextFunction} next - Express next function
 */
function corsMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  // Set CORS headers
  // Star (*) means allow all domains, not recommended for enterprise or production if you have sensitive data
  response.header("Access-Control-Allow-Origin", "*");
  // Access-Control-Allow-Headers is used in preflight requests
  // https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request
  response.header(
    "Access-Control-Allow-Headers",
    "Accept, Authorization, Content-Type, Origin, X-Requested-With"
  );
  // only allow GET method requests
  response.header("Access-Control-Allow-Methods", "GET");
  next();
}

export { corsMiddleware };

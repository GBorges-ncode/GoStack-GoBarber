// Overwrites the default types for the Request interface
declare namespace Express {
  export interface Request {
    user: {
      id: string;
    };
  }
}

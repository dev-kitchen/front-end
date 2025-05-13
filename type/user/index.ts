export type DecodedUser = {
  sub: string;
  email: string;
  name?: string;
  exp: number;
  iat: number;
  [key: string]: any;
};
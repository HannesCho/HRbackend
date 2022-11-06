export interface IUser {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  street: string;
  housenumber: string;
  zipcode: number;
  city: string;
  country: string;
  role: string;
  admin: boolean;
  comments?: Array<IComment>;
}

export interface IComment {
  username: string;
  text: string;
  createdAt: string;
  author: string;
}

export interface IEmployee {
  firstName: string;
  lastName: string;
  email: string;
  street: string;
  housenumber: string;
  zipcode: number;
  city: string;
  country: string;
  role: string;
  comments?: Array<IComment>;
}

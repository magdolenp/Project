/**
 * Person representation with required attributes in constructor and optional attributes in setters
 * interface
 */
export interface Person {
  id: number;
  name: string;
  age: number;
  photo: string;
  location: string;
  costPerPost: number;
  facebook?: string;
  twitter?: string;
  instagram?: string;
}

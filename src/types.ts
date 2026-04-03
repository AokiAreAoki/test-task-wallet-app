export interface Transaction {
  id: string;
  type: 'Payment' | 'Credit';
  amount: number;
  name: string;
  description: string;
  date: string; // ISO datetime string
  pending: boolean;
  authorizedUser?: string;
  iconName: string; // Name for FontAwesome icon lookup e.g., 'apple-whole', 'bullseye'
}

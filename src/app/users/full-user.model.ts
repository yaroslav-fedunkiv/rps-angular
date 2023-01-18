export interface FullUserModel{
  id: string;
  fullName: string | undefined | null;
  role: string | undefined | null;
  email: string | undefined | null;
  balance: string | undefined | null;
  address: string | undefined | null;
  isActive: string;
  password: string | undefined | null;
  created: string | undefined | null;
  updated: string | undefined | null;
}

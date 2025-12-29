export interface SignUpFormData {
  email: string;
  password: string;
  fullName: string;
  country: string;
  investmentGoals: string[];
  riskTolerance: string;
  preferredIndustry: string;
}

export interface SignUpResponse {
  success: boolean;
  data?: unknown;
  error?: string;
}

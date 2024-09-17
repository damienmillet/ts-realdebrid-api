export interface ApiResponse<T = undefined> {
  success: boolean;
  data?: T | null;
  error?: {
    code: number;
    message: string;
  };
}

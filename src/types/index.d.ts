export interface ApiResponse<T = undefined> {
  success: false;
  data: T | null;
  error?: {
    code: number;
    message: string;
  };
}

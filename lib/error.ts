class ApiError {
  declare info: Record<string, unknown>;
  declare statusText: string;
  declare status: number;
  declare private res: Response;

  constructor(res: Response) {
    this.statusText = res.statusText;
    this.status = res.status;
    this.res = res;
  }
  async handleError() {
    if (this.res.headers.get("Content-Type")?.includes("application/json")) {
      this.info = await this.res.json();
      return this;
    }
  }
}

export default ApiError;

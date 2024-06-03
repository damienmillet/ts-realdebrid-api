class ApiError {
  declare info?: Record<string, unknown>;
  declare statusText: string;
  declare status: number;
  declare private res: Response;

  constructor(res: Response) {
    this.statusText = res.statusText;
    this.status = res.status;
    this.res = res;
  }
  async handleError() {
    const isJson = this.res.bodyUsed &&
      this.res.headers.get("Content-Type")?.includes("application/json");
    this.info = isJson ? await this.res.json() : undefined;
    const res: {
      status: number;
      statusText: string;
      info?: Record<string, unknown>;
    } = {
      status: this.status,
      statusText: this.statusText,
    };
    if (this.info) res.info = this.info;
    return res;
  }
}

export default ApiError;

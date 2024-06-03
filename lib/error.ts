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
    this.info = isJson ? await this.res.json() : null;
    return {
      status: this.status,
      statusText: this.statusText,
      info: this.info,
    };
  }
}

export default ApiError;

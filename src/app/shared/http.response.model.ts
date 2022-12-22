export class HttpBody{
  headers: {
    normalizedNames: {},
    lazyUpdate: object
  }
  status: number;
  statusText: string;
  url: string;
  ok: boolean;
  name: string;
  message: string;
    error:{
    timestamp: string,
    status: number,
    errors: [],
    fields: []
  }
}

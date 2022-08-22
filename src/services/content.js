import { createRequest } from 'services/http';

export const getContents = (params = {}) =>
  createRequest({ url: '/list', params: { ...params } });

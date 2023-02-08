export const API_CONFIG = {
  GET: "get",
  POST: "post",
  PUT: "put",
  PATCH: "patch",
  BASE_URL_QA: "",
  DELETE: "delete",
  BASE_URL_REL: "",
  BASE_URL_DEV: "https://dev-shadow-parentpass-as.azurewebsites.net/api/v1/",
  BASE_URL_PROD: "",
};

export const CONTENT_TYPE = {
  JSON: "application/json",
  FORM_DATA: "multipart/form-data",
};

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  SERVER_ERROR: 500,
  PAYLOAD_TOO_LARGE: 413,
};

export const PAGE_SIZE = 10;

export const STALE_TIME =  60 * 1000

export const CACHE_TIME = 1000 * 60 * 60 * 24
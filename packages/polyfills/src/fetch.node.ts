// general logic and approach taken from
// https://github.com/matthew-andrews/isomorphic-fetch/blob/master/fetch-npm-node.js

import nodeFetch, {
  Response,
  Request,
  Headers,
  RequestInit,
  RequestInfo,
} from 'node-fetch';

function wrappedFetch(this: any, url: RequestInfo, options?: RequestInit) {
  if (typeof url !== 'string') {
    return nodeFetch.call(this, url, options);
  }

  const finalURL = url.startsWith('//') ? `https:${url}` : url;
  return nodeFetch.call(this, finalURL, options);
}

if (!(global as any).fetch) {
  (global as any).fetch = wrappedFetch;
  (global as any).Response = Response;
  (global as any).Headers = Headers;
  (global as any).Request = Request;
}

export {};

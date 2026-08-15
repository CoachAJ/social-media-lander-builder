import { GeneratorInput } from '../types';

/**
 * Encodes a GeneratorInput object into a URL-safe base64 string so a specific
 * generated landing page can be shared/reloaded via a query parameter.
 */
export function encodeInputToParam(input: GeneratorInput): string {
  const json = JSON.stringify(input);
  const base64 = btoa(unescape(encodeURIComponent(json)));
  // Make base64 URL-safe
  return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

/**
 * Decodes a URL-safe base64 string back into a GeneratorInput object.
 * Returns null if the param is missing or malformed.
 */
export function decodeParamToInput(param: string): GeneratorInput | null {
  try {
    const base64 = param.replace(/-/g, '+').replace(/_/g, '/');
    const json = decodeURIComponent(escape(atob(base64)));
    const parsed = JSON.parse(json);
    if (typeof parsed?.ygyId === 'string' && typeof parsed?.transcript === 'string') {
      return parsed as GeneratorInput;
    }
    return null;
  } catch {
    return null;
  }
}

/** Builds a full shareable URL (origin + path) for the given generated page. */
export function buildShareableUrl(input: GeneratorInput): string {
  const param = encodeInputToParam(input);
  const url = new URL(window.location.href);
  url.search = '';
  url.searchParams.set('page', param);
  return url.toString();
}

import { GeneratorInput, GeneratedCopy } from '../types';

/** Shape encoded into the `?page=` share link: the original form input, plus
 * the (optional) exact AI/static copy that was generated for it. Embedding the
 * copy freezes the page so every visitor sees the identical, already-generated
 * content instead of triggering a brand-new AI generation on every page load. */
interface SharedPagePayload {
  input: GeneratorInput;
  copy?: GeneratedCopy;
}

function encodeToBase64Url(json: string): string {
  const base64 = btoa(unescape(encodeURIComponent(json)));
  // Make base64 URL-safe
  return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function decodeFromBase64Url(param: string): string {
  const base64 = param.replace(/-/g, '+').replace(/_/g, '/');
  return decodeURIComponent(escape(atob(base64)));
}

/**
 * Encodes a GeneratorInput object into a URL-safe base64 string so a specific
 * generated landing page can be shared/reloaded via a query parameter.
 */
export function encodeInputToParam(input: GeneratorInput): string {
  return encodeToBase64Url(JSON.stringify(input));
}

/**
 * Decodes a URL-safe base64 string back into a GeneratorInput object.
 * Returns null if the param is missing or malformed.
 */
export function decodeParamToInput(param: string): GeneratorInput | null {
  try {
    const parsed = JSON.parse(decodeFromBase64Url(param));
    // Legacy links (or the `input` half of a new payload) are the raw GeneratorInput.
    if (typeof parsed?.ygyId === 'string' && typeof parsed?.transcript === 'string') {
      return parsed as GeneratorInput;
    }
    // New-format links wrap the input inside { input, copy }.
    if (parsed?.input && typeof parsed.input.ygyId === 'string' && typeof parsed.input.transcript === 'string') {
      return parsed.input as GeneratorInput;
    }
    return null;
  } catch {
    return null;
  }
}

/**
 * Decodes a shared `?page=` param into both the original input and, if the
 * link was generated after the AI copy resolved, the frozen GeneratedCopy.
 * Falls back gracefully for legacy links that only encoded the input.
 */
export function decodeSharedPage(param: string): SharedPagePayload | null {
  try {
    const parsed = JSON.parse(decodeFromBase64Url(param));
    if (parsed?.input && typeof parsed.input.ygyId === 'string' && typeof parsed.input.transcript === 'string') {
      return { input: parsed.input as GeneratorInput, copy: parsed.copy as GeneratedCopy | undefined };
    }
    if (typeof parsed?.ygyId === 'string' && typeof parsed?.transcript === 'string') {
      return { input: parsed as GeneratorInput };
    }
    return null;
  } catch {
    return null;
  }
}

/**
 * Builds a full shareable URL (origin + path) for the given generated page.
 * When `copy` is provided, it's embedded so the link always replays the exact
 * copy the distributor saw/approved rather than regenerating it per visitor.
 */
export function buildShareableUrl(input: GeneratorInput, copy?: GeneratedCopy): string {
  const payload: SharedPagePayload = copy ? { input, copy } : { input };
  const param = encodeToBase64Url(JSON.stringify(payload));
  const url = new URL(window.location.href);
  url.search = '';
  url.searchParams.set('page', param);
  return url.toString();
}

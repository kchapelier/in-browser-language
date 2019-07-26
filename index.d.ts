/**
 * Return an array containing the languages.
 */
export function list(): string[];
/**
 * Return the first language of the list.
 */
export function first(): string;
/**
 * Pick the first language found both in the proposedLanguages array and the list of languages supported by the browser.
 */
export function pick(proposedLanguages: string[]): string | null;
/**
 * Pick the first language found both in the proposedLanguages array and the list of languages supported by the browser.
 * If there are no matches, the defaultLanguage is returned.
 */
export function pick(proposedLanguages: string[], defaultLanguage: string): string;

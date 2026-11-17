/**
 * Email-signup intake configuration.
 *
 * Signups posted to /api/signup are forwarded to a small Apps Script web app
 * bound to the "NextEleven.dev signups" Google Sheet (tab "Signups"), which
 * appends one row per signup: email | date | source_page. The script source
 * lives outside this repo (NextEleven Drive); its deployment URL is an
 * unguessable capability URL, public-by-design in the same way the Web3Forms
 * access key is — the shared key below is a routing check, not a secret, and
 * the real protections are validation in /api/signup and in the script.
 *
 * Until SIGNUP_INTAKE_URL is filled in, /api/signup fails closed (503) and
 * the form shows an error instead of a false confirmation.
 */
export const SIGNUP_INTAKE_URL =
  "https://script.google.com/macros/s/AKfycbzN-ElHnfS1eAN7bcvX890Q9LVsqlOvtf87weSiNbialnNQF_jzaj21nyb4Uj9j_4g3gg/exec";
export const SIGNUP_INTAKE_KEY = "nx11-signup-v1";

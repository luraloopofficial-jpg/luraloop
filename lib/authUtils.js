// lib/authUtils.js – shared sanitization and validation helpers (server-safe, no browser APIs)

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
export const URL_REGEX = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)$/

/**
 * Strips characters commonly used in XSS / injection attacks.
 * Safe to run on any user-supplied string before rendering or sending.
 */
export const sanitize = (str) =>
  typeof str === 'string' ? str.replace(/[<>"'/;(){}[\]\\]/g, '') : ''

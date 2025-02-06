// src/utils/validate.ts

/**
 * Format a Kazakh phone number into "+7 (XXX) XXX XX XX".
 * If the user deletes everything, we allow an empty string.
 */
export function formatKazakhPhoneNumber(raw: string): string {
  // Remove all non-digit characters
  let digits = raw.replace(/\D/g, '');

  // If user has fully deleted digits, return empty
  if (!digits) {
    return '';
  }

  // Force the first digit to be '7' if there's any digit typed.
  if (!digits.startsWith('7')) {
    digits = '7' + digits;
  }

  let result = '+7';
  // The rest of the digits (after the leading '7')
  const rest = digits.slice(1);

  if (!rest) {
    // If there's nothing after '7', just return "+7"
    return result;
  }

  // We'll add a space after +7 if there's more digits
  result += ' ';

  // Start parentheses
  result += '(';

  // If rest < 3, just put them inside the open parenthesis (no closing parenthesis yet)
  if (rest.length <= 3) {
    result += rest;
    return result; // partial
  } else {
    // If 3 or more digits, fill up to 3 inside parentheses
    result += rest.slice(0, 3) + ')';
  }

  // Next block [3..6]
  if (rest.length > 3) {
    result += ' ' + rest.slice(3, 6);
  }

  // Next block [6..8]
  if (rest.length > 6) {
    result += ' ' + rest.slice(6, 8);
  }

  // Final block [8..10]
  if (rest.length > 8) {
    result += ' ' + rest.slice(8, 10);
  }

  return result;
}

/**
 * Validate a Kazakh phone number must be exactly 11 digits, starting with '7'.
 * Return '' if valid, or an error string in Russian if invalid.
 */
export function validateKazakhPhoneNumber(formattedValue: string): string {
  const digits = formattedValue.replace(/\D/g, '');
  if (digits.length === 11 && digits.startsWith('7')) {
    return '';
  }
  return 'Неверный формат номера';
}

/**
 * Simple email validation.
 * Return '' if valid, or an error string if invalid.
 */
export function validateEmail(value: string): string {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(value) ? '' : 'Неверный формат почты';
}

/**
 * Example password validation (6+ characters)
 */
export function validatePassword(value: string): string {
  if (value.length < 6) {
    return 'Пароль должен содержать минимум 6 символов';
  }
  return '';
}

import { isPasswordValid } from './auth';

test('password should be at least 8 characters long', () => {
    expect(isPasswordValid('password123')).toBe(true);  // ✅ Valid
    expect(isPasswordValid('12345678')).toBe(true);    // ✅ Valid
    expect(isPasswordValid('short')).toBe(false);      // ❌ Invalid
    expect(isPasswordValid('')).toBe(false);           // ❌ Invalid
});

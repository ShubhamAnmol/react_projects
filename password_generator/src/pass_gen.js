function generatePassword(length, includeNumbers, includeSpecialChars) {
  // Base character set: only letters
  let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // Add numbers if allowed
  if (includeNumbers) {
    chars += "0123456789";
  }

  // Add special characters if allowed
  if (includeSpecialChars) {
    chars += "!@#$%^&*()-_=+[]{}|;:,.<>?/";
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  return password;
}

export default generatePassword;
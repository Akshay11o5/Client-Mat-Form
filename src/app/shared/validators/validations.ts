export class CustomRegex {
  static onlyText = '^[a-zA-Z]*$';
  static username = '^[a-zA-Z ]*$';
  static email = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$';
  static contact = '^[6-9]\\d{9}$';
  static pincode = '^[1-9][0-9]{5}$';
  static code = '^[A-Z]\\d{3}$'; // One uppercase + 3 digits
  static pan = '^[A-Z]{5}[0-9]{4}[A-Z]{1}$'; // Example: ABCDE1234F
  static gst = '^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$'; // Example: 27ABCDE1234F1Z5
}

export class ValidationMessages {
  static password =
    'Password must be at least 8 characters, include an uppercase letter, lowercase letter, number, and special character.';
  static onlyText = 'Only letters are allowed.';
  static username = 'Username must contain only letters and spaces.';
  static email = 'Enter a valid email address.';
  static updateEmail = 'Enter a valid email in the correct format.';
  static pincode = 'Pincode must be a 6-digit number starting with 1-9.';
  static code =
    'Code must start with an uppercase letter followed by exactly 3 digits (e.g., A123).';
  static pan =
    'PAN must be in the format: 5 uppercase letters, 4 digits, and 1 uppercase letter (e.g., ABCDE1234F).';
  static gst =
    'GST must be in the format: 2 digits, 5 letters, 4 digits, 1 letter, 1 alphanumeric, Z, and 1 alphanumeric (e.g., 27ABCDE1234F1Z5).';
}

export interface FieldsData {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  [x: string]: string;
}

export interface VerificationData {
  email?: string;
  verificationCode?: string;
}

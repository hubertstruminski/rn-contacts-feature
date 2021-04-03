export class PhoneNumber {
  constructor(number, isPrimary, countryCode) {
    this.number = number;
    this.isPrimary = isPrimary;
    this.countryCode = countryCode;
  }
};

export class PhoneNumberAndroid {
  constructor(label, number) {
    this.label = label;
    this.number = number;
  }
}
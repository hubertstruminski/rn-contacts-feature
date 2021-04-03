export class Email {
  constructor(email, isPrimary) {
    this.email = email;
    this.isPrimary = isPrimary;
  }
}

export class EmailAndroid {
  constructor(label, email) {
    this.label = label;
    this.email = email;
  }
}
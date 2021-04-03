export class Contact {
  constructor(name, firstName, lastName, company, emails, phoneNumbers) {
    this.name = name;
    this.firstName = firstName;
    this.lastName = lastName;
    this.company = company;
    this.emails = emails;
    this.phoneNumbers = phoneNumbers;
  }
}

export class ContactAndroid {
  constructor(givenName, familyName, company, emailAddresses, phoneNumbers) {
    this.givenName = givenName;
    this.familyName = familyName;
    this.company = company;
    this.emailAddresses = emailAddresses;
    this.phoneNumbers = phoneNumbers;
  }
}
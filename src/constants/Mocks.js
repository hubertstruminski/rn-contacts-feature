import { Contact, ContactAndroid } from "../classes/Contact"
import { Email, EmailAndroid } from "../classes/Email"
import { PhoneNumber, PhoneNumberAndroid } from "../classes/PhoneNumber"

export const EMAILS = [
  new Email('hubert.struminski@gmail.com', true),
  new Email('beata.nowak@o2.pl', false),
  new Email('jaroslaw@kowalski.com', true),
  new Email('aneta.roszada@gmail.com', false),
  new Email('anita.borek@gmail.com', false)
];

export const EMAILS_ANDROID = [
  new EmailAndroid('work', 'hubert.struminski@gmail.com'),
  new EmailAndroid('work', 'beata.nowak@o2.pl'),
  new EmailAndroid('work', 'jaroslaw@kowalski.com'),
  new EmailAndroid('home', 'aneta.roszada@gmail.com'),
  new EmailAndroid('home', 'anita.borek@gmail.com'),
];

export const PHONE_NUMBERS = [
  new PhoneNumber('+48500034440', true, '+48'),
  new PhoneNumber('+12345678921', false, '+12'),
  new PhoneNumber('+48678123519', false, '+48'),
  new PhoneNumber('+36543789000', true, '+36'),
  new PhoneNumber('+42500034401', false, '+42')
];

export const PHONE_NUMBERS_ANDROID = [
  new PhoneNumberAndroid('mobile', '+48500034440'),
  new PhoneNumberAndroid('mobile', '+12345678921'),
  new PhoneNumberAndroid('mobile', '+48678123519'),
  new PhoneNumberAndroid('home', '+36543789000'),
  new PhoneNumberAndroid('home', '+42500034401'),
];

export const CONTACTS_DATA = [
  new Contact('Hubert Strumiński', 'Hubert', 'Strumiński', 'AMC TECH', [EMAILS[0]], [PHONE_NUMBERS[0]]),
  new Contact('Beata Nowak', 'Beata', 'Nowak', 'Red&Green', [EMAILS[1]], [PHONE_NUMBERS[1]]),
  new Contact('Jarosław Kowalski', 'Jarosław', 'Kowalski', 'Blue Corporation', [EMAILS[2]], [PHONE_NUMBERS[2]]),
  new Contact('Aneta Roszada', 'Aneta', 'Roszada', 'Green start-up', [EMAILS[3]], [PHONE_NUMBERS[3]]),
  new Contact('Anita Borek', 'Anita', 'Borek', 'Silver lighting', [EMAILS[4]], [PHONE_NUMBERS[4]])
];

export const CONTACTS_DATA_ANDROID = [
  new ContactAndroid('Hubert', 'Strumiński', 'AMC TECH', [EMAILS_ANDROID[0]], [PHONE_NUMBERS_ANDROID[0]]),
  new ContactAndroid('Beata', 'Nowak', 'Red&Green', [EMAILS_ANDROID[1]], [PHONE_NUMBERS_ANDROID[1]]),
  new ContactAndroid('Jarosław', 'Kowalski', 'Blue Corporation', [EMAILS_ANDROID[2]], [PHONE_NUMBERS_ANDROID[2]]),
  new ContactAndroid('Aneta', 'Roszada', 'Green start-up', [EMAILS_ANDROID[3]], [PHONE_NUMBERS_ANDROID[3]]),
  new ContactAndroid('Anita', 'Borek', 'Silver lighting', [EMAILS_ANDROID[4]], [PHONE_NUMBERS_ANDROID[4]]),
];
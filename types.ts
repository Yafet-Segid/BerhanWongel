
export type Language = 'en' | 'ti';

export interface Translation {
  nav: {
    home: string;
    about: string;
    services: string;
    gallery: string;
    contact: string;
    donate: string;
  };
  hero: {
    welcome: string;
    subtitle: string;
    learnMore: string;
    watchOnline: string;
  };
  pastor: {
    title: string;
    name: string;
    description: string;
    watchSermons: string;
  };
  bookAd: {
    newRelease: string;
    author: string;
    title: string;
    subtitle: string;
    date: string;
    contactLabel: string;
    buttonText: string;
  };
  services: {
    title: string;
    subtitle: string;
    tigrinyaTitle: string;
    tigrinyaDesc: string;
    englishTitle: string;
    englishDesc: string;
    time: string;
    moreServicesTitle: string;
    fridayTitle: string;
    fridayTime: string;
    sundayPrayerTitle: string;
    sundayPrayerTime: string;
    nightPrayerTitle: string;
    nightPrayerDesc: string;
    nightPrayerTime: string;
  };
  gallery: {
    title: string;
    subtitle: string;
  };
  assistant: {
    title: string;
    description: string;
    placeholder: string;
    button: string;
    loading: string;
  };
  donate: {
    title: string;
    subtitle: string;
    zelleLabel: string;
    email: string;
    copyText: string;
    copiedText: string;
  };
  footer: {
    rights: string;
    connect: string;
    contact: string;
    contactUs: string;
    address: string;
    phone: string;
    hoursTitle: string;
    weekdays: string;
    sunday: string;
    closed: string;
  };
}
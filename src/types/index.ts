export interface Member {
  id: string;
  sno: string;
  mid: string;
  fullname: string;
  father_name: string;
  native_place: string;
  city: string;
  address: string;
  mobile: string;
}

export interface CommitteeMember {
  id: string;
  slug: string;
  name: string;
  title: string;
  gender: string;
  phone: string;
  whatsapp: string;
  email: string;
  caste: string;
  gotra: string;
  address: string;
  city: string;
  image: string;
  bio: string;
}

export interface Magazine {
  id: string;
  slug: string;
  title: string;
  publishDate: string;
  coverImage: string;
  embedUrl: string;
  description: string;
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  publishDate: string;
  displayDate: string;
  banner: string;
  summary: string;
  content: string;
}

export interface SiteStats {
  totalFamilies: number;
  totalMembers: number;
  activeCities: number;
  censusCompletion: string;
}

export interface DownloadItem {
  id: string;
  title: string;
  description: string;
  category: "Census Form" | "Constitution & Bylaws" | "Directory" | "Guidelines";
  fileSize: string;
  format: "PDF" | "DOCX";
  downloadUrl: string;
  updatedAt: string;
}

export interface MatrimonialProfile {
  id: string;
  candidateId: string;
  name: string;
  gender: "Male" | "Female";
  age: number;
  birthYear: number;
  height: string;
  education: string;
  profession: string;
  companyOrBusiness: string;
  city: string;
  state: string;
  nativePlace: string;
  fatherName: string;
  fatherOccupation: string;
  motherName: string;
  gotraSelf: string;
  gotraMother: string;
  contactPerson: string;
  maskedContact: string;
  photoUrl: string;
  aboutCandidate: string;
}

export interface UserSession {
  id: string;
  fullname: string;
  mobile: string;
  gender: string;
  mid?: string;
  role: "MEMBER" | "ADMIN";
}

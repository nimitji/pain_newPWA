import data from "./data/ppjain_data.json";
import { Member, CommitteeMember, Magazine, NewsArticle, SiteStats, DownloadItem, MatrimonialProfile } from "@/types";

export const rawMembers: Member[] = data.members as Member[];
export const committeeMembers: CommitteeMember[] = data.committee as CommitteeMember[];
export const magazines: Magazine[] = data.magazines as Magazine[];
export const newsArticles: NewsArticle[] = data.news as NewsArticle[];
export const siteStats: SiteStats = data.stats as SiteStats;

export const downloadItems: DownloadItem[] = [
  {
    id: "dl-1",
    title: "पद्मावती पुरवाल परिवार जनगणना प्रपत्र (Offline Census Form)",
    description: "परिवार का सम्पूर्ण विवरण ऑफलाइन भरने हेतु आधिकारिक प्रपत्र। इसे भरकर स्थानीय पंचायत प्रतिनिधि को जमा करें।",
    category: "Census Form",
    fileSize: "1.4 MB",
    format: "PDF",
    downloadUrl: "#",
    updatedAt: "May 2025"
  },
  {
    id: "dl-2",
    title: "श्री पद्मावती पुरवाल दिगंबर जैन पंचायत नियमावली एवं संविधान",
    description: "संस्था के नियम, उपनियम, सदस्यता अधिकार, कार्यकारिणी गठन एवं निर्वाचन संबंधी आधिकारिक नियमावली।",
    category: "Constitution & Bylaws",
    fileSize: "2.8 MB",
    format: "PDF",
    downloadUrl: "#",
    updatedAt: "March 2024"
  },
  {
    id: "dl-3",
    title: "विवाह योग्य युवक-युवती विवरण प्रपत्र (Var-Vadhu Registration Form)",
    description: "वैवाहिक विवरण संकलन प्रपत्र। बायोडाटा, कुंडली एवं पारिवारिक विवरण सहित।",
    category: "Guidelines",
    fileSize: "850 KB",
    format: "PDF",
    downloadUrl: "#",
    updatedAt: "January 2025"
  },
  {
    id: "dl-4",
    title: "पद्मावती पुरवाल गोत्र एवं कुलवंश संक्षिप्त इतिहास",
    description: "पुरवाल समाज के 14 गोत्र, निकास, उत्पत्ति एवं प्राचीन तीर्थों की प्रामाणिक जानकारी।",
    category: "Directory",
    fileSize: "3.2 MB",
    format: "PDF",
    downloadUrl: "#",
    updatedAt: "October 2024"
  }
];

export const sampleMatrimonialProfiles: MatrimonialProfile[] = [
  {
    id: "mat-1",
    candidateId: "PPJ-MAT-101",
    name: "Er. Ayush Jain",
    gender: "Male",
    age: 28,
    birthYear: 1998,
    height: "5 ft 10 in",
    education: "B.Tech (Computer Science), IIT Roorkee",
    profession: "Senior Software Engineer",
    companyOrBusiness: "Global Tech Firm",
    city: "Noida",
    state: "Uttar Pradesh",
    nativePlace: "Firozabad",
    fatherName: "Shri Rajesh Kumar Jain",
    fatherOccupation: "Glassware Manufacturing Business",
    motherName: "Smt. Sunita Jain",
    gotraSelf: "Padmawati Purwal (Kashyap)",
    gotraMother: "Goyal",
    contactPerson: "Rajesh Kumar Jain (Father)",
    maskedContact: "*********4120",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    aboutCandidate: "धार्मिक संस्कारों से युक्त, शाकाहारी, उच्च शिक्षित एवं सरल स्वभाव के युवा। पढ़ने एवं पर्यटन में रुचि।"
  },
  {
    id: "mat-2",
    candidateId: "PPJ-MAT-102",
    name: "Dr. Ananya Jain",
    gender: "Female",
    age: 26,
    birthYear: 2000,
    height: "5 ft 4 in",
    education: "MBBS, MD (General Medicine)",
    profession: "Resident Doctor",
    companyOrBusiness: "Max Super Speciality Hospital",
    city: "Delhi",
    state: "Delhi NCR",
    nativePlace: "Agra",
    fatherName: "Dr. Pramod Jain",
    fatherOccupation: "Senior Consultant Surgeon",
    motherName: "Smt. Rekha Jain",
    gotraSelf: "Padmawati Purwal (Vashishtha)",
    gotraMother: "Singhal",
    contactPerson: "Dr. Pramod Jain (Father)",
    maskedContact: "*********8931",
    photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    aboutCandidate: "सात्विक विचारों वाली, जैन सिद्धांतों में आस्था रखने वाली चिकित्सक। संगीत एवं सामाजिक सेवा में रुचि।"
  },
  {
    id: "mat-3",
    candidateId: "PPJ-MAT-103",
    name: "CA Sarthak Jain",
    gender: "Male",
    age: 29,
    birthYear: 1997,
    height: "5 ft 9 in",
    education: "Chartered Accountant (ICAI), B.Com (Hons)",
    profession: "Partner / Financial Consultant",
    companyOrBusiness: "Jain & Associates CA Firm",
    city: "Jaipur",
    state: "Rajasthan",
    nativePlace: "Tundla",
    fatherName: "Shri Vimal Chand Jain",
    fatherOccupation: "Wholesale Business",
    motherName: "Smt. Manju Jain",
    gotraSelf: "Padmawati Purwal (Bharadwaj)",
    gotraMother: "Mittala",
    contactPerson: "Vimal Chand Jain (Father)",
    maskedContact: "*********6722",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    aboutCandidate: "प्रतिष्ठित परिवार, धार्मिक आस्थावान, सात्विक जीवन शैली एवं विनम्र आचरण।"
  },
  {
    id: "mat-4",
    candidateId: "PPJ-MAT-104",
    name: "Neha Jain",
    gender: "Female",
    age: 25,
    birthYear: 2001,
    height: "5 ft 5 in",
    education: "MBA (Human Resources), Symbiosis",
    profession: "HR Business Partner",
    companyOrBusiness: "Multinational Consulting Group",
    city: "Gurugram",
    state: "Haryana",
    nativePlace: "Firozabad",
    fatherName: "Shri Sanjay Jain",
    fatherOccupation: "Senior Government Officer (Retd.)",
    motherName: "Smt. Anita Jain",
    gotraSelf: "Padmawati Purwal (Gautam)",
    gotraMother: "Bansal",
    contactPerson: "Sanjay Jain (Father)",
    maskedContact: "*********2214",
    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    aboutCandidate: "संस्कारवान, मिलनसार, पारिवारिक मूल्यों को प्राथमिकता देने वाली आधुनिक विचारों की बिटिया।"
  }
];

export interface MemberSearchParams {
  keyword?: string;
  sort?: string;
  direction?: "asc" | "desc" | "ASC" | "DESC";
  page?: number;
  pageSize?: number;
}

export function getFilteredMembers(params: MemberSearchParams) {
  let list = [...rawMembers];
  const { keyword, sort = "fullname", direction = "asc", page = 1, pageSize = 20 } = params;

  if (keyword && keyword.trim()) {
    const q = keyword.trim().toLowerCase();
    list = list.filter((m) =>
      m.fullname.toLowerCase().includes(q) ||
      m.mid.toLowerCase().includes(q) ||
      m.city.toLowerCase().includes(q) ||
      m.father_name.toLowerCase().includes(q) ||
      m.native_place.toLowerCase().includes(q) ||
      m.address.toLowerCase().includes(q) ||
      m.mobile.includes(q)
    );
  }

  const isAsc = String(direction).toLowerCase() === "asc";

  list.sort((a, b) => {
    let aVal = "";
    let bVal = "";

    switch (sort) {
      case "hof_mid_no":
      case "mid":
        aVal = a.mid;
        bVal = b.mid;
        break;
      case "fullname":
      case "name":
        aVal = a.fullname;
        bVal = b.fullname;
        break;
      case "father_name":
        aVal = a.father_name;
        bVal = b.father_name;
        break;
      case "native_place":
        aVal = a.native_place;
        bVal = b.native_place;
        break;
      case "city":
        aVal = a.city;
        bVal = b.city;
        break;
      case "address":
        aVal = a.address;
        bVal = b.address;
        break;
      case "mobile":
        aVal = a.mobile;
        bVal = b.mobile;
        break;
      default:
        aVal = a.fullname;
        bVal = b.fullname;
    }

    return isAsc
      ? aVal.localeCompare(bVal, "en", { numeric: true, sensitivity: "base" })
      : bVal.localeCompare(aVal, "en", { numeric: true, sensitivity: "base" });
  });

  const total = list.length;
  const totalPages = Math.ceil(total / pageSize);
  const currentPage = Math.max(1, Math.min(page, totalPages || 1));
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedItems = list.slice(startIndex, startIndex + pageSize);

  return {
    items: paginatedItems,
    total,
    totalPages,
    currentPage,
    pageSize,
  };
}

import { BiBriefcaseAlt, BiSolidContact, BiUser } from "react-icons/bi";
import { BsHouseFill } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import { GrUserExpert, GrUserWorker } from "react-icons/gr";
import { ImProfile } from "react-icons/im";


export interface User {
    id: string;
    name: string;
    username: string;
    bio: string;
    createdAt: string;
    coverImage: string;
    website: string;
    location: string;
    twitter: string;
    instagram: string;
    linkedIn: string;
    gmail?: string;
    upWork?: string;
    freelancer?: string;
    mobile?: string;
    userType?: string;
    profileImage?: string;
    followingIds: string[];
    followersCount: string;
    hasNotification: boolean;
}

export interface Post {
    id: string;
    body: string;
    sectionType?: string;
    type: String;
    userId: string;
    jsxBody?: any[];
    images?: Record<string, string>[];
    sortOrder: number;
    createdAt: string;
    comments: Comment[];
    likedIds: number[];
    replies?: Post[];
    user?: User;
    orgId?: string;
}

export interface Comment {
    id: string;
    body: string;
    userId: string;
    createdAt: string;
    sortOrder: number;
    user?: User;
}

export interface DataType {
    posts: Post[];
    userIdMap: Record<string, User>;
}

export const POST_TYPE = {
    REPLAY: "Reply",
    POST: "Post",
}

export const USER_TYPE = {
    INDIVIDUAL: "Individual",
    ORGANIZATION: "Organization",
}

export const SECTION_TYPE = {
    ALL: "ALL",
    EXPERIENCE: "Experience",
    WORK: "Work",
    SKILLS: "Skill",
    NOTABLE_WORK: "NotableWork",
    FEEDBACKS: "ClientFeedback",
}

export const SIDEBAR_TYPE = {
    HOME: "Home",
    EXPERIENCE: "Experience",
    WORK: "Work",
    SKILLS: "Skill",
    NOTABLE_WORK: "Notable Work",
    ABOUT: "About",
    CONTACT: "Contact",
    HIRE_ME: "Hire ME",
    RESUME: "Resume",
}

export const ELEMENT_TYPE = {
    B_TAG: "B_TAG",
    BR_TAG: "BR_TAG",
    DIV_TAG: "DIV_TAG",
    ICON_TAG: "ICON_TAG",
    SPAN_TAG: "SPAN_TAG",
}

export const MENU_ITEMS = [
    {
      icon: BsHouseFill,
      label: SIDEBAR_TYPE.HOME,
      href: '/',
      url: ''
    },
    {
      icon: BiBriefcaseAlt,
      label: SIDEBAR_TYPE.WORK,
      href: `/${SECTION_TYPE.WORK}`,
      auth: true,
      url: ''
    },
    {
      icon: GrUserExpert,
      label: SIDEBAR_TYPE.EXPERIENCE,
      href: `/${SECTION_TYPE.EXPERIENCE}`,
      auth: true,
      isImage: false,
      url: '/images/experience.png'
    },
    {
      icon: GrUserExpert,
      label: SIDEBAR_TYPE.SKILLS,
      href: `/${SECTION_TYPE.SKILLS}`,
      auth: true,
      isImage: true,
      url: '/images/skills2.png'
    },
    {
      icon: GrUserWorker,
      label: SIDEBAR_TYPE.NOTABLE_WORK,
      href: `/${SECTION_TYPE.NOTABLE_WORK}`,
      auth: true,
      isImage: false,
      url: '/images/experience.png'
    },
    {
      icon: BiUser,
      label: SIDEBAR_TYPE.ABOUT,
      href: `/users/3`,
      auth: true,
      isImage: false,
      url: '/images/experience.png'
    },
    {
      icon: BiSolidContact,
      label: SIDEBAR_TYPE.CONTACT,
      href: `/contact`,
      auth: true,
      isImage: false,
      url: '/images/experience.png'
    },
    {
      icon: ImProfile,
      label: SIDEBAR_TYPE.RESUME,
      href: `/Mohamed_Eliyas_CV.pdf`,
      auth: true,
      isImage: false,
      url: ''
    },
    {
      icon: FaUserTie,
      label: SIDEBAR_TYPE.HIRE_ME,
      href: `/hireme`,
      auth: true,
      isImage: false,
      url: '/images/experience.png'
    }
  ]
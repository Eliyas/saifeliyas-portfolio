

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
}

export const ELEMENT_TYPE = {
    B_TAG: "B_TAG",
    BR_TAG: "BR_TAG",
    DIV_TAG: "DIV_TAG",
    ICON_TAG: "ICON_TAG",
    SPAN_TAG: "SPAN_TAG",
}
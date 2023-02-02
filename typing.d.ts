interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt:string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    }
}

export interface PageInfo extends SanityBody{
    address: string;
    backgroundInfo: string;
    email: string;
    heroImage: Image;
    name: string;
    nickName: string;
    phone: string;
    profileImg: Image;
}

export interface Social extends SanityBody{
    _type: "social";
    title: string;
    url: string;
}

export interface Skill extends SanityBody{
    _type: "skills";
    skillImage: Image;
    skillName: string;
}

export interface Project extends SanityBody{
    _type: "projects";
    description: string;
    projectName: string;
    skillImage: Image;
    url: string;
}
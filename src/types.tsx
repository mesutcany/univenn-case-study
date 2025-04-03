export type QueryResponse = {
    getCompanyApplicantList: {
        applicants: Applicant[],
        total: number,
        pages: number,
    }
}

export type Applicant = {
    id: string;
    firstName: string;
    lastName: string;
    rating: number;
    isFavoritedByMe: boolean;
    profilePhotoUrl: string | null;
    __typename: string;
    email: string;
    phoneNumber: string;
    address: string | null;
    latitude: number | null;
    longitude: number | null;
    age: number | null;
    country: string | null;
    gender: string | null;
    dateOfBirth: string | null;
    gradUni: string | null;
    universityName: string | null;
    salaryExp: string | null;
    salaryExpCurr: string | null;
    salaryExpPeriod: string | null;
    sourceLink: string | null;
    sourceType: string;
    sourceUpdatedAt: string;
    updatedAt: string;
    createdAt: string;
    isViewedByMe: boolean;
    tags: Tag[];
    skills: Skill[];
    activeApplication: ActiveApplication | null;
    collaborators: Collaborators;
    myPermission: Permission;
};

export type Tag = {
    id: string;
    name: string;
    color: string;
};

export type Skill = {
    id: string;
    name: string;
    color: string;
};

export type ActiveApplication = {
    id: string;
    createdAt: string;
    updatedAt: string;
    aiFit: number | null;
    score: number | null;
    salaryExp: number | null;
    salaryExpCurr: string | null;
    salaryExpPeriod: string | null;
    lexorank: string;
    resume: Resume | null;
    jobListing: JobListing;
    stage: Stage;
    applicant: Partial<Applicant>;
    rejectedReasons: string[];
};

export type Resume = {
    id: string;
    name: string;
    url: string;
    size: number;
    pageCount: number;
    uploadedAt: string;
};

export type JobListing = {
    id: string;
    name: string;
    color: string;
    type: string;
    collaborators: Collaborators;
};

export type Stage = {
    id: string;
    name: string;
};

export type Collaborators = {
    assignees: Collaborator[];
    autoAssignees: Collaborator[];
};

export type Collaborator = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    profilePictureUrl: string | null;

};

export type Permission = {
    id: string;
    canViewApplicantPhoneNumber: boolean;
    canViewApplicantLocation: boolean;
    canViewApplicantFormAnswers: boolean;
    canViewApplicantExpectedSalary: boolean;
    canDeleteApplicants: boolean;
    canAssignMembersToApplicants: boolean;
};

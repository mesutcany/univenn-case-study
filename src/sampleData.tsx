import { Applicant } from "./types";

export const applicants: Applicant[] = [
    {
        "id": "cm6khli6e0017iwzb72iitqte",
        "firstName": "Ayse",
        "lastName": "Özer",
        "rating": 3.5,
        "isFavoritedByMe": true,
        "profilePhotoUrl": null,
        "__typename": "ApplicantWithActiveApplication",
        "collaborators": {
            "assignees": [],
            "autoAssignees": [],
            "__typename": "ApplicantCollaboratorResponse"
        },
        "activeApplication": {
            "id": "cm6khlipt0019iwzb4fd2ukqc",
            "createdAt": "2025-01-31T08:13:05.153Z",
            "updatedAt": "2025-01-31T08:13:43.453Z",
            "aiFit": null,
            "score": null,
            "salaryExp": null,
            "salaryExpCurr": "USD",
            "salaryExpPeriod": "MONTHLY",
            "lexorank": "0|Vzzzvzzz:",
            "resume": {
                "id": "cm6khlipt001biwzbd1aeofa3",
                "name": "Ayşe Özer Cv",
                "url": "https://res.cloudinary.com/hrpanda/image/upload/v1738311183/UserUploads/mm7b87njpbfxkvm3jugi.pdf",
                "size": 92167,
                "pageCount": 1,
                "uploadedAt": "2025-01-31T08:13:03.000Z",
                "__typename": "ApplicationAttachment"
            },
            "jobListing": {
                "id": "cm2n4igtn001s1vvg4gl1onw3",
                "name": "Sales Associate",
                "color": "#175CD3",
                "type": "ACTIVE",
                "collaborators": {
                    "autoAssignees": [
                        {
                            "id": "clvqg861h030dm8jjv7r8gnnx",
                            "firstName": "Rada",
                            "lastName": "Marcao",
                            "email": "marcao3767@gmail.com",
                            "profilePictureUrl": null,
                            "__typename": "User"
                        }
                    ],
                    "__typename": "JobListingCollaboratorResponse"
                },
                "__typename": "JobListing"
            },
            "stage": {
                "id": "clooapkdz000dn01scupqzr3h",
                "name": "Sourced",
                "__typename": "JobListingStage"
            },
            "applicant": {
                "id": "cm6khli6e0017iwzb72iitqte",
                "firstName": "Ayse",
                "lastName": "Özer",
                "profilePhotoUrl": null,
                "email": "ayseozer987@gmail.com",
                "__typename": "Applicant"
            },
            "rejectedReasons": [],
            "__typename": "Application"
        },
        "email": "ayseozer987@gmail.com",
        "phoneNumber": "",
        "address": null,
        "latitude": null,
        "age": null,
        "longitude": null,
        "country": null,
        "gender": null,
        "dateOfBirth": null,
        "gradUni": null,
        "university": null,
        "universityName": null,
        "salaryExp": null,
        "salaryExp2": null,
        "salaryExpCurr": null,
        "salaryExpPeriod": null,
        "sourceLink": "",
        "sourceType": "CUSTOM",
        "sourceUpdatedAt": "2025-01-31T08:13:04.454Z",
        "updatedAt": "2025-03-31T13:42:45.016Z",
        "myPermission": {
            "id": "cly8p1zr4008n56l3mvp2qtin",
            "canViewApplicantPhoneNumber": true,
            "canViewApplicantLocation": true,
            "canViewApplicantFormAnswers": true,
            "canViewApplicantExpectedSalary": true,
            "canDeleteApplicants": true,
            "canAssignMembersToApplicants": true,
            "__typename": "Permission"
        },
        "createdAt": "2025-01-31T08:13:04.454Z",
        "isViewedByMe": true,
        "tags": [],
        "skills": []
    },
    {
        "id": "cm60ivpq0001tzvmx1jxo6loz",
        "firstName": "Bilal",
        "lastName": "Gümüş",
        "rating": 0,
        "isFavoritedByMe": true,
        "profilePhotoUrl": null,
        "__typename": "ApplicantWithActiveApplication",
        "collaborators": {
            "assignees": [],
            "autoAssignees": [],
            "__typename": "ApplicantCollaboratorResponse"
        },
        "activeApplication": {
            "id": "cm60ivpr8001vzvmx9d7mvz7r",
            "createdAt": "2025-01-17T08:53:36.933Z",
            "updatedAt": "2025-01-29T10:02:26.105Z",
            "aiFit": null,
            "score": null,
            "salaryExp": 100,
            "salaryExpCurr": "USD",
            "salaryExpPeriod": "YEARLY",
            "lexorank": "0|Vzzzyzzz:",
            "resume": null,
            "jobListing": {
                "id": "cm2n4igtn001s1vvg4gl1onw3",
                "name": "Sales Associate",
                "color": "#175CD3",
                "type": "ACTIVE",
                "collaborators": {
                    "autoAssignees": [
                        {
                            "id": "clvqg861h030dm8jjv7r8gnnx",
                            "firstName": "Rada",
                            "lastName": "Marcao",
                            "email": "marcao3767@gmail.com",
                            "profilePictureUrl": null,
                            "__typename": "User"
                        }
                    ],
                    "__typename": "JobListingCollaboratorResponse"
                },
                "__typename": "JobListing"
            },
            "stage": {
                "id": "clnvoqb87044mmq3wke7woqqq",
                "name": "Hired",
                "__typename": "JobListingStage"
            },
            "applicant": {
                "id": "cm60ivpq0001tzvmx1jxo6loz",
                "firstName": "Bilal",
                "lastName": "Gümüş",
                "profilePhotoUrl": null,
                "email": "bilal.gumus@univerlist.com",
                "__typename": "Applicant"
            },
            "rejectedReasons": [],
            "__typename": "Application"
        },
        "email": "bilal.gumus@univerlist.com",
        "phoneNumber": "+90 555 555 55 55",
        "address": "Istanbul, Türkiye",
        "latitude": null,
        "age": 19,
        "longitude": null,
        "country": "Türkiye",
        "gender": "Male",
        "dateOfBirth": "2006-01-08T22:00:00.000Z",
        "gradUni": "Selçuk Uni",
        "university": {
            "id": "cm66mpdl201w0ek4u6vjuybpn",
            "name": "Selçuk University",
            "__typename": "University"
        },
        "universityName": "Selçuk University",
        "salaryExp": "100 USD YEARLY",
        "salaryExp2": null,
        "salaryExpCurr": null,
        "salaryExpPeriod": null,
        "sourceLink": null,
        "sourceType": "APPLICATION",
        "sourceUpdatedAt": "2025-01-17T08:53:36.888Z",
        "updatedAt": "2025-01-17T08:53:36.889Z",
        "myPermission": {
            "id": "cly8p1zr4008n56l3mvp2qtin",
            "canViewApplicantPhoneNumber": true,
            "canViewApplicantLocation": true,
            "canViewApplicantFormAnswers": true,
            "canViewApplicantExpectedSalary": true,
            "canDeleteApplicants": true,
            "canAssignMembersToApplicants": true,
            "__typename": "Permission"
        },
        "createdAt": "2025-01-17T08:53:36.889Z",
        "isViewedByMe": true,
        "tags": [],
        "skills": []
    },
    {
        "id": "cm2naopcz4tavid58vxs1jid4",
        "firstName": "Wallace",
        "lastName": "Ledner",
        "rating": 0,
        "isFavoritedByMe": true,
        "profilePhotoUrl": null,
        "__typename": "ApplicantWithActiveApplication",
        "collaborators": {
            "assignees": [],
            "autoAssignees": [],
            "__typename": "ApplicantCollaboratorResponse"
        },
        "activeApplication": {
            "id": "cm2naopfv4tblid58kdm0imqe",
            "createdAt": "2024-10-24T12:44:05.707Z",
            "updatedAt": "2024-10-24T12:44:05.707Z",
            "aiFit": 92,
            "score": null,
            "salaryExp": 4929,
            "salaryExpCurr": "USD",
            "salaryExpPeriod": "YEARLY",
            "lexorank": "0|W00Xvzzz:",
            "resume": {
                "id": "cm2naoph24tcpid5817s6olak",
                "name": "Wallace_Ledner_CV",
                "url": "https://res.cloudinary.com/hrpanda/image/upload/v1711011023/UserUploads/amzosxtp1fimdppy3wap.pdf",
                "size": 77679,
                "pageCount": 3,
                "uploadedAt": "2024-10-24T12:44:05.749Z",
                "__typename": "ApplicationAttachment"
            },
            "jobListing": {
                "id": "cm2n4igtn001s1vvg4gl1onw3",
                "name": "Sales Associate",
                "color": "#175CD3",
                "type": "ACTIVE",
                "collaborators": {
                    "autoAssignees": [
                        {
                            "id": "clvqg861h030dm8jjv7r8gnnx",
                            "firstName": "Rada",
                            "lastName": "Marcao",
                            "email": "marcao3767@gmail.com",
                            "profilePictureUrl": null,
                            "__typename": "User"
                        }
                    ],
                    "__typename": "JobListingCollaboratorResponse"
                },
                "__typename": "JobListing"
            },
            "stage": {
                "id": "clnvoqb87044nmq3wttmf5144",
                "name": "Rejected",
                "__typename": "JobListingStage"
            },
            "applicant": {
                "id": "cm2naopcz4tavid58vxs1jid4",
                "firstName": "Wallace",
                "lastName": "Ledner",
                "profilePhotoUrl": null,
                "email": "wallace_ledner@example.com",
                "__typename": "Applicant"
            },
            "rejectedReasons": [],
            "__typename": "Application"
        },
        "email": "wallace_ledner@example.com",
        "phoneNumber": "507-400-9042",
        "address": "Tokyo, Japan",
        "latitude": 35.6897,
        "age": 27,
        "longitude": 139.6922,
        "country": "Japan",
        "gender": "Male",
        "dateOfBirth": "1998-03-08T17:08:35.207Z",
        "gradUni": "natus",
        "university": null,
        "universityName": null,
        "salaryExp": null,
        "salaryExp2": null,
        "salaryExpCurr": null,
        "salaryExpPeriod": null,
        "sourceLink": null,
        "sourceType": "APPLICATION",
        "sourceUpdatedAt": "2024-10-24T12:44:05.603Z",
        "updatedAt": "2024-10-24T12:44:05.603Z",
        "myPermission": {
            "id": "cly8p1zr4008n56l3mvp2qtin",
            "canViewApplicantPhoneNumber": true,
            "canViewApplicantLocation": true,
            "canViewApplicantFormAnswers": true,
            "canViewApplicantExpectedSalary": true,
            "canDeleteApplicants": true,
            "canAssignMembersToApplicants": true,
            "__typename": "Permission"
        },
        "createdAt": "2024-10-24T12:44:05.603Z",
        "isViewedByMe": true,
        "tags": [
            {
                "id": "cls1rao2w014nq81vhaqiz24g",
                "name": "Graduated from a good university",
                "color": "#C01048",
                "__typename": "Tag"
            },
            {
                "id": "clu19ulsy000fks7xnrurcr4u",
                "name": "Bachelor degree graduate",
                "color": "#027A48",
                "__typename": "Tag"
            }
        ],
        "skills": [
            {
                "id": "cls1ransp00blq81vn0xk8dc5",
                "name": "Problem solving",
                "color": "#175CD3",
                "__typename": "Skill"
            },
            {
                "id": "cls1ransp00bnq81vcobmavds",
                "name": "Analytical skills",
                "color": "#C01048",
                "__typename": "Skill"
            },
            {
                "id": "clu19ulso0003ks7x0hcjuo15",
                "name": "Communication skills",
                "color": "#175CD3",
                "__typename": "Skill"
            },
            {
                "id": "clu19ulsq0005ks7x3x5tsgcd",
                "name": "Creative skills",
                "color": "#175CD3",
                "__typename": "Skill"
            },
            {
                "id": "clu19ulsr0007ks7x3282iy76",
                "name": "Critical Thinking",
                "color": "#C01048",
                "__typename": "Skill"
            },
            {
                "id": "clu19ulss0009ks7x9yo82n4u",
                "name": "Good negotiator",
                "color": "#027A48",
                "__typename": "Skill"
            },
            {
                "id": "clu19ulst000bks7xkwwj9e2v",
                "name": "Team work",
                "color": "#6941C6",
                "__typename": "Skill"
            }
        ]
    },
    {
        "id": "cm2naopb34ta5id58nb4ojex5",
        "firstName": "Margie",
        "lastName": "Grady",
        "rating": 0,
        "isFavoritedByMe": false,
        "profilePhotoUrl": null,
        "__typename": "ApplicantWithActiveApplication",
        "collaborators": {
            "assignees": [],
            "autoAssignees": [],
            "__typename": "ApplicantCollaboratorResponse"
        },
        "activeApplication": {
            "id": "cm2naopc74ta7id58y5mqlyol",
            "createdAt": "2024-10-24T12:44:05.574Z",
            "updatedAt": "2024-12-09T14:12:19.606Z",
            "aiFit": 11,
            "score": null,
            "salaryExp": 1011,
            "salaryExpCurr": "USD",
            "salaryExpPeriod": "YEARLY",
            "lexorank": "0|W00YKzzz:",
            "resume": {
                "id": "cm2naopcp4tatid58562vsp85",
                "name": "Margie_Grady_CV",
                "url": "https://res.cloudinary.com/hrpanda/image/upload/v1711011023/UserUploads/amzosxtp1fimdppy3wap.pdf",
                "size": 77679,
                "pageCount": 3,
                "uploadedAt": "2024-10-24T12:44:05.592Z",
                "__typename": "ApplicationAttachment"
            },
            "jobListing": {
                "id": "clnvoqb8b044pmq3woi6v4t44",
                "name": "default listing",
                "color": "#6941C6",
                "type": "IDLE",
                "collaborators": {
                    "autoAssignees": [
                        {
                            "id": "clvqg861h030dm8jjv7r8gnnx",
                            "firstName": "Rada",
                            "lastName": "Marcao",
                            "email": "marcao3767@gmail.com",
                            "profilePictureUrl": null,
                            "__typename": "User"
                        }
                    ],
                    "__typename": "JobListingCollaboratorResponse"
                },
                "__typename": "JobListing"
            },
            "stage": {
                "id": "clnvoqb87044lmq3w5al2s9d6",
                "name": "Offer",
                "__typename": "JobListingStage"
            },
            "applicant": {
                "id": "cm2naopb34ta5id58nb4ojex5",
                "firstName": "Margie",
                "lastName": "Grady",
                "profilePhotoUrl": null,
                "email": "margie.grady58@example.com",
                "__typename": "Applicant"
            },
            "rejectedReasons": [],
            "__typename": "Application"
        },
        "email": "margie.grady58@example.com",
        "phoneNumber": "574-733-9494",
        "address": "Paris, France",
        "latitude": 48.8567,
        "age": 25,
        "longitude": 2.3522,
        "country": "France",
        "gender": "Male",
        "dateOfBirth": "1999-10-16T00:11:37.686Z",
        "gradUni": "ipsam",
        "university": null,
        "universityName": null,
        "salaryExp": null,
        "salaryExp2": null,
        "salaryExpCurr": null,
        "salaryExpPeriod": null,
        "sourceLink": null,
        "sourceType": "APPLICATION",
        "sourceUpdatedAt": "2024-10-24T12:44:05.534Z",
        "updatedAt": "2024-10-24T12:44:05.534Z",
        "myPermission": {
            "id": "cly8p1zr4008n56l3mvp2qtin",
            "canViewApplicantPhoneNumber": true,
            "canViewApplicantLocation": true,
            "canViewApplicantFormAnswers": true,
            "canViewApplicantExpectedSalary": true,
            "canDeleteApplicants": true,
            "canAssignMembersToApplicants": true,
            "__typename": "Permission"
        },
        "createdAt": "2024-10-24T12:44:05.534Z",
        "isViewedByMe": true,
        "tags": [
            {
                "id": "cls1rao2w014lq81vf6z38qv4",
                "name": "Multi language",
                "color": "#175CD3",
                "__typename": "Tag"
            },
            {
                "id": "clu19ulsy000fks7xnrurcr4u",
                "name": "Bachelor degree graduate",
                "color": "#027A48",
                "__typename": "Tag"
            },
            {
                "id": "clu19ulsy000hks7xbk5d8dxx",
                "name": "Comfortable with remote work",
                "color": "#6941C6",
                "__typename": "Tag"
            },
            {
                "id": "clu19ult1000jks7xbacpk6kh",
                "name": "Foreigner",
                "color": "#175CD3",
                "__typename": "Tag"
            },
            {
                "id": "clu19ult2000lks7xkx2vr9yj",
                "name": "Able to move",
                "color": "#027A48",
                "__typename": "Tag"
            }
        ],
        "skills": [
            {
                "id": "cls1ransp00bnq81vcobmavds",
                "name": "Analytical skills",
                "color": "#C01048",
                "__typename": "Skill"
            },
            {
                "id": "clu19ulso0003ks7x0hcjuo15",
                "name": "Communication skills",
                "color": "#175CD3",
                "__typename": "Skill"
            }
        ]
    },
    {
        "id": "cm2naop424t6lid58hbk8ifw1",
        "firstName": "Harry",
        "lastName": "Orn",
        "rating": 5,
        "isFavoritedByMe": false,
        "profilePhotoUrl": "https://doodleipsum.com/100/avatar-3?bg=33FF57&n=2744&i=90c6062295f84394adac6c5eeada1c35",
        "__typename": "ApplicantWithActiveApplication",
        "collaborators": {
            "assignees": [],
            "autoAssignees": [],
            "__typename": "ApplicantCollaboratorResponse"
        },
        "activeApplication": {
            "id": "cm2naop9s4t8hid58y1mulezj",
            "createdAt": "2024-10-24T12:44:05.486Z",
            "updatedAt": "2024-10-24T12:44:05.486Z",
            "aiFit": 8,
            "score": null,
            "salaryExp": 1364,
            "salaryExpCurr": "EUR",
            "salaryExpPeriod": "YEARLY",
            "lexorank": "0|W00YNVzz:",
            "resume": {
                "id": "cm2naopau4ta3id58embr6j3v",
                "name": "Harry_Orn_CV",
                "url": "https://res.cloudinary.com/hrpanda/image/upload/v1711011023/UserUploads/amzosxtp1fimdppy3wap.pdf",
                "size": 77679,
                "pageCount": 3,
                "uploadedAt": "2024-10-24T12:44:05.526Z",
                "__typename": "ApplicationAttachment"
            },
            "jobListing": {
                "id": "cm2n4igtn001s1vvg4gl1onw3",
                "name": "Sales Associate",
                "color": "#175CD3",
                "type": "ACTIVE",
                "collaborators": {
                    "autoAssignees": [
                        {
                            "id": "clvqg861h030dm8jjv7r8gnnx",
                            "firstName": "Rada",
                            "lastName": "Marcao",
                            "email": "marcao3767@gmail.com",
                            "profilePictureUrl": null,
                            "__typename": "User"
                        }
                    ],
                    "__typename": "JobListingCollaboratorResponse"
                },
                "__typename": "JobListing"
            },
            "stage": {
                "id": "clnvoqb87044imq3wudgbj1xv",
                "name": "Contacted",
                "__typename": "JobListingStage"
            },
            "applicant": {
                "id": "cm2naop424t6lid58hbk8ifw1",
                "firstName": "Harry",
                "lastName": "Orn",
                "profilePhotoUrl": "https://doodleipsum.com/100/avatar-3?bg=33FF57&n=2744&i=90c6062295f84394adac6c5eeada1c35",
                "email": "harry.orn@example.com",
                "__typename": "Applicant"
            },
            "rejectedReasons": [],
            "__typename": "Application"
        },
        "email": "harry.orn@example.com",
        "phoneNumber": "+592 862 7978",
        "address": "New York, United States",
        "latitude": 40.6943,
        "age": 28,
        "longitude": -73.9249,
        "country": "United States",
        "gender": "Other",
        "dateOfBirth": "1996-11-07T04:41:18.165Z",
        "gradUni": "expedita",
        "university": null,
        "universityName": null,
        "salaryExp": null,
        "salaryExp2": null,
        "salaryExpCurr": null,
        "salaryExpPeriod": null,
        "sourceLink": null,
        "sourceType": "APPLICATION",
        "sourceUpdatedAt": "2024-10-24T12:44:05.282Z",
        "updatedAt": "2025-03-30T11:06:27.162Z",
        "myPermission": {
            "id": "cly8p1zr4008n56l3mvp2qtin",
            "canViewApplicantPhoneNumber": true,
            "canViewApplicantLocation": true,
            "canViewApplicantFormAnswers": true,
            "canViewApplicantExpectedSalary": true,
            "canDeleteApplicants": true,
            "canAssignMembersToApplicants": true,
            "__typename": "Permission"
        },
        "createdAt": "2024-10-24T12:44:05.282Z",
        "isViewedByMe": true,
        "tags": [
            {
                "id": "cls1rao2w014lq81vf6z38qv4",
                "name": "Multi language",
                "color": "#175CD3",
                "__typename": "Tag"
            },
            {
                "id": "cls1rao2w014nq81vhaqiz24g",
                "name": "Graduated from a good university",
                "color": "#C01048",
                "__typename": "Tag"
            },
            {
                "id": "cls1rao2w014qq81vjxiwpnji",
                "name": "Experienced",
                "color": "#175CD3",
                "__typename": "Tag"
            },
            {
                "id": "clu19ulsy000dks7x6mwhs31c",
                "name": "Newly graduated",
                "color": "#175CD3",
                "__typename": "Tag"
            },
            {
                "id": "clu19ulsy000fks7xnrurcr4u",
                "name": "Bachelor degree graduate",
                "color": "#027A48",
                "__typename": "Tag"
            },
            {
                "id": "clu19ulsy000hks7xbk5d8dxx",
                "name": "Comfortable with remote work",
                "color": "#6941C6",
                "__typename": "Tag"
            },
            {
                "id": "clu19ult1000jks7xbacpk6kh",
                "name": "Foreigner",
                "color": "#175CD3",
                "__typename": "Tag"
            },
            {
                "id": "clu19ult2000lks7xkx2vr9yj",
                "name": "Able to move",
                "color": "#027A48",
                "__typename": "Tag"
            }
        ],
        "skills": [
            {
                "id": "cls1ransp00blq81vn0xk8dc5",
                "name": "Problem solving",
                "color": "#175CD3",
                "__typename": "Skill"
            },
            {
                "id": "clu19ulsr0007ks7x3282iy76",
                "name": "Critical Thinking",
                "color": "#C01048",
                "__typename": "Skill"
            },
            {
                "id": "clu19ulss0009ks7x9yo82n4u",
                "name": "Good negotiator",
                "color": "#027A48",
                "__typename": "Skill"
            },
            {
                "id": "clu19ulst000bks7xkwwj9e2v",
                "name": "Team work",
                "color": "#6941C6",
                "__typename": "Skill"
            }
        ]
    },
    {
        "id": "cm2naooww4t31id58k3ycbvc3",
        "firstName": "Enrique",
        "lastName": "Haag",
        "rating": 4.5,
        "isFavoritedByMe": false,
        "profilePhotoUrl": "https://doodleipsum.com/100/avatar-3?bg=33FF57&n=45&i=3337d17d1f7d148640bddfe445bb06b4",
        "__typename": "ApplicantWithActiveApplication",
        "collaborators": {
            "assignees": [],
            "autoAssignees": [],
            "__typename": "ApplicantCollaboratorResponse"
        },
        "activeApplication": {
            "id": "cm2naop2t4t4xid58032guwgs",
            "createdAt": "2024-10-24T12:44:05.235Z",
            "updatedAt": "2024-12-09T14:12:19.606Z",
            "aiFit": 37,
            "score": null,
            "salaryExp": 3653,
            "salaryExpCurr": "EUR",
            "salaryExpPeriod": "MONTHLY",
            "lexorank": "0|W00Y8zzz:",
            "resume": {
                "id": "cm2naop3f4t6jid58j1ujldu3",
                "name": "Enrique_Haag_CV",
                "url": "https://res.cloudinary.com/hrpanda/image/upload/v1711011023/UserUploads/amzosxtp1fimdppy3wap.pdf",
                "size": 77679,
                "pageCount": 3,
                "uploadedAt": "2024-10-24T12:44:05.257Z",
                "__typename": "ApplicationAttachment"
            },
            "jobListing": {
                "id": "clnvoqb8b044pmq3woi6v4t44",
                "name": "default listing",
                "color": "#6941C6",
                "type": "IDLE",
                "collaborators": {
                    "autoAssignees": [
                        {
                            "id": "clvqg861h030dm8jjv7r8gnnx",
                            "firstName": "Rada",
                            "lastName": "Marcao",
                            "email": "marcao3767@gmail.com",
                            "profilePictureUrl": null,
                            "__typename": "User"
                        }
                    ],
                    "__typename": "JobListingCollaboratorResponse"
                },
                "__typename": "JobListing"
            },
            "stage": {
                "id": "clnvoqb87044mmq3wke7woqqq",
                "name": "Hired",
                "__typename": "JobListingStage"
            },
            "applicant": {
                "id": "cm2naooww4t31id58k3ycbvc3",
                "firstName": "Enrique",
                "lastName": "Haag",
                "profilePhotoUrl": "https://doodleipsum.com/100/avatar-3?bg=33FF57&n=45&i=3337d17d1f7d148640bddfe445bb06b4",
                "email": "enrique69@example.com",
                "__typename": "Applicant"
            },
            "rejectedReasons": [],
            "__typename": "Application"
        },
        "email": "enrique69@example.com",
        "phoneNumber": "537-842-3814",
        "address": "Rome, Italy",
        "latitude": 41.8933,
        "age": 32,
        "longitude": 12.4828,
        "country": "Italy",
        "gender": "Male",
        "dateOfBirth": "1992-06-11T19:32:20.190Z",
        "gradUni": "facilis",
        "university": null,
        "universityName": null,
        "salaryExp": null,
        "salaryExp2": null,
        "salaryExpCurr": null,
        "salaryExpPeriod": null,
        "sourceLink": null,
        "sourceType": "APPLICATION",
        "sourceUpdatedAt": "2024-10-24T12:44:05.024Z",
        "updatedAt": "2025-03-30T11:06:24.369Z",
        "myPermission": {
            "id": "cly8p1zr4008n56l3mvp2qtin",
            "canViewApplicantPhoneNumber": true,
            "canViewApplicantLocation": true,
            "canViewApplicantFormAnswers": true,
            "canViewApplicantExpectedSalary": true,
            "canDeleteApplicants": true,
            "canAssignMembersToApplicants": true,
            "__typename": "Permission"
        },
        "createdAt": "2024-10-24T12:44:05.024Z",
        "isViewedByMe": true,
        "tags": [
            {
                "id": "cls1rao2w014lq81vf6z38qv4",
                "name": "Multi language",
                "color": "#175CD3",
                "__typename": "Tag"
            },
            {
                "id": "cls1rao2w014qq81vjxiwpnji",
                "name": "Experienced",
                "color": "#175CD3",
                "__typename": "Tag"
            },
            {
                "id": "clu19ulsy000dks7x6mwhs31c",
                "name": "Newly graduated",
                "color": "#175CD3",
                "__typename": "Tag"
            },
            {
                "id": "clu19ult1000jks7xbacpk6kh",
                "name": "Foreigner",
                "color": "#175CD3",
                "__typename": "Tag"
            },
            {
                "id": "clu19ult2000lks7xkx2vr9yj",
                "name": "Able to move",
                "color": "#027A48",
                "__typename": "Tag"
            }
        ],
        "skills": [
            {
                "id": "cls1ransp00blq81vn0xk8dc5",
                "name": "Problem solving",
                "color": "#175CD3",
                "__typename": "Skill"
            },
            {
                "id": "cls1ransp00bnq81vcobmavds",
                "name": "Analytical skills",
                "color": "#C01048",
                "__typename": "Skill"
            },
            {
                "id": "clu19ulso0003ks7x0hcjuo15",
                "name": "Communication skills",
                "color": "#175CD3",
                "__typename": "Skill"
            },
            {
                "id": "clu19ulsq0005ks7x3x5tsgcd",
                "name": "Creative skills",
                "color": "#175CD3",
                "__typename": "Skill"
            },
            {
                "id": "clu19ulsr0007ks7x3282iy76",
                "name": "Critical Thinking",
                "color": "#C01048",
                "__typename": "Skill"
            },
            {
                "id": "clu19ulss0009ks7x9yo82n4u",
                "name": "Good negotiator",
                "color": "#027A48",
                "__typename": "Skill"
            }
        ]
    },
    {
        "id": "cm2naootz4t15id58ntdjkvd7",
        "firstName": "Angelina",
        "lastName": "Hilpert",
        "rating": 0,
        "isFavoritedByMe": false,
        "profilePhotoUrl": null,
        "__typename": "ApplicantWithActiveApplication",
        "collaborators": {
            "assignees": [],
            "autoAssignees": [],
            "__typename": "ApplicantCollaboratorResponse"
        },
        "activeApplication": {
            "id": "cm2naoowa4t1vid58asse8a3u",
            "createdAt": "2024-10-24T12:44:05.002Z",
            "updatedAt": "2024-10-24T12:44:05.002Z",
            "aiFit": 58,
            "score": null,
            "salaryExp": 1946,
            "salaryExpCurr": "TRY",
            "salaryExpPeriod": "WEEKLY",
            "lexorank": "0|W00Xuzzz:",
            "resume": {
                "id": "cm2naoowr4t2zid58g4h5sq7z",
                "name": "Angelina_Hilpert_CV",
                "url": "https://res.cloudinary.com/hrpanda/image/upload/v1711011023/UserUploads/amzosxtp1fimdppy3wap.pdf",
                "size": 77679,
                "pageCount": 3,
                "uploadedAt": "2024-10-24T12:44:05.018Z",
                "__typename": "ApplicationAttachment"
            },
            "jobListing": {
                "id": "cm2n4igtn001s1vvg4gl1onw3",
                "name": "Sales Associate",
                "color": "#175CD3",
                "type": "ACTIVE",
                "collaborators": {
                    "autoAssignees": [
                        {
                            "id": "clvqg861h030dm8jjv7r8gnnx",
                            "firstName": "Rada",
                            "lastName": "Marcao",
                            "email": "marcao3767@gmail.com",
                            "profilePictureUrl": null,
                            "__typename": "User"
                        }
                    ],
                    "__typename": "JobListingCollaboratorResponse"
                },
                "__typename": "JobListing"
            },
            "stage": {
                "id": "clnvoqb87044nmq3wttmf5144",
                "name": "Rejected",
                "__typename": "JobListingStage"
            },
            "applicant": {
                "id": "cm2naootz4t15id58ntdjkvd7",
                "firstName": "Angelina",
                "lastName": "Hilpert",
                "profilePhotoUrl": null,
                "email": "angelina.hilpert@example.com",
                "__typename": "Applicant"
            },
            "rejectedReasons": [],
            "__typename": "Application"
        },
        "email": "angelina.hilpert@example.com",
        "phoneNumber": "560-281-1099",
        "address": "Paris, France",
        "latitude": 48.8567,
        "age": 38,
        "longitude": 2.3522,
        "country": "France",
        "gender": "Female",
        "dateOfBirth": "1986-07-23T06:59:32.671Z",
        "gradUni": "distinctio",
        "university": null,
        "universityName": null,
        "salaryExp": null,
        "salaryExp2": null,
        "salaryExpCurr": null,
        "salaryExpPeriod": null,
        "sourceLink": null,
        "sourceType": "APPLICATION",
        "sourceUpdatedAt": "2024-10-24T12:44:04.919Z",
        "updatedAt": "2024-10-24T12:44:04.919Z",
        "myPermission": {
            "id": "cly8p1zr4008n56l3mvp2qtin",
            "canViewApplicantPhoneNumber": true,
            "canViewApplicantLocation": true,
            "canViewApplicantFormAnswers": true,
            "canViewApplicantExpectedSalary": true,
            "canDeleteApplicants": true,
            "canAssignMembersToApplicants": true,
            "__typename": "Permission"
        },
        "createdAt": "2024-10-24T12:44:04.919Z",
        "isViewedByMe": true,
        "tags": [
            {
                "id": "clu19ulsy000dks7x6mwhs31c",
                "name": "Newly graduated",
                "color": "#175CD3",
                "__typename": "Tag"
            },
            {
                "id": "clu19ulsy000fks7xnrurcr4u",
                "name": "Bachelor degree graduate",
                "color": "#027A48",
                "__typename": "Tag"
            },
            {
                "id": "clu19ulsy000hks7xbk5d8dxx",
                "name": "Comfortable with remote work",
                "color": "#6941C6",
                "__typename": "Tag"
            }
        ],
        "skills": [
            {
                "id": "cls1ransp00bnq81vcobmavds",
                "name": "Analytical skills",
                "color": "#C01048",
                "__typename": "Skill"
            },
            {
                "id": "clu19ulsq0005ks7x3x5tsgcd",
                "name": "Creative skills",
                "color": "#175CD3",
                "__typename": "Skill"
            },
            {
                "id": "clu19ulsr0007ks7x3282iy76",
                "name": "Critical Thinking",
                "color": "#C01048",
                "__typename": "Skill"
            }
        ]
    },
    {
        "id": "cm2naoom84sxlid58u3gg2hn8",
        "firstName": "Shelly",
        "lastName": "Shields",
        "rating": 0,
        "isFavoritedByMe": false,
        "profilePhotoUrl": "https://doodleipsum.com/100/avatar-3?bg=8B33FF&n=3677&i=67b1d76e563e7a3335d8ab386658dc48",
        "__typename": "ApplicantWithActiveApplication",
        "collaborators": {
            "assignees": [],
            "autoAssignees": [],
            "__typename": "ApplicantCollaboratorResponse"
        },
        "activeApplication": {
            "id": "cm2naooru4szhid584fzrrita",
            "createdAt": "2024-10-24T12:44:04.840Z",
            "updatedAt": "2024-12-09T14:12:19.606Z",
            "aiFit": 36,
            "score": null,
            "salaryExp": 3944,
            "salaryExpCurr": "EUR",
            "salaryExpPeriod": "WEEKLY",
            "lexorank": "0|W00Xhzzz:",
            "resume": {
                "id": "cm2naootc4t13id58ad5xf4if",
                "name": "Shelly_Shields_CV",
                "url": "https://res.cloudinary.com/hrpanda/image/upload/v1711011023/UserUploads/amzosxtp1fimdppy3wap.pdf",
                "size": 77679,
                "pageCount": 3,
                "uploadedAt": "2024-10-24T12:44:04.896Z",
                "__typename": "ApplicationAttachment"
            },
            "jobListing": {
                "id": "clnvoqb8b044pmq3woi6v4t44",
                "name": "default listing",
                "color": "#6941C6",
                "type": "IDLE",
                "collaborators": {
                    "autoAssignees": [
                        {
                            "id": "clvqg861h030dm8jjv7r8gnnx",
                            "firstName": "Rada",
                            "lastName": "Marcao",
                            "email": "marcao3767@gmail.com",
                            "profilePictureUrl": null,
                            "__typename": "User"
                        }
                    ],
                    "__typename": "JobListingCollaboratorResponse"
                },
                "__typename": "JobListing"
            },
            "stage": {
                "id": "clnvoqb87044jmq3we22j7ovg",
                "name": "Interview",
                "__typename": "JobListingStage"
            },
            "applicant": {
                "id": "cm2naoom84sxlid58u3gg2hn8",
                "firstName": "Shelly",
                "lastName": "Shields",
                "profilePhotoUrl": "https://doodleipsum.com/100/avatar-3?bg=8B33FF&n=3677&i=67b1d76e563e7a3335d8ab386658dc48",
                "email": "shelly_shields@example.com",
                "__typename": "Applicant"
            },
            "rejectedReasons": [],
            "__typename": "Application"
        },
        "email": "shelly_shields@example.com",
        "phoneNumber": "553-319-6286",
        "address": "Tokyo, Japan",
        "latitude": 35.6897,
        "age": 43,
        "longitude": 139.6922,
        "country": "Japan",
        "gender": "Male",
        "dateOfBirth": "1981-04-17T11:44:20.267Z",
        "gradUni": "distinctio",
        "university": null,
        "universityName": null,
        "salaryExp": null,
        "salaryExp2": null,
        "salaryExpCurr": null,
        "salaryExpPeriod": null,
        "sourceLink": null,
        "sourceType": "APPLICATION",
        "sourceUpdatedAt": "2024-10-24T12:44:04.640Z",
        "updatedAt": "2024-10-24T12:44:04.640Z",
        "myPermission": {
            "id": "cly8p1zr4008n56l3mvp2qtin",
            "canViewApplicantPhoneNumber": true,
            "canViewApplicantLocation": true,
            "canViewApplicantFormAnswers": true,
            "canViewApplicantExpectedSalary": true,
            "canDeleteApplicants": true,
            "canAssignMembersToApplicants": true,
            "__typename": "Permission"
        },
        "createdAt": "2024-10-24T12:44:04.640Z",
        "isViewedByMe": true,
        "tags": [
            {
                "id": "cls1rao2w014lq81vf6z38qv4",
                "name": "Multi language",
                "color": "#175CD3",
                "__typename": "Tag"
            },
            {
                "id": "cls1rao2w014nq81vhaqiz24g",
                "name": "Graduated from a good university",
                "color": "#C01048",
                "__typename": "Tag"
            },
            {
                "id": "cls1rao2w014qq81vjxiwpnji",
                "name": "Experienced",
                "color": "#175CD3",
                "__typename": "Tag"
            },
            {
                "id": "clu19ulsy000dks7x6mwhs31c",
                "name": "Newly graduated",
                "color": "#175CD3",
                "__typename": "Tag"
            },
            {
                "id": "clu19ulsy000fks7xnrurcr4u",
                "name": "Bachelor degree graduate",
                "color": "#027A48",
                "__typename": "Tag"
            },
            {
                "id": "clu19ulsy000hks7xbk5d8dxx",
                "name": "Comfortable with remote work",
                "color": "#6941C6",
                "__typename": "Tag"
            },
            {
                "id": "clu19ult1000jks7xbacpk6kh",
                "name": "Foreigner",
                "color": "#175CD3",
                "__typename": "Tag"
            },
            {
                "id": "clu19ult2000lks7xkx2vr9yj",
                "name": "Able to move",
                "color": "#027A48",
                "__typename": "Tag"
            }
        ],
        "skills": [
            {
                "id": "clu19ulst000bks7xkwwj9e2v",
                "name": "Team work",
                "color": "#6941C6",
                "__typename": "Skill"
            }
        ]
    },
    {
        "id": "cm2naoojv4svpid58hbava64t",
        "firstName": "Garry",
        "lastName": "Luettgen",
        "rating": 0,
        "isFavoritedByMe": false,
        "profilePhotoUrl": null,
        "__typename": "ApplicantWithActiveApplication",
        "collaborators": {
            "assignees": [],
            "autoAssignees": [],
            "__typename": "ApplicantCollaboratorResponse"
        },
        "activeApplication": {
            "id": "cm2naooll4swfid58y6005lp8",
            "createdAt": "2024-10-24T12:44:04.616Z",
            "updatedAt": "2024-12-09T13:55:23.241Z",
            "aiFit": 38,
            "score": null,
            "salaryExp": 4290,
            "salaryExpCurr": "TRY",
            "salaryExpPeriod": "WEEKLY",
            "lexorank": "0|W00Y5zzz:",
            "resume": {
                "id": "cm2naoom14sxjid58k4i8dknu",
                "name": "Garry_Luettgen_CV",
                "url": "https://res.cloudinary.com/hrpanda/image/upload/v1711011023/UserUploads/amzosxtp1fimdppy3wap.pdf",
                "size": 77679,
                "pageCount": 3,
                "uploadedAt": "2024-10-24T12:44:04.633Z",
                "__typename": "ApplicationAttachment"
            },
            "jobListing": {
                "id": "clnvoqb8b044pmq3woi6v4t44",
                "name": "default listing",
                "color": "#6941C6",
                "type": "IDLE",
                "collaborators": {
                    "autoAssignees": [
                        {
                            "id": "clvqg861h030dm8jjv7r8gnnx",
                            "firstName": "Rada",
                            "lastName": "Marcao",
                            "email": "marcao3767@gmail.com",
                            "profilePictureUrl": null,
                            "__typename": "User"
                        }
                    ],
                    "__typename": "JobListingCollaboratorResponse"
                },
                "__typename": "JobListing"
            },
            "stage": {
                "id": "clnvoqb87044hmq3w9248rshm",
                "name": "Applied",
                "__typename": "JobListingStage"
            },
            "applicant": {
                "id": "cm2naoojv4svpid58hbava64t",
                "firstName": "Garry",
                "lastName": "Luettgen",
                "profilePhotoUrl": null,
                "email": "garry_luettgen90@example.com",
                "__typename": "Applicant"
            },
            "rejectedReasons": [],
            "__typename": "Application"
        },
        "email": "garry_luettgen90@example.com",
        "phoneNumber": "548-108-1166",
        "address": "Berlin, Germany",
        "latitude": 52.52,
        "age": 22,
        "longitude": 13.405,
        "country": "Germany",
        "gender": "Female",
        "dateOfBirth": "2003-01-07T18:00:56.426Z",
        "gradUni": "nobis",
        "university": null,
        "universityName": null,
        "salaryExp": null,
        "salaryExp2": null,
        "salaryExpCurr": null,
        "salaryExpPeriod": null,
        "sourceLink": null,
        "sourceType": "APPLICATION",
        "sourceUpdatedAt": "2024-10-24T12:44:04.555Z",
        "updatedAt": "2024-10-24T12:44:04.555Z",
        "myPermission": {
            "id": "cly8p1zr4008n56l3mvp2qtin",
            "canViewApplicantPhoneNumber": true,
            "canViewApplicantLocation": true,
            "canViewApplicantFormAnswers": true,
            "canViewApplicantExpectedSalary": true,
            "canDeleteApplicants": true,
            "canAssignMembersToApplicants": true,
            "__typename": "Permission"
        },
        "createdAt": "2024-10-24T12:44:04.555Z",
        "isViewedByMe": true,
        "tags": [
            {
                "id": "cls1rao2w014qq81vjxiwpnji",
                "name": "Experienced",
                "color": "#175CD3",
                "__typename": "Tag"
            }
        ],
        "skills": [
            {
                "id": "cls1ransp00bnq81vcobmavds",
                "name": "Analytical skills",
                "color": "#C01048",
                "__typename": "Skill"
            },
            {
                "id": "clu19ulso0003ks7x0hcjuo15",
                "name": "Communication skills",
                "color": "#175CD3",
                "__typename": "Skill"
            },
            {
                "id": "clu19ulsr0007ks7x3282iy76",
                "name": "Critical Thinking",
                "color": "#C01048",
                "__typename": "Skill"
            },
            {
                "id": "clu19ulss0009ks7x9yo82n4u",
                "name": "Good negotiator",
                "color": "#027A48",
                "__typename": "Skill"
            },
            {
                "id": "clu19ulst000bks7xkwwj9e2v",
                "name": "Team work",
                "color": "#6941C6",
                "__typename": "Skill"
            }
        ]
    },
    {
        "id": "cm2naooic4suzid5896gx9pur",
        "firstName": "Adrian",
        "lastName": "Hilll",
        "rating": 0,
        "isFavoritedByMe": false,
        "profilePhotoUrl": null,
        "__typename": "ApplicantWithActiveApplication",
        "collaborators": {
            "assignees": [],
            "autoAssignees": [],
            "__typename": "ApplicantCollaboratorResponse"
        },
        "activeApplication": {
            "id": "cm2naoojc4sv1id58ktxoyeax",
            "createdAt": "2024-10-24T12:44:04.536Z",
            "updatedAt": "2024-12-09T14:12:19.606Z",
            "aiFit": 48,
            "score": null,
            "salaryExp": 3907,
            "salaryExpCurr": "TRY",
            "salaryExpPeriod": "WEEKLY",
            "lexorank": "0|W00Xfzzz:",
            "resume": {
                "id": "cm2naoojo4svnid58qsebb4tb",
                "name": "Adrian_Hilll_CV",
                "url": "https://res.cloudinary.com/hrpanda/image/upload/v1711011023/UserUploads/amzosxtp1fimdppy3wap.pdf",
                "size": 77679,
                "pageCount": 3,
                "uploadedAt": "2024-10-24T12:44:04.548Z",
                "__typename": "ApplicationAttachment"
            },
            "jobListing": {
                "id": "clnvoqb8b044pmq3woi6v4t44",
                "name": "default listing",
                "color": "#6941C6",
                "type": "IDLE",
                "collaborators": {
                    "autoAssignees": [
                        {
                            "id": "clvqg861h030dm8jjv7r8gnnx",
                            "firstName": "Rada",
                            "lastName": "Marcao",
                            "email": "marcao3767@gmail.com",
                            "profilePictureUrl": null,
                            "__typename": "User"
                        }
                    ],
                    "__typename": "JobListingCollaboratorResponse"
                },
                "__typename": "JobListing"
            },
            "stage": {
                "id": "clnvoqb87044jmq3we22j7ovg",
                "name": "Interview",
                "__typename": "JobListingStage"
            },
            "applicant": {
                "id": "cm2naooic4suzid5896gx9pur",
                "firstName": "Adrian",
                "lastName": "Hilll",
                "profilePhotoUrl": null,
                "email": "adrian.hilll@example.com",
                "__typename": "Applicant"
            },
            "rejectedReasons": [],
            "__typename": "Application"
        },
        "email": "adrian.hilll@example.com",
        "phoneNumber": "596-415-1355",
        "address": "Madrid, Spain",
        "latitude": 40.4169,
        "age": 39,
        "longitude": -3.7033,
        "country": "Spain",
        "gender": "Male",
        "dateOfBirth": "1985-06-04T05:28:09.810Z",
        "gradUni": "praesentium",
        "university": null,
        "universityName": null,
        "salaryExp": null,
        "salaryExp2": null,
        "salaryExpCurr": null,
        "salaryExpPeriod": null,
        "sourceLink": null,
        "sourceType": "APPLICATION",
        "sourceUpdatedAt": "2024-10-24T12:44:04.500Z",
        "updatedAt": "2024-10-24T12:44:04.500Z",
        "myPermission": {
            "id": "cly8p1zr4008n56l3mvp2qtin",
            "canViewApplicantPhoneNumber": true,
            "canViewApplicantLocation": true,
            "canViewApplicantFormAnswers": true,
            "canViewApplicantExpectedSalary": true,
            "canDeleteApplicants": true,
            "canAssignMembersToApplicants": true,
            "__typename": "Permission"
        },
        "createdAt": "2024-10-24T12:44:04.500Z",
        "isViewedByMe": false,
        "tags": [
            {
                "id": "cls1rao2w014lq81vf6z38qv4",
                "name": "Multi language",
                "color": "#175CD3",
                "__typename": "Tag"
            },
            {
                "id": "cls1rao2w014qq81vjxiwpnji",
                "name": "Experienced",
                "color": "#175CD3",
                "__typename": "Tag"
            },
            {
                "id": "clu19ulsy000fks7xnrurcr4u",
                "name": "Bachelor degree graduate",
                "color": "#027A48",
                "__typename": "Tag"
            },
            {
                "id": "clu19ult2000lks7xkx2vr9yj",
                "name": "Able to move",
                "color": "#027A48",
                "__typename": "Tag"
            }
        ],
        "skills": [
            {
                "id": "cls1ransp00blq81vn0xk8dc5",
                "name": "Problem solving",
                "color": "#175CD3",
                "__typename": "Skill"
            },
            {
                "id": "cls1ransp00bnq81vcobmavds",
                "name": "Analytical skills",
                "color": "#C01048",
                "__typename": "Skill"
            },
            {
                "id": "clu19ulso0003ks7x0hcjuo15",
                "name": "Communication skills",
                "color": "#175CD3",
                "__typename": "Skill"
            },
            {
                "id": "clu19ulsq0005ks7x3x5tsgcd",
                "name": "Creative skills",
                "color": "#175CD3",
                "__typename": "Skill"
            },
            {
                "id": "clu19ulsr0007ks7x3282iy76",
                "name": "Critical Thinking",
                "color": "#C01048",
                "__typename": "Skill"
            },
            {
                "id": "clu19ulss0009ks7x9yo82n4u",
                "name": "Good negotiator",
                "color": "#027A48",
                "__typename": "Skill"
            },
            {
                "id": "clu19ulst000bks7xkwwj9e2v",
                "name": "Team work",
                "color": "#6941C6",
                "__typename": "Skill"
            }
        ]
    },
    {
        "id": "cm2naoohh4sutid58i7ct9663",
        "firstName": "Dexter",
        "lastName": "Wisozk",
        "rating": 0,
        "isFavoritedByMe": false,
        "profilePhotoUrl": "https://doodleipsum.com/100/avatar-3?bg=5D33FF&n=4120&i=7e3b7842ef1f0c4cadb84360d993bd4d",
        "__typename": "ApplicantWithActiveApplication",
        "collaborators": {
            "assignees": [],
            "autoAssignees": [],
            "__typename": "ApplicantCollaboratorResponse"
        },
        "activeApplication": {
            "id": "cm2naooi34suvid58h9vg8a28",
            "createdAt": "2024-10-24T12:44:04.491Z",
            "updatedAt": "2024-10-24T12:44:04.491Z",
            "aiFit": 86,
            "score": null,
            "salaryExp": 2694,
            "salaryExpCurr": "USD",
            "salaryExpPeriod": "MONTHLY",
            "lexorank": "0|W00Y4zzz:",
            "resume": null,
            "jobListing": {
                "id": "clnvoqb8b044pmq3woi6v4t44",
                "name": "default listing",
                "color": "#6941C6",
                "type": "IDLE",
                "collaborators": {
                    "autoAssignees": [
                        {
                            "id": "clvqg861h030dm8jjv7r8gnnx",
                            "firstName": "Rada",
                            "lastName": "Marcao",
                            "email": "marcao3767@gmail.com",
                            "profilePictureUrl": null,
                            "__typename": "User"
                        }
                    ],
                    "__typename": "JobListingCollaboratorResponse"
                },
                "__typename": "JobListing"
            },
            "stage": {
                "id": "clnvoqb87044hmq3w9248rshm",
                "name": "Applied",
                "__typename": "JobListingStage"
            },
            "applicant": {
                "id": "cm2naoohh4sutid58i7ct9663",
                "firstName": "Dexter",
                "lastName": "Wisozk",
                "profilePhotoUrl": "https://doodleipsum.com/100/avatar-3?bg=5D33FF&n=4120&i=7e3b7842ef1f0c4cadb84360d993bd4d",
                "email": "dexter.wisozk33@example.com",
                "__typename": "Applicant"
            },
            "rejectedReasons": [],
            "__typename": "Application"
        },
        "email": "dexter.wisozk33@example.com",
        "phoneNumber": "571-661-6729",
        "address": "São Paulo, Brazil",
        "latitude": -23.55,
        "age": 24,
        "longitude": -46.6333,
        "country": "Brazil",
        "gender": "Other",
        "dateOfBirth": "2001-03-31T04:47:52.408Z",
        "gradUni": "assumenda",
        "university": null,
        "universityName": null,
        "salaryExp": null,
        "salaryExp2": null,
        "salaryExpCurr": null,
        "salaryExpPeriod": null,
        "sourceLink": null,
        "sourceType": "CUSTOM",
        "sourceUpdatedAt": "2024-10-24T12:44:04.469Z",
        "updatedAt": "2024-10-24T12:44:04.469Z",
        "myPermission": {
            "id": "cly8p1zr4008n56l3mvp2qtin",
            "canViewApplicantPhoneNumber": true,
            "canViewApplicantLocation": true,
            "canViewApplicantFormAnswers": true,
            "canViewApplicantExpectedSalary": true,
            "canDeleteApplicants": true,
            "canAssignMembersToApplicants": true,
            "__typename": "Permission"
        },
        "createdAt": "2024-10-24T12:44:04.469Z",
        "isViewedByMe": true,
        "tags": [
            {
                "id": "cls1rao2w014nq81vhaqiz24g",
                "name": "Graduated from a good university",
                "color": "#C01048",
                "__typename": "Tag"
            },
            {
                "id": "clu19ulsy000fks7xnrurcr4u",
                "name": "Bachelor degree graduate",
                "color": "#027A48",
                "__typename": "Tag"
            },
            {
                "id": "clu19ulsy000hks7xbk5d8dxx",
                "name": "Comfortable with remote work",
                "color": "#6941C6",
                "__typename": "Tag"
            },
            {
                "id": "clu19ult1000jks7xbacpk6kh",
                "name": "Foreigner",
                "color": "#175CD3",
                "__typename": "Tag"
            },
            {
                "id": "clu19ult2000lks7xkx2vr9yj",
                "name": "Able to move",
                "color": "#027A48",
                "__typename": "Tag"
            }
        ],
        "skills": [
            {
                "id": "cls1ransp00blq81vn0xk8dc5",
                "name": "Problem solving",
                "color": "#175CD3",
                "__typename": "Skill"
            },
            {
                "id": "cls1ransp00bnq81vcobmavds",
                "name": "Analytical skills",
                "color": "#C01048",
                "__typename": "Skill"
            },
            {
                "id": "clu19ulss0009ks7x9yo82n4u",
                "name": "Good negotiator",
                "color": "#027A48",
                "__typename": "Skill"
            }
        ]
    },
    {
        "id": "cm2naood14ssxid582d067jtf",
        "firstName": "Adrian",
        "lastName": "Hickle",
        "rating": 0,
        "isFavoritedByMe": false,
        "profilePhotoUrl": "https://doodleipsum.com/100/avatar-3?bg=33FFF2&n=2718&i=60e26c9e92fa5ebd256d816b35882434",
        "__typename": "ApplicantWithActiveApplication",
        "collaborators": {
            "assignees": [],
            "autoAssignees": [],
            "__typename": "ApplicantCollaboratorResponse"
        },
        "activeApplication": {
            "id": "cm2naoogi4stnid58dtxjmpis",
            "createdAt": "2024-10-24T12:44:04.433Z",
            "updatedAt": "2024-12-09T13:55:23.241Z",
            "aiFit": 77,
            "score": null,
            "salaryExp": 3103,
            "salaryExpCurr": "USD",
            "salaryExpPeriod": "HOURLY",
            "lexorank": "0|W00YKzzz:",
            "resume": {
                "id": "cm2naooha4surid58cl8utdlh",
                "name": "Adrian_Hickle_CV",
                "url": "https://res.cloudinary.com/hrpanda/image/upload/v1711011023/UserUploads/amzosxtp1fimdppy3wap.pdf",
                "size": 77679,
                "pageCount": 3,
                "uploadedAt": "2024-10-24T12:44:04.461Z",
                "__typename": "ApplicationAttachment"
            },
            "jobListing": {
                "id": "clnvoqb8b044pmq3woi6v4t44",
                "name": "default listing",
                "color": "#6941C6",
                "type": "IDLE",
                "collaborators": {
                    "autoAssignees": [
                        {
                            "id": "clvqg861h030dm8jjv7r8gnnx",
                            "firstName": "Rada",
                            "lastName": "Marcao",
                            "email": "marcao3767@gmail.com",
                            "profilePictureUrl": null,
                            "__typename": "User"
                        }
                    ],
                    "__typename": "JobListingCollaboratorResponse"
                },
                "__typename": "JobListing"
            },
            "stage": {
                "id": "clnvoqb87044kmq3wthrs908z",
                "name": "Evaluation",
                "__typename": "JobListingStage"
            },
            "applicant": {
                "id": "cm2naood14ssxid582d067jtf",
                "firstName": "Adrian",
                "lastName": "Hickle",
                "profilePhotoUrl": "https://doodleipsum.com/100/avatar-3?bg=33FFF2&n=2718&i=60e26c9e92fa5ebd256d816b35882434",
                "email": "adrian74@example.com",
                "__typename": "Applicant"
            },
            "rejectedReasons": [],
            "__typename": "Application"
        },
        "email": "adrian74@example.com",
        "phoneNumber": "522-497-8878",
        "address": "Hong Kong, Hong Kong",
        "latitude": 22.3,
        "age": 37,
        "longitude": 114.2,
        "country": "Hong Kong",
        "gender": "Female",
        "dateOfBirth": "1987-12-03T20:51:40.719Z",
        "gradUni": "ullam",
        "university": null,
        "universityName": null,
        "salaryExp": null,
        "salaryExp2": null,
        "salaryExpCurr": null,
        "salaryExpPeriod": null,
        "sourceLink": null,
        "sourceType": "APPLICATION",
        "sourceUpdatedAt": "2024-10-24T12:44:04.309Z",
        "updatedAt": "2024-10-24T12:44:04.309Z",
        "myPermission": {
            "id": "cly8p1zr4008n56l3mvp2qtin",
            "canViewApplicantPhoneNumber": true,
            "canViewApplicantLocation": true,
            "canViewApplicantFormAnswers": true,
            "canViewApplicantExpectedSalary": true,
            "canDeleteApplicants": true,
            "canAssignMembersToApplicants": true,
            "__typename": "Permission"
        },
        "createdAt": "2024-10-24T12:44:04.309Z",
        "isViewedByMe": true,
        "tags": [
            {
                "id": "cls1rao2w014nq81vhaqiz24g",
                "name": "Graduated from a good university",
                "color": "#C01048",
                "__typename": "Tag"
            },
            {
                "id": "cls1rao2w014qq81vjxiwpnji",
                "name": "Experienced",
                "color": "#175CD3",
                "__typename": "Tag"
            },
            {
                "id": "clu19ulsy000dks7x6mwhs31c",
                "name": "Newly graduated",
                "color": "#175CD3",
                "__typename": "Tag"
            },
            {
                "id": "clu19ulsy000hks7xbk5d8dxx",
                "name": "Comfortable with remote work",
                "color": "#6941C6",
                "__typename": "Tag"
            },
            {
                "id": "clu19ult1000jks7xbacpk6kh",
                "name": "Foreigner",
                "color": "#175CD3",
                "__typename": "Tag"
            }
        ],
        "skills": [
            {
                "id": "cls1ransp00bnq81vcobmavds",
                "name": "Analytical skills",
                "color": "#C01048",
                "__typename": "Skill"
            },
            {
                "id": "clu19ulso0003ks7x0hcjuo15",
                "name": "Communication skills",
                "color": "#175CD3",
                "__typename": "Skill"
            },
            {
                "id": "clu19ulsr0007ks7x3282iy76",
                "name": "Critical Thinking",
                "color": "#C01048",
                "__typename": "Skill"
            },
            {
                "id": "clu19ulst000bks7xkwwj9e2v",
                "name": "Team work",
                "color": "#6941C6",
                "__typename": "Skill"
            }
        ]
    },
    {
        "id": "cm2naooav4ss7id58fb0ztyyz",
        "firstName": "Josephine",
        "lastName": "Harvey",
        "rating": 0,
        "isFavoritedByMe": false,
        "profilePhotoUrl": "https://doodleipsum.com/100/avatar-3?bg=33FFF2&n=436&i=93b920c3f4d0ad71a01e3c45541c8c40",
        "__typename": "ApplicantWithActiveApplication",
        "collaborators": {
            "assignees": [],
            "autoAssignees": [],
            "__typename": "ApplicantCollaboratorResponse"
        },
        "activeApplication": {
            "id": "cm2naoocd4ss9id58c6dxfsq6",
            "createdAt": "2024-10-24T12:44:04.285Z",
            "updatedAt": "2024-12-09T14:12:19.606Z",
            "aiFit": 68,
            "score": null,
            "salaryExp": 2397,
            "salaryExpCurr": "USD",
            "salaryExpPeriod": "YEARLY",
            "lexorank": "0|W00ZPzzz:",
            "resume": {
                "id": "cm2naooct4ssvid58u6lk843b",
                "name": "Josephine_Harvey_CV",
                "url": "https://res.cloudinary.com/hrpanda/image/upload/v1711011023/UserUploads/amzosxtp1fimdppy3wap.pdf",
                "size": 77679,
                "pageCount": 3,
                "uploadedAt": "2024-10-24T12:44:04.300Z",
                "__typename": "ApplicationAttachment"
            },
            "jobListing": {
                "id": "clnvoqb8b044pmq3woi6v4t44",
                "name": "default listing",
                "color": "#6941C6",
                "type": "IDLE",
                "collaborators": {
                    "autoAssignees": [
                        {
                            "id": "clvqg861h030dm8jjv7r8gnnx",
                            "firstName": "Rada",
                            "lastName": "Marcao",
                            "email": "marcao3767@gmail.com",
                            "profilePictureUrl": null,
                            "__typename": "User"
                        }
                    ],
                    "__typename": "JobListingCollaboratorResponse"
                },
                "__typename": "JobListing"
            },
            "stage": {
                "id": "clooapkdz000dn01scupqzr3h",
                "name": "Sourced",
                "__typename": "JobListingStage"
            },
            "applicant": {
                "id": "cm2naooav4ss7id58fb0ztyyz",
                "firstName": "Josephine",
                "lastName": "Harvey",
                "profilePhotoUrl": "https://doodleipsum.com/100/avatar-3?bg=33FFF2&n=436&i=93b920c3f4d0ad71a01e3c45541c8c40",
                "email": "josephine_harvey@example.com",
                "__typename": "Applicant"
            },
            "rejectedReasons": [],
            "__typename": "Application"
        },
        "email": "josephine_harvey@example.com",
        "phoneNumber": "521-857-1182",
        "address": "Sydney, Australia",
        "latitude": -33.8678,
        "age": 46,
        "longitude": 151.21,
        "country": "Australia",
        "gender": "Female",
        "dateOfBirth": "1979-02-15T05:03:03.641Z",
        "gradUni": "magnam",
        "university": null,
        "universityName": null,
        "salaryExp": null,
        "salaryExp2": null,
        "salaryExpCurr": null,
        "salaryExpPeriod": null,
        "sourceLink": null,
        "sourceType": "APPLICATION",
        "sourceUpdatedAt": "2024-10-24T12:44:04.231Z",
        "updatedAt": "2024-10-24T12:44:04.231Z",
        "myPermission": {
            "id": "cly8p1zr4008n56l3mvp2qtin",
            "canViewApplicantPhoneNumber": true,
            "canViewApplicantLocation": true,
            "canViewApplicantFormAnswers": true,
            "canViewApplicantExpectedSalary": true,
            "canDeleteApplicants": true,
            "canAssignMembersToApplicants": true,
            "__typename": "Permission"
        },
        "createdAt": "2024-10-24T12:44:04.231Z",
        "isViewedByMe": true,
        "tags": [
            {
                "id": "cls1rao2w014qq81vjxiwpnji",
                "name": "Experienced",
                "color": "#175CD3",
                "__typename": "Tag"
            }
        ],
        "skills": [
            {
                "id": "clu19ulso0003ks7x0hcjuo15",
                "name": "Communication skills",
                "color": "#175CD3",
                "__typename": "Skill"
            }
        ]
    },
    {
        "id": "cm2naoo904srhid586ikd4236",
        "firstName": "Doyle",
        "lastName": "Goodwin",
        "rating": 0,
        "isFavoritedByMe": false,
        "profilePhotoUrl": null,
        "__typename": "ApplicantWithActiveApplication",
        "collaborators": {
            "assignees": [],
            "autoAssignees": [],
            "__typename": "ApplicantCollaboratorResponse"
        },
        "activeApplication": {
            "id": "cm2naoo9z4srjid58l9fuqmhy",
            "createdAt": "2024-10-24T12:44:04.197Z",
            "updatedAt": "2024-10-24T12:44:04.197Z",
            "aiFit": 27,
            "score": null,
            "salaryExp": 1824,
            "salaryExpCurr": "TRY",
            "salaryExpPeriod": "WEEKLY",
            "lexorank": "0|W00Y3zzz:",
            "resume": {
                "id": "cm2naooag4ss5id58dhl2b1op",
                "name": "Doyle_Goodwin_CV",
                "url": "https://res.cloudinary.com/hrpanda/image/upload/v1711011023/UserUploads/amzosxtp1fimdppy3wap.pdf",
                "size": 77679,
                "pageCount": 3,
                "uploadedAt": "2024-10-24T12:44:04.216Z",
                "__typename": "ApplicationAttachment"
            },
            "jobListing": {
                "id": "cm2n4igsm000w1vvgpxaoz7s7",
                "name": "Marketing Manager",
                "color": "#027A48",
                "type": "ACTIVE",
                "collaborators": {
                    "autoAssignees": [
                        {
                            "id": "clvqg861h030dm8jjv7r8gnnx",
                            "firstName": "Rada",
                            "lastName": "Marcao",
                            "email": "marcao3767@gmail.com",
                            "profilePictureUrl": null,
                            "__typename": "User"
                        }
                    ],
                    "__typename": "JobListingCollaboratorResponse"
                },
                "__typename": "JobListing"
            },
            "stage": {
                "id": "clnvoqb87044hmq3w9248rshm",
                "name": "Applied",
                "__typename": "JobListingStage"
            },
            "applicant": {
                "id": "cm2naoo904srhid586ikd4236",
                "firstName": "Doyle",
                "lastName": "Goodwin",
                "profilePhotoUrl": null,
                "email": "doyle_goodwin@example.com",
                "__typename": "Applicant"
            },
            "rejectedReasons": [],
            "__typename": "Application"
        },
        "email": "doyle_goodwin@example.com",
        "phoneNumber": "529-616-6677",
        "address": "Istanbul, Türkiye",
        "latitude": 41.0136,
        "age": 39,
        "longitude": 28.955,
        "country": "Türkiye",
        "gender": "Other",
        "dateOfBirth": "1986-03-02T10:35:05.191Z",
        "gradUni": "tenetur",
        "university": null,
        "universityName": null,
        "salaryExp": null,
        "salaryExp2": null,
        "salaryExpCurr": null,
        "salaryExpPeriod": null,
        "sourceLink": null,
        "sourceType": "APPLICATION",
        "sourceUpdatedAt": "2024-10-24T12:44:04.162Z",
        "updatedAt": "2024-10-24T12:44:04.162Z",
        "myPermission": {
            "id": "cly8p1zr4008n56l3mvp2qtin",
            "canViewApplicantPhoneNumber": true,
            "canViewApplicantLocation": true,
            "canViewApplicantFormAnswers": true,
            "canViewApplicantExpectedSalary": true,
            "canDeleteApplicants": true,
            "canAssignMembersToApplicants": true,
            "__typename": "Permission"
        },
        "createdAt": "2024-10-24T12:44:04.162Z",
        "isViewedByMe": false,
        "tags": [
            {
                "id": "cls1rao2w014lq81vf6z38qv4",
                "name": "Multi language",
                "color": "#175CD3",
                "__typename": "Tag"
            },
            {
                "id": "clu19ulsy000fks7xnrurcr4u",
                "name": "Bachelor degree graduate",
                "color": "#027A48",
                "__typename": "Tag"
            },
            {
                "id": "clu19ult2000lks7xkx2vr9yj",
                "name": "Able to move",
                "color": "#027A48",
                "__typename": "Tag"
            }
        ],
        "skills": [
            {
                "id": "cls1ransp00blq81vn0xk8dc5",
                "name": "Problem solving",
                "color": "#175CD3",
                "__typename": "Skill"
            },
            {
                "id": "cls1ransp00bnq81vcobmavds",
                "name": "Analytical skills",
                "color": "#C01048",
                "__typename": "Skill"
            },
            {
                "id": "clu19ulsq0005ks7x3x5tsgcd",
                "name": "Creative skills",
                "color": "#175CD3",
                "__typename": "Skill"
            },
            {
                "id": "clu19ulsr0007ks7x3282iy76",
                "name": "Critical Thinking",
                "color": "#C01048",
                "__typename": "Skill"
            }
        ]
    },
    {
        "id": "cm2naoo814srbid581ua0hgbd",
        "firstName": "Stephen",
        "lastName": "Kuvalis",
        "rating": 0,
        "isFavoritedByMe": false,
        "profilePhotoUrl": "https://doodleipsum.com/100/avatar-3?bg=FFC733&n=536&i=90c6062295f84394adac6c5eeada1c35",
        "__typename": "ApplicantWithActiveApplication",
        "collaborators": {
            "assignees": [],
            "autoAssignees": [],
            "__typename": "ApplicantCollaboratorResponse"
        },
        "activeApplication": {
            "id": "cm2naoo8p4srdid583h8uhqql",
            "createdAt": "2024-10-24T12:44:04.153Z",
            "updatedAt": "2024-10-24T12:44:04.153Z",
            "aiFit": 59,
            "score": null,
            "salaryExp": 2614,
            "salaryExpCurr": "TRY",
            "salaryExpPeriod": "HOURLY",
            "lexorank": "0|W00YIzzz:",
            "resume": null,
            "jobListing": {
                "id": "clnvoqb8b044pmq3woi6v4t44",
                "name": "default listing",
                "color": "#6941C6",
                "type": "IDLE",
                "collaborators": {
                    "autoAssignees": [
                        {
                            "id": "clvqg861h030dm8jjv7r8gnnx",
                            "firstName": "Rada",
                            "lastName": "Marcao",
                            "email": "marcao3767@gmail.com",
                            "profilePictureUrl": null,
                            "__typename": "User"
                        }
                    ],
                    "__typename": "JobListingCollaboratorResponse"
                },
                "__typename": "JobListing"
            },
            "stage": {
                "id": "clnvoqb87044kmq3wthrs908z",
                "name": "Evaluation",
                "__typename": "JobListingStage"
            },
            "applicant": {
                "id": "cm2naoo814srbid581ua0hgbd",
                "firstName": "Stephen",
                "lastName": "Kuvalis",
                "profilePhotoUrl": "https://doodleipsum.com/100/avatar-3?bg=FFC733&n=536&i=90c6062295f84394adac6c5eeada1c35",
                "email": "stephen31@example.com",
                "__typename": "Applicant"
            },
            "rejectedReasons": [],
            "__typename": "Application"
        },
        "email": "stephen31@example.com",
        "phoneNumber": "540-362-9252",
        "address": "Madrid, Spain",
        "latitude": 40.4169,
        "age": 26,
        "longitude": -3.7033,
        "country": "Spain",
        "gender": "Other",
        "dateOfBirth": "1998-11-30T21:39:58.732Z",
        "gradUni": "dicta",
        "university": null,
        "universityName": null,
        "salaryExp": null,
        "salaryExp2": null,
        "salaryExpCurr": null,
        "salaryExpPeriod": null,
        "sourceLink": null,
        "sourceType": "CUSTOM",
        "sourceUpdatedAt": "2024-10-24T12:44:04.129Z",
        "updatedAt": "2024-10-24T12:44:04.129Z",
        "myPermission": {
            "id": "cly8p1zr4008n56l3mvp2qtin",
            "canViewApplicantPhoneNumber": true,
            "canViewApplicantLocation": true,
            "canViewApplicantFormAnswers": true,
            "canViewApplicantExpectedSalary": true,
            "canDeleteApplicants": true,
            "canAssignMembersToApplicants": true,
            "__typename": "Permission"
        },
        "createdAt": "2024-10-24T12:44:04.129Z",
        "isViewedByMe": true,
        "tags": [
            {
                "id": "cls1rao2w014qq81vjxiwpnji",
                "name": "Experienced",
                "color": "#175CD3",
                "__typename": "Tag"
            },
            {
                "id": "clu19ulsy000fks7xnrurcr4u",
                "name": "Bachelor degree graduate",
                "color": "#027A48",
                "__typename": "Tag"
            },
            {
                "id": "clu19ult2000lks7xkx2vr9yj",
                "name": "Able to move",
                "color": "#027A48",
                "__typename": "Tag"
            }
        ],
        "skills": [
            {
                "id": "clu19ulss0009ks7x9yo82n4u",
                "name": "Good negotiator",
                "color": "#027A48",
                "__typename": "Skill"
            }
        ]
    },
    {
        "id": "cm2naoo314snrid58vszf6zro",
        "firstName": "Gloria",
        "lastName": "Block",
        "rating": 0,
        "isFavoritedByMe": false,
        "profilePhotoUrl": null,
        "__typename": "ApplicantWithActiveApplication",
        "collaborators": {
            "assignees": [],
            "autoAssignees": [],
            "__typename": "ApplicantCollaboratorResponse"
        },
        "activeApplication": {
            "id": "cm2naoo754spnid587l5xbruy",
            "createdAt": "2024-10-24T12:44:04.097Z",
            "updatedAt": "2024-10-24T12:44:04.097Z",
            "aiFit": 79,
            "score": null,
            "salaryExp": 3363,
            "salaryExpCurr": "USD",
            "salaryExpPeriod": "HOURLY",
            "lexorank": "0|W00Xszzz:",
            "resume": {
                "id": "cm2naoo7u4sr9id58o9soblkh",
                "name": "Gloria_Block_CV",
                "url": "https://res.cloudinary.com/hrpanda/image/upload/v1711011023/UserUploads/amzosxtp1fimdppy3wap.pdf",
                "size": 77679,
                "pageCount": 3,
                "uploadedAt": "2024-10-24T12:44:04.122Z",
                "__typename": "ApplicationAttachment"
            },
            "jobListing": {
                "id": "cm2n4igsm000w1vvgpxaoz7s7",
                "name": "Marketing Manager",
                "color": "#027A48",
                "type": "ACTIVE",
                "collaborators": {
                    "autoAssignees": [
                        {
                            "id": "clvqg861h030dm8jjv7r8gnnx",
                            "firstName": "Rada",
                            "lastName": "Marcao",
                            "email": "marcao3767@gmail.com",
                            "profilePictureUrl": null,
                            "__typename": "User"
                        }
                    ],
                    "__typename": "JobListingCollaboratorResponse"
                },
                "__typename": "JobListing"
            },
            "stage": {
                "id": "clnvoqb87044nmq3wttmf5144",
                "name": "Rejected",
                "__typename": "JobListingStage"
            },
            "applicant": {
                "id": "cm2naoo314snrid58vszf6zro",
                "firstName": "Gloria",
                "lastName": "Block",
                "profilePhotoUrl": null,
                "email": "gloria_block@example.com",
                "__typename": "Applicant"
            },
            "rejectedReasons": [],
            "__typename": "Application"
        },
        "email": "gloria_block@example.com",
        "phoneNumber": "509-099-4760",
        "address": "Moscow, Russia",
        "latitude": 55.7558,
        "age": 29,
        "longitude": 37.6172,
        "country": "Russia",
        "gender": "Female",
        "dateOfBirth": "1995-05-29T13:40:28.422Z",
        "gradUni": "iste",
        "university": null,
        "universityName": null,
        "salaryExp": null,
        "salaryExp2": null,
        "salaryExpCurr": null,
        "salaryExpPeriod": null,
        "sourceLink": null,
        "sourceType": "APPLICATION",
        "sourceUpdatedAt": "2024-10-24T12:44:03.949Z",
        "updatedAt": "2024-10-24T12:44:03.949Z",
        "myPermission": {
            "id": "cly8p1zr4008n56l3mvp2qtin",
            "canViewApplicantPhoneNumber": true,
            "canViewApplicantLocation": true,
            "canViewApplicantFormAnswers": true,
            "canViewApplicantExpectedSalary": true,
            "canDeleteApplicants": true,
            "canAssignMembersToApplicants": true,
            "__typename": "Permission"
        },
        "createdAt": "2024-10-24T12:44:03.949Z",
        "isViewedByMe": false,
        "tags": [
            {
                "id": "cls1rao2w014qq81vjxiwpnji",
                "name": "Experienced",
                "color": "#175CD3",
                "__typename": "Tag"
            },
            {
                "id": "clu19ulsy000dks7x6mwhs31c",
                "name": "Newly graduated",
                "color": "#175CD3",
                "__typename": "Tag"
            },
            {
                "id": "clu19ulsy000fks7xnrurcr4u",
                "name": "Bachelor degree graduate",
                "color": "#027A48",
                "__typename": "Tag"
            },
            {
                "id": "clu19ult1000jks7xbacpk6kh",
                "name": "Foreigner",
                "color": "#175CD3",
                "__typename": "Tag"
            }
        ],
        "skills": [
            {
                "id": "cls1ransp00blq81vn0xk8dc5",
                "name": "Problem solving",
                "color": "#175CD3",
                "__typename": "Skill"
            },
            {
                "id": "clu19ulss0009ks7x9yo82n4u",
                "name": "Good negotiator",
                "color": "#027A48",
                "__typename": "Skill"
            },
            {
                "id": "clu19ulst000bks7xkwwj9e2v",
                "name": "Team work",
                "color": "#6941C6",
                "__typename": "Skill"
            }
        ]
    },
    {
        "id": "cm2naonx54sk7id580z5mvxmo",
        "firstName": "Beth",
        "lastName": "O'Reilly",
        "rating": 0,
        "isFavoritedByMe": false,
        "profilePhotoUrl": null,
        "__typename": "ApplicantWithActiveApplication",
        "collaborators": {
            "assignees": [],
            "autoAssignees": [],
            "__typename": "ApplicantCollaboratorResponse"
        },
        "activeApplication": {
            "id": "cm2naoo1x4sm3id586djfcz5d",
            "createdAt": "2024-10-24T12:44:03.905Z",
            "updatedAt": "2024-12-09T13:55:23.241Z",
            "aiFit": 73,
            "score": null,
            "salaryExp": 3817,
            "salaryExpCurr": "TRY",
            "salaryExpPeriod": "MONTHLY",
            "lexorank": "0|W00Y6zzz:",
            "resume": {
                "id": "cm2naoo2r4snpid58ssx63oe8",
                "name": "Beth_O'Reilly_CV",
                "url": "https://res.cloudinary.com/hrpanda/image/upload/v1711011023/UserUploads/amzosxtp1fimdppy3wap.pdf",
                "size": 77679,
                "pageCount": 3,
                "uploadedAt": "2024-10-24T12:44:03.938Z",
                "__typename": "ApplicationAttachment"
            },
            "jobListing": {
                "id": "clnvoqb8b044pmq3woi6v4t44",
                "name": "default listing",
                "color": "#6941C6",
                "type": "IDLE",
                "collaborators": {
                    "autoAssignees": [
                        {
                            "id": "clvqg861h030dm8jjv7r8gnnx",
                            "firstName": "Rada",
                            "lastName": "Marcao",
                            "email": "marcao3767@gmail.com",
                            "profilePictureUrl": null,
                            "__typename": "User"
                        }
                    ],
                    "__typename": "JobListingCollaboratorResponse"
                },
                "__typename": "JobListing"
            },
            "stage": {
                "id": "clnvoqb87044mmq3wke7woqqq",
                "name": "Hired",
                "__typename": "JobListingStage"
            },
            "applicant": {
                "id": "cm2naonx54sk7id580z5mvxmo",
                "firstName": "Beth",
                "lastName": "O'Reilly",
                "profilePhotoUrl": null,
                "email": "beth.oreilly32@example.com",
                "__typename": "Applicant"
            },
            "rejectedReasons": [],
            "__typename": "Application"
        },
        "email": "beth.oreilly32@example.com",
        "phoneNumber": "528-069-8709",
        "address": "Seoul, South Korea",
        "latitude": 37.56,
        "age": 20,
        "longitude": 126.99,
        "country": "South Korea",
        "gender": "Male",
        "dateOfBirth": "2004-06-17T09:25:25.949Z",
        "gradUni": "earum",
        "university": null,
        "universityName": null,
        "salaryExp": null,
        "salaryExp2": null,
        "salaryExpCurr": null,
        "salaryExpPeriod": null,
        "sourceLink": null,
        "sourceType": "APPLICATION",
        "sourceUpdatedAt": "2024-10-24T12:44:03.737Z",
        "updatedAt": "2024-10-24T12:44:03.737Z",
        "myPermission": {
            "id": "cly8p1zr4008n56l3mvp2qtin",
            "canViewApplicantPhoneNumber": true,
            "canViewApplicantLocation": true,
            "canViewApplicantFormAnswers": true,
            "canViewApplicantExpectedSalary": true,
            "canDeleteApplicants": true,
            "canAssignMembersToApplicants": true,
            "__typename": "Permission"
        },
        "createdAt": "2024-10-24T12:44:03.737Z",
        "isViewedByMe": false,
        "tags": [
            {
                "id": "cls1rao2w014lq81vf6z38qv4",
                "name": "Multi language",
                "color": "#175CD3",
                "__typename": "Tag"
            },
            {
                "id": "cls1rao2w014qq81vjxiwpnji",
                "name": "Experienced",
                "color": "#175CD3",
                "__typename": "Tag"
            }
        ],
        "skills": [
            {
                "id": "cls1ransp00blq81vn0xk8dc5",
                "name": "Problem solving",
                "color": "#175CD3",
                "__typename": "Skill"
            },
            {
                "id": "cls1ransp00bnq81vcobmavds",
                "name": "Analytical skills",
                "color": "#C01048",
                "__typename": "Skill"
            },
            {
                "id": "clu19ulso0003ks7x0hcjuo15",
                "name": "Communication skills",
                "color": "#175CD3",
                "__typename": "Skill"
            },
            {
                "id": "clu19ulsq0005ks7x3x5tsgcd",
                "name": "Creative skills",
                "color": "#175CD3",
                "__typename": "Skill"
            },
            {
                "id": "clu19ulss0009ks7x9yo82n4u",
                "name": "Good negotiator",
                "color": "#027A48",
                "__typename": "Skill"
            },
            {
                "id": "clu19ulst000bks7xkwwj9e2v",
                "name": "Team work",
                "color": "#6941C6",
                "__typename": "Skill"
            }
        ]
    },
    {
        "id": "cm2naontb4sibid58o6t8de0v",
        "firstName": "Miguel",
        "lastName": "D'Amore",
        "rating": 0,
        "isFavoritedByMe": false,
        "profilePhotoUrl": "https://doodleipsum.com/100/avatar-3?bg=33FFF9&n=567&i=10d58dda799ed82c132bff70aa1d62b9",
        "__typename": "ApplicantWithActiveApplication",
        "collaborators": {
            "assignees": [],
            "autoAssignees": [],
            "__typename": "ApplicantCollaboratorResponse"
        },
        "activeApplication": {
            "id": "cm2naonw94sj1id58j01twd4b",
            "createdAt": "2024-10-24T12:44:03.705Z",
            "updatedAt": "2024-12-09T14:10:52.462Z",
            "aiFit": 54,
            "score": null,
            "salaryExp": 4433,
            "salaryExpCurr": "TRY",
            "salaryExpPeriod": "WEEKLY",
            "lexorank": "0|W00ZOzzz:",
            "resume": {
                "id": "cm2naonwv4sk5id585xz66rco",
                "name": "Miguel_D'Amore_CV",
                "url": "https://res.cloudinary.com/hrpanda/image/upload/v1711011023/UserUploads/amzosxtp1fimdppy3wap.pdf",
                "size": 77679,
                "pageCount": 3,
                "uploadedAt": "2024-10-24T12:44:03.727Z",
                "__typename": "ApplicationAttachment"
            },
            "jobListing": {
                "id": "clnvoqb8b044pmq3woi6v4t44",
                "name": "default listing",
                "color": "#6941C6",
                "type": "IDLE",
                "collaborators": {
                    "autoAssignees": [
                        {
                            "id": "clvqg861h030dm8jjv7r8gnnx",
                            "firstName": "Rada",
                            "lastName": "Marcao",
                            "email": "marcao3767@gmail.com",
                            "profilePictureUrl": null,
                            "__typename": "User"
                        }
                    ],
                    "__typename": "JobListingCollaboratorResponse"
                },
                "__typename": "JobListing"
            },
            "stage": {
                "id": "clooapkdz000dn01scupqzr3h",
                "name": "Sourced",
                "__typename": "JobListingStage"
            },
            "applicant": {
                "id": "cm2naontb4sibid58o6t8de0v",
                "firstName": "Miguel",
                "lastName": "D'Amore",
                "profilePhotoUrl": "https://doodleipsum.com/100/avatar-3?bg=33FFF9&n=567&i=10d58dda799ed82c132bff70aa1d62b9",
                "email": "miguel_damore31@example.com",
                "__typename": "Applicant"
            },
            "rejectedReasons": [],
            "__typename": "Application"
        },
        "email": "miguel_damore31@example.com",
        "phoneNumber": "522-390-6812",
        "address": "Paris, France",
        "latitude": 48.8567,
        "age": 36,
        "longitude": 2.3522,
        "country": "France",
        "gender": "Male",
        "dateOfBirth": "1989-03-13T04:44:24.312Z",
        "gradUni": "provident",
        "university": null,
        "universityName": null,
        "salaryExp": null,
        "salaryExp2": null,
        "salaryExpCurr": null,
        "salaryExpPeriod": null,
        "sourceLink": null,
        "sourceType": "APPLICATION",
        "sourceUpdatedAt": "2024-10-24T12:44:03.599Z",
        "updatedAt": "2024-10-24T12:44:03.599Z",
        "myPermission": {
            "id": "cly8p1zr4008n56l3mvp2qtin",
            "canViewApplicantPhoneNumber": true,
            "canViewApplicantLocation": true,
            "canViewApplicantFormAnswers": true,
            "canViewApplicantExpectedSalary": true,
            "canDeleteApplicants": true,
            "canAssignMembersToApplicants": true,
            "__typename": "Permission"
        },
        "createdAt": "2024-10-24T12:44:03.599Z",
        "isViewedByMe": false,
        "tags": [
            {
                "id": "clu19ult2000lks7xkx2vr9yj",
                "name": "Able to move",
                "color": "#027A48",
                "__typename": "Tag"
            }
        ],
        "skills": [
            {
                "id": "clu19ulsr0007ks7x3282iy76",
                "name": "Critical Thinking",
                "color": "#C01048",
                "__typename": "Skill"
            }
        ]
    }
]
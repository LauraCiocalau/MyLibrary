export interface Book {
    id: string; // Poate fi UUID sau alt tip de identificator unic
    title: string;
    author: string;
    publisher: string;
    publishedYear: string; // Folosirea tipului Date oferă mai mult control asupra datelor de tip dată
    image: string; 
    genre: Genre;
    isbn: string;
    numberOfPages: number; 
    status: Status;
}

export enum Genre {
    Romance = 0,
    History = 1,
    Biography = 2,
    ScienceFiction = 3,
    Fiction = 4,
    ChildrensLiterature = 5,
    Cookbook = 6,
    Classics = 7,
    Religion = 8,
    SelfHelp = 9,
    Ebooks = 10,
    Philosophy = 11,
    Psychology = 12,
    Audiobooks = 13,
    InformationTechnology = 14,
    Science = 15
}

export enum Status {
    Read = 0,
    Unread = 1,
    Reading = 2
}
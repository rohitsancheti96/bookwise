interface Book {
    id: number;
    title: string;
    author: string;
    genre: string;
    rating: number;
    total_copies: number;
    available_copies: number;
    description: string;
    coverColor: string;
    coverUrl: string;
    video: string;
    summary: string;
    isLoanedBook: boolean;
    dueDate: string; 
}

interface AuthCredentials {
    email: string;
    password: string;
    fullName: string;
    universityId: number;
    universityCard: string;
}
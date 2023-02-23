interface BookAndCollegeDetails {
    bookDetails: BookDetails,
    collegeDetails: CollegeDetails
}

interface BookDetails {
    studentFirstName: string,
    books: Book[]
}

interface CollegeDetails {
    studentId: string,
    college: College
}

interface Book {
    id: string,
    name: string,
    author: string
}

interface College {
    id: string,
    name: string,
    location: string,
    rating: number
}
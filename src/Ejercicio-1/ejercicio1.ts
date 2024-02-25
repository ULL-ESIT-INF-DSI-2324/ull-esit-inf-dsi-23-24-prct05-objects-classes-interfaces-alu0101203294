interface BibliographicElement {
    title: string;
    authors: string[];
    keywords: string[];
    abstract: string;
    publicationDate: Date;
    pages: string;
    editorial: string;
    toIEEEFormat(): string;
}

class JournalArticle implements BibliographicElement {
    constructor(
        public title: string,
        public authors: string[],
        public keywords: string[],
        public abstract: string,
        public publicationDate: Date,
        public pages: string,
        public editorial: string,
        public journalNumber: number,
        public volume: number
    ) {}

    toIEEEFormat(): string {
        return `${this.authors.join(", ")}, "${this.title}," ${this.editorial}, vol. ${this.volume}, no. ${this.journalNumber}, pp. ${this.pages}, ${this.publicationDate.getFullYear()}.`;
    }
}

class ConferencePaper implements BibliographicElement {
    constructor(
        public title: string,
        public authors: string[],
        public keywords: string[],
        public abstract: string,
        public publicationDate: Date,
        public pages: string,
        public editorial: string,
        public conferenceName: string,
        public location: string
    ) {}

    toIEEEFormat(): string {
        return `${this.authors.join(", ")}, "${this.title}," in Proceedings of ${this.conferenceName}, ${this.location}, pp. ${this.pages}, ${this.publicationDate.getFullYear()}.`;
    }
}

class BibliographicManager {
    private elements: BibliographicElement[] = [];

    addElement(element: BibliographicElement) {
        this.elements.push(element);
    }

    displayAllElements() {
        console.table(this.elements);
    }

    searchElements(keyword: string, field?: keyof BibliographicElement): BibliographicElement[] {
        let results: BibliographicElement[] = this.elements.filter(element =>
            element.keywords.includes(keyword)
        );
        if (field) {
            results = results.sort((a, b) => {
                if (a[field] < b[field]) return -1;
                if (a[field] > b[field]) return 1;
                return 0;
            });
        }
        return results;
    }

    exportToIEEEFormat(elements: BibliographicElement[]): string[] {
        return elements.map(element => element.toIEEEFormat());
    }
}

// Ejemplo de uso:

const manager = new BibliographicManager();

const article1 = new JournalArticle(
    "Title1",
    ["Author1", "Author2"],
    ["keyword1", "keyword2"],
    "Abstract1",
    new Date(2023, 0, 1),
    "10-20",
    "Editorial1",
    1,
    10
);
const article2 = new JournalArticle(
    "Title2",
    ["Author3"],
    ["keyword1", "keyword3"],
    "Abstract2",
    new Date(2023, 1, 1),
    "30-40",
    "Editorial2",
    2,
    11
);

manager.addElement(article1);
manager.addElement(article2);

manager.displayAllElements();

const results = manager.searchElements("keyword1", "title");
console.table(results);

const ieeeReferences = manager.exportToIEEEFormat(results);
console.log(ieeeReferences);

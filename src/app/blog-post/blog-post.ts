// Model for component : blog-post
export class BlogPost {
    constructor (
        public title: string,
        public date: Date,
        public content: string,
        public comments: Array<string> = []
        ){}
}

// Model for component "post-comment"
export class PostComment {
    constructor (
        public id: number,
        public author: string,
        public date: Date,
        public content: string,
        ){}
        public editMode: boolean = false

    
}

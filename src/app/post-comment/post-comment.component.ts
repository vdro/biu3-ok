import { Component, OnInit, Input } from '@angular/core';
import { PostComment } from './post-comment';

@Component({
  selector: 'post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css']
})
export class PostCommentComponent implements OnInit {

  constructor() { }

  @Input() comment: string;
  
  author: string;
  authorsComment: string;
  inAddCommentMode: boolean;
  postId: number = 0;
  isInEditMode: boolean = false;
  oldContent: string;

  commentArray: Array<PostComment> = [];
  
  comment1 = new PostComment(
    this.postId++,
    "Mariusz",
    new Date(),
    "Super"
    );
    
  comment2 = new PostComment(
    this.postId++,
    "Marzenka",
    new Date(),
    "Po co?"
    );
  
  comment3 = new PostComment(
    this.postId++,
    "Franek",
    new Date(),
    "Zamawiam 2 pizze"
    );

  comment4 = new PostComment(
    this.postId++,
    "Czlowiek bez okaaaaaaaaaaaaaaaaaaaaaaa",
    new Date(),
    "Nic nie widze..........."
    );

  ngOnInit() { 
    this.commentArray.push(this.comment1);
    this.commentArray.push(this.comment2);
    this.commentArray.push(this.comment3);
    this.commentArray.push(this.comment4);
  }

  setNewComment(): void { 

    if (this.author == undefined || this.authorsComment == undefined) alert("Comment not applied -> Check form fields! They must be empty"); 
    else{
      if (this.author.length >= 3 && this.authorsComment.length >=5) this.addNewComment();
      else alert("Comment not applied. Nick or comment too short.Check form fields!"); 
    }
  }

  addNewComment(){
    let newComment = new PostComment(this.postId++, this.author, new Date(), this.authorsComment);
    this.commentArray.push(newComment);
    this.toggleAddCommentMode();
  }

  toggleAddCommentMode(){
    this.inAddCommentMode=!this.inAddCommentMode; 
  }

  deleteComment(commentId:number){
    let certainPostComment = this.commentArray.find(object => object.id === commentId );
    let indexOfOurArrayToBeDeleted = this.commentArray.indexOf(certainPostComment);
    this.commentArray.splice(indexOfOurArrayToBeDeleted, 1);
  }

  toggleEditMode(arrayItemId:number ):void{  
    let oldContent = this.commentArray[arrayItemId].content;
    if(!this.isInEditMode) this.oldContent = oldContent;
    this.isInEditMode=!this.isInEditMode;
    this.commentArray[arrayItemId].editMode =! this.commentArray[arrayItemId].editMode;
      if(this.commentArray[arrayItemId].editMode == false){
        let newContent = this.commentArray[arrayItemId].content;
        if(newContent !== this.oldContent){
          this.commentArray[arrayItemId].date = new Date();
        }
      }
    }
    
  }


import {inject,bindable} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class AddComment{

  @bindable parent = null;

  author = '';
  commentText = '';
  saved = false;
  error = false;
  errorMessage = '';

  constructor(http){

    http.configure(x => {
        x.withBaseUrl('/');
        x.withHeader('Content-Type', 'application/json');
    });

    this.http = http;
  }

  save(){
    var parentId = null;

    if(!this.author || !this.commentText){
      this.errorMessage = 'All fields are required';
      this.error = true;
      return;
    }

    if(this.parent){
      parentId = this.parent.id;
    }

    this.error = false;

    this.http.post('comment', {parentId:parentId,articleId:articleId,author:this.author,text:this.commentText})
              .then(() => this.saved = true)
              .catch(() => {
                            this.error = true;
                            this.errorMessage = 'I am sorry, but there was an error saving your comment';
              });
  }

}

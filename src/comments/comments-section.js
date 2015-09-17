import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import {bindable} from 'aurelia-framework';

@inject(HttpClient)

export class CommentsSection{

  @bindable comments;

}

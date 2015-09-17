import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@inject(HttpClient)

export class App{

  constructor(http){
    http.configure(config => {
      config.useStandardConfiguration();
    config.withBaseUrl('/comment/');
  });

    this.http = http;
    this.comments = [];
}

  activate(){
    return this.http.fetch(articleId)
        .then(response => response.json())
        .then(comments => this.comments = comments);
  }

}


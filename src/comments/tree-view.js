import {NodeModel} from './node-model';
import {bindable} from 'aurelia-framework';

import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@inject(HttpClient)

export class TreeView{

  @bindable comments;

}


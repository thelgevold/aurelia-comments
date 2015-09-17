import {bindable} from 'aurelia-framework';

export class TreeNode {

  @bindable current;

  constructor(){
    this.replying = false;
  }

  created(date){
    return new Date(date).toDateString();
  }

  reply(){
    this.replying = true;
  }

}

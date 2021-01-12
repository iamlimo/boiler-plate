import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent implements OnInit {
  constructor() {}

 enteredValue ='';
 newPost = '';
 enteredTitle="";
 @Output() postCreated = new EventEmitter();

  onAddPost() {
    const post = {
      title: this.enteredTitle,
      description: this.enteredValue
    }
    this.postCreated.emit(post)
  }

  ngOnInit(): void {}
}

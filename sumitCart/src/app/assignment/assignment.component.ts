import { Component, OnInit } from '@angular/core';
import {CartServices} from '../assignment.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  assignmentItem;
  assignmentCategory; 
  assignmentPrice;
  constructor(services:CartServices) 
  {
      this.assignmentItem=services.getItemName();
      this.assignmentCategory=services.getItemCategory();
      this.assignmentPrice=services.getItemPrice();

   }


  ngOnInit() {
  }

}

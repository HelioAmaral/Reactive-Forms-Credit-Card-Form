import { Component } from '@angular/core';
//all the necessary configurations for the form are made in this component class, we ne to import:
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent {

  //create a new property that will be a new form, an instance of FormGroup
  //the cardForm property represents  the overall form
  //when we create a new instance of FormGroup the first argument is an object of key/value pairs, these pairs will represent the various fields of our form
  cardForm = new FormGroup({
    //name is the name of the field, assigned to it a new instance of FormControl, the first argument is the default value for this field
name: new FormControl(' ')
  });

}

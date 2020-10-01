import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public form: FormGroup;
  ingredientarr: any;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [null],
      ingredients: this.formBuilder.array([]),
    });
  }

  addIngredients() {
	const ingredientFormGroup = new FormGroup({
		name: new FormControl(null),
		amount: new FormControl(null),
	  });
    this.ingredientarr = this.form.get('ingredients');
    
	this.ingredientarr.push(ingredientFormGroup)
  }

  removeIngredient(i) {
	  this.ingredientarr = this.form.get('ingredients');
	  this.ingredientarr.removeAt(i);
  }

  onSubmit() {
	alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.form.value, null, 4));
  }
}

import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddQuestionDialog, {
      width: '500px',
      data: { name: "Deepak" },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


}

@Component({
  selector: 'add-question',
  templateUrl: './add-question.html'
})
export class AddQuestionDialog {
  answerformat: string;
  options:number = 2;
  form: FormGroup
  constructor(
    public dialogRef: MatDialogRef<AddQuestionDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      que_id: [1],
      question: ['',Validators.required],
      answertype: [''],
      paragraph: [''],
      option1: [''],
      option2: [''],
      option3: [''],
      option4: [''],
      option5: [''],
      otherinput: [false],
    })
    this.answerformat = 'paragraph'
   }

  onNoClick(): void {
    this.dialogRef.close();
  }

  switchFormat(event: any) {
    this.answerformat = event.value
  }

  submitHandler(){
    console.log(this.form.value);
    let checkdata = localStorage.getItem('questions')
    let temparr = [];
    if(checkdata){
      temparr = JSON.parse(checkdata)
    }
    temparr.push(this.form.value)
    localStorage.setItem('questions',JSON.stringify(temparr))
    console.log(localStorage.getItem('questions'))
    this.dialogRef.close();
  }

  addoptions(){
    if(this.options < 5){
      this.options = this.options + 1
    }
  }
}

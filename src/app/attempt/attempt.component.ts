import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../main/main.component';

interface Question {
  question:string,
    option1:string,
    option2:string,
    option3:string,
    option4:string,
    option5:string,
    paragraph:string,
    otherinput:boolean,
    que_id:string,
    answertype:string
}

@Component({
  selector: 'app-attempt',
  templateUrl: './attempt.component.html',
  styleUrls: ['./attempt.component.css']
})
export class AttemptComponent implements OnInit {
  questions:any
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    let temp = localStorage.getItem('questions')
    this.questions = JSON.parse(temp?temp:'empty')
    console.log(this.questions)
  }

  onAttempt(question:any): void {
    const dialogRef = this.dialog.open(AttemptQuestion, {
      width: '500px',
      data: question,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}


@Component({
  selector: 'attempt-question',
  templateUrl: './attempt-question.html'
})
export class AttemptQuestion {
  answerformat: string;
  options:number = 2;
  quedata = {
    question:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    option5:'',
    paragraph:'',
    otherinput:false,
    que_id:'',
    answertype:''
  }
  form: FormGroup
  constructor(
    public dialogRef: MatDialogRef<AttemptQuestion>,
    @Inject(MAT_DIALOG_DATA) public data: Question,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      question: [],
      answertype: ['paragraph'],
      paragraph: [''],
      otherinput: [false],
      other:[''],
      optionchoice:['']
    })
    this.answerformat = 'paragraph'
    if(data){
      this.quedata = data
      console.log(this.quedata)
      // this.form.setValue({
      //   question:this.quedata.question?this.quedata.question:'',
      //   answertype:this.quedata.answertype?this.quedata.answertype:'',
      // })
    }
   }

  onNoClick(): void {
    this.dialogRef.close();
  }

  switchFormat(event: any) {
    this.answerformat = event.value
  }

  submitHandler(){
    console.log(this.form.value);
    let temparr = [];
    temparr.push(this.form.value)
    localStorage.setItem('answers',JSON.stringify(temparr))
    console.log(localStorage.getItem('questions'))
  }

  addoptions(){
    if(this.options < 5){
      this.options = this.options + 1
    }
  }
}
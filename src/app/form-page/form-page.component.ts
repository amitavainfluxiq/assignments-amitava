import { Component, OnInit } from '@angular/core';

 
import {Router, ActivatedRoute} from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,} from '@angular/material/dialog';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
 
import {CookieService} from "ngx-cookie-service";
import  {ApiService} from '../services/api.service';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements OnInit {

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  myform: FormGroup;
  

  public data: any;
  public serverUrl: any;
  public tokenViaCookie :any;

  constructor(public router: Router, public route: ActivatedRoute, public dialog: MatDialog, public formbuilder: FormBuilder,  public activeroute: ActivatedRoute, public cookie: CookieService, public apiService: ApiService) {

    this.myform = this.formbuilder.group({
 
      fname: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
      phone: ['', Validators.required],
      subject: ['', Validators.required],
      address: ['', Validators.required],
 
    })

   }

  ngOnInit() {
    
  }

  

  

 
  doSubmit() {

    // console.log('ok');
    // this.data = this.myform.value;
    // console.log(this.data);


    for (let i in this.myform.controls) {
      this.myform.controls[i].markAsTouched();
    }
    if (this.myform.valid) {

      this.formpopupViewModal();

  

      // let  link = this.serverUrl +;
      let data = {
        source:"signupformList",
        token : this.tokenViaCookie,
        data: this.myform.value
      };
      this.apiService.addDataWithoutToken(data,'addorupdatedata').subscribe(res => {


        let result: any = {};
        result = res;
        console.log(res);
        if (result.status == 'success') {

          this.myform.reset();




          // this.myform.controls['fname'].updateValueAndValidity();
          // this.myform.controls['email'].updateValueAndValidity();
          // this.myform.controls['phone'].updateValueAndValidity();
          // this.myform.controls['subject'].updateValueAndValidity();
          // this.myform.controls['address'].updateValueAndValidity();
 






        }


      })

    }

  }

  inputUntouch(form: any, val: any) {
    console.log('on blur .....');
    form.controls[val].markAsUntouched();
  }


  formpopupViewModal(){

    const dialogGenreRef = this.dialog.open(Formpopup, {
      panelClass: ['modal-sm', 'infomodal'],
      //disableClose: true,
    });

    dialogGenreRef.afterClosed().subscribe(result => {
    });
    setTimeout(function(){
      dialogGenreRef.close();
    }, 2000);
  }


}




@Component({
  selector: 'Formpopup',
  templateUrl: 'formpopup.html',
})
export class Formpopup {

 

  constructor(public dialogRef: MatDialogRef<Formpopup>,
              /* @Inject(MAT_DIALOG_DATA) public data: DialogData*/) {}

  public onNoClick(): void {
    this.dialogRef.close();
  }

}
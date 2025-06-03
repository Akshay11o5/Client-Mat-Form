import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../../service/client.service';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { COUNTRIES } from '../../const/contries';
import { CustomRegex, ValidationMessages } from '../../validators/validations';

@Component({
  selector: 'app-clientform',
  templateUrl: './clientform.component.html',
  styleUrls: ['./clientform.component.scss'],
})
export class ClientformComponent implements OnInit {
  clientobj: any;
  matForm!: FormGroup;
  Isineditmode: boolean = false;
  editedobj!: any;
  country: string[] = COUNTRIES;

  msges: any = ValidationMessages;

  constructor(
    private _matDilogref: MatDialogRef<ClientformComponent>,
    private _postservice: ClientService,
    private _router: Router,
    @Inject(MAT_DIALOG_DATA) public obj: any
  ) {}

  ngOnInit(): void {
    this.creatematForm();
    this.onPatch();
  }

  onPatch() {
    this.editedobj = this.obj;
    console.log(this.editedobj);
    if (this.editedobj) {
      this.Isineditmode = true;
      this.matForm.patchValue(this.editedobj);
    }
  }

  creatematForm() {
    this.matForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      client: new FormControl('', [Validators.required]),
      code: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(CustomRegex.email),
      ]),
      mobileNo: new FormControl('', [
        Validators.required,
        Validators.pattern(CustomRegex.contact),
      ]),
      GSTNo: new FormControl('', [
        Validators.required,
        Validators.pattern(CustomRegex.gst),
      ]),
      PANNo: new FormControl('', [
        Validators.required,
        Validators.pattern(CustomRegex.pan),
      ]),
      gender: new FormControl('', [Validators.required]),
      Address: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      pincode: new FormControl('', [
        Validators.required,
        Validators.pattern(CustomRegex.pincode),
      ]),
    });
  }

  onSubmitForm() {
    if (!this.Isineditmode) {
      this._postservice.createPost(this.matForm.value).subscribe({
        next: (res: any) => {
          this.clientobj = { ...this.matForm.value, id: res.name };
          console.log(res);
          this._matDilogref.close(this.clientobj);
        },
        error: (err: any) => {
          console.error('error', err);
        },
      });
    } else {
      let updatedpost: any = this.matForm.value;
      updatedpost.id = this.editedobj.id;
      console.log(updatedpost);
      this._postservice.updatedobj(updatedpost).subscribe({
        next: (res) => {
          console.log(res);
          this._matDilogref.close(res);
          this._router.navigate(['posts']);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  onClose() {
    this._matDilogref.close();
  }
}

import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-get-confirm',
  templateUrl: './get-confirm.component.html',
  styleUrls: ['./get-confirm.component.scss'],
})
export class GetConfirmComponent implements OnInit {
  getMsg: string;

  constructor(
    private _matDilogref: MatDialogRef<GetConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) msg: string
  ) {
    this.getMsg = msg;
  }

  ngOnInit(): void {}

  onConfirm(flag: boolean) {
    this._matDilogref.close(flag);
  }
}

import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ClientformComponent } from '../clientform/clientform.component';
import { ClientService } from '../../service/client.service';
import { SnackbarService } from '../../service/snackbar.service';

@Component({
  selector: 'app-clientdash',
  templateUrl: './clientdash.component.html',
  styleUrls: ['./clientdash.component.scss'],
})
export class ClientdashComponent implements OnInit {
  postArr!: any;

  constructor(
    private _matDilog: MatDialog,
    private _clientservice: ClientService,
    private _snackbar: SnackbarService
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this._clientservice.fetchAllPost().subscribe({
      next: (res) => {
        this.postArr = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  onaddpost() {
    let matDilogConfig = new MatDialogConfig();
    matDilogConfig.width = '60%';
    matDilogConfig.height = '80%';
    matDilogConfig.disableClose = true;

    let dilogref = this._matDilog.open(ClientformComponent, matDilogConfig);
    dilogref.afterClosed().subscribe((res) => {
      console.log(res);

      if (res) {
        this.postArr.push(res);
        this._snackbar.openSnackBar(`The new Client is added successfully`);
      }
    });
  }
}

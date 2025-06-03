import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ClientService } from '../../service/client.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ClientformComponent } from '../clientform/clientform.component';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';

@Component({
  selector: 'app-client-single',
  templateUrl: './client-single.component.html',
  styleUrls: ['./client-single.component.scss'],
})
export class ClientSingleComponent implements OnInit {
  id!: string;

  singleobj!: any;
  constructor(
    private _activateroute: ActivatedRoute,
    private _clientser: ClientService,
    private _matDilog: MatDialog,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.id = this._activateroute.snapshot.paramMap.get('id')!;
    if (this.id) {
      this._clientser.getSinglepost(this.id).subscribe((res) => {
        this.singleobj = res;

        console.log(this.singleobj);
      });
    }
  }

  onEdit() {
    let matConfig = new MatDialogConfig();
    matConfig.disableClose = true;
    matConfig.data = { ...this.singleobj, id: this.id };
    matConfig.width = '600px';
    matConfig.height = '90vh';
    let matDilogref = this._matDilog.open(ClientformComponent, matConfig);
    matDilogref.afterClosed().subscribe({
      next: (res: any) => {
        console.log(res);
      },

      error: (err) => {
        console.log(err);
      },
    });
  }

  onRemove() {
    let matConfig = new MatDialogConfig();
    matConfig.data = `Are you sure you want to remove this post?`;
    let matDilogref = this._matDilog.open(GetConfirmComponent, matConfig);
    matDilogref.afterClosed().subscribe((data) => {
      console.log(data);
      if (data) {
        this._clientser.removedata(this.id).subscribe(res=>{
          console.log(res);
          this._router.navigate(['/posts']);
        });
        
      }
    });
  }
}

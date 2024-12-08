import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { NxTableModule } from '@aposin/ng-aquila/table';
import { NxSpinnerModule } from '@aposin/ng-aquila/spinner';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, NxTableModule, NxSpinnerModule],
  template: `
    <div class="container">
      <h1>Users</h1>
      <ng-container *ngIf="!loading; else loadingTemplate">
        <table nxTable>
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let user of users">
              <td>{{user.id}}</td>
              <td>{{user.username}}</td>
              <td>{{user.email}}</td>
            </tr>
          </tbody>
        </table>
      </ng-container>
    </div>

    <ng-template #loadingTemplate>
      <nx-spinner></nx-spinner>
    </ng-template>
  `,
  styles: [`
    .container {
      padding: 20px;
    }
  `]
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  loading = true;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>(`${environment.apiUrl}/users`)
      .subscribe({
        next: (data) => {
          this.users = data;
          this.loading = false;
        },
        error: (error) => {
          console.error('Error fetching users:', error);
          this.loading = false;
        }
      });
  }
}
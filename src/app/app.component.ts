import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListUserComponent } from './main-db/components/user/list-user/list-user.component';
import { ListAdminComponent } from "./main-db/components/admin/list-admin/list-admin.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListUserComponent, ListAdminComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'json-servers';
}

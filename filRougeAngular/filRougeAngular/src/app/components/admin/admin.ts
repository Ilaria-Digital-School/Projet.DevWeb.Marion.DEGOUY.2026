import { Component } from '@angular/core';
import { UsersTable } from '../users-table/users-table';
import { PrestationsTable } from '../prestations-table/prestations-table';
import { BioTable } from '../bio-table/bio-table';

@Component({
  selector: 'app-admin',
  imports: [UsersTable, PrestationsTable, BioTable],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {

}

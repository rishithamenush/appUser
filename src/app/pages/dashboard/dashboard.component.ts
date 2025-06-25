import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  userEmail: string = '';

  ngOnInit() {
    const logData = localStorage.getItem('logData');
    if (logData) {
      const parsed = JSON.parse(logData);
      this.userEmail = parsed?.data?.emailId || '';
    }
  }
}

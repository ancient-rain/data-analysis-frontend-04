import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { Faculty } from '../../../models/faculty';
import { Student } from '../../../models/student';

@Component({
  selector: 'app-faculty-advisees',
  templateUrl: './faculty-advisees.component.html',
  styleUrls: ['./faculty-advisees.component.css']
})
export class FacultyAdviseesComponent {
  @Input() faculty: Faculty;

  constructor(private authService: AuthService, private router: Router) { }

}

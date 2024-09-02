import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';  
import { MatFormFieldModule } from '@angular/material/form-field';  
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-user-fom',
  standalone: true,
  imports: [
    CommonModule,  
    ReactiveFormsModule,
    MatFormFieldModule,  
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule
  ],
  templateUrl: './user-fom.component.html',
  styleUrls: ['./user-fom.component.css']
})
export class UserFomComponent implements OnInit {

  userForm: FormGroup;
  userId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.userId = +id;
      this.userService.getUserById(this.userId).subscribe(user => {
        this.userForm.patchValue(user);
      });
    }
  }

  onSubmit(): void {
  
    if (this.userForm.valid) {
      if (this.userId) {
        this.userService.updateUser(this.userId, this.userForm.value).subscribe(() => {
          this.router.navigate(['/users']);
        });
      } else {
        this.userService.createUser(this.userForm.value).subscribe(() => {
          this.router.navigate(['/users']);
        });
      }
    }
  }
  
}

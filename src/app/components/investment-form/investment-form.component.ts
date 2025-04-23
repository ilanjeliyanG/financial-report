import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

interface InvestmentFormData {
  assetType: string;
  quantity: number;
  purchasePrice: number;
  purchaseDate: Date;
}

@Component({
  selector: 'app-investment-form',
  templateUrl: './investment-form.component.html',
  styleUrls: ['./investment-form.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class InvestmentFormComponent implements OnInit {
  investmentForm: FormGroup;
  showReview = false;
  formData: InvestmentFormData | null = null;

  assetTypes = [
    { value: 'stock', label: 'Stock' },
    { value: 'bond', label: 'Bond' },
    { value: 'mutual_fund', label: 'Mutual Fund' },
    { value: 'etf', label: 'ETF' },
    { value: 'crypto', label: 'Cryptocurrency' }
  ];

  constructor(private fb: FormBuilder, private router: Router) {
    this.investmentForm = this.fb.group({
      assetType: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(0.000001)]],
      purchasePrice: ['', [Validators.required, Validators.min(0.01)]],
      purchaseDate: [new Date(), Validators.required]
    });
  }

  ngOnInit(): void {
    // Initialize with today's date
    this.investmentForm.patchValue({
      purchaseDate: new Date()
    });
  }

  onSubmit(): void {
    if (this.investmentForm.valid) {
      this.formData = this.investmentForm.value;
      this.showReview = true;
    } else {
      Object.keys(this.investmentForm.controls).forEach(key => {
        const control = this.investmentForm.get(key);
        if (control?.invalid) {
          control.markAsTouched();
        }
      });
    }
  }

  confirmSubmission(): void {
    if (this.formData) {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', this.formData);
      this.showReview = false;
      this.investmentForm.reset();
      this.formData = null;
      // Navigate to the home page
      this.router.navigate(['/']);
    }
  }

  cancelReview(): void {
    this.showReview = false;
    this.formData = null;
  }

  getErrorMessage(field: string): string {
    const control = this.investmentForm.get(field);
    if (control?.hasError('required')) {
      return 'This field is required';
    }
    if (control?.hasError('min')) {
      return `Value must be greater than ${control.errors?.['min'].min}`;
    }
    return '';
  }

  getAssetTypeLabel(value: string): string {
    const assetType = this.assetTypes.find(type => type.value === value);
    return assetType ? assetType.label : '';
  }

  get totalInvestment(): number {
    if (this.formData) {
      return this.formData.quantity * this.formData.purchasePrice;
    }
    return 0;
  }
} 
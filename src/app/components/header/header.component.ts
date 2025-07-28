import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    RouterLink
  ],
  template: `
    <mat-toolbar color="primary">
      <span class="brand">Portfolio</span>
      <span class="spacer"></span>
      
      <!-- Desktop Navigation -->
      <div class="desktop-nav">
        <button mat-button routerLink="/">
          <!-- <mat-icon>dashboard</mat-icon> -->
          Dashboard
        </button>
        <button mat-button routerLink="/add-investment">
          <!-- <mat-icon> Add Investment</mat-icon> -->
          Add Investment
        </button>
      </div>

      <!-- Mobile Navigation -->
      <button mat-icon-button class="mobile-menu-button" [matMenuTriggerFor]="menu">
        <mat-icon>menu</mat-icon>
      </button>
      <mat-menu #menu="matMenu">
        <button mat-menu-item routerLink="/">
          <!-- <mat-icon>dashboard</mat-icon> -->
          <span>Dashboard</span>
        </button>
        <button mat-menu-item routerLink="/add-investment">
          <!-- <mat-icon> Add Investment</mat-icon> -->
          <span>Add Investment</span>
        </button>
      </mat-menu>
    </mat-toolbar>
  `,
  styles: [`
    .spacer {
      flex: 1 1 auto;
    }
    
    mat-toolbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      padding: 0 24px;
      height: 64px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      background-color: rgba(63, 81, 181, 0.98) !important;
    }

    :host {
      display: block;
      height: 64px;
      margin-bottom: 64px;
    }

    .brand {
      font-size: 1.3rem;
      font-weight: 600;
      letter-spacing: 0.7px;
      cursor: pointer;
      user-select: none;
      color: white;
      text-transform: uppercase;
      transition: all 0.3s ease;
    }

    .brand:hover {
      transform: translateX(2px);
      text-shadow: 0 0 8px rgba(255, 255, 255, 0.4);
    }

    .desktop-nav {
      display: flex;
      gap: 12px;
    }

    .desktop-nav button {
      border-radius: 8px;
      padding: 0 16px;
      height: 40px;
      line-height: 40px;
      font-weight: 500;
      letter-spacing: 0.3px;
    }

    .mobile-menu-button {
      display: none;
      border-radius: 8px;
      width: 40px;
      height: 40px;
      line-height: 40px;
    }

    /* Mobile styles */
    @media (max-width: 599px) {
      .desktop-nav {
        display: none;
      }

      .mobile-menu-button {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .brand {
        font-size: 1.1rem;
      }

      mat-toolbar {
        padding: 0 16px;
        height: 56px;
      }

      :host {
        height: 56px;
        margin-bottom: 56px;
      }
    }

    /* Tablet styles */
    @media (min-width: 600px) and (max-width: 959px) {
      .desktop-nav button {
        padding: 0 12px;
      }

      mat-toolbar {
        padding: 0 20px;
      }
    }

    /* Animation for menu items */
    mat-toolbar button {
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }

    /* Active route styling */
    .mat-button.router-link-active,
    .mat-menu-item.router-link-active {
      background-color: rgba(255, 255, 255, 0.15);
      font-weight: 500;
      transform: translateY(-1px);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    /* Hover states */
    .mat-button:hover,
    .mat-icon-button:hover {
      background-color: rgba(255, 255, 255, 0.12);
      transform: translateY(-1px);
    }

    /* Icon alignment in buttons */
    .mat-button .mat-icon,
    .mat-menu-item .mat-icon {
      margin-right: 8px;
      vertical-align: middle;
      font-size: 20px;
      height: 20px;
      width: 20px;
    }

    /* Menu item styling */
    ::ng-deep .mat-mdc-menu-panel {
      min-width: 220px !important;
      margin-top: 12px;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15) !important;
      background-color: rgba(255, 255, 255, 0.98) !important;
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
    }

    ::ng-deep .mat-mdc-menu-item {
      display: flex;
      align-items: center;
      gap: 12px;
      height: 48px;
      line-height: 48px;
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      margin: 4px 8px;
      border-radius: 8px;
      padding: 0 16px !important;
    }

    ::ng-deep .mat-mdc-menu-item:hover {
      background-color: rgba(0, 0, 0, 0.05);
      transform: translateX(2px);
    }

    ::ng-deep .mat-mdc-menu-item.router-link-active {
      background-color: rgba(63, 81, 181, 0.1);
      font-weight: 500;
      color: #3f51b5;
    }

    ::ng-deep .mat-mdc-menu-item .mat-icon {
      color: #3f51b5;
      opacity: 0.9;
    }
  `]
})
export class HeaderComponent {} 
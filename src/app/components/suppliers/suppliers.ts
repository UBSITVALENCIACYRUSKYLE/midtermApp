import { Component, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SupplierService } from '../../services/supplier.service';
import { Supplier } from '../../models/supplier.interface';

@Component({
  selector: 'app-suppliers',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './suppliers.html',
  styleUrl: './suppliers.css'
})
export class SuppliersComponent implements OnInit {
  private svc = inject(SupplierService);

  displayedSuppliers = signal<Supplier[]>([]);
  selectedSupplier   = signal<Supplier | null>(null);
  editingSupplier    = signal<Supplier | null>(null);
  showAddForm        = signal(false);
  statusMessage      = signal('');

  newName          = signal('');
  newContactPerson = signal('');
  newEmail         = signal('');
  newPhone         = signal('');

  ngOnInit(): void {
    this.displayedSuppliers.set(this.svc.getAll());
  }

  onSearch(e: Event): void {
    const q = (e.target as HTMLInputElement).value;
    this.displayedSuppliers.set(q.trim() ? this.svc.search(q) : this.svc.getAll());
  }

  viewSupplier(s: Supplier): void {
    this.selectedSupplier.set(this.selectedSupplier()?.id === s.id ? null : { ...s });
    this.editingSupplier.set(null);
  }

  startEdit(s: Supplier): void {
    this.editingSupplier.set({ ...s });
    this.selectedSupplier.set(null);
    this.statusMessage.set('');
  }

  saveEdit(): void {
    const s = this.editingSupplier();
    if (s) {
      this.svc.edit(s);
      this.displayedSuppliers.set(this.svc.getAll());
      this.editingSupplier.set(null);
      this.statusMessage.set('Supplier updated successfully!');
    }
  }

  deleteSupplier(id: number): void {
    if (confirm('Delete this supplier?')) {
      this.svc.delete(id);
      this.displayedSuppliers.set(this.svc.getAll());
      if (this.selectedSupplier()?.id === id) this.selectedSupplier.set(null);
      if (this.editingSupplier()?.id === id)  this.editingSupplier.set(null);
      this.statusMessage.set('Supplier deleted.');
    }
  }

  addSupplier(): void {
    if (!this.newName().trim()) return;
    this.svc.add({
      id: Date.now(),
      name: this.newName(),
      contactPerson: this.newContactPerson(),
      email: this.newEmail(),
      phone: this.newPhone(),
    });
    this.displayedSuppliers.set(this.svc.getAll());
    this.newName.set(''); this.newContactPerson.set('');
    this.newEmail.set(''); this.newPhone.set('');
    this.showAddForm.set(false);
    this.statusMessage.set('Supplier added successfully!');
  }
}

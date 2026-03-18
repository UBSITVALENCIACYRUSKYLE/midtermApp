import { Injectable, signal } from '@angular/core';
import { Supplier } from '../models/supplier.interface';

@Injectable({ providedIn: 'root' })
export class SupplierService {
  private suppliers = signal<Supplier[]>([
    { id: 1,  name: 'TechHub Distributors',  contactPerson: 'Juancho Cruz' },
    { id: 2,  name: 'GamingGear PH',          contactPerson: 'Maria Santos' },
    { id: 3,  name: 'SnackWholesaling',        contactPerson: 'Pedro Reyes' },
    { id: 4,  name: 'GadgetsPH',               contactPerson: 'Ana Gomez' },
    { id: 5,  name: 'PeripheralsPro',           contactPerson: 'Carlos Mendoza' },
    { id: 6,  name: 'ConsoleBlasters',          contactPerson: 'Lisa Reyes' },
    { id: 7,  name: 'FurnitureForcePH',         contactPerson: 'Ben Torres' },
    { id: 8,  name: 'CodingShop PH',            contactPerson: 'Nic Lim' },
    { id: 9,  name: 'Apparel Kings',            contactPerson: 'Rex Villanueva' },
    { id: 10, name: 'BeverageBoss',             contactPerson: 'Bino Cruz' },
  ]);

  getAll(): Supplier[]                      { return this.suppliers(); }
  getById(id: number): Supplier | undefined { return this.suppliers().find(s => s.id === id); }

  search(query: string): Supplier[] {
    const q = query.toLowerCase();
    return this.suppliers().filter(s =>
      s.name.toLowerCase().includes(q) || s.contactPerson.toLowerCase().includes(q)
    );
  }

  add(s: Supplier): void    { this.suppliers.update(list => [...list, s]); }
  edit(s: Supplier): void   { this.suppliers.update(list => list.map(x => x.id === s.id ? s : x)); }
  delete(id: number): void  { this.suppliers.update(list => list.filter(s => s.id !== id)); }
}

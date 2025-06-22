import { users, contacts, bookings, type User, type InsertUser, type Contact, type InsertContact, type Booking, type InsertBooking } from "@shared/schema";
import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { eq, desc } from 'drizzle-orm';

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  createBooking(booking: InsertBooking): Promise<Booking>;
  getBookings(): Promise<Booking[]>;
  updateBookingStatus(id: string, status: string): Promise<void>;
}

// Supabase Storage Implementation with connection handling
export class SupabaseStorage implements IStorage {
  private db: any = null;
  
  private async getDb() {
    if (!this.db && process.env.DATABASE_URL && process.env.DATABASE_URL.includes('supabase.co')) {
      try {
        const sql = neon(process.env.DATABASE_URL);
        this.db = drizzle(sql);
      } catch (error) {
        console.warn('Failed to initialize Supabase connection:', error);
        throw new Error('Database connection failed');
      }
    }
    return this.db;
  }

  async getUser(id: string): Promise<User | undefined> {
    const db = await this.getDb();
    const result = await db.select().from(users).where(eq(users.id, id)).limit(1);
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const db = await this.getDb();
    const result = await db.select().from(users).where(eq(users.username, username)).limit(1);
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const db = await this.getDb();
    const id = Date.now().toString();
    const user: User = { ...insertUser, id };
    await db.insert(users).values(user);
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const db = await this.getDb();
    const id = Date.now().toString();
    const contact: Contact = { 
      ...insertContact, 
      id,
      createdAt: new Date()
    };
    await db.insert(contacts).values(contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    const db = await this.getDb();
    return await db.select().from(contacts).orderBy(desc(contacts.createdAt));
  }

  async createBooking(insertBooking: InsertBooking): Promise<Booking> {
    const db = await this.getDb();
    const id = Date.now().toString();
    const bookingId = `SY${Date.now().toString().slice(-6)}${Math.random().toString(36).substr(2, 3).toUpperCase()}`;
    const booking: Booking = {
      ...insertBooking,
      id,
      bookingId,
      status: "pending",
      specialRequests: insertBooking.specialRequests || null,
      createdAt: new Date()
    };
    await db.insert(bookings).values(booking);
    return booking;
  }

  async getBookings(): Promise<Booking[]> {
    const db = await this.getDb();
    return await db.select().from(bookings).orderBy(desc(bookings.createdAt));
  }

  async updateBookingStatus(id: string, status: string): Promise<void> {
    const db = await this.getDb();
    await db.update(bookings).set({ status }).where(eq(bookings.id, id));
  }
}

// In-Memory Storage Implementation (fallback)
export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contacts: Map<string, Contact>;
  private bookings: Map<string, Booking>;
  private currentUserId: number;
  private currentContactId: number;
  private currentBookingId: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.bookings = new Map();
    this.currentUserId = 1;
    this.currentContactId = 1;
    this.currentBookingId = 1;
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const users = Array.from(this.users.values());
    return users.find(user => user.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId.toString();
    this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId.toString();
    this.currentContactId++;
    const contact: Contact = { 
      ...insertContact, 
      id,
      createdAt: new Date()
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values()).sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async createBooking(insertBooking: InsertBooking): Promise<Booking> {
    const id = this.currentBookingId.toString();
    this.currentBookingId++;
    const bookingId = `SY${Date.now().toString().slice(-6)}${Math.random().toString(36).substr(2, 3).toUpperCase()}`;
    const booking: Booking = {
      ...insertBooking,
      id,
      bookingId,
      status: "pending",
      specialRequests: insertBooking.specialRequests || null,
      createdAt: new Date()
    };
    this.bookings.set(id, booking);
    return booking;
  }

  async getBookings(): Promise<Booking[]> {
    return Array.from(this.bookings.values()).sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async updateBookingStatus(id: string, status: string): Promise<void> {
    const booking = this.bookings.get(id);
    if (booking) {
      booking.status = status;
      this.bookings.set(id, booking);
    }
  }
}

// Storage class that automatically falls back to memory storage if Supabase fails
class StorageManager implements IStorage {
  private supabaseStorage = new SupabaseStorage();
  private memStorage = new MemStorage();
  private useSupabase = true;

  private async executeWithFallback<T>(operation: () => Promise<T>): Promise<T> {
    if (!this.useSupabase) {
      return operation.call(this.memStorage);
    }

    try {
      return await operation.call(this.supabaseStorage);
    } catch (error) {
      console.warn('Supabase operation failed, falling back to memory storage:', error);
      this.useSupabase = false;
      return operation.call(this.memStorage);
    }
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.executeWithFallback(() => this.useSupabase ? this.supabaseStorage.getUser(id) : this.memStorage.getUser(id));
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return this.executeWithFallback(() => this.useSupabase ? this.supabaseStorage.getUserByUsername(username) : this.memStorage.getUserByUsername(username));
  }

  async createUser(user: InsertUser): Promise<User> {
    return this.executeWithFallback(() => this.useSupabase ? this.supabaseStorage.createUser(user) : this.memStorage.createUser(user));
  }

  async createContact(contact: InsertContact): Promise<Contact> {
    return this.executeWithFallback(() => this.useSupabase ? this.supabaseStorage.createContact(contact) : this.memStorage.createContact(contact));
  }

  async getContacts(): Promise<Contact[]> {
    return this.executeWithFallback(() => this.useSupabase ? this.supabaseStorage.getContacts() : this.memStorage.getContacts());
  }

  async createBooking(booking: InsertBooking): Promise<Booking> {
    return this.executeWithFallback(() => this.useSupabase ? this.supabaseStorage.createBooking(booking) : this.memStorage.createBooking(booking));
  }

  async getBookings(): Promise<Booking[]> {
    return this.executeWithFallback(() => this.useSupabase ? this.supabaseStorage.getBookings() : this.memStorage.getBookings());
  }

  async updateBookingStatus(id: string, status: string): Promise<void> {
    return this.executeWithFallback(() => this.useSupabase ? this.supabaseStorage.updateBookingStatus(id, status) : this.memStorage.updateBookingStatus(id, status));
  }
}

// Export storage instance with automatic fallback handling
export const storage = new StorageManager();
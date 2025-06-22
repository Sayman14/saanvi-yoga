import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertBookingSchema } from "@shared/schema";
import { emailService } from "./email-service";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      
      // Send confirmation email
      try {
        await emailService.sendContactConfirmation(contact);
      } catch (emailError) {
        console.error("Failed to send contact confirmation email:", emailError);
        // Don't fail the request if email fails
      }
      
      res.json({ message: "Contact form submitted successfully", id: contact.id });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ message: "Invalid form data" });
    }
  });

  // Booking form submission
  app.post("/api/bookings", async (req, res) => {
    try {
      const validatedData = insertBookingSchema.parse(req.body);
      const booking = await storage.createBooking(validatedData);
      
      // Send confirmation email
      try {
        await emailService.sendBookingConfirmation(booking);
      } catch (emailError) {
        console.error("Failed to send booking confirmation email:", emailError);
        // Don't fail the request if email fails
      }
      
      res.json({ message: "Booking submitted successfully", id: booking.id });
    } catch (error) {
      console.error("Booking form error:", error);
      res.status(400).json({ message: "Invalid form data" });
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      console.error("Get contacts error:", error);
      res.status(500).json({ message: "Failed to fetch contacts" });
    }
  });

  // Get all bookings (for admin purposes)
  app.get("/api/bookings", async (req, res) => {
    try {
      const bookings = await storage.getBookings();
      res.json(bookings);
    } catch (error) {
      console.error("Get bookings error:", error);
      res.status(500).json({ message: "Failed to fetch bookings" });
    }
  });



  const httpServer = createServer(app);
  return httpServer;
}

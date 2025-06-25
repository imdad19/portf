import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertChatMessageSchema } from "@shared/schema";
import { generateChatbotResponse } from "./services/openai";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      
      res.json({ 
        success: true, 
        message: "Thank you for your message! Imed will get back to you soon.",
        contact: { id: contact.id }
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Please check all required fields and try again." 
      });
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      console.error("Get contacts error:", error);
      res.status(500).json({ message: "Failed to retrieve contacts" });
    }
  });

  // Chatbot conversation
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, sessionId } = req.body;
      
      if (!message || !sessionId) {
        return res.status(400).json({ 
          success: false, 
          message: "Message and session ID are required" 
        });
      }

      // Generate AI response
      const aiResponse = await generateChatbotResponse(message);
      
      // Store the conversation
      const chatMessage = await storage.createChatMessage({
        sessionId,
        message,
        response: aiResponse
      });

      res.json({
        success: true,
        response: aiResponse,
        messageId: chatMessage.id
      });
    } catch (error) {
      console.error("Chatbot error:", error);
      res.status(500).json({ 
        success: false, 
        message: "I'm experiencing technical difficulties. Please try again or contact Imed directly." 
      });
    }
  });

  // Get chat history for a session
  app.get("/api/chat/:sessionId", async (req, res) => {
    try {
      const { sessionId } = req.params;
      const messages = await storage.getChatMessages(sessionId);
      res.json(messages);
    } catch (error) {
      console.error("Get chat history error:", error);
      res.status(500).json({ message: "Failed to retrieve chat history" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

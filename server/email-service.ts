import nodemailer from 'nodemailer';
import type { Booking, Contact } from '@shared/schema';

export class EmailService {
  private transporter: nodemailer.Transporter | null = null;

  private async sendMailgunEmail(to: string, subject: string, html: string): Promise<void> {
    const mailgunApiKey = process.env.MAILGUN_API_KEY;
    const mailgunDomain = process.env.MAILGUN_DOMAIN;
    const fromEmail = process.env.FROM_EMAIL || 'noreply@saanviyoga.com';

    if (!mailgunApiKey || !mailgunDomain) {
      console.log('Mailgun not configured, email would be sent to:', to);
      console.log('Subject:', subject);
      console.log('HTML content:', html.substring(0, 200) + '...');
      return;
    }

    const formData = new FormData();
    formData.append('from', `Saanvi Yoga Studio <${fromEmail}>`);
    formData.append('to', to);
    formData.append('subject', subject);
    formData.append('html', html);

    try {
      const response = await fetch(`https://api.mailgun.net/v3/${mailgunDomain}/messages`, {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${Buffer.from(`api:${mailgunApiKey}`).toString('base64')}`
        },
        body: formData
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Mailgun API error: ${response.status} - ${errorText}`);
      }

      const result = await response.json();
      console.log('Email sent successfully via Mailgun:', result.id);
    } catch (error) {
      console.error('Error sending email via Mailgun:', error);
      throw error;
    }
  }

  private async getTransporter() {
    // This method is kept for compatibility but we'll use Mailgun API directly
    if (this.transporter) return this.transporter;

    // Fallback transporter for logging
    this.transporter = nodemailer.createTransport({
      streamTransport: true,
      newline: 'unix',
      buffer: true,
    });

    return this.transporter;
  }

  async sendBookingConfirmation(booking: Booking): Promise<void> {
    try {
      // Send confirmation email to customer
      await this.sendMailgunEmail(
        booking.email,
        `Consultation Confirmed - Booking ID: ${booking.bookingId} - Saanvi Yoga Studio`,
        this.getBookingConfirmationHTML(booking)
      );

      // Send notification email to instructor
      await this.sendMailgunEmail(
        'sanyamsood14@gmail.com',
        `New Consultation Booking - ${booking.bookingId}`,
        this.getBookingNotificationHTML(booking)
      );

      console.log('Consultation booking emails sent for:', booking.bookingId);
    } catch (error) {
      console.error('Failed to send consultation booking emails:', error);
      throw error;
    }
  }

  async sendContactConfirmation(contact: Contact): Promise<void> {
    const confirmationHtml = this.getContactConfirmationHTML(contact);
    const notificationHtml = this.getContactNotificationHTML(contact);
    
    try {
      // Send both emails using Mailgun API
      await Promise.all([
        this.sendMailgunEmail(
          contact.email, 
          'Message Received - Saanvi Yoga Studio', 
          confirmationHtml
        ),
        this.sendMailgunEmail(
          'sanyamsood14@gmail.com', 
          `New Contact Form Submission - ${contact.firstName} ${contact.lastName}`, 
          notificationHtml
        )
      ]);
      console.log('Contact confirmation and notification emails sent successfully');
    } catch (error) {
      console.error('Error sending contact emails:', error);
      throw error;
    }
  }



  private getBookingConfirmationHTML(booking: Booking): string {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Booking Confirmation</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f9f9f9;
          }
          .container {
            background: white;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          }
          .header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 3px solid #f97316;
          }
          .logo {
            font-size: 28px;
            font-weight: bold;
            color: #f97316;
            margin-bottom: 10px;
          }
          .subtitle {
            color: #666;
            font-size: 16px;
          }
          .booking-details {
            background: linear-gradient(135deg, #fed7aa 0%, #ffedd5 100%);
            padding: 25px;
            border-radius: 12px;
            margin: 25px 0;
          }
          .detail-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 12px;
            align-items: center;
          }
          .detail-label {
            font-weight: 600;
            color: #7c2d12;
          }
          .detail-value {
            color: #333;
            font-weight: 500;
          }
          .message-box {
            background: #f8fafc;
            padding: 20px;
            border-radius: 8px;
            border-left: 4px solid #f97316;
            margin: 20px 0;
          }
          .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e5e7eb;
            color: #666;
          }
          .btn {
            display: inline-block;
            background: #f97316;
            color: white;
            padding: 12px 24px;
            text-decoration: none;
            border-radius: 25px;
            font-weight: 600;
            margin: 10px 0;
          }
          .status-badge {
            background: #fef3c7;
            color: #d97706;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">🧘‍♀️ Saanvi Yoga Studio</div>
            <div class="subtitle">Your journey to wellness begins here</div>
          </div>
          
          <h2 style="color: #f97316; text-align: center;">Consultation Request Received!</h2>
          
          <p>Dear ${booking.firstName} ${booking.lastName},</p>
          
          <p>Thank you for choosing Saanvi Yoga Studio! We have received your consultation request and our team will contact you within 24 hours to confirm your appointment.</p>
          
          <div class="booking-details">
            <h3 style="margin-top: 0; color: #7c2d12;">Consultation Details:</h3>
            <div class="detail-row">
              <span class="detail-label">Booking ID:</span>
              <span class="detail-value">${booking.bookingId}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Consultation Type:</span>
              <span class="detail-value">${booking.consultationType}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Preferred Date:</span>
              <span class="detail-value">${booking.preferredDate}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Preferred Time:</span>
              <span class="detail-value">${booking.preferredTime}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Experience Level:</span>
              <span class="detail-value">${booking.experience}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Status:</span>
              <span class="status-badge">${booking.status}</span>
            </div>
          </div>
          
          <div class="message-box">
            <h4 style="margin-top: 0; color: #7c2d12;">Your Goals & Expectations:</h4>
            <p style="margin-bottom: 0;">${booking.goals}</p>
          </div>

          ${booking.specialRequests ? `
            <div class="message-box">
              <h4 style="margin-top: 0; color: #dc3545;">Special Requests/Health Considerations:</h4>
              <p style="margin-bottom: 0;">${booking.specialRequests}</p>
            </div>
          ` : ''}
          
          <div style="text-align: center; margin: 30px 0;">
            <p style="margin-bottom: 20px;">We'll contact you within 24 hours to confirm your booking and provide further details.</p>
          </div>
          
          <div class="footer">
            <p><strong>Saanvi Yoga Studio</strong></p>
            <p>Email: info@saanviyoga.com | Phone: +91 9999999999</p>
            <p style="font-size: 12px; color: #999;">This is an automated confirmation email. Please do not reply to this message.</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  private getContactConfirmationHTML(contact: Contact): string {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Message Received - Saanvi Yoga Studio</title>
        <style>
          body {
            font-family: 'Georgia', 'Times New Roman', serif;
            line-height: 1.7;
            color: #2d1b0e;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background: linear-gradient(135deg, #fff8f0 0%, #fef3e2 100%);
          }
          .container {
            background: white;
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 8px 32px rgba(251, 146, 60, 0.15);
            border: 2px solid #fed7aa;
          }
          .header {
            text-align: center;
            margin-bottom: 35px;
            padding-bottom: 25px;
            border-bottom: 3px solid #f97316;
            position: relative;
          }
          .om-symbol {
            font-size: 48px;
            color: #f97316;
            margin-bottom: 10px;
            text-shadow: 0 2px 4px rgba(249, 115, 22, 0.3);
          }
          .studio-name {
            font-size: 32px;
            font-weight: bold;
            background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 8px;
          }
          .tagline {
            color: #92400e;
            font-size: 16px;
            font-style: italic;
            font-weight: 500;
          }
          .namaste-greeting {
            font-size: 24px;
            color: #f97316;
            text-align: center;
            margin: 20px 0;
            font-weight: 600;
          }
          .message-box {
            background: linear-gradient(135deg, #fed7aa 0%, #ffedd5 100%);
            padding: 30px;
            border-radius: 15px;
            margin: 30px 0;
            border-left: 5px solid #f97316;
            position: relative;
          }
          .message-box::before {
            content: "🙏";
            position: absolute;
            top: -10px;
            right: 20px;
            font-size: 24px;
            background: white;
            padding: 5px 10px;
            border-radius: 50%;
            border: 2px solid #f97316;
          }
          .message-title {
            color: #7c2d12;
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 15px;
          }
          .message-content {
            background: rgba(255, 255, 255, 0.7);
            padding: 20px;
            border-radius: 10px;
            margin: 10px 0;
            border: 1px solid #fed7aa;
          }
          .footer {
            text-align: center;
            margin-top: 40px;
            padding-top: 25px;
            border-top: 2px solid #fed7aa;
            color: #92400e;
          }
          .footer-logo {
            font-size: 20px;
            font-weight: bold;
            color: #f97316;
            margin-bottom: 10px;
          }
          .blessing {
            font-style: italic;
            color: #92400e;
            margin: 20px 0;
            font-size: 14px;
          }
          .lotus-divider {
            text-align: center;
            margin: 30px 0;
            font-size: 24px;
            color: #f97316;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="om-symbol">ॐ</div>
            <div class="studio-name">Saanvi Yoga Studio</div>
            <div class="tagline">योगः चित्त-वृत्ति-निरोधः | Yoga is the cessation of fluctuations of the mind</div>
          </div>
          
          <div class="namaste-greeting">🙏 Namaste ${contact.firstName} ${contact.lastName} 🙏</div>
          
          <p style="color: #2d1b0e; font-size: 16px; margin-bottom: 20px;">
            Thank you for connecting with Saanvi Yoga Studio. Your message has been received with gratitude, 
            and our team will respond to you with the same care and attention we bring to our practice.
          </p>
          
          <div class="message-box">
            <div class="message-title">📿 Your Inquiry Details:</div>
            <div class="message-content">
              <p style="margin-bottom: 10px;"><strong>Interest Area:</strong> ${contact.interestedIn}</p>
              <p style="margin-bottom: 10px;"><strong>Phone:</strong> ${contact.phone}</p>
              <p style="margin-bottom: 0;"><strong>Your Message:</strong></p>
              <p style="font-style: italic; margin-top: 10px; padding: 15px; background: rgba(249, 115, 22, 0.1); border-radius: 8px; border-left: 3px solid #f97316;">"${contact.message}"</p>
            </div>
          </div>
          
          <div class="lotus-divider">🪷 ✨ 🪷</div>
          
          <p style="color: #2d1b0e; font-size: 16px; text-align: center; margin: 25px 0;">
            We typically respond within 24 hours during our regular hours. Your wellness journey is important to us, 
            and we look forward to guiding you on this transformative path.
          </p>
          
          <div class="blessing">
            <em>"May your practice bring you peace, strength, and inner harmony."</em>
          </div>
          
          <div class="footer">
            <div class="footer-logo">🧘‍♀️ Saanvi Yoga Studio</div>
            <p style="margin: 10px 0;">Email: info@saanviyoga.com | Phone: +91 9999999999</p>
            <p style="font-size: 12px; color: #a16207; margin-top: 15px;">
              This is an automated confirmation. Please do not reply to this message.
            </p>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  private getContactNotificationHTML(contact: Contact): string {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 700px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f8fafc;
          }
          .container {
            background: white;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            border-left: 5px solid #f97316;
          }
          .header {
            background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
            color: white;
            padding: 25px;
            border-radius: 8px;
            margin-bottom: 30px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
          }
          .header p {
            margin: 10px 0 0 0;
            opacity: 0.9;
          }
          .contact-details {
            background: #f8fafc;
            padding: 25px;
            border-radius: 8px;
            margin: 20px 0;
            border: 1px solid #e2e8f0;
          }
          .detail-row {
            display: flex;
            margin-bottom: 15px;
            align-items: flex-start;
          }
          .detail-label {
            font-weight: 600;
            color: #374151;
            min-width: 130px;
            flex-shrink: 0;
          }
          .detail-value {
            color: #1f2937;
            flex: 1;
          }
          .message-section {
            background: linear-gradient(135deg, #fef3e2 0%, #fed7aa 100%);
            padding: 25px;
            border-radius: 8px;
            margin: 20px 0;
            border-left: 4px solid #f97316;
          }
          .message-text {
            background: white;
            padding: 20px;
            border-radius: 6px;
            font-style: italic;
            border: 1px solid #fed7aa;
            margin-top: 10px;
          }
          .action-buttons {
            text-align: center;
            margin: 30px 0;
          }
          .btn {
            display: inline-block;
            background: #f97316;
            color: white;
            padding: 12px 24px;
            text-decoration: none;
            border-radius: 6px;
            font-weight: 600;
            margin: 0 10px;
          }
          .btn-secondary {
            background: #6b7280;
          }
          .timestamp {
            text-align: center;
            color: #6b7280;
            font-size: 14px;
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid #e5e7eb;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🧘‍♀️ New Contact Form Submission</h1>
            <p>Someone has reached out through the Saanvi Yoga Studio website</p>
          </div>
          
          <div class="contact-details">
            <h3 style="margin-top: 0; color: #f97316;">Contact Information:</h3>
            <div class="detail-row">
              <span class="detail-label">Full Name:</span>
              <span class="detail-value"><strong>${contact.firstName} ${contact.lastName}</strong></span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Email:</span>
              <span class="detail-value"><a href="mailto:${contact.email}" style="color: #f97316;">${contact.email}</a></span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Phone:</span>
              <span class="detail-value"><a href="tel:${contact.phone}" style="color: #f97316;">${contact.phone}</a></span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Interested In:</span>
              <span class="detail-value"><strong>${contact.interestedIn}</strong></span>
            </div>
          </div>
          
          <div class="message-section">
            <h3 style="margin-top: 0; color: #7c2d12;">Their Message:</h3>
            <div class="message-text">
              "${contact.message}"
            </div>
          </div>
          
          <div class="action-buttons">
            <a href="mailto:${contact.email}?subject=Re: Your inquiry about ${contact.interestedIn}" class="btn">
              📧 Reply via Email
            </a>
            <a href="tel:${contact.phone}" class="btn btn-secondary">
              📞 Call Now
            </a>
          </div>
          
          <div class="timestamp">
            <p>Form submitted on: ${new Date().toLocaleString('en-IN', { 
              timeZone: 'Asia/Kolkata',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit'
            })} IST</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  private getBookingNotificationHTML(booking: Booking): string {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Consultation Booking</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f9f9f9;
          }
          .container {
            background: white;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          }
          .header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 3px solid #f97316;
          }
          .logo {
            font-size: 28px;
            font-weight: bold;
            color: #f97316;
            margin-bottom: 10px;
          }
          .booking-details {
            background: #fef3e6;
            padding: 20px;
            border-radius: 10px;
            margin: 20px 0;
            border-left: 4px solid #f97316;
          }
          .detail-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
            padding-bottom: 8px;
            border-bottom: 1px solid #f0f0f0;
          }
          .detail-label {
            font-weight: 600;
            color: #7c2d12;
          }
          .message-box {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 8px;
            margin: 15px 0;
            border-left: 4px solid #28a745;
          }
          .urgent {
            background: #fff3cd;
            color: #856404;
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #ffeaa7;
            margin-bottom: 20px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">🧘‍♀️ Saanvi Yoga Studio</div>
            <p style="color: #666; margin: 0;">Admin Notification</p>
          </div>
          
          <div class="urgent">
            <strong>New Consultation Booking</strong> - Please respond within 24 hours
          </div>
          
          <h2 style="color: #f97316;">Booking ID: ${booking.bookingId}</h2>
          
          <div class="booking-details">
            <div class="detail-row">
              <span class="detail-label">Name:</span>
              <span>${booking.firstName} ${booking.lastName}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Email:</span>
              <span>${booking.email}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Phone:</span>
              <span>${booking.phone}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Consultation Type:</span>
              <span>${booking.consultationType}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Preferred Date:</span>
              <span>${booking.preferredDate}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Preferred Time:</span>
              <span>${booking.preferredTime}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Experience Level:</span>
              <span>${booking.experience}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Submitted:</span>
              <span>${new Date(booking.createdAt).toLocaleString()}</span>
            </div>
          </div>
          
          <div class="message-box">
            <h4 style="margin-top: 0; color: #28a745;">Goals & Expectations:</h4>
            <p style="margin-bottom: 0;">${booking.goals}</p>
          </div>

          ${booking.specialRequests ? `
            <div class="message-box">
              <h4 style="margin-top: 0; color: #dc3545;">Special Requests/Health Considerations:</h4>
              <p style="margin-bottom: 0;">${booking.specialRequests}</p>
            </div>
          ` : ''}
          
          <p style="margin-top: 30px; color: #666; font-size: 14px;">
            Please contact the client within 24 hours to confirm their consultation appointment and discuss next steps.
          </p>
        </div>
      </body>
      </html>
    `;
  }
}

export const emailService = new EmailService();
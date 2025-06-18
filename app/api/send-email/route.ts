import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { NextRequest } from 'next/server';

// Simple validation function
interface VisitorData {
    visitorName: string;
    visitorPhone: string;
    visitorEmail?: string;
    founderName: string;
    companyName: string;
}

const validateInput = (data: VisitorData): true => {
    const { visitorName, visitorPhone } = data;
    
    if (!visitorName || visitorName.trim().length < 2) {
        throw new Error('Valid name is required');
    }
    
    if (!visitorPhone || !/^[\+]?[0-9\s\-\(\)]{10,15}$/.test(visitorPhone)) {
        throw new Error('Valid phone number is required');
    }
    
    return true;
};

interface EmailRequestBody extends VisitorData {}

interface MailOptions {
    from: string | undefined;
    to: string;
    subject: string;
    html: string;
}

interface SendMailInfo {
    messageId: string;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
    try {
        const data: EmailRequestBody = await request.json();
        
        // Validate input
        validateInput(data);
        
        const { visitorName, visitorPhone, visitorEmail, founderName, companyName } = data;

        // Create transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        // Test connection (optional, for debugging)
        await transporter.verify();

        const mailOptions: MailOptions = {
            from: process.env.GMAIL_USER,
            to: 'saaviksolutions@gmail.com',
            subject: `[DIGITAL CARD] New Contact Share - ${visitorName}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
                    <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                        <h2 style="color: #333; border-bottom: 2px solid #f22ee5; padding-bottom: 10px;">
                            🤝 New Contact Share from Digital Business Card
                        </h2>
                        
                        <div style="margin: 20px 0;">
                            <h3 style="color: #555; margin-bottom: 15px;">👤 Visitor Information:</h3>
                            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
                                <p style="margin: 8px 0;"><strong>Name:</strong> ${visitorName}</p>
                                <p style="margin: 8px 0;"><strong>Phone:</strong> <a href="tel:${visitorPhone}" style="color: #f22ee5; text-decoration: none;">${visitorPhone}</a></p>
                                ${visitorEmail ? `<p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${visitorEmail}" style="color: #f22ee5; text-decoration: none;">${visitorEmail}</a></p>` : '<p style="margin: 8px 0; color: #666;"><strong>Email:</strong> Not provided</p>'}
                            </div>
                        </div>

                        <div style="margin: 20px 0;">
                            <h3 style="color: #555; margin-bottom: 15px;">🏢 Card Details:</h3>
                            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
                                <p style="margin: 8px 0;"><strong>Card Owner:</strong> ${founderName}</p>
                                <p style="margin: 8px 0;"><strong>Company:</strong> ${companyName}</p>
                            </div>
                        </div>

                        <div style="margin: 20px 0;">
                            <h3 style="color: #555; margin-bottom: 15px;">⏰ Additional Details:</h3>
                            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px;">
                                <p style="margin: 8px 0;"><strong>Date & Time:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
                                <p style="margin: 8px 0;"><strong>Source:</strong> Digital Business Card</p>
                            </div>
                        </div>

                        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #666; font-size: 14px;">
                            <p>This email was automatically generated from your digital business card interaction.</p>
                        </div>
                    </div>
                </div>
            `,
        };

        const info: SendMailInfo = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', info.messageId);

        return NextResponse.json(
            { success: true, message: 'Email sent successfully', messageId: info.messageId },
            { status: 200 }
        );
    } catch (error: any) {
        console.error('Email sending error:', error);
        return NextResponse.json(
            { success: false, error: error.message || 'Failed to send email' },
            { status: 500 }
        );
    }
}
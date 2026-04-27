'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input, Textarea } from '@/components/ui/Input';
import { CheckCircle2, Send } from 'lucide-react';

export function LeadCapture() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        setIsSuccess(true);
      }
    } catch (error) {
      console.error('Submission failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-24 bg-brand/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto glass-effect rounded-3xl border border-white p-8 md:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                Ready to upscale your organization?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Connect with our learning consultants to design a custom curriculum that fits your specific business goals and technical landscape.
              </p>
              
              <div className="pt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-medium">Free skill gap analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-medium">Customized pilot program</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-medium">Flexible deployment models</span>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              {isSuccess ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4 animate-bounce">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Inquiry Received!</h3>
                  <p className="text-muted-foreground max-w-xs">
                    Our team will reach out to you within 24 hours to schedule a consultation.
                  </p>
                  <Button variant="outline" onClick={() => setIsSuccess(false)}>
                    Send another inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input name="firstName" label="First Name" placeholder="John" required />
                    <Input name="lastName" label="Last Name" placeholder="Doe" required />
                  </div>
                  <Input name="email" type="email" label="Work Email" placeholder="john@company.com" required />
                  <Input name="company" label="Company Name" placeholder="Google" required />
                  <Textarea name="message" label="How can we help?" placeholder="Tell us about your team's needs..." />
                  
                  <Button 
                    type="submit" 
                    className="w-full h-14 text-lg gap-2 mt-4" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : (
                      <>Send Inquiry <Send size={18} /></>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

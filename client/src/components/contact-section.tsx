
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Mail, Linkedin, Github, MapPin, Globe } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {

  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      message: ''
    }
  });

  const onSubmit = (data: ContactFormData) => {
    // Pure frontend - open email client with pre-filled message
    const subject = `Portfolio Contact: ${data.name}${data.company ? ` from ${data.company}` : ''}`;
    const body = `Hello Imed,

I'm reaching out through your portfolio website.

Name: ${data.name}
Email: ${data.email}
${data.company ? `Company: ${data.company}\n` : ''}
Message:
${data.message}

Best regards,
${data.name}`;

    const mailtoLink = `mailto:aouidaneimad@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    toast({
      title: 'Email Client Opened',
      description: 'Please send the message from your email client.',
    });
    
    form.reset();
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "aouidaneimad@gmail.com",
      link: "mailto:aouidaneimad@gmail.com"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/imed-eddine-aouidane-152b17201",
      link: "https://www.linkedin.com/in/imed-eddine-aouidane-152b17201"
    },
    {
      icon: Github,
      title: "GitHub", 
      value: "github.com/imdad19",
      link: "https://github.com/imdad19"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Algeria (Open to European relocation)"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-portfolio-secondary relative scroll-mt-20">
      {/* Abstract pattern background */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">Let's Connect</h2>
          <p className="text-xl text-gray-300">Open to opportunities across Europe and remote collaborations</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="glass-effect rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-[var(--portfolio-accent)] mb-6">Get In Touch</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-12 h-12 bg-[var(--portfolio-accent)] bg-opacity-20 rounded-full flex items-center justify-center mr-4 hover:bg-opacity-30 transition-all duration-300">
                    <info.icon className="w-5 h-5 text-[var(--portfolio-accent)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{info.title}</h4>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-[var(--portfolio-accent)] transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-300">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Professional Mobility */}
            <div className="mt-8 p-6 glass-effect rounded-xl border border-[var(--portfolio-accent)] border-opacity-30">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--portfolio-accent)] to-[var(--portfolio-coral)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-[var(--portfolio-accent)] mb-2">Global Mobility</h4>
                <p className="text-gray-300 text-sm mb-3">Open to international opportunities worldwide</p>
                <div className="flex justify-center space-x-4 text-xs text-gray-400">
                  <span className="flex items-center">
                    <i className="fas fa-check-circle text-green-400 mr-1"></i>
                    Remote Ready
                  </span>
                  <span className="flex items-center">
                    <i className="fas fa-passport text-blue-400 mr-1"></i>
                    Visa Support Welcome
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="glass-effect rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-[var(--portfolio-accent)] mb-6">Send a Message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your name" 
                          className="bg-portfolio-primary border-gray-600 focus:border-[var(--portfolio-accent)]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input 
                          type="email"
                          placeholder="your.email@company.com" 
                          className="bg-portfolio-primary border-gray-600 focus:border-[var(--portfolio-accent)]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company/Organization</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Company name (optional)" 
                          className="bg-portfolio-primary border-gray-600 focus:border-[var(--portfolio-accent)]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          rows={5}
                          placeholder="Tell me about the opportunity or project..."
                          className="bg-portfolio-primary border-gray-600 focus:border-[var(--portfolio-accent)] resize-none"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-[var(--portfolio-accent)] to-[var(--portfolio-coral)] hover:opacity-90 transition-opacity"
                >
                  Send Message
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}

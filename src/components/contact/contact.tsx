'use client';

import { ArrowUpRight, Instagram, Mail, Phone, Send } from 'lucide-react';
import type React from 'react';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="bg-background py-12 px-6  lg:px-[417px]">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <span className="text-sm lg:text-base font-semibold tracking-wide uppercase bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400  bg-clip-text text-transparent">
              Contate-nos
            </span>
            <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Vamos conversar
            </h2>
            <p className="mt-4 max-w-md text-pretty leading-relaxed text-zinc-500 dark:text-zinc-300">
              Tem um projeto em mente? Nós adorariamos ouvir de você nos envie
              uma mensagem vamos debater sobre.
            </p>

            <div className="mt-10 space-y-6">
              <ContactItem
                icon={<Mail className="h-5 w-5" />}
                label="Email"
                value="heitorao32@gmail.com"
                href="mailto:heitorao32@gmail.com"
              />
              <ContactItem
                icon={<Phone className="h-5 w-5" />}
                label="Whatsapp"
                value="+558592248448"
                href="tel:+558592248448"
              />
              <ContactItem
                icon={<Instagram className="h-5 w-5" />}
                label="Instagram"
                value="@neverdevup"
              />
            </div>

            <div className="mt-10 flex gap-4">
              <SocialLink href="#" label="X/Twitter" />
              <SocialLink href="#" label="LinkedIn" />
              <SocialLink href="#" label="Instagram" />
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-foreground"
                >
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="h-12 bg-background"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="h-12 bg-background"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={4}
                  className="resize-none bg-background"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-12 w-full gap-2 text-base font-medium"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="group flex items-center gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        {icon}
      </div>
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="font-medium text-foreground">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block transition-opacity hover:opacity-80">
        {content}
      </a>
    );
  }

  return content;
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="group flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
    >
      {label}
      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}

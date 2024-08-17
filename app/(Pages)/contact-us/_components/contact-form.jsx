"use client";
import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { PhoneInput } from '@/components/ui/phone-input';
import Link from "next/link";
import { Facebook, Instagram, Youtube, AtSign } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import gsap from "gsap";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const formRef = useRef(null);
  const alertRef = useRef(null);

  useEffect(() => {
    if (isSubmitted || error) {
      // Animate alert appearance
      gsap.fromTo(alertRef.current,
        { opacity: 0, y: +50 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.2 }
      );

      // Hide alert after 5 seconds
      gsap.delayedCall(5, () => {
        gsap.to(alertRef.current, {
          opacity: 0,
          y: -50,
          duration: 0.5,
          onComplete: () => setIsSubmitted(false)
        });
      });
    }
  }, [isSubmitted, error]);

  const handleChange = (e) => {
    const { name, value } = e.target || {};

    if (!name) {
      console.error('Input does not have a name attribute.');
      return;
    }

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await fetch('https://formbold.com/s/6MbaW', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString(),
      });

      setIsSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
      });
    } catch (error) {
      setError('Something went wrong, please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-10 flex flex-col-reverse items-start md:flex-row gap-20 relative max-w-[95rem] mx-auto px-5">
      <form onSubmit={handleSubmit} className="w-full space-y-3" ref={formRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <div>
            <Label className="text-lg text-accent font-medium">Name:</Label>
            <Input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="bg-accent h-14 text-lg text-primary focus-visible:ring-accent"
              required
            />
          </div>
          <div>
            <Label className="text-lg text-accent font-medium">Phone Number:</Label>
            <PhoneInput
              // placeholder="Enter phone number"
              name="phone"
              value={formData.phone}
              onChange={(value) => setFormData(prev => ({ ...prev, phone: value }))}
              required
            />
          </div>
        </div>
        <div>
          <Label className="text-lg text-accent font-medium">Email Address:</Label>
          <Input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-accent h-14 text-lg text-primary focus-visible:ring-accent"
            required
          />
        </div>
        <div>
          <Label className="text-lg text-accent font-medium">Message:</Label>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="bg-accent text-lg text-primary focus-visible:ring-accent"
            rows={10}
            required
          />
        </div>

        <div className="flex items-center text-lg gap-2">
          <Checkbox
            className="bg-accent w-5 h-5"
            required
          />
          <p className="text-accent font-medium">
            By checking this box, you agree to our
            <span>
              <Link href="/pr">Privacy Policy</Link>
            </span>
            and consent to the use of cookies in your browser.
          </p>
        </div>

        <Button
          className="w-full text-primary h-14 text-lg"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>

      <div className="w-1/2">
        <h2>Contact Details:</h2>
        <div className="pl-2 pt-2 text-lg font-medium">
          <h3 className="text-md sm:text-lg">Email:<br className="block md:hidden" /><Link href="mailto:info@aceyourscore.com"> info@aceyourscore.com</Link></h3>
          <h3 className="w-full min-w-40">Phone Number:<br className="block md:hidden" /><Link href="tel:+212616139962"> {"+212 616 139962"}</Link></h3>
          <div className="sm:flex sm:items-center sm:justify-between pt-4">
            <ul className="mt-8 flex justify-start gap-6 sm:mt-0 sm:justify-end">
              <li>
                <a
                  href="https://www.facebook.com/people/Fahd-Ays/pfbid035D2jFXJWYu69WueEzb9NYQDbta89H3JWzLsp2hDVyqwdBfSwogRptXCZwneTjyPil/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-accent transition hover:opacity-75"
                >
                  <span className="sr-only">Facebook</span>
                  <Facebook />
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/fahd.aceyourscore"
                  rel="noreferrer"
                  target="_blank"
                  className="text-accent transition hover:opacity-75"
                >
                  <span className="sr-only">Instagram</span>
                  <Instagram />
                </a>
              </li>

              <li>
                <a
                  href="https://www.youtube.com/@fahd-je7gb"
                  rel="noreferrer"
                  target="_blank"
                  className="text-accent transition hover:opacity-75"
                >
                  <span className="sr-only">YouTube</span>
                  <Youtube />
                </a>
              </li>

              <li>
                <a
                  href="https://www.threads.net/@fahd.aceyourscore"
                  rel="noreferrer"
                  target="_blank"
                  className="text-accent transition hover:opacity-75"
                >
                  <span className="sr-only">Threads</span>
                  <AtSign />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Alerts positioned at the top-center of the viewport */}
      {(isSubmitted || error) && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-auto" ref={alertRef}>
          {isSubmitted && (
            <Alert variant="success" className="mb-2 bg-green-500 border-2 border-accent">
              <AlertTitle>Success!</AlertTitle>
              <AlertDescription>Thank you for your message!</AlertDescription>
            </Alert>
          )}
          {error && (
            <Alert variant="error" className="mb-2 bg-red-500 border-2 border-accent">
              <AlertTitle>Error!</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </div>
      )}
    </div>
  );
}

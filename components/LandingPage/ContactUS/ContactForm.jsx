"use client";

import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { PhoneInput } from "@/components/ui/phone-input";
import Link from "next/link";
import { Facebook, Instagram, Youtube, AtSign, Clock, CalendarIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import gsap from "gsap";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/libs/utils";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    date: '',
    time: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const formRef = useRef(null);
  const alertRef = useRef(null);
  const [date, setDate] = useState(undefined);
  const [time, setTime] = useState('');

  useEffect(() => {
    if (isSubmitted || error) {
      gsap.fromTo(alertRef.current,
        { opacity: 0, y: +50 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.2 }
      );
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

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      date: date ? format(date, "yyyy-MM-dd") : '',
      time
    }));
  }, [date, time]);

  const handleChange = (e) => {
    const { name, value } = e.target || {};
    if (!name) {
      console.error('Input does not have a name attribute.');
      return;
    }
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    try {
      await fetch('https://formbold.com/s/6MbaW', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });
      // Send a confirmation email to the user
      await fetch('/api/send-email/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      setIsSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
        date: '',
        time: ''
      });
      setDate(undefined);
      setTime('');
    } catch (error) {
      setError('Something went wrong, please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const timeOptions = [
    { value: '09:00', label: '9:00 - 10:00' },
    { value: '10:00', label: '10:00 - 11:00' },
    { value: '11:00', label: '11:00 - 12:00' },
    { value: '12:00', label: '12:00 - 13:00' },
    { value: '13:00', label: '13:00 - 14:00' },
    { value: '14:00', label: '14:00 - 15:00' },
    { value: '15:00', label: '15:00 - 16:00' },
    { value: '16:00', label: '16:00 - 17:00' },
    { value: '17:00', label: '17:00 - 18:00' },
    { value: '18:00', label: '18:00 - 19:00' }
  ];


  return (
    <div className="py-10 flex flex-col-reverse items-start md:flex-row gap-20 relative">
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
        <div className="space-y-2 text-lg">
          <Label className="text-lg text-accent font-medium">Date:</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-lg text-left font-normal bg-accent text-primary h-14 hover:text-primary ",
                )}
              >
                <CalendarIcon className="mr-2 h-5 w-5" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                className={"bg-primary text-accent"}
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="space-y-2">
          <Label htmlFor="time" className="text-lg text-accent font-medium">Time</Label>
          <div className="relative">
            <select
              id="time"
              name="time"
              value={formData.time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full rounded-lg text-lg h-14 bg-accent text-primary px-3"
              required
            >
              <option value="" disabled>Select a time</option>
              {timeOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
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
          className="w-full bg-accent text-primary h-14 text-lg"
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

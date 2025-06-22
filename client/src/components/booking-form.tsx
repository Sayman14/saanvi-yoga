import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Calendar, Clock, User, Phone, Mail, Target } from "lucide-react";

// Form validation schema for consultations
const consultationSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  consultationType: z.string().min(1, "Please select a consultation type"),
  preferredDate: z.string().min(1, "Please select a preferred date"),
  preferredTime: z.string().min(1, "Please select a preferred time"),
  experience: z.string().min(1, "Please select your experience level"),
  goals: z.string().min(10, "Please describe your goals (minimum 10 characters)"),
  specialRequests: z.string().optional(),
});

type ConsultationFormData = z.infer<typeof consultationSchema>;

export default function BookingForm() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      consultationType: "",
      preferredDate: "",
      preferredTime: "",
      experience: "",
      goals: "",
      specialRequests: "",
    },
  });

  const bookingMutation = useMutation({
    mutationFn: async (data: ConsultationFormData) => {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error("Failed to book consultation");
      }
      
      return await response.json();
    },
    onSuccess: (data: any) => {
      toast({
        title: "Consultation Booked Successfully!",
        description: `Your consultation has been scheduled. Booking ID: ${data.bookingId}. Check your email for confirmation details.`,
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/bookings"] });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to book consultation. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ConsultationFormData) => {
    bookingMutation.mutate(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-900 flex items-center">
                  <User className="w-4 h-4 mr-2 text-orange-500" />
                  First Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your first name"
                    className="border-gray-300 bg-white text-gray-900 focus:ring-orange-500 focus:border-orange-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-900 flex items-center">
                  <User className="w-4 h-4 mr-2 text-orange-500" />
                  Last Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your last name"
                    className="border-gray-300 bg-white text-gray-900 focus:ring-orange-500 focus:border-orange-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-900 flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-orange-500" />
                  Email Address
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="border-gray-300 bg-white text-gray-900 focus:ring-orange-500 focus:border-orange-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-900 flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-orange-500" />
                  Phone Number
                </FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="border-gray-300 bg-white text-gray-900 focus:ring-orange-500 focus:border-orange-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="consultationType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-gray-900">
                Consultation Type
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="border-gray-300 bg-white text-gray-900 focus:ring-orange-500 focus:border-orange-500">
                    <SelectValue placeholder="Select consultation type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="initial">Initial Consultation (Free)</SelectItem>
                  <SelectItem value="private">Private Session Planning</SelectItem>
                  <SelectItem value="group">Group Class Planning</SelectItem>
                  <SelectItem value="corporate">Corporate Wellness Program</SelectItem>
                  <SelectItem value="specialized">Specialized Needs Assessment</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="preferredDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-900 flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-orange-500" />
                  Preferred Date
                </FormLabel>
                <FormControl>
                  <Input
                    type="date"
                    className="border-gray-300 bg-white text-gray-900 focus:ring-orange-500 focus:border-orange-500"
                    min={new Date().toISOString().split('T')[0]}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="preferredTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-900 flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-orange-500" />
                  Preferred Time
                </FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="border-gray-300 bg-white text-gray-900 focus:ring-orange-500 focus:border-orange-500">
                      <SelectValue placeholder="Select preferred time" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="6:00 AM">6:00 AM</SelectItem>
                    <SelectItem value="7:00 AM">7:00 AM</SelectItem>
                    <SelectItem value="8:00 AM">8:00 AM</SelectItem>
                    <SelectItem value="9:00 AM">9:00 AM</SelectItem>
                    <SelectItem value="10:00 AM">10:00 AM</SelectItem>
                    <SelectItem value="11:00 AM">11:00 AM</SelectItem>
                    <SelectItem value="12:00 PM">12:00 PM</SelectItem>
                    <SelectItem value="1:00 PM">1:00 PM</SelectItem>
                    <SelectItem value="2:00 PM">2:00 PM</SelectItem>
                    <SelectItem value="3:00 PM">3:00 PM</SelectItem>
                    <SelectItem value="4:00 PM">4:00 PM</SelectItem>
                    <SelectItem value="5:00 PM">5:00 PM</SelectItem>
                    <SelectItem value="6:00 PM">6:00 PM</SelectItem>
                    <SelectItem value="7:00 PM">7:00 PM</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="experience"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-gray-900">
                Yoga Experience Level
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="border-gray-300 bg-white text-gray-900 focus:ring-orange-500 focus:border-orange-500">
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="beginner">Complete Beginner</SelectItem>
                  <SelectItem value="some">Some Experience (1-6 months)</SelectItem>
                  <SelectItem value="intermediate">Intermediate (6 months - 2 years)</SelectItem>
                  <SelectItem value="advanced">Advanced (2+ years)</SelectItem>
                  <SelectItem value="teacher">Yoga Teacher/Practitioner</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="goals"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-gray-900 flex items-center">
                <Target className="w-4 h-4 mr-2 text-orange-500" />
                Your Goals & Expectations
              </FormLabel>
              <FormControl>
                <Textarea
                  rows={4}
                  placeholder="What do you hope to achieve through yoga? (e.g., stress relief, flexibility, strength, spiritual growth, etc.)"
                  className="border-gray-300 bg-white text-gray-900 focus:ring-orange-500 focus:border-orange-500"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="specialRequests"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-gray-900">
                Special Requests or Health Considerations
              </FormLabel>
              <FormControl>
                <Textarea
                  rows={3}
                  placeholder="Any injuries, health conditions, or special requirements we should know about? (Optional)"
                  className="border-gray-300 bg-white text-gray-900 focus:ring-orange-500 focus:border-orange-500"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={bookingMutation.isPending}
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {bookingMutation.isPending ? "Booking Consultation..." : "Book Free Consultation"}
        </Button>

        <p className="text-sm text-gray-600 text-center">
          Your consultation is completely free. We'll contact you within 24 hours to confirm your appointment.
        </p>
      </form>
    </Form>
  );
}
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { occasions, reservationTime } from "@/lib/const";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon, Loader2 } from "lucide-react";
import { Calendar } from "./ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  date: z.string().min(1, "Date is required"),
  time: z.enum(reservationTime as [string, ...string[]], {
    errorMap: () => ({ message: "Please select a valid time." }),
  }),
  guest: z
    .number()
    .min(1, "Must book for at least 1 guest")
    .max(10, "Can't book more than 10 guest"),
  occasions: z.enum(occasions as [string, ...string[]], {
    errorMap: () => ({ message: "Please select a valid occasion." }),
  }),
  notes: z.string().optional(),
});

export const ReservationForm = () => {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      date: "",
      time: "",
      guest: undefined,
      occasions: "",
      notes: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) =>
    startTransition(async () => {
      await new Promise((resolve) => setTimeout(resolve, 5000));
      {
        const reservationData = {
          date: format(new Date(values.date), "PPP"),
          time: values.time,
          guests: values.guest,
          occasion: values.occasions,
          notes: values.notes,
        };

        toast.success(
          `Reservation confirmed for ${reservationData.date} at ${reservationData.time} for ${reservationData.guests} guest(s). Occasion: ${reservationData.occasion}`
        );

        form.reset({
          date: "",
          time: "",
          guest: undefined,
          occasions: "",
          notes: "",
        });
      }
    });

  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle className="text-2xl">Make a Reservation</CardTitle>
        <CardDescription>
          Fill out the form below to book your table
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col justify-between flex-grow"
          >
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date</FormLabel>
                    <Popover
                      open={isDatePickerOpen}
                      onOpenChange={setIsDatePickerOpen}
                    >
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a reservation date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={
                            field.value ? new Date(field.value) : undefined
                          }
                          onSelect={(date) => {
                            field.onChange(date ? date.toISOString() : "");
                            setIsDatePickerOpen(false);
                          }}
                          disabled={(date) => date < new Date()}
                          captionLayout="dropdown"
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Time</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a reservation time" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {reservationTime.map((item) => {
                          return (
                            <SelectItem key={item} value={item}>
                              {item}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="guest"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Guests</FormLabel>
                    <Select
                      onValueChange={(value) => field.onChange(parseInt(value))}
                      defaultValue={field.value?.toString()}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select number of guests" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Array.from({ length: 10 }, (_, i) => i + 1).map(
                          (num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} {num === 1 ? "Guest" : "Guests"}
                            </SelectItem>
                          )
                        )}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="occasions"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Occasion</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a reservation type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {occasions.map((item) => {
                          return (
                            <SelectItem key={item} value={item}>
                              {item}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Notes</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Let us know if you have any special requests"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button
              disabled={isPending}
              variant="lemon"
              type="submit"
              className="w-full"
            >
              Make your reservation{" "}
              {isPending && (
                <span>
                  <Loader2 className="size-4 animate-spin" />
                </span>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

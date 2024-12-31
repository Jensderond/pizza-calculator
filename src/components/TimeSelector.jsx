import { Calendar } from "./ui/calendar";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { CalendarIcon, Clock } from "lucide-react";
import { format } from "date-fns";
import { cn } from "../lib/utils";

export default function TimeSelector({ date, setDate, time, setTime }) {
  return (
    <div className="flex flex-wrap md:flex-nowrap space-y-4 md:space-y-0 md:space-x-4">
      <div className="w-full md:w-1/2 space-y-2">
        <Label htmlFor="date" className="text-lg font-semibold text-orange-700">
          Day of the meal
        </Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-full justify-start text-left font-normal bg-white border-2 border-orange-300 hover:border-orange-500",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4 text-orange-500" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              autoFocus
              className="rounded-md border-2 border-orange-300 bg-white"
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="w-full md:w-1/2 space-y-2">
        <Label htmlFor="time" className="text-lg font-semibold text-orange-700">
          Pizza Time
        </Label>
        <div className="flex">
          <Input
            id="time"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="flex-1 bg-white border-2 border-orange-300 focus:border-orange-500"
          />
          <Button
            variant="outline"
            size="icon"
            className="ml-2 bg-orange-500 text-white hover:bg-orange-600"
          >
            <Clock className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

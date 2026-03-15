"use client";

import * as React from "react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import {
  DayPicker,
  getDefaultClassNames,
  type DayButton,
} from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";

// --- Types ---
export type EventProps = Partial<{
  start: string;
  end: string;
  location: string;
  description: string;
  title: string;
}>;

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"];
  events?: EventProps[];
  setCurrent?: (props: EventProps) => void;
};

// --- Day Cell ---
type CalendarDayCellProps = {
  date: Date;
  displayMonth: Date;
  events: EventProps[];
  setCurrent: (props: EventProps) => void;
};

const CalendarDayCell = ({
  date,
  displayMonth,
  events,
  setCurrent,
}: CalendarDayCellProps) => {
  const today = new Date();
  const isToday =
    today.getDate() === date.getDate() &&
    today.getMonth() === date.getMonth() &&
    today.getFullYear() === date.getFullYear();

  const currentMonth = displayMonth.getMonth() === date.getMonth();

  const filteredEvents = events?.filter(({ start, end }) => {
    if (!start || !end) return false;
    const eventStartDate = new Date(start);
    const eventEndDate = new Date(end);
    eventStartDate.setHours(0, 0, 0, 0);
    eventEndDate.setHours(23, 59, 59, 999);
    return date >= eventStartDate && date <= eventEndDate;
  });

  return (
    <td className="w-full overflow-hidden p-0 align-top">
      <div
        className={cn(
          "no-scrollbar flex h-15 max-h-[200px] flex-col border border-[#A2A2A2]/50 p-0.5 md:p-1 lg:h-35",
          isToday && "bg-agsm-blue-150",
          !currentMonth && "text-agsm-blue-200/40",
        )}
      >
        <p
          className={cn(
            "text-agsm-blue-200 sticky top-0 mb-0.5 px-0.5 text-[12px] font-bold md:mb-1 md:px-1 md:text-lg",
            isToday && "text-agsm-blue-200/65",
            !currentMonth && "opacity-40",
          )}
        >
          {date.getDate()}
        </p>

        {filteredEvents?.map(
          ({ title, start, end, location, description }, index) => {
            const startDate = new Date(start as string);
            if (
              startDate.getDate() === date.getDate() &&
              startDate.getMonth() === date.getMonth() &&
              startDate.getFullYear() === date.getFullYear()
            ) {
              return (
                <button
                  key={index}
                  onClick={() =>
                    setCurrent({ title, start, end, location, description })
                  }
                  className="bg-agsm-blue-200 my-auto mb-0.5 w-full overflow-hidden rounded px-0.5 py-0.5 text-left text-xs text-white transition hover:cursor-pointer hover:opacity-75 md:mb-1 md:px-1 md:py-1"
                >
                  <p className="truncate text-[8px] font-bold md:text-[10px]">
                    {title}
                  </p>
                  {/* Hide time/location detail on mobile */}
                  <p className="hidden text-[8px] md:block">
                    {location} |{" "}
                    {new Date(start as string).toLocaleTimeString("default", {
                      hour: "numeric",
                      minute: "2-digit",
                      hour12: true,
                    })}{" "}
                    -{" "}
                    {new Date(end as string).toLocaleTimeString("default", {
                      hour: "numeric",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </p>
                </button>
              );
            }
            return null;
          },
        )}
      </div>
    </td>
  );
};

// --- Main Calendar ---
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  events = [],
  setCurrent,
  ...props
}: CalendarProps) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "text-agsm-blue-200 group/calendar [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className,
      )}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString("default", { month: "short" }),
        formatWeekdayName: (date) =>
          date.toLocaleString("default", { weekday: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cn("w-full", defaultClassNames.root),
        months: cn(
          "flex gap-4 flex-col md:flex-row gap-4 w-full",
          defaultClassNames.months,
        ),
        month: cn(
          "flex flex-col w-full gap-3 md:gap-5",
          defaultClassNames.month,
        ),
        nav: cn(
          "flex items-center absolute top-97 md:top-133 justify-center lg:ml-50 md:pl-45 gap-60 md:gap-70",
          defaultClassNames.nav,
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          defaultClassNames.button_previous,
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          defaultClassNames.button_next,
        ),
        month_caption: cn(
          "flex justify-center uppercase h-(--cell-size) w-full pr-5",
          defaultClassNames.month_caption,
        ),
        dropdowns: cn(
          "w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5",
          defaultClassNames.dropdowns,
        ),
        dropdown_root: cn(
          "relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md",
          defaultClassNames.dropdown_root,
        ),
        dropdown: cn(
          "absolute bg-popover inset-0 opacity-0",
          defaultClassNames.dropdown,
        ),
        caption_label: cn(
          "select-none font-bold justify-self-center",
          captionLayout === "label"
            ? "text-lg md:text-4xl"
            : "rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5",
          defaultClassNames.caption_label,
        ),
        table: "w-full border-collapse",
        weekdays: cn(
          "flex rounded-t-xl uppercase bg-agsm-blue-150 border border-[#A2A2A2] pt-2 md:pt-4",
          defaultClassNames.weekdays,
        ),
        weekday: cn(
          "text-muted-foreground text-agsm-blue-200 rounded-md flex-1 font-bold text-sm md:text-xl pb-2 md:pb-5 select-none",
          defaultClassNames.weekday,
        ),
        week: cn("flex w-full", defaultClassNames.week),
        week_number_header: cn(
          "select-none w-(--cell-size)",
          defaultClassNames.week_number_header,
        ),
        week_number: cn(
          "text-[0.8rem] select-none text-muted-foreground",
          defaultClassNames.week_number,
        ),
        day: cn(
          "relative w-full h-full font-bold [&:last-child[data-selected=true]_button]:rounded-r-md group/day select-none",
          props.showWeekNumber
            ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-md"
            : "[&:first-child[data-selected=true]_button]:rounded-l-md",
          defaultClassNames.day,
        ),
        range_start: cn(
          "rounded-l-md bg-accent",
          defaultClassNames.range_start,
        ),
        range_middle: cn("rounded-none", defaultClassNames.range_middle),
        range_end: cn("rounded-r-md bg-accent", defaultClassNames.range_end),
        today: cn(
          "bg-agsm-blue-150 text-agsm-blue-200/65 data-[selected=true]:rounded-none",
          defaultClassNames.today,
        ),
        outside: cn(
          "text-agsm-blue-200/40 aria-selected:text-muted-foreground",
          defaultClassNames.outside,
        ),
        disabled: cn(
          "text-muted-foreground opacity-50",
          defaultClassNames.disabled,
        ),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => (
          <div
            data-slot="calendar"
            ref={rootRef}
            className={cn(className)}
            {...props}
          />
        ),
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left")
            return (
              <ChevronLeftIcon
                className={cn("size-6 text-slate-500", className)}
                {...props}
              />
            );
          if (orientation === "right")
            return (
              <ChevronRightIcon
                className={cn("size-6 text-slate-500", className)}
                {...props}
              />
            );
          return (
            <ChevronDownIcon className={cn("size-4", className)} {...props} />
          );
        },
        Day: ({ day }) => (
          <CalendarDayCell
            date={day.date}
            displayMonth={day.displayMonth}
            events={events}
            setCurrent={setCurrent ?? (() => {})}
          />
        ),
        WeekNumber: ({ children, ...props }) => (
          <td {...props}>
            <div className="flex size-(--cell-size) items-center justify-center text-start">
              {children}
            </div>
          </td>
        ),
        ...components,
      }}
      {...props}
    />
  );
}

// --- Keep your CalendarDayButton unchanged ---
function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames();

  const ref = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString()}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground hover:text-agsm-blue-200/70 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 dark:hover:text-accent-foreground hover:bg-agsm-blue-150 flex aspect-square size-auto w-full min-w-(--cell-size) items-start justify-start p-2 leading-none font-bold group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] hover:rounded-none data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md [&>span]:text-xs [&>span]:opacity-70",
        defaultClassNames.day,
        className,
      )}
      {...props}
    />
  );
}

export { Calendar, CalendarDayButton };

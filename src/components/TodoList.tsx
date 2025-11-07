"use client"

import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import { Button } from "./ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

export default function TodoList() {

    const [date, setDate] = useState<Date | undefined>(new Date())
    const [open, setOpen] = useState(false)

    return (
        <div>

            <h1 className="text-lg font-medium mb-6">Todo List</h1>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        className="w-full">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(date) => {
                            setOpen(false)
                            if (date) {
                                setDate(date)
                            }
                        }}
                    />
                </PopoverContent>
            </Popover>
            <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
                <Card className="p-4">
                    <div className="flex items-center gap-4">
                        <Checkbox id="todo-1" />
                        <label
                            htmlFor="todo-1"
                            className="text-sm font-muted-foreground">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit
                        </label>
                    </div>
                </Card><Card className="p-4">
                    <div className="flex items-center gap-4">
                        <Checkbox id="todo-1" />
                        <label
                            htmlFor="todo-1"
                            className="text-sm font-muted-foreground">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit
                        </label>
                    </div>
                </Card><Card className="p-4">
                    <div className="flex items-center gap-4">
                        <Checkbox id="todo-1" />
                        <label
                            htmlFor="todo-1"
                            className="text-sm font-muted-foreground">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit
                        </label>
                    </div>
                </Card><Card className="p-4">
                    <div className="flex items-center gap-4">
                        <Checkbox id="todo-1" />
                        <label
                            htmlFor="todo-1"
                            className="text-sm font-muted-foreground">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit
                        </label>
                    </div>
                </Card><Card className="p-4">
                    <div className="flex items-center gap-4">
                        <Checkbox id="todo-1" />
                        <label
                            htmlFor="todo-1"
                            className="text-sm font-muted-foreground">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit
                        </label>
                    </div>
                </Card><Card className="p-4">
                    <div className="flex items-center gap-4">
                        <Checkbox id="todo-1" />
                        <label
                            htmlFor="todo-1"
                            className="text-sm font-muted-foreground">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit
                        </label>
                    </div>
                </Card><Card className="p-4">
                    <div className="flex items-center gap-4">
                        <Checkbox id="todo-1" />
                        <label
                            htmlFor="todo-1"
                            className="text-sm font-muted-foreground">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit
                        </label>
                    </div>
                </Card><Card className="p-4">
                    <div className="flex items-center gap-4">
                        <Checkbox id="todo-1" />
                        <label
                            htmlFor="todo-1"
                            className="text-sm font-muted-foreground">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit
                        </label>
                    </div>
                </Card><Card className="p-4">
                    <div className="flex items-center gap-4">
                        <Checkbox id="todo-1" />
                        <label
                            htmlFor="todo-1"
                            className="text-sm font-muted-foreground">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit
                        </label>
                    </div>
                </Card>
            </ScrollArea>
        </div>
    );
}
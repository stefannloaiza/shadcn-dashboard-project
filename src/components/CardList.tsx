import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge";

const notifications = [
    {
        title: "Your call has been confirmed.",
        description: "1 hour ago",
    },
    {
        title: "You have a new message!",
        description: "1 hour ago",
    },
    {
        title: "Your subscription is expiring soon!",
        description: "2 hours ago",
    },
]

export default function CardList({ title }: { title: string }) {
    return (
        <div>
            <h1 className="text-lg font-medium mb-6 text-center">{title}</h1>
            <div className="flex flex-col gap-2">
                {notifications.map((notification) => (
                    <Card key={notification.title} className="flex-row items-center justify-between gap-4 p-4">
                        <CardContent className="p-0">
                            <CardTitle className="text-sm font-medium">{notification.title}</CardTitle>
                        </CardContent>
                        <CardFooter className="p-0">
                            <Badge variant="secondary">{notification.description}</Badge>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
import CardList from "@/components/CardList";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";

export default function Page() {
    return (
        <div>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/users">Users</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Estefan Loaiza</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            {/* CONTAINER */}
            <div className="mt-4 flex flex-col xl:flex-row gap-8">
                {/* LEFT */}
                <div className="w-full xl:w-1/3 space-y-6">
                    {/* USER BADGE COMPONENT */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                    </div>
                    {/* INFORMATION COMPONENT */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                    </div>
                    {/* CARD LIST COMPONENT */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <CardList title="Card List" />
                    </div>
                </div>
                {/* RIGHT */}
                <div className="w-full xl:w-2/3 "></div>
            </div>
        </div>
    );
}
import { Badge } from "./ui/badge";

export function InProgressBadge() {
    const message = "In Progress";
    return <Badge className="bg-transparent px-2 py-0 text-gray-500 dark:text-gray-200 text-[8px]">{message.toUpperCase()}</Badge>
}

export function BetaBadge2() {
    const message = "Beta";
    return <Badge className="bg-blue-700 px-2 py-0 text-white text-[10px]">{message.toUpperCase()}</Badge>
}

export function NewBadge() {
    const message = "New";
    return <Badge className="bg-transparent  px-2 py-0 text-gray-700 dark:text-gray-200 text-[8px]">{message.toUpperCase()}</Badge>
}
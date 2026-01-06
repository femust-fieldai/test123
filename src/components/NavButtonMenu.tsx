import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Props = {
  icon: LucideIcon;
  label: string;
  choices: {
    title: string;
    href: string;
  }[];
};

export function NavButtonMenu({ icon: Icon, label, choices }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Icon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {choices.map((choice) => (
          <DropdownMenuItem key={choice.title}>
            <Link href={choice.href}>{choice.title}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

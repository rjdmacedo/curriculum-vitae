"use client";

import * as React from "react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import packageJson from "../../package.json";
import { RESUME_DATA } from "@/data/resume-data";
import { Button } from "./ui/button";
import { CommandIcon } from "lucide-react";

interface Props {
  links: { url: string; title: string }[];
}

export const CommandMenu = ({ links }: Props) => {
  const [open, setOpen] = React.useState(false);
  const { version } = packageJson;

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  function handleCommandButtonClick() {
    setOpen((open) => !open);
  }

  return (
    <>
      <p className="fixed bottom-0 left-0 right-0 hidden border-t border-t-muted bg-white p-1 text-center text-sm text-muted-foreground print:hidden xl:block">
        {RESUME_DATA.ui.commandMenu.open.beforeCmd}{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">{RESUME_DATA.ui.commandMenu.open.cmd}</span>
        </kbd>{" "}
        {RESUME_DATA.ui.commandMenu.open.afterCmd}
      </p>
      <Button
        size="icon"
        variant="outline"
        onClick={handleCommandButtonClick}
        className="fixed bottom-4 right-4 flex rounded-full shadow-2xl print:hidden xl:hidden"
      >
        <CommandIcon className="my-6 size-6" />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder={RESUME_DATA.ui.commandMenu.placeholder} />
        <CommandList>
          <CommandEmpty>{RESUME_DATA.ui.commandMenu.noResults}</CommandEmpty>
          <CommandGroup heading={RESUME_DATA.ui.commandMenu.actions}>
            <CommandItem
              onSelect={() => {
                setOpen(false);
                // Allow the dialog to close before printing
                requestAnimationFrame(() => {
                  window.print();
                });
              }}
            >
              <span>{RESUME_DATA.ui.commandMenu.print}</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading={RESUME_DATA.ui.commandMenu.links}>
            {links.map(({ url, title }) => (
              <CommandItem
                key={url}
                onSelect={() => {
                  setOpen(false);
                  // Track command menu link clicked
                  window.open(url, "_blank");
                }}
              >
                <span>{title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
        <div className="py-2 text-center text-xs text-muted-foreground">
          v{version}
        </div>
      </CommandDialog>
    </>
  );
};

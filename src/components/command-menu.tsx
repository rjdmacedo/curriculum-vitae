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

import { sendGAEvent } from "@next/third-parties/google";

interface Props {
  links: { url: string; title: string }[];
}

export const CommandMenu = ({ links }: Props) => {
  const [open, setOpen] = React.useState(false);
  const [shouldPrint, setShouldPrint] = React.useState(false);
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

  React.useEffect(() => {
    if (!open && shouldPrint) {
      setShouldPrint(false);
      // Wait for the dialog to close completely before printing
      setTimeout(() => {
        window.print();
      }, 300); // 300ms matches typical animation duration
    }
  }, [open, shouldPrint]);

  function handleCommandButtonClick() {
    setOpen((open) => !open);
  }

  return (
    <>
      <p className="border-t-muted text-muted-foreground fixed bottom-0 left-0 right-0 hidden border-t bg-white p-1 text-center text-sm xl:block print:hidden">
        {RESUME_DATA.ui.commandMenu.open.beforeCmd}{" "}
        <kbd className="bg-muted text-muted-foreground pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100">
          <span className="text-xs">{RESUME_DATA.ui.commandMenu.open.cmd}</span>
        </kbd>{" "}
        {RESUME_DATA.ui.commandMenu.open.afterCmd}
      </p>
      <Button
        size="icon"
        variant="outline"
        onClick={handleCommandButtonClick}
        className="fixed bottom-4 right-4 flex rounded-full shadow-2xl xl:hidden print:hidden"
      >
        <CommandIcon className="my-6 size-6" />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder={RESUME_DATA.ui.commandMenu.placeholder} />
        <CommandList>
          <CommandEmpty>{RESUME_DATA.ui.commandMenu.noResults}</CommandEmpty>
          <CommandGroup heading={RESUME_DATA.ui.commandMenu.actions}>
            <CommandItem
              value="print"
              onSelect={() => {
                setShouldPrint(true);
                sendGAEvent({ event: "print", source: "command_menu" });
                setOpen(false);
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
                value={title}
                onSelect={() => {
                  setOpen(false);
                  // Track command menu link clicked
                  sendGAEvent({
                    event: "click_link",
                    link_url: url,
                    link_text: title,
                  });
                  window.open(url, "_blank");
                }}
              >
                <span>{title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
        <div className="text-muted-foreground py-2 text-center text-xs">
          v{version}
        </div>
      </CommandDialog>
    </>
  );
};

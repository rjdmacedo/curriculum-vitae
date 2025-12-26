import Image, { StaticImageData } from "next/image";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Link as LinkIcon } from "lucide-react";
import { TrackedLink } from "./tracked-link";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
  logo?: StaticImageData;
}

export function ProjectCard({ title, description, tags, link, logo }: Props) {
  return (
    <Card className="border-muted flex flex-col overflow-hidden border p-3">
      <CardHeader className="p-0">
        <div className="space-y-1">
          <CardTitle className="flex items-center gap-2 text-base">
            {logo && (
              <Image
                src={logo}
                alt={`${title} logo`}
                width={24}
                height={24}
                className="size-6 shrink-0 rounded-md object-contain"
              />
            )}
            {link ? (
              <TrackedLink
                href={link}
                trackingText={title}
                target="_blank"
                className="inline-flex items-center gap-1 hover:underline"
              >
                {title}
                <Badge
                  className="bg-blue-100 px-1 text-[10px] text-blue-600 hover:bg-blue-200"
                  variant="secondary"
                >
                  <LinkIcon className="size-3" />
                </Badge>
              </TrackedLink>
            ) : (
              title
            )}
          </CardTitle>
          <div className="hidden font-mono text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <CardDescription className="text-justify font-mono text-xs">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex p-0">
        <div className="mt-3 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge
              className="px-1 py-0 text-[10px]"
              variant="secondary"
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

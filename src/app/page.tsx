import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";
import { TrackedLink } from "@/components/tracked-link";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 md:p-16 print:max-w-full print:p-8">
      <section className="bg-background mx-auto w-full max-w-2xl space-y-8 print:max-w-none print:space-y-6">
        <div className="flex flex-col-reverse items-center gap-4 md:flex-row md:justify-between">
          <div className="w-full space-y-1.5 md:flex-1">
            <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>
            <p className="text-muted-foreground max-w-md text-pretty font-mono text-sm ">
              {RESUME_DATA.about}
            </p>
            <p className="text-muted-foreground max-w-md items-center text-pretty font-mono text-xs">
              <TrackedLink
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA.locationLink}
                trackingText={RESUME_DATA.location}
                target="_blank"
              >
                <GlobeIcon className="size-3" />
                {RESUME_DATA.location}
              </TrackedLink>
            </p>
            <div className="text-muted-foreground flex gap-x-1 pt-1 font-mono text-sm print:hidden">
              {RESUME_DATA.contact.email ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <TrackedLink
                    href={`mailto:${RESUME_DATA.contact.email}`}
                    trackingText="email"
                  >
                    <MailIcon className="size-4" />
                  </TrackedLink>
                </Button>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <TrackedLink
                    href={`tel:${RESUME_DATA.contact.tel}`}
                    trackingText="phone"
                  >
                    <PhoneIcon className="size-4" />
                  </TrackedLink>
                </Button>
              ) : null}
              {RESUME_DATA.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <TrackedLink href={social.url} trackingText={social.name}>
                    <social.icon className="size-4" />
                  </TrackedLink>
                </Button>
              ))}
            </div>
            <div className="text-muted-foreground hidden flex-col gap-x-1 font-mono text-sm print:flex">
              {RESUME_DATA.contact.email ? (
                <TrackedLink
                  href={`mailto:${RESUME_DATA.contact.email}`}
                  trackingText="email"
                >
                  <span className="underline">{RESUME_DATA.contact.email}</span>
                </TrackedLink>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <TrackedLink
                  href={`tel:${RESUME_DATA.contact.tel}`}
                  trackingText="phone"
                >
                  <span className="underline">{RESUME_DATA.contact.tel}</span>
                </TrackedLink>
              ) : null}
            </div>
          </div>

          <Avatar className="size-28">
            <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
            <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
          </Avatar>
        </div>
        <Section>
          <h2 className="text-xl font-bold">
            {RESUME_DATA.ui.sectionHeaders.about}
          </h2>
          <p className="text-muted-foreground text-pretty font-mono text-sm ">
            {RESUME_DATA.summary}
          </p>
        </Section>
        {RESUME_DATA.articles.length > 0 && (
          <Section className="scroll-mb-16">
            <h2 className="text-xl font-bold">
              {RESUME_DATA.ui.sectionHeaders.articles}
            </h2>
            <div className="-mx-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2 print:grid-cols-2 print:gap-2">
              {RESUME_DATA.articles.map((article) => (
                <ProjectCard
                  key={article.title}
                  title={article.title}
                  description={article.description}
                  tags={article.tags}
                  link={"link" in article ? article.link : undefined}
                />
              ))}
            </div>
          </Section>
        )}
        <Section>
          <h2 className="text-xl font-bold">
            {RESUME_DATA.ui.sectionHeaders.work}
          </h2>
          {RESUME_DATA.work.map((work) => (
            <Card key={work.company}>
              <CardHeader>
                <div className="flex items-center justify-between gap-x-2 text-base">
                  <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                    <TrackedLink
                      className="hover:underline"
                      href={work.link}
                      trackingText={work.company}
                    >
                      {work.company}
                    </TrackedLink>

                    <span className="inline-flex gap-x-1">
                      {work.badges.map((badge) => (
                        <Badge
                          variant="secondary"
                          className="align-middle text-xs"
                          key={badge}
                        >
                          {badge}
                        </Badge>
                      ))}
                    </span>
                  </h3>
                  <div className="text-sm tabular-nums text-gray-500">
                    {work.start} - {work.end}
                  </div>
                </div>

                <h4 className="font-mono text-sm leading-none">{work.title}</h4>
              </CardHeader>
              <CardContent className="mt-2 text-xs ">
                {work.description}
                {work.techStack && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {work.techStack.map((tag) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-xs"
                        key={tag}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </Section>
        <Section>
          <h2 className="text-xl font-bold">
            {RESUME_DATA.ui.sectionHeaders.education}
          </h2>
          {RESUME_DATA.education.map((education) => {
            return (
              <Card key={education.school}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none">
                      {education.school}
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2">{education.degree}</CardContent>
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 className="text-xl font-bold">
            {RESUME_DATA.ui.sectionHeaders.skills}
          </h2>
          <div className="flex flex-col gap-y-3">
            {RESUME_DATA.skills.map((skillGroup) => (
              <div key={skillGroup.category} className="flex flex-col gap-y-2">
                <h3 className="text-muted-foreground text-sm font-semibold">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-1">
                  {skillGroup.items.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>
        <Section className="print-force-new-page scroll-mb-16">
          <h2 className="text-xl font-bold">
            {RESUME_DATA.ui.sectionHeaders.projects}
          </h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2 print:grid-cols-3 print:gap-2">
            {RESUME_DATA.projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.techStack}
                link={"link" in project ? project.link.href : undefined}
              />
            ))}
          </div>
        </Section>
      </section>

      <CommandMenu
        links={[
          {
            url: RESUME_DATA.personalWebsiteUrl,
            title: "Personal Website",
          },
          ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />
    </main>
  );
}

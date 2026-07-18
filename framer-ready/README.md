# Framer Ready Components

Workflow:

Codex/Cursor -> generate Framer-compatible React component -> paste ke Framer Code Component -> drag and drop di canvas.

Rules applied:

- Every `.tsx` file has a default export.
- No `next/*` imports.
- No Tailwind `className`.
- No `@/` aliases.
- No server-side code.
- Styling is inline.
- Animations use `motion` from `"framer"`.

## Components

- `Hero.tsx` - home hero.
- `About.tsx` - home/about section.
- `Gallery.tsx` - visual gallery.
- `Contact.tsx` - replacement for contact hero/form.
- `FAQ.tsx` - replacement for contact FAQ.
- `SocialLinks.tsx` - social link cards.
- `ExperienceTimeline.tsx` - timeline section.
- `Card.tsx` - reusable card.
- `AchievementCard.tsx`
- `EducationCard.tsx`
- `OtherExperienceCard.tsx`
- `SkillBar.tsx`
- `GlowingButton.tsx`
- `Sidebar.tsx`
- `Footer.tsx`
- `PageShell.tsx` - Framer replacement for `LayoutWrapper`.
- `CustomCursor.tsx`
- `HeroCanvas.tsx`
- `TextOverlays.tsx`
- `PostSequenceContent.tsx`
- `SimpleMarquee.tsx`
- `ImageTrail.tsx`
- `Letter3DSwap.tsx`
- `TextHighlighter.tsx`
- `BlurVignette.tsx`
- `FancyTypewriter.tsx`
- `TypeWriter.tsx`
- `ImageTabs.tsx`
- `FloatingOrbs.tsx`
- `ParticleBackground.tsx`
- `ExpertiseHero.tsx`
- `ExpertiseSections.tsx`
- `AboutTabs.tsx`
- `SectionPrimitives.tsx`

## Source Mapping

- `src/components/LayoutWrapper.tsx` -> `PageShell.tsx`
- `src/components/Sidebar.tsx` -> `Sidebar.tsx`
- `src/components/Footer.tsx` -> `Footer.tsx`
- `src/components/CustomCursor.tsx` -> `CustomCursor.tsx`
- `src/components/HeroCanvas.tsx` -> `HeroCanvas.tsx`
- `src/components/TextOverlays.tsx` -> `TextOverlays.tsx`
- `src/components/PostSequenceContent.tsx` -> `PostSequenceContent.tsx`
- `src/components/fancy/blocks/simple-marquee.tsx` -> `SimpleMarquee.tsx`
- `src/components/fancy/image/image-trail.tsx` -> `ImageTrail.tsx`
- `src/components/fancy/text/letter-3d-swap.tsx` -> `Letter3DSwap.tsx`
- `src/components/fancy/text/text-highlighter.tsx` -> `TextHighlighter.tsx`
- `src/components/ui/blur-vignette.tsx` -> `BlurVignette.tsx`
- `src/components/ui/fancy-typewriter.tsx` -> `FancyTypewriter.tsx`
- `src/components/ui/type-writer.tsx` -> `TypeWriter.tsx`
- `src/components/ui/image-tabs.tsx` -> `ImageTabs.tsx`
- `src/app/about/components/Cards.tsx` -> `Card.tsx`, `AchievementCard.tsx`
- `src/app/about/components/Primitives.tsx` -> `SectionPrimitives.tsx`
- `src/app/about/components/TabNavFAQ.tsx` -> `AboutTabs.tsx`, `FAQ.tsx`
- `src/app/about/components/TabSections.tsx` -> `AboutTabs.tsx`
- `src/app/about/components/AnimatedComponents.tsx` -> animation patterns included across `About.tsx`, `Card.tsx`, `AboutTabs.tsx`
- `src/app/contact/components/ContactHero.tsx` -> `Contact.tsx`
- `src/app/contact/components/ContactFAQ.tsx` -> `FAQ.tsx`
- `src/app/contact/components/SocialLinks.tsx` -> `SocialLinks.tsx`
- `src/app/experience/components/TimelineCard.tsx` -> `ExperienceTimeline.tsx`
- `src/app/experience/components/SkillBar.tsx` -> `SkillBar.tsx`
- `src/app/experience/components/AchievementCard.tsx` -> `AchievementCard.tsx`
- `src/app/experience/components/EducationCard.tsx` -> `EducationCard.tsx`
- `src/app/experience/components/OtherExperienceCard.tsx` -> `OtherExperienceCard.tsx`
- `src/app/experience/components/GlowingButton.tsx` -> `GlowingButton.tsx`
- `src/app/experience/components/FloatingOrbs.tsx` -> `FloatingOrbs.tsx`
- `src/app/experience/components/ParticleBackground.tsx` -> `ParticleBackground.tsx`
- `src/app/expertise/components/Hero.tsx` -> `ExpertiseHero.tsx`
- `src/app/expertise/components/Sections.tsx` -> `ExpertiseSections.tsx`
- `src/app/expertise/components/AnimatedComponents.tsx` -> animation patterns included across `ExpertiseHero.tsx`, `ExpertiseSections.tsx`

Note: image paths like `/assets/...` must be replaced in Framer controls with Framer uploaded asset URLs or hosted image URLs.

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Projects } from '@/components/Projects'
import { SectionIntro } from '@/components/SectionIntro'

export function ProjectsSection() {
  return (
    <>
      <SectionIntro title="Vamo" className="mt-24 sm:mt-32 lg:mt-40" />
      <Container className="mt-12">
        <FadeIn>
          <Projects className="grid grid-cols-1 gap-8 lg:grid-cols-3" />
        </FadeIn>
      </Container>
    </>
  )
}

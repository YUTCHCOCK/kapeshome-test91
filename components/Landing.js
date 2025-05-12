import styled from 'styled-components'

const Section = styled.section`
  height: 100vh;
  background: #f7931e;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`

const Video = styled.iframe`
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`

const Logo = styled.img`
  width: 260px;
  z-index: 2;
`

export default function Landing() {
  return (
    <Section>
      <Video
        src="https://www.youtube.com/embed/sbEYTBXJb4I?autoplay=1&mute=1&controls=0&loop=1&playlist=sbEYTBXJb4I"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Kapes Planet Showreel"
      />
      <Logo src="/logo.png" alt="Kapes Planet Logo" />
    </Section>
  )
}

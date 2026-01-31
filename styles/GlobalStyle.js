import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body.dark-mode {
  --img: invert(1);
  --avatar-shadow: rgba(0, 0, 0, 0);
}

body.light-mode {
  --img: invert(0);
  --avatar-shadow: rgba(0, 0, 0, 0);
}

* {
  margin: 0;
  padding: 0;
  border: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  line-height: normal;
  transition: color .1s ease, background-color .1s ease, border-color .1s ease;


}

html{
    scroll-behavior: smooth;
}
body {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  background: ${({ theme }) => theme.bg.primary};
  min-height: 100vh;
  color: ${({ theme }) => theme.text.primary};
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  --color-bg: ${({ theme }) => theme.bg.primary};
  --color-surface: ${({ theme }) => theme.bg.secondary};
  --color-surface-muted: ${({ theme }) => theme.bg.tertiary};
  --color-border: ${({ theme }) => theme.bg.border};
  --color-text: ${({ theme }) => theme.text.primary};
  --color-muted: ${({ theme }) => theme.text.secondary};
  --color-accent: ${({ theme }) => theme.accent.primary};
  --color-accent-weak: ${({ theme }) => theme.accent.soft};
  --color-accent-contrast: ${({ theme }) => theme.accent.contrast};
}

a{
  color: ${({ theme }) => theme.text.primary};
}

.main{
    min-height: 100vh;

}
.toast-container {
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
}
.container{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

}

.nft-clipped{
  clip-path: url(#hex);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.oval-clipped{
  clip-path: url(#oval);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}


`;

export default GlobalStyle;

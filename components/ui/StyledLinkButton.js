import styled from 'styled-components';

export const StyledLinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-weight: 500;
  font-size: 0.9375rem;
  background-color: var(--background, #ffffff);
  color: var(--foreground, #000000);
  border: 1px solid var(--border, rgba(0, 0, 0, 0.1));
  transition: all 0.2s ease;
  position: relative;
  cursor: pointer;
  text-decoration: none;

  @media (prefers-color-scheme: dark) {
    background-color: var(--background-dark, #000000);
    color: var(--foreground-dark, #ffffff);
    border-color: var(--border-dark, rgba(255, 255, 255, 0.1));
  }

  &:hover {
    background-color: var(--hover-bg, rgba(0, 0, 0, 0.02));
    border-color: var(--hover-border, rgba(0, 0, 0, 0.15));
    transform: translateY(-1px);

    @media (prefers-color-scheme: dark) {
      background-color: var(--hover-bg-dark, rgba(255, 255, 255, 0.06));
      border-color: var(--hover-border-dark, rgba(255, 255, 255, 0.15));
    }
  }

  &:active {
    transform: translateY(0);
  }

  .link-content {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    font-weight: 450;
    color: inherit;
  }

  .icon-container {
    display: flex;
    align-items: center;
    color: var(--icon-color, rgba(0, 0, 0, 0.5));
    transition: transform 0.2s ease;

    @media (prefers-color-scheme: dark) {
      color: var(--icon-color-dark, rgba(255, 255, 255, 0.5));
    }
  }

  &:hover .icon-container {
    transform: translateX(2px);
  }

  img {
    width: 18px;
    height: 18px;
    object-fit: contain;
    opacity: 0.8;
    transition: opacity 0.2s ease;
  }

  &:hover img {
    opacity: 1;
  }
`;

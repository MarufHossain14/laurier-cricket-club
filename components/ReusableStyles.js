import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  align-items: center;
  justify-content: center;
  width: 650px;
  margin: 0 auto;
  @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;


export const Button = styled.button`
`

export const LinkButton = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--color-text);
    cursor: pointer;
    outline: none;
    line-height: 20px;
    p{
      line-height: 24px;
      font-size: 20px;
      font-weight: 600;
      text-transform: uppercase;
      font-style: normal;
      border-top-left-radius: 16px;
      border-bottom-left-radius: 16px;
      background: var(--color-surface);
      border: 1px solid var(--color-border);
    }
    div{
      line-height: 0;
      border-top-right-radius: 16px;
      border-bottom-right-radius: 16px;
      border: 1px solid var(--color-border);
      background: var(--color-surface);
    }
`

export const Tag = styled.div`
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    padding: 4px 12px;
    border-radius: 14px;
    display: inline-flex;
    border: 1px solid var(--color-border);
    background: var(--color-surface-muted);
    color: var(--color-text);

    &.red{
        background: var(--color-accent-weak);
        color: var(--color-accent);
    }
    &.blue{
        background: var(--color-accent-weak);
        color: var(--color-accent);
    }
    &.yellow{
        background: var(--color-accent-weak);
        color: var(--color-accent);
    }
`

export const StyledLink = styled.a`
    line-height: normal;
    cursor: pointer;
    color: ${({ theme }) => theme.text.primary};
`

export const IssueGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;
    cursor: pointer;
    @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
        grid-template-columns: repeat(1, 1fr);
        padding: 20px;
  }
`

export const ButtonLink = styled.a`
    font-size: 24px;
    display: inline-flex;
    line-height: normal;
    padding: 18px 36px;
    border: 1px solid var(--color-border);
    outline: none;
    cursor: pointer;
    border-radius: 14px;
    color: var(--color-text);
    background: var(--color-surface);
    transition: all 0.3s ease;

    &:hover {
        color: var(--color-text);
        background: var(--color-surface-muted);
        border-color: var(--color-accent);
    }
    transition: all .3s;
    position: relative;


`

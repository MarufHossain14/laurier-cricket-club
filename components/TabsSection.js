import styled from "styled-components";
import React from "react";
import { FaInfoCircle, FaQuestionCircle, FaUserPlus } from 'react-icons/fa';
import { MdAssignment, MdGroups, MdSportsCricket, MdOutlineWhatshot } from 'react-icons/md';

const TabsSection = () => {
  const [activeTab, setActiveTab] = React.useState("about");

  const tabs = [
    { id: "about", label: "About Us", icon: FaInfoCircle },
    { id: "faq", label: "FAQ", icon: FaQuestionCircle },
    { id: "join", label: "How to Join", icon: FaUserPlus }
  ];

  return (
    <TabsContainer>
      <TabsList>
        {tabs.map((tab) => {
          const IconComponent = tab.icon;
          return (
            <TabTrigger
              key={tab.id}
              active={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              <IconComponent />
              <span>{tab.label}</span>
            </TabTrigger>
          );
        })}
      </TabsList>

      <TabContentContainer>
        <TabContent visible={activeTab === "about"}>
          <ContentWrapper>
            <h3>About Our Community</h3>
            <p>A vibrant community of cricket enthusiasts at Wilfrid Laurier University, welcoming players of all skill levels. Join us in our passion for cricket!</p>
          </ContentWrapper>
        </TabContent>

        <TabContent visible={activeTab === "faq"}>
          <ContentWrapper>
            <h3>Frequently Asked Questions</h3>
            <FAQItem>
              <h4>Experience Level?</h4>
              <p>All levels welcome - we provide training for beginners.</p>
            </FAQItem>
            <FAQItem>
              <h4>Practice Schedule?</h4>
              <p>Regular sessions on Saturdays, schedule shared via WhatsApp.</p>
            </FAQItem>
            <FAQItem>
              <h4>Equipment?</h4>
              <p>All provided by the Laurier Cricket Club.</p>
            </FAQItem>
          </ContentWrapper>
        </TabContent>

        <TabContent visible={activeTab === "join"}>
          <ContentWrapper>
            <h3>Getting Started</h3>
            <StepList>
              <li><MdAssignment /> <span>Complete membership form</span></li>
              <li><MdGroups /> <span>Join WhatsApp group</span></li>
              <li><MdOutlineWhatshot /> <span>Attend orientation</span></li>
              <li><MdSportsCricket /> <span>Start playing!</span></li>
            </StepList>
          </ContentWrapper>
        </TabContent>
      </TabContentContainer>
    </TabsContainer>
  );
};

const TabsContainer = styled.div`
  margin: 2rem auto 4rem auto;
  width: 100%;
  max-width: 600px;
  min-width: 320px;
  background: var(--color-surface);
  border-radius: 12px;
  border: 1px solid var(--color-border);
  position: relative;
  overflow: hidden;

  /* Extra small mobile */
  @media (max-width: 374px) {
    max-width: calc(100vw - 1rem);
    margin: 0.75rem auto 1.5rem auto;
    border-radius: 6px;
    font-size: 0.9em;
  }

  /* Small Mobile */
  @media (min-width: 375px) and (max-width: 480px) {
    max-width: calc(100vw - 1.5rem);
    margin: 1rem auto 2rem auto;
    border-radius: 8px;
    font-size: 0.95em;
  }

  /* Large Mobile */
  @media (min-width: 481px) and (max-width: 767px) {
    max-width: calc(100vw - 2rem);
    margin: 1.5rem auto 3rem auto;
    border-radius: 10px;
  }

  /* Tablet */
  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 850px;
    margin: 2.5rem auto 4rem auto;
  }

  /* Desktop */
  @media (min-width: 1024px) {
    max-width: 1100px;
    margin: 3rem auto 5rem auto;
  }

  /* Large Desktop */
  @media (min-width: 1400px) {
    max-width: 1200px;
    margin: 4rem auto 6rem auto;
  }
`;

const TabsList = styled.div`
  display: flex;
  background: var(--color-surface-muted);
  border-bottom: 1px solid var(--color-border);
  position: relative;
  padding: 4px;
  border-radius: 8px 8px 0 0;

  @media (max-width: 767px) {
    padding: 3px;
  }
`;

const TabTrigger = styled.button`
  flex: 1;
  padding: 12px 20px;
  border: none;
  background: ${props => props.active ? 'var(--color-surface)' : 'transparent'};
  color: ${props => props.active ? 'var(--color-text)' : 'var(--color-muted)'};
  cursor: pointer;
  font-weight: ${props => props.active ? '600' : '400'};
  font-size: 0.875rem;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 6px;
  position: relative;
  white-space: nowrap;
  text-align: center;

  svg {
    font-size: 1em;
    opacity: ${props => props.active ? 1 : 0.8};
    flex-shrink: 0;
  }

  span {
    text-align: center;
    line-height: 1;
  }

  &:hover {
    color: var(--color-text);
    background: var(--color-surface);
  }

  &:active {
    transform: translateY(0);
  }

  /* Extra small mobile - icons only */
  @media (max-width: 374px) {
    padding: 8px;
    font-size: 0.75rem;
    gap: 4px;

    span {
      display: none;
    }

    svg {
      font-size: 1.1em;
    }
  }

  /* Small mobile - icons only */
  @media (min-width: 375px) and (max-width: 480px) {
    padding: 10px;
    font-size: 0.8rem;
    gap: 5px;

    span {
      display: none;
    }

    svg {
      font-size: 1.2em;
    }
  }

  /* Large mobile - show text for active tab */
  @media (min-width: 481px) and (max-width: 767px) {
    padding: 10px 12px;
    font-size: 0.8rem;
    gap: 6px;

    span {
      display: ${props => props.active ? 'inline' : 'none'};
    }

    svg {
      font-size: 1.1em;
    }
  }

  /* Tablet - show all text */
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 14px 24px;
    font-size: 0.9rem;
    gap: 10px;

    svg {
      font-size: 1.1em;
    }
  }

  /* Desktop - larger and more spacious */
  @media (min-width: 1024px) {
    padding: 16px 32px;
    font-size: 1rem;
    gap: 12px;

    svg {
      font-size: 1.2em;
    }
  }

  /* Large desktop - even more spacious */
  @media (min-width: 1400px) {
    padding: 18px 40px;
    font-size: 1.1rem;
    gap: 14px;

    svg {
      font-size: 1.3em;
    }
  }
`;

const TabContentContainer = styled.div`
  position: relative;
  min-height: 280px;

  /* Extra small mobile */
  @media (max-width: 374px) {
    min-height: 200px;
  }

  /* Small mobile */
  @media (min-width: 375px) and (max-width: 480px) {
    min-height: 220px;
  }

  /* Large mobile */
  @media (min-width: 481px) and (max-width: 767px) {
    min-height: 250px;
  }

  /* Tablet */
  @media (min-width: 768px) and (max-width: 1023px) {
    min-height: 300px;
  }

  /* Desktop */
  @media (min-width: 1024px) {
    min-height: 350px;
    height: 360px;
  }

  /* Large desktop */
  @media (min-width: 1400px) {
    min-height: 380px;
    height: 400px;
  }
`;

const TabContent = styled.div`
  display: ${props => props.visible ? 'block' : 'none'};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0;

  @media (max-width: 374px) {
    padding: 16px;
  }

  @media (min-width: 375px) and (max-width: 480px) {
    padding: 18px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    padding: 20px;
  }
  bottom: 0;
  animation: ${props => props.visible ? 'fadeIn 0.3s ease-out' : 'none'};
  overflow-y: auto;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-border);
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--color-muted);
  }
`;

const ContentWrapper = styled.div`
  padding: 2rem;
  text-align: left;

  h3 {
    color: var(--color-text);
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0 0 1.5rem 0;
    text-align: center;
    letter-spacing: 0.025em;
  }

  p {
    color: var(--color-muted);
    line-height: 1.6;
    font-size: 0.9rem;
    margin: 0;
    font-weight: 400;
    text-align: center;
    letter-spacing: 0.015em;
    max-width: 800px;
    margin: 0 auto;
  }

  /* Extra small mobile */
  @media (max-width: 374px) {
    padding: 0.75rem;

    h3 {
      font-size: 0.95rem;
      margin-bottom: 0.75rem;
      line-height: 1.3;
    }

    p {
      font-size: 0.85rem;
      line-height: 1.5;
      letter-spacing: 0.01em;
    }
  }

  /* Small mobile */
  @media (min-width: 375px) and (max-width: 480px) {
    padding: 1rem;

    h3 {
      font-size: 1rem;
      margin-bottom: 1rem;
      line-height: 1.4;
    }

    p {
      font-size: 0.875rem;
      line-height: 1.5;
      letter-spacing: 0.01em;
    }
  }

  /* Large mobile */
  @media (min-width: 481px) and (max-width: 767px) {
    padding: 1.5rem;

    h3 {
      font-size: 1rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 0.85rem;
      line-height: 1.5;
    }
  }

  /* Tablet */
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 2rem;

    h3 {
      font-size: 1.15rem;
      margin-bottom: 1.25rem;
    }

    p {
      font-size: 0.9rem;
      line-height: 1.6;
    }
  }

  /* Desktop */
  @media (min-width: 1024px) {
    padding: 3rem 4rem;

    h3 {
      font-size: 1.3rem;
      margin-bottom: 1.75rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.7;
      max-width: 700px;
    }
  }

  /* Large desktop */
  @media (min-width: 1400px) {
    padding: 3.5rem 5rem;

    h3 {
      font-size: 1.4rem;
      margin-bottom: 2rem;
    }

    p {
      font-size: 1.1rem;
      line-height: 1.8;
      max-width: 800px;
    }
  }
`;

const FAQItem = styled.div`
  margin-bottom: 1.5rem;
  padding: 1.25rem;
  border-radius: 8px;
  background: var(--color-surface-muted);
  border: 1px solid var(--color-border);
  transition: all 0.2s ease;

  h4 {
    color: var(--color-text);
    margin-bottom: 0.75rem;
    font-size: 0.9rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-align: left;

    &::before {
      content: '•';
      color: var(--color-accent);
      font-size: 1.2rem;
      flex-shrink: 0;
    }
  }

  p {
    font-size: 0.85rem;
    color: var(--color-muted);
    line-height: 1.5;
    margin: 0;
    font-weight: 400;
    text-align: left;
    letter-spacing: 0.01em;
  }

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background: var(--color-surface);
    border-color: var(--color-accent);
  }

  /* Extra small mobile */
  @media (max-width: 374px) {
    padding: 0.75rem;
    margin-bottom: 0.75rem;

    h4 {
      font-size: 0.8rem;
      gap: 0.375rem;

      &::before {
        font-size: 1rem;
      }
    }

    p {
      font-size: 0.75rem;
      line-height: 1.4;
    }
  }

  /* Small mobile */
  @media (min-width: 375px) and (max-width: 480px) {
    padding: 0.875rem;
    margin-bottom: 1rem;

    h4 {
      font-size: 0.825rem;
    }

    p {
      font-size: 0.775rem;
    }
  }

  /* Large mobile */
  @media (min-width: 481px) and (max-width: 767px) {
    padding: 1rem;
    margin-bottom: 1rem;

    h4 {
      font-size: 0.85rem;
    }

    p {
      font-size: 0.8rem;
    }
  }

  /* Tablet */
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 1.25rem;
    margin-bottom: 1.25rem;

    h4 {
      font-size: 0.9rem;
    }

    p {
      font-size: 0.85rem;
    }
  }

  /* Desktop */
  @media (min-width: 1024px) {
    padding: 1.5rem;
    margin-bottom: 1.5rem;

    h4 {
      font-size: 1rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 0.95rem;
      line-height: 1.6;
    }
  }

  /* Large desktop */
  @media (min-width: 1400px) {
    padding: 1.75rem;
    margin-bottom: 1.75rem;

    h4 {
      font-size: 1.1rem;
      margin-bottom: 1.25rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.7;
    }
  }
`;

const StepList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  li {
    color: var(--color-text);
    font-size: 0.85rem;
    font-weight: 400;
    letter-spacing: 0.01em;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem;
    border-radius: 8px;
    transition: all 0.2s ease;
    background: var(--color-surface-muted);
    border: 1px solid var(--color-border);
    position: relative;
    text-align: left;

    svg {
      font-size: 1.1em;
      flex-shrink: 0;
      color: var(--color-accent);
    }

    span {
      line-height: 1.4;
      flex: 1;
    }

    &:hover {
      background: var(--color-surface);
      border-color: var(--color-accent);
    }

    /* Extra small mobile */
    @media (max-width: 374px) {
      padding: 0.75rem;
      gap: 0.5rem;
      font-size: 0.75rem;

      svg {
        font-size: 0.9em;
      }

      span {
        line-height: 1.3;
      }
    }

    /* Small mobile */
    @media (min-width: 375px) and (max-width: 480px) {
      padding: 0.8rem;
      gap: 0.55rem;
      font-size: 0.775rem;

      svg {
        font-size: 0.95em;
      }
    }

    /* Large mobile */
    @media (min-width: 481px) and (max-width: 767px) {
      padding: 0.875rem;
      gap: 0.6rem;
      font-size: 0.8rem;

      svg {
        font-size: 1em;
      }
    }

    /* Tablet */
    @media (min-width: 768px) and (max-width: 1023px) {
      padding: 1rem;
      gap: 0.75rem;
      font-size: 0.85rem;

      svg {
        font-size: 1.1em;
      }

      span {
        line-height: 1.5;
      }
    }

    /* Desktop */
    @media (min-width: 1024px) {
      padding: 1.5rem;
      gap: 1rem;
      font-size: 0.95rem;

      svg {
        font-size: 1.3em;
      }

      span {
        line-height: 1.6;
      }
    }

    /* Large desktop */
    @media (min-width: 1400px) {
      padding: 1.75rem;
      gap: 1.25rem;
      font-size: 1rem;

      svg {
        font-size: 1.4em;
      }

      span {
        line-height: 1.7;
      }
    }
  }
`;

export default TabsSection;

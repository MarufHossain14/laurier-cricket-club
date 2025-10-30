import styled from "styled-components";
import React from "react";
import { FaInfoCircle, FaQuestionCircle, FaUserPlus } from 'react-icons/fa';
import { MdAssignment, MdGroups, MdSportsCricket, MdOutlineWhatshot } from 'react-icons/md';

const TabsSection = () => {
  const [activeTab, setActiveTab] = React.useState("about");

  return (
    <TabsContainer>
      <TabsList>
        {["about", "faq", "join"].map((tab) => (
          <TabTrigger
            key={tab}
            active={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "about" ? <><FaInfoCircle /> About Us</> :
             tab === "faq" ? <><FaQuestionCircle /> FAQ</> :
             <><FaUserPlus /> How to Join</>}
          </TabTrigger>
        ))}
      </TabsList>

      <TabContent visible={activeTab === "about"}>
        <p>A vibrant community of cricket enthusiasts at Wilfrid Laurier University,
        welcoming players of all skill levels. Join us in our passion for cricket!</p>
      </TabContent>

      <TabContent visible={activeTab === "faq"}>
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
      </TabContent>

      <TabContent visible={activeTab === "join"}>
        <StepList>
          <li><MdAssignment /> Complete membership form</li>
          <li><MdGroups /> Join WhatsApp group</li>
          <li><MdOutlineWhatshot /> Attend orientation</li>
          <li><MdSportsCricket /> Start playing!</li>
        </StepList>
      </TabContent>
    </TabsContainer>
  );
};

const TabsContainer = styled.div`
  margin: 2rem auto 4rem auto;
  width: 100%;
  max-width: 600px;
  min-width: 320px;
  padding: 0;
  background: rgba(0, 0, 0, 0.65);
  border-radius: 16px;
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3),
              0 8px 32px rgba(0, 0, 0, 0.2),
              inset 0 1px 0 rgba(255, 255, 255, 0.08);

  /* Desktop */
  @media (min-width: 1024px) {
    height: 400px;
    max-width: 80%;
    width: 1000px;
    padding: 0;
    margin: 2rem auto 4rem auto;
  }

  /* Mobile */
  @media (max-width: 767px) {
    height: 350px;
    max-width: calc(100vw - 2rem);
    margin: 1.5rem auto 3rem auto;
    border-radius: 12px;
  }

  /* Tablet */
  @media (min-width: 768px) and (max-width: 1023px) {
    height: 380px;
    max-width: 800px;
    margin: 2rem auto 4rem auto;
  }
`;

const TabsList = styled.div`
  display: flex;
  justify-content: center;
  gap: 0;
  padding: 8px;
  background: rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  position: relative;

  @media (max-width: 767px) {
    padding: 6px;
  }
`;

const TabTrigger = styled.button`
  flex: 1;
  padding: 16px 24px;
  border: none;
  background: ${props => props.active ? 'rgba(242, 169, 0, 0.15)' : 'transparent'};
  color: ${props => props.active ? '#f2a900' : 'rgba(255, 255, 255, 0.7)'};
  cursor: pointer;
  font-weight: ${props => props.active ? '600' : '500'};
  font-size: 0.9rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;

  svg {
    font-size: 1.1em;
    opacity: ${props => props.active ? 1 : 0.8};
  }
  position: relative;
  border-radius: 8px;
  margin: 3px;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, #f2a900, #ffb84d);
    transform: scaleX(${props => props.active ? 1 : 0});
    transition: transform 0.4s ease;
    border-radius: 2px 2px 0 0;
  }

  &:hover {
    color: ${props => props.active ? '#f2a900' : 'rgba(255, 255, 255, 0.95)'};
    background: ${props => props.active ? 'rgba(242, 169, 0, 0.2)' : 'rgba(255, 255, 255, 0.08)'};
    transform: translateY(-1px);
  }

  &:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  &:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  @media (max-width: 767px) {
    padding: 12px 14px;
    font-size: 0.9rem;
    margin: 2px;
  }
`;

const TabContent = styled.div`
  display: ${props => props.visible ? 'block' : 'none'};
  position: absolute;
  top: 70px;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 2rem 3rem;
  animation: ${props => props.visible ? 'slideIn 0.5s ease' : 'none'};
  overflow-y: auto;

  p {
    color: #ffffff;
    line-height: 1.6;
    font-size: 0.875rem;
    margin: 0;
    font-weight: 500;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
    letter-spacing: 0.2px;
  }

  @media (min-width: 1024px) {
    padding: 4rem 6rem;
    top: 80px;
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(15px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(242, 169, 0, 0.4);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(242, 169, 0, 0.6);
  }

  @media (max-width: 767px) {
    top: 60px;
    padding: 1.5rem;

    p {
      font-size: 0.95rem;
      line-height: 1.6;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    top: 65px;
    padding: 1.8rem;
  }
`;

const FAQItem = styled.div`
  margin-bottom: 1.8rem;
  padding: 1.5rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  background: rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.1);

  h4 {
    color: #f2a900;
    margin-bottom: 0.6rem;
    font-size: 0.925rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.6rem;

    &::before {
      content: '•';
      color: rgba(242, 169, 0, 0.7);
      font-size: 1.3rem;
    }
  }

  p {
    font-size: 0.875rem;
    color: #ffffff;
    line-height: 1.5;
    margin: 0;
    font-weight: 500;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
    letter-spacing: 0.2px;
  }

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.35);
    border-color: rgba(242, 169, 0, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 767px) {
    padding: 1rem;
    margin-bottom: 1.2rem;

    h4 {
      font-size: 0.9rem;
    }

    p {
      font-size: 0.85rem;
    }
  }
`;

const StepList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  @media (min-width: 1024px) {
    gap: 1.5rem;
    margin: 1rem 0;
  }

  li {
    color: #ffffff;
    font-size: 0.875rem;
    font-weight: 500;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
    letter-spacing: 0.2px;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem;
    border-radius: 10px;
    transition: all 0.3s ease;

    svg {
      font-size: 1.2em;
      flex-shrink: 0;
      color: #f2a900;
      opacity: 0.9;
    }
    line-height: 1.6;
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.1);
    position: relative;
    font-weight: 500;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 4px;
      background: linear-gradient(180deg, #f2a900, #ffb84d);
      border-radius: 0 3px 3px 0;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &:hover {
      background: rgba(0, 0, 0, 0.4);
      border-color: rgba(242, 169, 0, 0.3);
      transform: translateX(6px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);

      &::before {
        opacity: 1;
      }
    }

    span {
      font-size: 1.3rem;
      filter: grayscale(0.2);
      flex-shrink: 0;
    }

    @media (max-width: 767px) {
      padding: 1rem;
      gap: 0.8rem;
      font-size: 0.9rem;

      span {
        font-size: 1.2rem;
      }
    }
  }
`;

export default TabsSection;

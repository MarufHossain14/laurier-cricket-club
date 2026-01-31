// Weblinks Page Sections
// created by @maruf14hussain
// date: 29 Oct, 2025

// import Image from "next/image"; // COMMENTED OUT - not used
import styled from "styled-components";
import { Container } from "./ReusableStyles"; // Only importing Container, others not used
// import Link from "next/link"; // COMMENTED OUT - not used
import { HexIcon, OvalIcon } from './icons';
// import { FaChevronRight } from 'react-icons/fa'; // COMMENTED OUT - not used
// import { MdHome } from 'react-icons/md'; // COMMENTED OUT - not used
// import { HiArrowUpRight } from 'react-icons/hi2'; // COMMENTED OUT - not used
import allLinks from "../data/LinksData";
import bioData from "../data/BioData";
import TabsSection from "./TabsSection";
import { socialIcons } from './SocialIcons';
import { StyledLinkButton } from './ui/Button';
import React, { useState } from 'react';


const Modal = ({ isOpen, onClose, email }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ModalBody>
          <div className="email">{email}</div>
          <ModalButton href={`mailto:${email}`}>
            Click to Send Email
          </ModalButton>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};



const Links = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalEmail, setModalEmail] = useState('');

  // all user info from bioData
  const name = bioData[0].name;
  const url = bioData[0].url;
  const username = bioData[0].username;
  const titleImg = bioData[0].titleImg;
  const avatarImg = bioData[0].avatar;
  const description = bioData[0].description;
  const descShow = bioData[0].descShow;
  const subdesc = bioData[0].subdesc;
  const subdescShow = bioData[0].subdescShow;
  const footerText = bioData[0].footerText;
  const author = bioData[0].author;
  const authorURL = bioData[0].authorURL;
  const titleImage = "/title.svg";

  // Check what class to use oval or hex for avatar
  const avatarShape = bioData[0].nftAvatar ? `nft-clipped` : `oval-clipped`


  // Description and subdescription goes here
  const descriptionText = descShow ? description : `Write your own fall back text if description not in BioData.js or remove me/leave blank`
  const subdescText = subdescShow ? subdesc : `Write your own if you want or just remove me/leave blank`


  // const newProduct = bioData[0].newProduct; // checking for newProduct flag true false - COMMENTED OUT
  // const newProductUrl = bioData[0].newProductUrl; // get product url if available - COMMENTED OUT



  // Collect all links filter by type - social, main, other and custom
  // get data for social section
  const social = allLinks.filter((el) => {
    return el.type === "social" && el.on
  });

  // Get data for main section (cricket club main links)
  const main = allLinks.filter((el) => {
    return el.type === "main" && el.on
  });

  // // Get data for install section
  // const install = allLinks.filter((el) => {
  //   return el.type === "install" && el.on
  // });

  // // Get data for nfts
  // const nfts = allLinks.filter((el) => {
  //   return el.type === "nft" && el.on
  // });

  // Get data for custom section (WhatsApp, Membership, Feedback)
  const customs = allLinks.filter((el) => {
    return el.type === "custom" && el.on
  });

  return (
      <LinkWrapper>
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          email={modalEmail}
        />
        <LinkContainer>
          <TopPart>
            <LinkHeader>
              <Avatar>
                <AvatarWrap>
                  {/* Avatar svg  hex or oval if nftAvatar=true will convert to hex */}
                  <HexIcon />
                  <OvalIcon />
                  <div className={`${avatarShape} avatar-border`}></div>
                  <div className={`${avatarShape} avatar-fill`}></div>
                  <img
                      src={avatarImg}
                      className={avatarShape}
                  />
                </AvatarWrap>
              </Avatar>
              <Title>
                {/* Using titleimg flag to use image as title or text */}
                {titleImg ?
                    <img src={titleImage} className="handle" /> :
                    <h1>{name}</h1>
                }
                {/* if your remove username from data it will not appear */}
                {
                  username ? <h3><a href={`${url}`}>{username}</a></h3> : ''
                }
              </Title>
            </LinkHeader>

            {/* Bio Section */}
            <LinkBio>
              {description && <h1>{descriptionText} </h1>}
              {subdesc && <h4>{subdescText}</h4>}
            </LinkBio>
            {/* End Bio Section */}

            {/* Weblinks started */}
            <WebLinkWrap>
              {/* Social Icon */}
              <LinkSection className="social">
                <div className="iconsonly">
                  {
                    social.map((i) => {
                      const SocialIcon = socialIcons[i.icon];
                      return (
                          <a href={i.url} key={i.title} target="_blank" rel="noreferrer">
                            <LinkBox className="socialIcon">
                              {SocialIcon && <SocialIcon size={24} />}
                            </LinkBox>
                          </a>
                      )
                    })
                  }
                </div>
              </LinkSection>
              {/* Social Icon */}

              {/* Main Section - Cricket Club Links */}
              {
                main.length > 0 ?
                    <LinkSection>
                      <h3>Club Links</h3>
                      {
                        main.map((i) => {
                          const handleClick = (e) => {
                            if (i.isEmail) {
                              e.preventDefault();
                              setModalEmail(i.url);
                              setIsModalOpen(true);
                            }
                          };

                          return (
                              <StyledLinkButton
                                href={i.isEmail ? "#" : i.url}
                                key={i.title}
                                target="_blank"
                                rel="noreferrer"
                                onClick={handleClick}
                              >
                                {{
                                  icon: i.icon,
                                  text: i.title,
                                  style: { filter: 'var(--img)' }
                                }}
                              </StyledLinkButton>
                          )
                        })
                      }
                    </LinkSection> : ''
              }
              {/* End Main Section */}

              {/* Install Section - COMMENTED OUT */}
              {/*
                install.length > 0 ?
                    <LinkSection>
                      <h3>{install[0].type}</h3>
                      {
                        install.map((i) => {
                          return (
                              <StyledLinkButton
                                href={i.url}
                                key={i.title}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {{
                                  icon: i.icon,
                                  text: i.title,
                                  style: { filter: 'var(--img)' }
                                }}
                              </StyledLinkButton>
                          )
                        })
                      }
                    </LinkSection> : ''
              */}
              {/* End Install Section */}

              {/* NFT Section - COMMENTED OUT */}
              {/*
                nfts.length > 0 ?
                    <LinkSection>
                      <h3>{nfts[0].type}s</h3>
                      {
                        nfts.map((i) => {
                          return (
                              <StyledLinkButton
                                href={i.url}
                                key={i.title}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {{
                                  icon: i.icon,
                                  text: i.title,
                                  style: { filter: 'var(--img)' }
                                }}
                              </StyledLinkButton>
                          )
                        })
                      }
                    </LinkSection>
                    : ''
              */}
              {/* End NFT Section */}

              {/* Custom Section - WhatsApp, Membership, Feedback */}
              {
                customs.length > 0 ?
                    <LinkSection>
                      <h3>Quick Actions</h3>
                      {
                        customs.map((i) => {
                          return (
                              <StyledLinkButton
                                href={i.url}
                                key={i.title}
                                target="_blank"
                                rel="noreferrer"
                                className={i.customStyle || ''}
                              >
                                {{
                                  icon: i.icon,
                                  text: i.title,
                                  style: { filter: 'var(--img)' }
                                }}
                              </StyledLinkButton>
                          )
                        })
                      }
                    </LinkSection> : ''
              }
              {/* End Custom Section */}

            </WebLinkWrap>
            {/* End Weblinks */}
          </TopPart>
          <BottomPart>
            <TabsSection />
            <LinkFoot>
              <h4>{footerText} <a href={authorURL}>{author}</a></h4>
            </LinkFoot>
          </BottomPart>

        </LinkContainer>
      </LinkWrapper>

  )
};

export default Links;

const LinkWrapper = styled(Container)`
`
const  LinkContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 40px 24px;
    @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
        padding: 24px 16px;
        padding-bottom: calc(env(safe-area-inset-bottom, 0) + 32px); /* iOS safe area */
    }
`

const LinkHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 48px;
    margin-bottom: 24px;
    @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
       margin-top: 24px;
    }
`

const Avatar = styled.div`
    height: 90px;
    width: 90px;
    position: relative;
    margin-bottom: 16px;
`

const AvatarWrap = styled.div`
   height: 100%;
   width: 100%;
   img{
    height: calc(100% - 6px);
    width: calc(100% - 6px);
    border: 2px solid var(--color-border);
    background: var(--color-surface);
   }
   .avatar-border{
        display: none;
   }
   .avatar-fill{
        display: none;
   }
`

const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
      /* Fluid, responsive title size */
      font-size: clamp(22px, 7vw, 36px);
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--color-text);
      position: relative;
      line-height: 1.15;
      word-break: break-word;
      text-align: center;

      @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
        letter-spacing: 0.6px;
        line-height: 1.1;
      }
    }
    h3{
      margin-top: 10px;
      font-size: 18px;
      font-weight: 400;
      letter-spacing: 0px;
      color: var(--color-accent);
      opacity: 0.9;
      @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
        font-size: 15px;
        margin-top:2px;
      }
    }

    .name{
      margin-top: 8px;
      @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
        width: 140px;
      }
    }
    .handle{
      /* Fluid logo height */
      height: clamp(22px, 6vw, 32px);
      margin-top: 6px;
      margin-bottom: 6px;
      @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
        height: clamp(22px, 6vw, 28px);
      }
    }
`

const LinkBio = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 800px;
    margin: 0 auto;
    h1{
      font-size: 24px;
      line-height: 1.6;
      font-weight: 400;
      letter-spacing: -0.3px;
      padding: 0 24px;
      color: var(--color-text);
      position: relative;

      @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
        font-size: 19px;
        line-height: 1.5;
        padding: 0 16px;
      }

      vertical-align: middle;
      span{
        font-size: 12px;
        vertical-align: bottom;
        line-height: 30px;
        color: ${({ theme }) => theme.text.secondary};
        margin: 0 2px;
        @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
          font-size: 10px;
          line-height: 20px;
        }
      }
    }
    h4{
      font-size: 17px;
      letter-spacing: 0;
      margin: 20px 0;
      color: var(--color-muted);
      font-weight: 400;
      line-height: 1.7;

      @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
        font-size: 15px;
        padding: 0 24px;
        line-height: 1.5;
      }

      a{
         font-weight: 600;
         color: var(--color-accent);
         transition: all 0.3s ease;
         text-decoration: none;
         position: relative;

         &:hover{
           color: var(--color-accent);
           text-decoration: underline;
         }
      }
    }
`

const TopPart = styled.div`

`



const BottomPart = styled.div`
    margin-bottom: 56px;

`
const LinkFoot = styled.div`
    margin-top: 28px;
    h4{
      color: var(--color-muted);
      line-height: 28px;
      letter-spacing: 0;
      font-size: 16px;
      font-weight: 400;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 16px;
      border-radius: 10px;
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
        font-size: 14px; /* increased from 12px */
        padding: 10px 14px; /* increased padding */
        line-height: 24px;
        margin: 0 16px; /* add side margins */
        white-space: nowrap; /* prevent awkward wrapping */
      }
      a{
        color: var(--color-accent); /* Laurier purple for the handle */
        font-weight: 600;
        text-decoration: none;
        padding: 2px 6px;
        border-radius: 4px;
        @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
          font-weight: 600;
          padding: 3px 8px;
        }
      }
      a:hover{
        text-decoration: underline;
        background: var(--color-surface-muted);
      }
      span{
        font-size: 10px;
        vertical-align: bottom;
        line-height: 32px;
        margin: 0 2px;
        opacity: .9;
        @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
          font-size: 9px;
          line-height: 24px;
        }
      }
    }
`

const WebLinkWrap = styled.div`
    @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
       padding: 0 12px;
    }
`


const LinkSection = styled.div`
    padding: 20px 0;
    display: flex;
    margin: 0 auto;
    max-width: 400px;
    flex-direction: column;
    position: relative;
    background: var(--color-surface);
    border-radius: 14px;
    margin-bottom: 24px;
    border: 1px solid var(--color-border);

    &:not(.social) {
      background: var(--color-surface);
      border-radius: 14px;
      padding: 20px;
    }

    &.social{
      max-width: max-content;
      padding: 0;
      margin-bottom: 18px;
      background: transparent;
      border: none;
    }
    .iconsonly{
      display: flex;
      justify-content: center;
      @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
        flex-wrap: wrap;
      }
    }
    h3{
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-bottom: 14px;
      font-weight: 600;
      color: var(--color-accent);
      position: relative;
      display: inline-block;
      margin: 0 auto 12px;
      padding-bottom: 4px;

      @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
        font-size: 13px;
        letter-spacing: 2.5px;
        margin-bottom: 10px;
      }
    }
`

const LinkTitle = styled.div`
  display: flex;
  font-size: 18px;
  align-items: center;
    @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
      font-size: 14px;
    }
    img{
      height: 20px;
      margin-right: 10px;
    }
`

const LinkBox = styled.div`
    padding: 18px 20px;
    border-radius: 12px;
    margin: 10px 0;
    border: 1px solid var(--color-border);
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -.5px;
    position: relative;
    text-align: center;
    background: var(--color-surface);
    transition: all 0.2s ease;
    &:hover{
      border-color: var(--color-accent);
      background: var(--color-surface-muted);
    }
    .new-up{
      transform: scale(.8);
      opacity: .7;
    }

    /* Custom styles for WhatsApp button */
    &.whatsapp{
      background: var(--color-accent);
      border-color: var(--color-accent);
      color: var(--color-accent-contrast);
      ${LinkTitle} {
        color: var(--color-accent-contrast);
      }
    }

    /* Custom styles for Membership button */
    &.membership{
      background: var(--color-accent);
      border-color: var(--color-accent);
      color: var(--color-accent-contrast);
      ${LinkTitle} {
        color: var(--color-accent-contrast);
      }
    }

    /* Custom styles for Feedback button */
    &.feedback{
      background: var(--color-accent);
      border-color: var(--color-accent);
      color: var(--color-accent-contrast);
      ${LinkTitle} {
        color: var(--color-accent-contrast);
      }
    }

    &.socialIcon{
      padding: 16px;
      border-radius: 50%;
      border: 1px solid var(--color-border);
      margin: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--color-surface);

      svg {
        height: 24px;
        width: 24px;
        color: ${({ theme }) => theme.text.primary};
        transition: all 0.3s ease;
      }

      &:hover {
        background: var(--color-surface-muted);
        border-color: var(--color-accent);

        svg {
          color: var(--color-accent);
        }
      }

      @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
        padding: 10px;
        margin: 2px;
        svg {
          height: 20px;
          width: 20px;
        }
      }
    }
    @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
      padding: 12px 16px;
      font-size: 16px;
    }
`

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(17, 16, 15, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 24px 16px;
`;

const ModalContent = styled.div`
  background: var(--color-surface);
  border-radius: 14px;
  padding: 24px;
  width: min(92vw, 360px);
  position: relative;
  border: 1px solid var(--color-border);
  animation: modalIn 0.3s ease-out;
  box-sizing: border-box;

  @keyframes modalIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
    width: 85%;
    padding: 20px;
  }
`;

const ModalBody = styled.div`
  text-align: center;
  color: var(--color-text);

  .email {
    margin: 20px 0 18px;
    font-size: 18px;
    font-weight: 400;
    word-break: break-word;
    overflow-wrap: anywhere;
    color: var(--color-text);

    @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
      font-size: 16px;
    }
  }
`;

const ModalButton = styled.a`
  display: inline-block;
  padding: 12px 24px;
  background: var(--color-accent);
  color: var(--color-accent-contrast);
  border: 1px solid var(--color-accent);
  border-radius: 10px;
  cursor: pointer;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.2s ease;
  margin-top: 16px;

  &:hover {
    background: var(--color-accent);
    border-color: var(--color-accent);
  }

  @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
    padding: 10px 20px;
    font-size: 14px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: 1px solid var(--color-border);
  color: var(--color-text);
  font-size: 24px;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  line-height: 1;
  transition: all 0.2s ease;

  &:hover {
    background: var(--color-surface-muted);
  }
`;

// COMMENTED OUT - NewSection not used anymore
/*
const NewSection = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 20px;
    img{
      width: 100%;
      border: 1px solid ${({ theme }) => theme.bg.secondary};
      border-radius: 12px;
      cursor: pointer;
      &:hover{
       transform: scale(1.01);
      }
    }
`
*/

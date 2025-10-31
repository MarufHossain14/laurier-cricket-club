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
          <div className="email">📧 {email}</div>
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
    padding: 24px;
    @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
        padding: 16px 12px;
        padding-bottom: calc(env(safe-area-inset-bottom, 0) + 24px); /* iOS safe area */
    }
`

const LinkHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
    margin-bottom: 12px;
    @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
       margin-top: 20px;
    }
`

const Avatar = styled.div`
    height: 90px;
    width: 90px;
    position: relative;
    margin-bottom: 12px;
`

const AvatarWrap = styled.div`
   height: 100%;
   width: 100%;
   filter: drop-shadow(0px 1px 2px var(--avatar-shadow));
   img{
    height: calc(100% - 6px);
    width: calc(100% - 6px);
   }
   .avatar-border{
        height: 100%;
        width: 100%;
        position: absolute;
        background: ${({ theme }) => theme.bg.primary};
   }
   .avatar-fill{
        height: calc(100% - 6px);
        width: calc(100% - 6px);
        position: absolute;
        background: ${({ theme }) => theme.bg.primary};
   }
`

const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
      font-size: 36px;
      font-weight: 800;
      letter-spacing: 1px;
      text-transform: uppercase;
      background: linear-gradient(135deg, #FFD700 0%, #FFF3A1 50%, #FFD700 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: shimmer 3s infinite linear;
      text-shadow:
        3px 3px 0px rgba(0, 0, 0, 0.4),
        -2px -2px 4px rgba(255, 255, 255, 0.2),
        0 0 8px rgba(252, 195, 20, 0.5),
        0 0 12px rgba(252, 195, 20, 0.3);
      position: relative;
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));      @keyframes shimmer {
        0% {
          background-position: -200px;
        }
        100% {
          background-position: 200px;
        }
      }

      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -4px;
        width: 100%;
        height: 3px;
        background: linear-gradient(90deg,
          transparent 0%,
          #FFD700 20%,
          #FFF3A1 50%,
          #FFD700 80%,
          transparent 100%
        );
        box-shadow:
          0 0 10px rgba(255, 215, 0, 0.5),
          0 0 20px rgba(255, 215, 0, 0.3);
      }

      @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
        font-size: 28px;
        letter-spacing: 0.8px;
      }
    }
    h3{
      margin-top: 8px;
      font-size: 18px;
      font-weight: 500;
      letter-spacing: 0px;
      color: #411884;
      opacity: .9;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
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
      height: 32px;
      margin-top: 6px;
      margin-bottom: 6px;
      @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
        height: 26px;
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
      line-height: 1.5;
      font-weight: 500;
      letter-spacing: -0.3px;
      padding: 0 20px;
      color: rgba(255, 255, 255, 0.95);
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      position: relative;

      @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
        font-size: 20px;
        line-height: 1.4;
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
      font-size: 18px;
      letter-spacing: 0;
      margin: 16px 0;
      color: rgba(255, 255, 255, 0.85);
      font-weight: 500;
      line-height: 1.6;
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);

      @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
        font-size: 16px;
        padding: 0 24px;
        line-height: 1.5;
      }

      a{
         font-weight: 600;
         color: #f2a900;
         transition: all 0.3s ease;
         text-decoration: none;
         position: relative;
         padding-bottom: 1px;

         &::after {
           content: '';
           position: absolute;
           bottom: 0;
           left: 0;
           width: 100%;
           height: 1px;
           background: #f2a900;
           transform: scaleX(0);
           transform-origin: right;
           transition: transform 0.3s ease;
         }

         &:hover{
           color: #ffb84d;
           text-shadow: 0 0 15px rgba(242, 169, 0, 0.4);

           &::after {
             transform: scaleX(1);
             transform-origin: left;
           }
         }
      }
    }
`

const TopPart = styled.div`

`



const BottomPart = styled.div`
    margin-bottom: 40px;

`
const LinkFoot = styled.div`
    margin-top: 20px;
    h4{
      /* stronger contrast against the purple background */
      color: rgba(255,255,255,0.95);
      line-height: 32px;
      letter-spacing: 0;
      font-size: 16px;
      font-weight: 500;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      border-radius: 8px;
      background: rgba(0,0,0,0.15); /* darker backdrop for better contrast */
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
        font-size: 14px; /* increased from 12px */
        padding: 10px 16px; /* increased padding */
        line-height: 24px;
        background: rgba(0,0,0,0.25); /* even darker backdrop for mobile */
        margin: 0 16px; /* add side margins */
        white-space: nowrap; /* prevent awkward wrapping */
      }
      a{
        color: #FCC314; /* Laurier yellow for the handle */
        font-weight: 700;
        text-decoration: none;
        padding: 2px 6px;
        border-radius: 4px;
        @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
          color: #FFD54F; /* slightly lighter yellow for better mobile visibility */
          font-weight: 800;
          padding: 3px 8px;
        }
      }
      a:hover{
        text-decoration: underline;
        background: rgba(255,255,255,0.1);
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
    padding: 16px 0;
    display: flex;
    margin: 0 auto;
    max-width: 400px;
    flex-direction: column;
    position: relative;
    background: linear-gradient(135deg, rgba(65, 24, 132, 0.1), rgba(252, 195, 20, 0.1));
    border-radius: 16px;
    margin-bottom: 16px;

    && h3 {
      color: yellow !important;
    }    h3 {
      font-size: 14px;
      text-transform: uppercase;
      margin: 8px 20px;
      color: #FCC314;
      font-weight: 700;
      letter-spacing: .1em;
    }

    &:not(.social) {
      background: linear-gradient(135deg, rgba(65, 24, 132, 0.05), rgba(252, 195, 20, 0.05));
      border-radius: 16px;
      padding: 16px;
      border: 1px solid rgba(65, 24, 132, 0.1);
    }

    &.social{
      max-width: max-content;
      padding: 0;
      margin-bottom: 18px;
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
      letter-spacing: 3px;
      margin-bottom: 12px;
      font-weight: 600;
      color: #FCC314;
      position: relative;
      display: inline-block;
      margin: 0 auto 12px;
      padding-bottom: 4px;

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 40px;
        height: 2px;
        background: linear-gradient(90deg, transparent, #FCC314, #411884);
      }

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
    margin: 8px 18px;
    border: 1px solid rgba(65, 24, 132, 0.25);
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
    background: linear-gradient(135deg, rgba(65, 24, 132, 0.25), rgba(65, 24, 132, 0.15));
    backdrop-filter: blur(12px);
    box-shadow: 0 4px 12px rgba(65, 24, 132, 0.15);
    transition: all 0.3s ease;

    &::before {
      content: "";
      border-radius: 12px;
      display: block;
      position: absolute;
      z-index: -1;
      inset: -2px;
      opacity: 0;
      background: linear-gradient(135deg, rgba(65, 24, 132, 0.15), rgba(252, 195, 20, 0.15));
      transform: scale(0.8);
    }
    &:hover{
      transition: all 333ms ease 0s;
      transform: translateY(-2px);
      border-color: #FCC314;
      background: linear-gradient(135deg, rgba(65, 24, 132, 0.3), rgba(65, 24, 132, 0.2));
      box-shadow: 0 8px 20px rgba(65, 24, 132, 0.25);
      &::before{
        opacity: 1;
        background: linear-gradient(135deg, rgba(252, 195, 20, 0.2), rgba(65, 24, 132, 0.2));
        transition: all 333ms ease 0s;
        transform: scale(1);
      }
    }
    .new-up{
      transform: scale(.8);
      opacity: .7;
    }

    /* Custom styles for WhatsApp button */
    &.whatsapp{
      background: linear-gradient(135deg, #FCC314 0%, #411884 100%);
      border: none;
      color: white;
      &::before{
        background: linear-gradient(135deg, #411884 0%, #FCC314 100%);
      }
      ${LinkTitle} {
        color: white;
      }
    }

    /* Custom styles for Membership button */
    &.membership{
      background: linear-gradient(135deg, #411884 0%, #FCC314 100%);
      border: none;
      color: white;
      &::before{
        background: linear-gradient(135deg, #FCC314 0%, #411884 100%);
      }
      ${LinkTitle} {
        color: white;
      }
    }

    /* Custom styles for Feedback button */
    &.feedback{
      background: linear-gradient(135deg, #FCC314 0%, #411884 100%);
      border: none;
      color: white;
      &::before{
        background: linear-gradient(135deg, #411884 0%, #FCC314 100%);
      }
      ${LinkTitle} {
        color: white;
      }
    }

    &.socialIcon{
      padding: 16px;
      border-radius: 50%;
      border: 1px solid rgba(65, 24, 132, 0.5);
      margin: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, rgba(65, 24, 132, 0.25), rgba(65, 24, 132, 0.15));
      box-shadow: 0 4px 12px rgba(65, 24, 132, 0.15);

      svg {
        height: 24px;
        width: 24px;
        color: ${({ theme }) => theme.text.primary};
        transition: all 0.3s ease;
      }

      &:hover {
        background: linear-gradient(135deg, rgba(65, 24, 132, 0.3), rgba(252, 195, 20, 0.2));
        border-color: #FCC314;
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(65, 24, 132, 0.25);

        svg {
          transform: scale(1.1);
          color: #FCC314;
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
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

const ModalContent = styled.div`
  background: linear-gradient(135deg, rgba(65, 24, 132, 0.95), rgba(65, 24, 132, 0.85));
  border-radius: 16px;
  padding: 24px;
  max-width: 90%;
  width: 320px;
  position: relative;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(252, 195, 20, 0.2);
  animation: modalIn 0.3s ease-out;

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
  color: white;

  .email {
    margin: 20px 0;
    font-size: 18px;
    font-weight: 500;
    word-break: break-all;
    color: rgba(255, 255, 255, 0.9);
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

    @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
      font-size: 16px;
    }
  }
`;

const ModalButton = styled.a`
  display: inline-block;
  padding: 12px 24px;
  background: #FCC314;
  color: #411884;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.2s ease;
  margin-top: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    background: #ffd034;
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
  border: none;
  color: rgba(255, 255, 255, 0.8);
  font-size: 24px;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  line-height: 1;
  transition: all 0.2s ease;

  &:hover {
    color: white;
    background: rgba(255, 255, 255, 0.1);
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

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



const Links = () => {

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

  // Get data for other section
  const others = allLinks.filter((el) => {
    return el.type === "other" && el.on
  });

  // Get data for custom section (WhatsApp, Membership, Feedback)
  const customs = allLinks.filter((el) => {
    return el.type === "custom" && el.on
  });

  return (
      <LinkWrapper>
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

              {/* Other Section */}
              {
                others.length > 0 ?
                    <LinkSection>
                      <h3>{others[0].type}</h3>
                      {/* New Product Section*/}
                      {/* BioData.js > newProduct == true */}
                      {/* New Section will render once newProduct == true */}
                      {/*
                      (newProduct) ? <NewSection>
                        <a href={newProductUrl} target="_blank" rel="noreferrer">
                          <img
                              src={'/newproduct.png'}
                              className="newproduct"
                          />
                        </a>
                      </NewSection> : ''
                      */}
                      {/* End Biodata.js*/}
                      {
                        others.map((i) => {
                          return (
                              <StyledLinkButton
                                href={i.url}
                                key={i.title}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {{
                                  icon: i.icon,
                                  text: i.title
                                }}
                              </StyledLinkButton>
                          )
                        })
                      }
                    </LinkSection> : ''
              }
              {/* End Other Section */}

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
const LinkContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 24px;
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
      letter-spacing: 0.5px;
      color: #f2a900;
      text-shadow: 2px 2px 0px rgba(75, 46, 131, 0.3);
      @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
        font-size: 30px;
      }
      @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
        font-size: 32px;
      }
    }
    h3{
      margin-top: 8px;
      font-size: 18px;
      font-weight: 500;
      letter-spacing: 0px;
      color: ${({ theme }) => theme.text.secondary};
      opacity: .7;
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
    h4{
      color: ${({ theme }) => theme.text.secondary};
      line-height: 32px;
      letter-spacing: -.2px;
      font-size: 16px;
      font-weight: 500;
      @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
        font-size: 12px;
      }
      span{
        font-size: 10px;
        vertical-align: bottom;
        line-height: 32px;
        margin: 0 2px;
        opacity: .6;
        @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
          font-size: 8px;
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
      color: #f2a900;
      font-weight: 600;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      background: linear-gradient(135deg, #f2a900, #ffb84d);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
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
        background: linear-gradient(90deg, transparent, #f2a900, transparent);
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
    border: 1px solid ${({ theme }) => theme.bg.secondary};
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

    &::before{
      content: "";
      border-radius: 12px;
      display: block;
      position: absolute;
      z-index: -1;
      inset: -2px;
      opacity: 0;
      transform: scale(0.8);
    }
    &:hover{
    transition: all 333ms ease 0s;
    border-color: transparent;
      &::before{
        opacity: 1;
        background: ${({ theme }) => theme.bg.hover};
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
      background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
      border: none;
      color: white;
      &::before{
        background: linear-gradient(135deg, #128C7E 0%, #075E54 100%);
      }
      ${LinkTitle} {
        color: white;
      }
    }

    /* Custom styles for Membership button */
    &.membership{
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border: none;
      color: white;
      &::before{
        background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
      }
      ${LinkTitle} {
        color: white;
      }
    }

    /* Custom styles for Feedback button */
    &.feedback{
      background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      border: none;
      color: white;
      &::before{
        background: linear-gradient(135deg, #f5576c 0%, #f093fb 100%);
      }
      ${LinkTitle} {
        color: white;
      }
    }

    &.socialIcon{
      padding: 16px;
      border-radius: 50%;
      border: none;
      margin: 4px;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        height: 24px;
        width: 24px;
        color: ${({ theme }) => theme.text.primary};
        transition: all 0.3s ease;
      }

      &:hover svg {
        transform: scale(1.1);
        color: #f2a900;
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

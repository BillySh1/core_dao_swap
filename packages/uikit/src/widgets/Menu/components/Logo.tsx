import React from "react";
import styled, { keyframes } from "styled-components";
import Flex from "../../../components/Box/Flex";
import { HamburgerCloseIcon } from "../icons";
import MenuButton from "./MenuButton";

interface Props {
  isDark: boolean;
  href: string;
  isPushed: boolean;
  togglePush: () => void;
}

const blink = keyframes`
  0%,  100% { transform: scaleY(1); }
  50% { transform:  scaleY(0.1); }
`;

const StyledLink = styled("a")`
  display: flex;
  align-items: center;
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon {
    width: 160px;
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
  .eye {
    animation-delay: 20ms;
  }
  &:hover {
    .eye {
      transform-origin: center 60%;
      animation-name: ${blink};
      animation-duration: 350ms;
      animation-iteration-count: 1;
    }
  }
`;

const Logo: React.FC<Props> = ({ isDark, href, isPushed, togglePush }) => {
  // const { linkComponent } = useContext(MenuContext);
  // const isAbsoluteUrl = href.startsWith("http");
  // const innerLogo = (
  //   <>
  //     <LogoIcon className="mobile-icon" />
  //     <LogoWithTextIcon className="desktop-icon" isDark={isDark} />
  //   </>
  // );

  return (
    <Flex>
      <MenuButton aria-label="Toggle menu" onClick={togglePush} mr="24px">
        <HamburgerCloseIcon width="24px" color="textSubtle" />
      </MenuButton>
      {/* {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="Pancake home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink href={href} as={linkComponent} aria-label="Pancake home page">
          {innerLogo}
        </StyledLink>
      )} */}
    </Flex>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);

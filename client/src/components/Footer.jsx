import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { Link} from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get Started?</h3>
            <h3>Talk to us Today</h3>
          </div>
          <div>
            <Link to="/contact">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* footer */}

      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>Sumit Angural</h3>
            <p>Hey There,Thanks for Visiting my Site.</p>
          </div>

          <div className="footer-subscribe">
            <h3>Subscribe to get important updates</h3>
            <form action="#">
              <input type="email" placeholder="YOUR E-MAIL" />
              <input type="submit" value="Subscribe" />
            </form>
          </div>

          <div className="footer-socail">
            <h3>follow us</h3>
            <div className="footer-social--icons">
              <div>
                <a href="https://github.com/Sumit0925" target="_blank">
                  <FaGithub className="icons" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/in/sumit-angural-249a79275/"
                  target="_blank"
                >
                  <FaLinkedin className="icons" />
                </a>
              </div>
              <div>
                <a href="#">
                  <FaInstagram className="icons" />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-contact">
            <h3>Call Us</h3>
            <h3>+91 8492809544</h3>
          </div>
        </div>

        {/* bottom-footer */}
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>
              Copyright @{new Date().getFullYear()} Sumit Angural. All Rights
              Reserved
            </p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }

  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    // padding: 14rem 0 9rem 0;
    padding: 14rem 0 3rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 55%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }

  .footer-bottom--section {
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      //   padding: 9rem 0 9rem 0;
      padding: 8rem 0 3rem 0;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;

export default Footer;

import styled from "styled-components";
import { Button } from "../styles/Button";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Contact Page</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6721.398130035233!2d74.8514316!3d32.614202399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1723215469606!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xeoqgrov"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              placeholder="USERNAME"
              name="username"
              autoComplete="off"
              required
              // value=""
            />

            <input
              type="email"
              placeholder="EMAIL"
              name="email"
              autoComplete="off"
              required
              // value=""
            />

            <textarea
              name="message"
              rows="10"
              cols="30"
              placeholder="ENTER YOUR MESSAGE"
              autoComplete="off"
              required
            ></textarea>

            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;

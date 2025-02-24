import React from 'react';

type Props = {
  name: string;
}
const EmailTemplate = ({ name }: Props) => (
  <div
    style={{
      fontFamily: "'Arial', sans-serif, Poppins ",
      lineHeight: "1.6",
      color: "#333",
      maxWidth: "600px",
      margin: "0 auto",
      padding: "20px",
      border: "0.5px solid #ddd",
      borderRadius: "5px",
      backgroundColor: "#f9f9f9",
      
    }}
  >
    <header
      style={{
        textAlign: "center",
        marginBottom: "20px",
        borderBottom: "2px solid #1F4529",
        paddingBottom: "5px",
      }}
    >
      <h1 style={{ color: "#1F4529", fontSize:"16px" }}>Thank You for Subscribing to our Newsletter!</h1>
    </header>
    <main>
      <h2 style={{ fontSize: "20px", color: "#555" }}>
        Hi {name || "there"},
      </h2>
      <p style={{ fontSize: "16px", color: "#666" }}>
      Thank you for subscribing to our newsletter. We&apos;re excited to have you on board
      </p>
      <p>You&apos;ll receive updates, news, and special offers directly to your inbox.</p>
      <blockquote
        style={{
          fontSize: "16px",
          fontStyle: "italic",
          color: "#444",
          backgroundColor: "#f2f2f2",
          padding: "10px",
          borderLeft: "4px solid #1F4529",
          margin: "15px 0",
        }}
      >
         &quot;Stay tuned for more updates!&quot;
      </blockquote>
      <p style={{ fontSize: "16px", color: "#666" }}>
        I’ll get back to you as soon as possible. If you’d like to provide any
        additional details, feel free to reply directly to this email.
      </p>
      <p>If you have any questions, feel free to reply to this email.</p>
     
    </main>
    <footer
      style={{
        marginTop: "30px",
        textAlign: "center",
        fontSize: "12px",
        color: "#999",
      }}
    >
      <p>
        &copy; {new Date().getFullYear()} Gist<span className='text-primary'>Fiesta</span> All rights reserved.
      </p>
      <p>
        This email was sent as a confrimation mail:{" "}
        <a
          className='text-orange-600 no-underline'
          href={process.env.SERVER_URL}
          style={{ color: "#0073e6", textDecoration: "none" }}
        >
          GistFiesta
        </a>
      </p>
    </footer>
  </div>
);

export default EmailTemplate;
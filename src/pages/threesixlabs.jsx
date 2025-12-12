import React from "react";

export default function ThreeSixLabs() {
  const styles = {
    page: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "48px 24px",
      background: "linear-gradient(180deg,#fff 0%, #f7f8fa 100%)",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
      color: "#0f172a",
    },
    card: {
      maxWidth: 820,
      width: "100%",
      textAlign: "center",
      padding: "56px 40px",
      borderRadius: 14,
      boxShadow: "0 8px 30px rgba(15,23,42,0.08)",
      background: "white",
    },
    logo: {
      margin: "0 auto 18px",
      width: 84,
      height: 84,
      borderRadius: 18,
      display: "grid",
      placeItems: "center",
      background: "linear-gradient(135deg, rgba(34,197,94,0.12), rgba(59,130,246,0.08))",
      fontWeight: 700,
      fontSize: 28,
      color: "#0f172a",
      letterSpacing: 0.6,
    },
    title: {
      margin: "0 0 6px",
      fontSize: 28,
      lineHeight: 1.05,
      fontWeight: 700,
    },
    tagline: {
      margin: "0 0 18px",
      color: "#475569",
      fontSize: 15,
    },
    desc: {
      margin: "0 auto 28px",
      maxWidth: 640,
      color: "#64748b",
      fontSize: 15,
      lineHeight: 1.55,
    },
    actions: {
      display: "flex",
      gap: 12,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
    },
    primary: {
      display: "inline-block",
      padding: "10px 18px",
      background: "#0ea5a4",
      color: "white",
      borderRadius: 10,
      textDecoration: "none",
      fontWeight: 600,
    },
    ghost: {
      display: "inline-block",
      padding: "10px 14px",
      color: "#0f172a",
      textDecoration: "none",
      borderRadius: 10,
      border: "1px solid rgba(15,23,42,0.06)",
      fontWeight: 600,
      background: "transparent",
    },
    footer: {
      marginTop: 22,
      textAlign: "center",
      color: "#94a3b8",
      fontSize: 13,
    },
  };

  return (
    <main style={styles.page}>
      <section style={styles.card}>
        <div style={styles.logo} aria-hidden>
          36
        </div>

        <h1 style={styles.title}>ThreeSix Labs, Inc.</h1>
        <div style={styles.tagline}>Design · Build · Launch</div>

        <p style={styles.desc}>
          Minimal, reliable products and APIs for teams that value clarity and speed. Remote-first
          engineering, thoughtful design, and pragmatic architecture.
        </p>

        <nav style={styles.actions} aria-label="Primary">
          <a
            href="mailto:rohanlekhwani@gmail.com"
            style={styles.primary}
            title="Email ThreeSix Labs"
          >
            Get in touch
          </a>
          <a
            href="https://github.com/RonLek"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.ghost}
            title="ThreeSix Labs on GitHub"
          >
            GitHub
          </a>
        </nav>

        <div style={styles.footer}>© {new Date().getFullYear()} ThreeSix Labs, Inc.</div>
      </section>
    </main>
  );
}

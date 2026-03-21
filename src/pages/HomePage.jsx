import { useState } from "react";
import { Link } from "react-router-dom";
import QrModal from "../components/QrModal.jsx";
import styles from "./HomePage.module.css";

// Chaque scénario décrit une arnaque à faire deviner au groupe.
// Pour en ajouter un, crée un nouveau dossier dans src/scenarios/,
// ajoute une entrée ici, et une Route dans App.jsx.
const SCENARIOS = [
  {
    id: "laposte",
    path: "/laposte",
    emoji: "📦",
    label: "Faux mail La Poste",
    description:
      "Un mail de phishing imitant La Poste - colis en attente, 2,49 € à régler.",
    tags: ["Phishing", "Urgence artificielle", "Faux lien"],
    difficulty: "Facile",
  },
  // -- AJOUTER D'AUTRES SCÉNARIOS ICI --
  // {
  //   id: 'ameli',
  //   path: '/ameli',
  //   emoji: '🏥',
  //   label: 'Faux mail Ameli',
  //   description: 'Remboursement de santé à réclamer de toute urgence.',
  //   tags: ['Phishing', 'Usurpation identité'],
  //   difficulty: 'Moyen',
  // },
];

const SIMULATIONS = [
  {
    id: "sms-laposte",
    path: "/sms-laposte",
    emoji: "📱",
    label: "CAS 1 — SMS La Poste",
    description:
      "Un SMS prétend qu'un colis est bloqué et demande 1,95 € de frais de douane via un lien bit.ly.",
    tags: ["Smishing", "Faux lien", "Urgence"],
    difficulty: "Facile",
    verdict: "arnaque",
  },
  {
    id: "popup-microsoft",
    path: "/popup-microsoft",
    emoji: "💻",
    label: "CAS 2 — Alerte Microsoft",
    description:
      "Une fenêtre Windows alarmante demande d'appeler un faux support technique.",
    tags: ["Fraude support", "Ingénierie sociale"],
    difficulty: "Facile",
    verdict: "arnaque",
  },
  {
    id: "facebook-arnaque",
    path: "/facebook-arnaque",
    emoji: "👍",
    label: "CAS 3 — Pub Facebook",
    description:
      "Une publicité Facebook vend un robot de cuisine à -90% sur un site en .xyz.",
    tags: ["Fausse pub", "Site frauduleux"],
    difficulty: "Moyen",
    verdict: "arnaque",
  },
  {
    id: "whatsapp-lucas",
    path: "/whatsapp-lucas",
    emoji: "💬",
    label: "CAS 4 — WhatsApp 'Lucas'",
    description:
      "Un numéro inconnu se prétend être le petit-fils Lucas et demande 350 € en urgence.",
    tags: ["Arnaque petits-enfants", "Usurpation identité"],
    difficulty: "Moyen",
    verdict: "arnaque",
  },
  {
    id: "sms-banque-postale",
    path: "/sms-banque-postale",
    emoji: "🏦",
    label: "CAS 5 — SMS Banque Postale",
    description:
      "Un vrai SMS d'alerte de La Banque Postale signale une connexion inhabituelle.",
    tags: ["Authentique", "Alerte bancaire"],
    difficulty: "Facile",
    verdict: "vrai",
  },
  {
    id: "whatsapp-famille",
    path: "/whatsapp-famille",
    emoji: "👨‍👩‍👦",
    label: "CAS 6 — WhatsApp Lucas (vrai)",
    description:
      "Lucas (contact enregistré) propose de venir déjeuner dimanche avec sa compagne.",
    tags: ["Authentique", "Message familial"],
    difficulty: "Facile",
    verdict: "vrai",
  },
];

const DIFFICULTY_COLOR = {
  Facile: "#27ae60",
  Moyen: "#f39c12",
  Difficile: "#e74c3c",
};

export default function HomePage() {
  const [showQr, setShowQr] = useState(false);

  return (
    <div className={styles.page}>
      {showQr && <QrModal onClose={() => setShowQr(false)} />}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.logo}>🎭</div>
          <div>
            <h1 className={styles.title}>Ice Breaker - Arnaques en ligne</h1>
            <p className={styles.subtitle}>
              Outil pédagogique pour les Cafés numériques · Projet de
              théâtre-forum
            </p>
          </div>
        </div>
        <div className={styles.howTo}>
          <strong>Comment ça marche :</strong> choisis un scénario, projette-le
          sur l'écran, joue le personnage qui "reçoit" le mail, et laisse le
          groupe trouver les indices. Le bouton <em>"Révéler les indices"</em>{" "}
          en bas à droite est réservé à l'animateur.
        </div>
        <button className={styles.qrBtn} onClick={() => setShowQr(true)}>
          📱 QR Code mémo participants
        </button>
      </header>

      <main className={styles.main}>
        <h2 className={styles.sectionTitle}>Scénarios disponibles</h2>
        <div className={styles.grid}>
          {SCENARIOS.map((s) => (
            <Link key={s.id} to={s.path} className={styles.card}>
              <div className={styles.cardEmoji}>{s.emoji}</div>
              <div className={styles.cardBody}>
                <div className={styles.cardTop}>
                  <span className={styles.cardLabel}>{s.label}</span>
                  <span
                    className={styles.difficulty}
                    style={{ color: DIFFICULTY_COLOR[s.difficulty] }}
                  >
                    {s.difficulty}
                  </span>
                </div>
                <p className={styles.cardDesc}>{s.description}</p>
                <div className={styles.tags}>
                  {s.tags.map((t) => (
                    <span key={t} className={styles.tag}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className={styles.cardArrow}>→</div>
            </Link>
          ))}

          {/* Carte "À venir" pour montrer que c'est extensible */}
          <div className={styles.cardPlaceholder}>
            <div className={styles.cardEmoji}>➕</div>
            <div className={styles.cardBody}>
              <span className={styles.cardLabel} style={{ color: "#8e8e93" }}>
                Ajouter un scénario
              </span>
              <p className={styles.cardDesc} style={{ color: "#8e8e93" }}>
                Crée un nouveau dossier dans <code>src/scenarios/</code> et suis
                les instructions du README.
              </p>
            </div>
          </div>
        </div>

        {/* Simulations pratiques */}
        <h2 className={styles.sectionTitle} style={{ marginTop: "2.5rem" }}>
          Simulations pratiques — Cas en binôme
        </h2>
        <p className={styles.sectionDesc}>
          Chaque cas présente une interface réaliste (SMS, WhatsApp, pop-up…).
          L'animateur révèle les indices un par un. Les cartes{" "}
          <span className={styles.verdictInline} style={{ color: "#e74c3c" }}>Arnaque</span>
          {" "}et{" "}
          <span className={styles.verdictInline} style={{ color: "#27ae60" }}>Vrai</span>
          {" "}permettent de comparer les deux cas similaires.
        </p>
        <div className={styles.grid}>
          {SIMULATIONS.map((s) => (
            <Link key={s.id} to={s.path} className={styles.card}>
              <div className={styles.cardEmoji}>{s.emoji}</div>
              <div className={styles.cardBody}>
                <div className={styles.cardTop}>
                  <span className={styles.cardLabel}>{s.label}</span>
                  <div className={styles.cardTopRight}>
                    <span
                      className={
                        s.verdict === "arnaque"
                          ? styles.verdictBadgeDanger
                          : styles.verdictBadgeOk
                      }
                    >
                      {s.verdict === "arnaque" ? "Arnaque" : "Vrai"}
                    </span>
                    <span
                      className={styles.difficulty}
                      style={{ color: DIFFICULTY_COLOR[s.difficulty] }}
                    >
                      {s.difficulty}
                    </span>
                  </div>
                </div>
                <p className={styles.cardDesc}>{s.description}</p>
                <div className={styles.tags}>
                  {s.tags.map((t) => (
                    <span key={t} className={styles.tag}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className={styles.cardArrow}>→</div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

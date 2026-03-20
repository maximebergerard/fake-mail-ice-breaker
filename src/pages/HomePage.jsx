import { Link } from "react-router-dom";
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

const DIFFICULTY_COLOR = {
  Facile: "#27ae60",
  Moyen: "#f39c12",
  Difficile: "#e74c3c",
};

export default function HomePage() {
  return (
    <div className={styles.page}>
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
      </main>
    </div>
  );
}

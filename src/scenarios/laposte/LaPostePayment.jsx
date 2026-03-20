import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LaPostePayment.module.css";

export default function LaPostePayment() {
  const navigate = useNavigate();
  const [revealed, setRevealed] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setRevealed(true);
  }

  return (
    <div className={styles.page}>
      {/* Barre navigateur — URL clairement suspecte */}
      <div className={styles.browserBar}>
        <div className={styles.browserDots}>
          <div className={`${styles.dot} ${styles.dotR}`} />
          <div className={`${styles.dot} ${styles.dotY}`} />
          <div className={`${styles.dot} ${styles.dotG}`} />
        </div>
        <div className={styles.browserUrl}>
          {/* Pas de cadenas HTTPS — red flag supplémentaire */}
          ⚠️ <span className={styles.urlDanger}>http://</span>
          <span className={styles.urlHighlight}>laposte-paiement-rapide.xyz</span>
          <span className={styles.urlText}>/fr/checkout?ref=FR882341XP</span>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.card}>
          {/* En-tête */}
          <div className={styles.cardHeader}>
            <div className={styles.logo}>La Poste</div>
            <div className={styles.headerText}>
              <div className={styles.headerTitle}>Règlement sécurisé</div>
              <div className={styles.headerSub}>Frais de livraison — Colis FR882341XP</div>
            </div>
          </div>

          {/* Résumé commande */}
          <div className={styles.summary}>
            <div className={styles.summaryRow}>
              <span>Frais de douane colis FR882341XP</span>
              <span>2,49 €</span>
            </div>
            <div className={`${styles.summaryRow} ${styles.summaryTotal}`}>
              <span>Total à régler</span>
              <span>2,49 €</span>
            </div>
          </div>

          {/* Formulaire CB */}
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.fieldGroup}>
              <label className={styles.label}>Numéro de carte</label>
              <input
                className={styles.input}
                type="text"
                placeholder="1234 5678 9012 3456"
                maxLength={19}
                required
              />
            </div>

            <div className={styles.fieldRow}>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>Date d'expiration</label>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="MM/AA"
                  maxLength={5}
                  required
                />
              </div>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>Cryptogramme</label>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="CVV"
                  maxLength={3}
                  required
                />
              </div>
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label}>Nom sur la carte</label>
              <input
                className={styles.input}
                type="text"
                placeholder="JEAN DUPONT"
                required
              />
            </div>

            <button type="submit" className={styles.submitBtn}>
              Payer 2,49 € →
            </button>
          </form>

          <div className={styles.trustBadges}>
            <span>🔒 Paiement sécurisé</span>
            <span>🛡️ 3D Secure</span>
            <span>✅ Certifié</span>
          </div>
        </div>
      </div>

      {/* Révélation — superpose tout */}
      {revealed && (
        <div className={styles.revealOverlay}>
          <div className={styles.revealCard}>
            <div className={styles.revealEmoji}>🎭</div>
            <h2 className={styles.revealTitle}>Vous venez de vous faire arnaquer.</h2>
            <p className={styles.revealText}>
              Vos coordonnées bancaires viennent d'être transmises à des escrocs.
              <br />
              <strong>Dans la réalité, votre carte serait déjà compromise.</strong>
            </p>

            <div className={styles.revealIndices}>
              <div className={styles.revealIndice}>
                <span className={styles.indiceNum}>①</span>
                <span>L'URL commence par <strong>http://</strong> — aucun site de paiement légitime n'utilise HTTP, toujours HTTPS.</span>
              </div>
              <div className={styles.revealIndice}>
                <span className={styles.indiceNum}>②</span>
                <span>Le domaine <strong>laposte-paiement-rapide.xyz</strong> n'a rien à voir avec laposte.fr. Le .xyz est un signal d'alarme.</span>
              </div>
              <div className={styles.revealIndice}>
                <span className={styles.indiceNum}>③</span>
                <span>Les badges "Paiement sécurisé" et "3D Secure" sont de simples emojis — n'importe qui peut les écrire.</span>
              </div>
            </div>

            <button className={styles.revealBtn} onClick={() => navigate("/laposte")}>
              ← Retour au mail
            </button>
          </div>
        </div>
      )}

      {/* Bouton retour discret */}
      {!revealed && (
        <button className={styles.backBtn} onClick={() => navigate("/laposte")}>
          ← Retour au mail
        </button>
      )}
    </div>
  );
}

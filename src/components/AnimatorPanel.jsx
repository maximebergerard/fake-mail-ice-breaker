import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AnimatorPanel.module.css";

/**
 * Panneau réservé à l'animateur.
 * - Bouton discret en bas à droite (visible uniquement si on sait où regarder)
 * - Panneau qui remonte avec les indices à faire trouver au groupe
 *
 * Props :
 *   indices : Array<{ label: string, detail: string }>
 *   title   : string  (optionnel, ex: "Les 5 indices à faire trouver")
 */
export default function AnimatorPanel({
  indices,
  title = "Les indices à faire trouver",
}) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.controls}>
        <button className={styles.backBtn} onClick={() => navigate("/")}>
          ← Scénarios
        </button>
        <button className={styles.triggerBtn} onClick={() => setOpen(true)}>
          🔍 Révéler les indices
        </button>
      </div>

      {open && (
        <div className={styles.overlay} onClick={() => setOpen(false)}>
          <div className={styles.panel} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setOpen(false)}>
              ✕
            </button>
            <div className={styles.panelTitle}>🎯 {title}</div>
            <div className={styles.grid}>
              {indices.map((item, i) => (
                <div key={i} className={styles.indice}>
                  <span className={styles.num}>
                    {"①②③④⑤⑥⑦⑧⑨"[i] ?? `${i + 1}.`}
                  </span>
                  <span>
                    <strong>{item.label}</strong>
                    {item.detail && <> - {item.detail}</>}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

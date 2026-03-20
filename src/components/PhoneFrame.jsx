import styles from './PhoneFrame.module.css'

export function SmsBubble({ text, time, sent = false, children }) {
  return (
    <div className={`${styles.bubble} ${sent ? styles.bubbleSent : styles.bubbleReceived}`}>
      {children || <p className={styles.bubbleText}>{text}</p>}
      {!children && <span className={styles.bubbleTime}>{time}</span>}
    </div>
  )
}

export default function PhoneFrame({ contactName, contactSub, children }) {
  return (
    <div className={styles.phoneShell}>
      {/* Status bar */}
      <div className={styles.statusBar}>
        <span className={styles.statusTime}>9:41</span>
        <div className={styles.statusIcons}>
          {/* Signal bars */}
          <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor" aria-hidden="true">
            <rect x="0" y="8" width="3" height="4" rx="0.5" />
            <rect x="4.5" y="5.5" width="3" height="6.5" rx="0.5" />
            <rect x="9" y="3" width="3" height="9" rx="0.5" />
            <rect x="13.5" y="0" width="2.5" height="12" rx="0.5" opacity="0.35" />
          </svg>
          {/* WiFi */}
          <svg width="15" height="12" viewBox="0 0 15 12" fill="currentColor" aria-hidden="true">
            <path d="M7.5 9.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
            <path d="M7.5 6C5.9 6 4.5 6.65 3.45 7.7l1.08 1.08A4 4 0 0 1 7.5 7.6a4 4 0 0 1 2.97 1.18l1.08-1.08A5.55 5.55 0 0 0 7.5 6z" />
            <path d="M7.5 2.5C4.8 2.5 2.35 3.6 0.6 5.4l1.08 1.08A8.35 8.35 0 0 1 7.5 4.1c2.35 0 4.47.97 5.82 2.38l1.08-1.08A9.85 9.85 0 0 0 7.5 2.5z" />
          </svg>
          {/* Battery */}
          <svg width="22" height="12" viewBox="0 0 22 12" fill="currentColor" aria-hidden="true">
            <rect x="0.5" y="0.5" width="18" height="11" rx="2.5" stroke="currentColor" strokeWidth="1" fill="none" />
            <rect x="2" y="2" width="13" height="8" rx="1.5" />
            <path d="M20 4v4a2 2 0 0 0 0-4z" />
          </svg>
        </div>
      </div>

      {/* Top nav (back + contact name) */}
      <div className={styles.navBar}>
        <button className={styles.navBack} aria-label="Retour">
          <svg width="10" height="17" viewBox="0 0 10 17" fill="#007AFF">
            <path d="M8.5 1L1 8.5l7.5 7.5" stroke="#007AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
          <span className={styles.navBackLabel}>Messages</span>
        </button>
        <div className={styles.navContact}>
          <div className={styles.navAvatar}>
            <div className={styles.avatarCircle}>
              {typeof contactName === 'string' ? contactName.charAt(0).toUpperCase() : '?'}
            </div>
          </div>
          <div className={styles.navContactInfo}>
            <div className={styles.navContactName}>{contactName}</div>
            {contactSub && <div className={styles.navContactSub}>{contactSub}</div>}
          </div>
        </div>
        <button className={styles.navAction} aria-label="Appel">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="#007AFF">
            <path d="M3.6 1C2.2 1 1 2.2 1 3.6c0 7.5 6.1 13.6 13.4 13.6 1.4 0 2.6-1.2 2.6-2.6v-1.4a.6.6 0 0 0-.4-.56l-3.5-1.4a.6.6 0 0 0-.68.18l-1.1 1.37A10.25 10.25 0 0 1 6.25 7.22l1.37-1.1a.6.6 0 0 0 .18-.68L6.4 1.94A.6.6 0 0 0 5.84 1H3.6z" fill="#007AFF" />
          </svg>
        </button>
      </div>

      {/* Messages area */}
      <div className={styles.messagesArea}>
        {children}
      </div>

      {/* Compose bar */}
      <div className={styles.composeBar}>
        <button className={styles.composeBtn} aria-label="Plus">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="#007AFF">
            <circle cx="14" cy="14" r="13" stroke="#007AFF" strokeWidth="1.5" fill="none" />
            <path d="M14 8v12M8 14h12" stroke="#007AFF" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        <div className={styles.composeInput}>
          <span className={styles.composeInputPlaceholder}>iMessage</span>
        </div>
        <button className={styles.composeBtn} aria-label="Envoyer">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="#007AFF">
            <circle cx="14" cy="14" r="13" fill="#007AFF" />
            <path d="M14 19V9M9 14l5-5 5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}

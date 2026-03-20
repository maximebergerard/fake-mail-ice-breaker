# Ice Breaker — Arnaques en ligne

Outil pédagogique pour les **Cafés numériques** (ateliers de 2h, max 10 personnes).

## Contexte

Lors des séances sur les thèmes **Arnaques en ligne / IA / Réseaux sociaux**, l'animateur
utilise cet outil comme ice breaker de théâtre-forum :

1. Le scénario est projeté sur l'écran quand les participants arrivent.
2. L'animateur joue le personnage qui "reçoit" le mail — il fait semblant d'être stressé, cherche sa carte bleue, etc.
3. Le groupe doit détecter les indices qui trahissent l'arnaque.
4. L'animateur clique sur **"Révéler les indices"** (bouton discret en bas à droite) pour lancer la discussion.

L'objectif : faire **vivre** l'arnaque plutôt que de la décrire, et créer une complicité immédiate avec le groupe.

---

## Lancer le projet

```bash
npm install
npm run dev
```

Ouvre ensuite `http://localhost:5173` dans le navigateur, mets-le en plein écran, et c'est prêt.

---

## Structure du projet

```
src/
├── App.jsx                  # Routeur principal (une route par scénario)
├── index.css                # Reset CSS global
├── main.jsx                 # Point d'entrée React
│
├── pages/
│   ├── HomePage.jsx         # Page d'accueil — liste des scénarios
│   └── HomePage.module.css
│
├── components/
│   ├── AnimatorPanel.jsx    # Panneau "Révéler les indices" (réutilisable)
│   └── AnimatorPanel.module.css
│
└── scenarios/
    └── laposte/             # Scénario : faux mail La Poste
        ├── LaPosteScenario.jsx
        └── LaPosteScenario.module.css
```

---

## Ajouter un nouveau scénario

Chaque scénario est autonome dans son propre dossier. Voici comment en créer un :

### 1. Créer le dossier et le composant

```bash
mkdir src/scenarios/ameli
touch src/scenarios/ameli/AmeliScenario.jsx
touch src/scenarios/ameli/AmeliScenario.module.css
```

### 2. Copier la structure de LaPosteScenario.jsx

Le composant doit :
- Importer `AnimatorPanel` avec ses indices spécifiques
- Reproduire une interface réaliste (client mail, page web, SMS, etc.)
- Centraliser les données du scénario en haut du fichier (voir la constante `INDICES`)

### 3. Ajouter la route dans App.jsx

```jsx
import AmeliScenario from './scenarios/ameli/AmeliScenario.jsx'

// Dans <Routes> :
<Route path="/ameli" element={<AmeliScenario />} />
```

### 4. Ajouter la carte dans HomePage.jsx

Dans le tableau `SCENARIOS`, ajoute un objet :

```js
{
  id: 'ameli',
  path: '/ameli',
  emoji: '🏥',
  label: 'Faux mail Ameli',
  description: 'Remboursement de santé à réclamer de toute urgence.',
  tags: ['Phishing', 'Usurpation identité'],
  difficulty: 'Moyen',  // 'Facile' | 'Moyen' | 'Difficile'
}
```

---

## Scénarios existants

### 📦 Faux mail La Poste (`/laposte`)

**Arnaque simulée :** Phishing imitant La Poste — colis en attente, 2,49 € à régler pour débrouiller une livraison.

**Indices à faire trouver :**
1. L'adresse mail de l'expéditeur — `notifications-poste.com` au lieu de `laposte.fr`
2. L'URL du bouton CTA — `laposte-paiement-rapide.xyz` (domaine .xyz = red flag)
3. L'URL dans la barre navigateur — `laposte-espace-client.net` (pas .fr)
4. L'urgence artificielle — "avant 23h59", "retourné", "frais supplémentaires"
5. Le montant dérisoire — 2,49 € semble sans risque, mais ils récupèrent la carte

**Technique pédagogique :** La question "qu'est-ce qui vous a semblé convaincant ?" est plus
riche que "qu'est-ce qui était faux ?" — elle valide les hésitations du groupe.

---

## Stack technique

- **React 19** + **Vite** — pas de dépendances inutiles
- **React Router** — navigation entre scénarios
- **CSS Modules** — styles scopés par composant, pas de risque de collision
- Aucun backend — tout est statique, fonctionne offline

---

## Idées de scénarios futurs

- Faux SMS Ameli (remboursement en attente)
- Faux mail CAF (aide exceptionnelle à réclamer)
- Faux appel téléphonique (script à jouer + indices visuels)
- Fausse page de réseau social (arnaque à la fausse promo)
- Faux SMS de "votre banque" (lien de vérification urgente)

/* Remplacez chaque URL_A_COLLER par le lien de partage du dossier Drive correspondant.
   Conservez les guillemets autour de chaque adresse. */
const folders = [
  { num: "01", title: "Bloc 1", desc: "Alimentation, nutrition et santé", icon: "🥗", url: "URL_A_COLLER" },
  { num: "02", title: "Bloc 2", desc: "Organisation et gestion alimentaire", icon: "📋", url: "URL_A_COLLER" },
  { num: "03", title: "Bloc 3", desc: "Sciences et techniques appliquées", icon: "🧪", url: "URL_A_COLLER" },
  { num: "04", title: "Biologie et physiopathologie", desc: "Biologie et physiopathologie adaptées à la diététique et à la nutrition", icon: "🧬", url: "URL_A_COLLER" },
  { num: "05", title: "Fiches essentielles", desc: "Les points clés à retenir", icon: "💡", url: "URL_A_COLLER" },
  { num: "06", title: "Les aliments", desc: "Connaître et choisir les aliments", icon: "🥕", url: "URL_A_COLLER" },
  { num: "07", title: "Compta Gestion Droit", desc: "Gestion, comptabilité et droit", icon: "🧮", url: "URL_A_COLLER" },
  { num: "08", title: "Développement durable", desc: "Agir pour une alimentation responsable", icon: "🌍", url: "URL_A_COLLER" },
  { num: "09", title: "Annales", desc: "S’entraîner avec les sujets", icon: "🎓", url: "URL_A_COLLER" },
  { num: "10", title: "Veille", desc: "Actualités et documentation", icon: "🔎", url: "URL_A_COLLER" },
  { num: "11", title: "Recettes", desc: "Des idées gourmandes et équilibrées", icon: "🍲", url: "URL_A_COLLER" },
  { num: "12", title: "Flashcards et outils", desc: "Outils pratiques pour réviser", icon: "🗂️", url: "URL_A_COLLER" },
  { num: "13", title: "Ressources CNED", desc: "Supports et ressources complémentaires", icon: "💻", url: "URL_A_COLLER" },
  { num: "14", title: "Stages", desc: "Préparation et suivi de stage", icon: "🗓️", url: "URL_A_COLLER" },
  { num: "15", title: "Référentiel", desc: "Le programme officiel", icon: "📚", url: "URL_A_COLLER" }
];

const grid = document.getElementById("tiles");

folders.forEach(({ num, title, desc, icon, url }) => {
  const isPlaceholder = !url || url === "URL_A_COLLER";
  const a = document.createElement("a");

  a.className = "card";
  a.href = isPlaceholder ? "#" : url;

  if (isPlaceholder) {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Ajoutez d’abord le lien du dossier Google Drive dans le code de cette brique.");
    });
  }

  a.innerHTML = `
    <div class="content">
      <div class="heading">
        <span class="num">${num}</span>
        <h2>${title}</h2>
      </div>
      <p>${desc}</p>
      <span class="go">Accéder →</span>
    </div>
    <div class="illustration" aria-hidden="true">${icon}</div>
  `;

  grid.appendChild(a);
});
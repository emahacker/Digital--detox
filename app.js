// Correzione per i timer social e web

let socialTime = 0; // Tempo sui social in secondi
let webTime = 0; // Tempo sul web in secondi
let socialTimer = null; // Timer per i social
let webTimer = null; // Timer per la rete

const socialNetworks = ["facebook.com", "instagram.com", "twitter.com", "linkedin.com"];

function startTimer(timer, updateFunction) {
    if (!timer) {
        return setInterval(updateFunction, 1000);
    }
    return timer;
}

function stopTimer(timer) {
    if (timer) {
        clearInterval(timer);
        return null;
    }
    return timer;
}

function updateSocialTime() {
    socialTime++;
    const hours = Math.floor(socialTime / 3600);
    const minutes = Math.floor((socialTime % 3600) / 60);
    const seconds = socialTime % 60;
    document.getElementById("social-time").textContent = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function updateWebTime() {
    webTime++;
    const hours = Math.floor(webTime / 3600);
    const minutes = Math.floor((webTime % 3600) / 60);
    const seconds = webTime % 60;
    document.getElementById("internet-time").textContent = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function manageTimers() {
    console.log("Gestione dei timer in corso...");

    // Controlliamo l'URL
    const currentURL = window.location.href;
    console.log("URL attuale:", currentURL);

    const isSocial = socialNetworks.some((social) => currentURL.includes(social));
    console.log("È un social?", isSocial);

    if (document.visibilityState === "visible") {
        if (isSocial) {
            console.log("Avvio timer Social!");
            socialTimer = startTimer(socialTimer, updateSocialTime);
            webTimer = stopTimer(webTimer);
        } else {
            console.log("Avvio timer Web!");
            webTimer = startTimer(webTimer, updateWebTime);
            socialTimer = stopTimer(socialTimer);
        }
    } else {
        console.log("Pagina non visibile, stop a tutti i timer.");
        socialTimer = stopTimer(socialTimer);
        webTimer = stopTimer(webTimer);
    }
}


window.onload = function() {
    manageTimers();
};
console.log("Script caricato correttamente!");

window.onload = function() {
    console.log("Pagina caricata!");

    if (document.getElementById("social-time") && document.getElementById("internet-time")) {
        console.log("Elementi trovati!");
    } else {
        console.log("Errore: Gli elementi non sono stati trovati!");
    }

    // Forziamo l'avvio dei timer
    socialTimer = startTimer(socialTimer, updateSocialTime);
    webTimer = startTimer(webTimer, updateWebTime);

    // Verifichiamo se i timer stanno funzionando
    console.log("Timer Social:", socialTimer);
    console.log("Timer Web:", webTimer);

    // Controllo dei cambi di visibilità
    document.addEventListener("visibilitychange", function() {
        console.log("Cambiamento di visibilità rilevato!");
        manageTimers();
    });

    // Debug per gestire la funzione di aggiornamento
    setInterval(() => {
        console.log("Tempo Social:", socialTime);
        console.log("Tempo Web:", webTime);
    }, 5000);
};


// Controlla se gli elementi esistono
window.onload = function() {
    console.log("Pagina caricata!");
    if (document.getElementById("social-time") && document.getElementById("internet-time")) {
        console.log("Elementi trovati!");
    } else {
        console.log("Errore: Gli elementi non sono stati trovati!");
    }
    manageTimers();
};


// Lista delle curiosità
const curiosities = [
    "Spegnere il telefono prima di andare a letto riduce lo stress! Meno notifiche, meno ansia.",
    "Spegnere il telefono prima di andare a letto migliora il sonno. Niente schermi prima di dormire aiuta a riposare meglio.",
    "Disconnettersi dai dispositivi elettronici aumenta la produttività: Meno distrazioni, più concentrazione.",
    "Disconnettersi favorisce la creatività. La mente libera può pensare fuori dagli schemi!",
    "Spegnere i dispositivi elettronici migliora le relazioni. Puoi passare più tempo di qualità con amici e famiglia.",
    "Disconnettersi aumenta la consapevolezza. Sei più presente nel momento.",
    "Spegnere i dispositivi elettronici riduce la fatica visiva: Meno tempo davanti agli schermi, meno affaticamento degli occhi.",
    "Mettere da parte il telefono promuove l'attività fisica. Hai più tempo per fare esercizio.",
    "Stare meno tempo al PC migliora la postura. Meno tempo seduti, meno problemi alla schiena.",
    "Passare meno tempo sui Social aumenta la felicità. Meno confronto con gli altri, più soddisfazione personale.",
    "Spegnere il telefono un’ora prima di andare a letto favorisce la lettura. Hai più tempo per i libri.",
    "Disconnettersi migliora la memoria. Meno multitasking, più attenzione ai dettagli.",
    "Connettersi responsabilmente riduce la dipendenza. Meno bisogno di controllare costantemente il telefono.",
    "Disconnettersi dai Social aumenta la concentrazione. Meno distrazioni digitali, più focus.",
    "Disconnettersi nei momenti di stress della giornata promuove la meditazione. Più tempo per riflettere e rilassarsi.",
    "Disconnettersi migliora la tua digestione: Meno pasti davanti allo schermo, più consapevolezza del cibo.",
    "Disconnettersi aumenta la produttività lavorativa. Meno interruzioni, più efficienza.",
    "Spegnere il telefono un’ora prima di dormire favorisce il sonno profondo. Meno luce blu, sonno più riposante.",
    "Connettersi responsabilmente migliora la salute mentale: Meno esposizione a notizie negative e Fake news.",
    "Disconnettersi aumenta la creatività artistica. Più tempo per dipingere, suonare o coltivare un tuo hobby.",
    "Disconnettersi promuove la socializzazione reale. Più incontri faccia a faccia.",
    "Disconnettersi riduce l'isolamento. Avrai più connessioni autentiche.",
    "Mettere il telefono in Offline migliora la gestione del tempo. Meno tempo perso online.",
    "Disconnettersi favorisce l'apprendimento. Più tempo per studiare e imparare nuove cose.",
    "Disconnettersi dai Social Network aumenta la gratitudine. Più consapevolezza delle piccole cose.",
    "Ridurre lo Scrolling migliora la tua salute fisica. Meno sedentarietà, più movimento.",
    "Disconnettersi promuove la mindfulness. Più attenzione a Te nel presente.",
    "Passare meno tempo Online riduce la pressione sociale. Meno confronto con gli altri sui social media.",
    "Disconnettersi aumenta la pazienza. Meno gratificazione immediata.",
    "Usare responsabilmente il tuo smartphone migliora la comunicazione. Avrai più conversazioni significative.",
    "Disconnettersi favorisce la natura! Puoi passare più tempo all'aria aperta.",
    "Disconnettersi aumenta la resilienza. Meno dipendenza dalla tecnologia.",
    "Disconnettersi migliora la gestione dello stress. Hai più tempo per rilassarti.",
    "Un uso responsabile dei dispositivi elettronici promuove l'autodisciplina: Meno tentazioni digitali.",
    "Passare più tempo lontano dai Social aumenta la soddisfazione personale: Più tempo per hobby e passioni.",
    "Connettersi responsabilmente migliora la qualità della vita. Meno stress, più felicità.",
    "Disconnettersi favorisce la riflessione. Più tempo per pensare e pianificare.",
    "Connettersi responsabilmente aumenta la consapevolezza ambientale. Meno tempo online, più attenzione alla natura.",
    "Disconnettersi migliora la salute cardiovascolare. Più attività fisica.",
    "Disconnettersi promuove la lettura di libri. Più tempo per la letteratura.",
    "Disconnettersi aumenta la creatività culinaria! Più tempo per cucinare.",
    "Passare meno tempo Online migliora la gestione delle emozioni. Meno stress digitale.",
    "Disconnettersi favorisce il volontariato. Più tempo per aiutare gli altri.",
    "Disconnettersi aumenta la consapevolezza culturale. Più tempo per esplorare nuove culture.",
    "Disconnettersi migliora la qualità delle relazioni. Più tempo per gli altri.",
    "Disconnettersi dai Social promuove la scoperta di sé. Più tempo per riflettere su sé stessi.",
    "Disconnettersi aumenta la produttività creativa. Più tempo per progetti personali.",
    "Connettersi responsabilmente migliora la salute mentale. Meno esposizione a contenuti negativi.",
    "Disconnettersi per un’ora al giorno favorisce la meditazione. Più tempo per la calma interiore.",
    "Passare più tempo lontano dai Social Network aumenta la felicità generale. Noterai meno stress, più gioia."
];

// Funzione per cambiare la curiosità ogni 10 minuti
function updateCuriosity() {
    const randomIndex = Math.floor(Math.random() * curiosities.length);
    document.getElementById("daily-curiosity").textContent = curiosities[randomIndex];
}

// Cambia la curiosità inizialmente e poi ogni 10 minuti
updateCuriosity();
setInterval(updateCuriosity, 600000); // 600.000 ms = 10 minuti
document.addEventListener("DOMContentLoaded", () => {
    // Lista delle sfide giornaliere
    const dailyChallenges = [
        "Scrivi una pagina di diario sulla tua giornata di oggi.",
        "Scrivi una poesia.",
        "Leggi 20 pagine di un libro che hai in sospeso.",
        "Vai a prendere un caffè con un amico che non vedi da tempo.",
        "Scatta una foto del tramonto da un luogo a te caro.",
        "Visita un’attrazione storica vicina a te.",
        "Fai un giro in bici.",
        "Fai 20 minuti di attività fisica a casa.",
        "Organizza un pic-nic coi tuoi amici.",
        "Organizza una serata giochi da tavolo!",
        "Fai 20 minuti di attività fisica all’aperto.",
        "Fai 20 minuti di meditazione.",
        "Esci a prendere un drink con una persona a te cara.",
        "Stasera prepara il tuo piatto preferito!",
        "Prepara un dolce!",
        "Fai una passeggiata serale sotto la luna.",
        "Fai un disegno di un oggetto che ricorda la tua infanzia.",
        "Fai una passeggiata al parco.",
        "Chiama una persona che non senti da tempo.",
        "Fai 20 minuti di Yoga.",
        "Ascolta dei brani del tuo artista preferito.",
        "Disegna una mappa immaginaria di un luogo fantastico.",
        "Scrivi un racconto breve di fantasia.",
        "Fai un origami.",
        "Fai una passeggiata osservando i dettagli intorno a te.",
        "Improvvisa una danza sulle note della tua canzone preferita.",
        "Organizza una caccia al tesoro improvvisata.",
        "Ripara qualcosa di rotto senza utilizzare tecnologia.",
        "Progetta un logo per una tua idea fittizia.",
        "Fai un elenco di ricordi felici insieme a qualcuno.",
        "Scrivi un messaggio su un foglio e nascondilo per farlo trovare a qualcuno.",
        "Crea un indovinello.",
        "Scrivi 20 parole associate alla natura.",
        "Scopri nuovi percorsi o angoli in un luogo conosciuto.",
        "Cerca fiori o piante di cui non conosci il nome.",
        "Fai una lista di cose insolite che noti.",
        "Fai un elenco delle tue paure ed una lista su come affrontarle.",
        "Scrivi gli obiettivi che vorresti raggiungere entro cinque anni.",
        "Scrivi un messaggio di gratitudine per una persona speciale.",
        "Osserva il tramonto o l’alba.",
        "Elenca le persone a cui vuoi bene e perché.",
        "Ripensa ad un momento particolarmente felice della tua vita.",
        "Scrivi una lettera al te stesso del futuro e conservala.",
        "Disegna una mappa del luogo in cui ti trovi.",
        "Conta quanti tipi diversi di alberi riesci a trovare in 20 minuti.",
        "Ehi! Mangia una pizza con una persona speciale.",
        "Crea un rebus su carta.",
        "Scrivi una lista di cose che vuoi migliorare.",
        "Pensa a 10 cose che ti rendono felice.",
        "Fai una mini sfida creativa con un amico."
    ];

    // Funzione per selezionare una sfida casuale
    function selectDailyChallenge() {
        const randomIndex = Math.floor(Math.random() * dailyChallenges.length);
        document.getElementById("daily-challenge").textContent = dailyChallenges[randomIndex];
    }

    // Funzione per completare la sfida
    function completeChallenge() {
        const badgeContainer = document.getElementById("badges");
        const newBadge = document.createElement("p");
        newBadge.textContent = "🎖️ Medaglia guadagnata!";
        badgeContainer.appendChild(newBadge);
        selectDailyChallenge();
    }

    // Seleziona la sfida iniziale
    selectDailyChallenge();

    // Aggiungi l'event listener al pulsante
    const completeButton = document.getElementById("complete-challenge");
    if (completeButton) {
        completeButton.addEventListener("click", completeChallenge);
    } else {
        console.error("Il pulsante non è stato trovato.");
    }
});
// Sezione per gestire la sfida e le ricompense
document.getElementById("complete-challenge").addEventListener("click", function() {
    // Messaggio di conferma per il completamento della sfida
    alert("Sfida completata! Hai guadagnato un nuovo badge!");

    // Aggiorna la sezione dei premi
    const badgesContainer = document.getElementById("badges");
    const newBadge = document.createElement("p");
    newBadge.textContent = "🎖 Badge: Sfida completata!";
    badgesContainer.appendChild(newBadge);
});
document.getElementById("send-report").addEventListener("click", async() => {
    const socialTime = document.getElementById("social-time").textContent;
    const webTime = document.getElementById("internet-time").textContent;

    try {
        const response = await fetch("/send-report", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                socialTime: socialTime,
                webTime: webTime,
            }),
        });

        if (response.ok) {
            alert("Report inviato con successo!");
        } else {
            alert("Errore nell'invio del report.");
        }
    } catch (error) {
        console.error("Errore:", error);
        alert("Errore nell'invio del report.");
    }
});
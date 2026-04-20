import './main.css'

/**
 * title
 */

import profilePhoto from './assets/photo-small.png';

const titleSection = `
    <section id="title">
        <img class="profile-photo" src="${profilePhoto}" alt="Profile Photo" width="120" height="120">
        <div class="profile-info">
            <h1>RONNY DEUSE</h1>
            <h2>Software-Entwicklung, Integration und Automatisierung</h2>
            <div class="location">Dresden, Deutschland</div>
        </div>
    </section>
`;

/**
 * about
 */
const aboutSection = `
    <section id="about">
        <p>
            Mein Job erlaubt es mir, meine Begeisterung für Technologie mit der Freude an der Lösung komplexer Aufgaben zu verbinden.
            Mit 20+ Jahren Erfahrung in der Software-Entwicklung habe ich Projekte in verschiedenen Funktionen unterstützt: Von Prozess- und Anforderungsanalyse, über Planung und Steuerung - sowohl klassisch als auch agil, bis zur testgetriebenen Implementierung. Aktuell liegt mein Fokus auf der Integration und Automatisierung von Systemen, Geräten und Prozessen.
        </p>
    </section>
`;

/**
 * skills
 */
const skillsSection = `
    <section id="skills">
        <h3>Technische Fähigkeiten</h3>
        <ul>
            <li>
                <div class="label">Frontend</div>
                <ul class="badges">
                    <li>SPA+PWA</li>
                    <li>JavaScript</li>
                    <li>Bootstrap</li>
                    <li>Blazor</li>
                </ul>
            </li>
            <li>
                <div class="label">Backend</div>
                <ul class="badges">
                    <li>C#</li>
                    <li>ASP.NET Core</li>
                    <li>SQL-Server</li>
                    <li>RESTful</li>
                    <li>GraphQL</li>
                    <li>SignalR</li>
                </ul>
            </li>
            <li>
                <div class="label">Integration</div>
                <ul class="badges">
                    <li>Office</li>
                    <li>Serial I/O</li>
                    <li>Messaging</li>
                    <li>Workflows</li>
                    <li>Mapping+Routing</li>
                    <li>Windows Services</li>
                </ul>
            </li>
            <li>
                <div class="label">Tools</div>
                <ul class="badges">
                    <li>Linux</li>
                    <li>Git</li>
                    <li>Docker</li>
                    <li>Kubernetes</li>
                    <li>CI+CD</li>
                </ul>
            </li>
        </ul>
    </section>
`;

/**
 * experience
 */
const experienceSection = `
    <section id="experience">
        <h3>Berufserfahrung</h3>
        <ul class="jobs">
            <li class="collapsed">
                <div class="header">
                    <div class="time">2019 - Heute</div>
                    <div class="company">qualitype, Dresden - SAMPLES</div>
                </div>
                <div class="description">
                    Web-basiertes Produkt für Laborinformationsmanagement (LIMS) und Untersuchungsprotokolle (LES) <span class="separator">|</span>
                    Klinische Labore, Qualitätskontroll-Labore u.a. Zielgruppen <span class="separator">|</span>
                    Registrierung, Vorbereitung, Lagerung und Entsorgung von Proben <span class="separator">|</span>
                    Angeleitete Untersuchung mit benutzerdefinierten Workflows <span class="separator">|</span>
                    Erweiterungen für Auftragslabore <span class="separator">|</span>
                    DSGVO-konforme Anonymisierung und Speicherung von Patientendaten <span class="separator">|</span>
                    Generierung und Zustellung von Befunden <span class="separator">|</span>
                    HL7/FHIR-Schnittstelle für Integration des LIMS in Klinikumgebungen <span class="separator">|</span>
                    Netzwerkübergreifende Integration von Diensten und Laborgeräten <span class="separator">|</span>
                    Entwicklung von Geräteadaptern, u.a. für Drucker, Waagen und Pipetten, betrieben als Windows Services <span class="separator">|</span>
                    Steuerung von Laborgeräten durch LES <span class="separator">|</span>
                    Benutzerdefinierte Teilautomatisierung von Untersuchungsabläufen <span class="separator">|</span>
                    Implementierung von Messe-Prototypen mit internationalen Partnern und Präsentation auf Industriemessen <span class="separator">|</span>
                    DevOps-Unterstützung bei Implementierung einer CI/CD-Pipeline <span class="separator">|</span>
                    Anwenderunterstützung und technischer Betrieb
                </div>
                <ul class="badges">
                    <li>C#</li>
                    <li>ASP.NET Core</li>
                    <li>REST</li>
                    <li>GraphQL</li>
                    <li>QuestPDF</li>
                    <li>SQL-Server</li>
                    <li>MQTT</li>
                    <li>Serial I/O</li>
                    <li>Windows Services</li>
                    <li>SiLA2</li>
                    <li>OPC-UA/LADS</li>
                    <li>Docker</li>
                    <li>CI+CD</li>
                </ul>
            </li>
            <li class="collapsed">
                <div class="header">
                    <div class="time">2017 - 2019</div>
                    <div class="company">qualitype, Dresden - CeCuLab</div>
                </div>
                <div class="description">
                    Desktop-App für analytisches Klinik-Labor <span class="separator">|</span>
                    Registrierung, Lagerung und Untersuchung von Proben <span class="separator">|</span>
                    Geführte Durchführung von Untersuchungen auf Basis benutzerdefinierter Workflows <span class="separator">|</span>
                    Dokumentation und Analyse von ELISA-Tests <span class="separator">|</span>
                    Integration von Laborgeräten für Datenaustausch und Steuerung <span class="separator">|</span>
                    Etikettendrucker, Barcode-Scanner, Zellkultivierung und Photometer <span class="separator">|</span>
                    Anwenderunterstützung und technischer Betrieb
                </div>
                <ul class="badges">
                    <li>Java-EE</li>
                    <li>REST</li>
                    <li>Wildfly AS</li>
                    <li>OSGI</li>
                    <li>Eclipse RCP</li>
                    <li>PostgreSQL</li>
                    <li>SiLA2</li>
                </ul>
            </li>
            <li class="collapsed">
                <div class="header">
                    <div class="time">2015 - 2023</div>
                    <div class="company">qualitype, Dresden - GEDNAP</div>
                </div>
                <div class="description">
                    Web-App für Ringversuche mit forensischen Kriminallaboren <span class="separator">|</span>
                    Planung, Vorbereitung, Durchführung und Auswertung von Ringversuchen <span class="separator">|</span>
                    Benutzerdefinierte Aufgabenstellungen mit automatischer Ergebnisauswertung <span class="separator">|</span>
                    Benchmarking teilnehmender Labore <span class="separator">|</span>
                    Generierung und Zustellung von Reports und Zertifikaten <span class="separator">|</span>
                    DSGVO-konforme Pflege von Teilnehmerdaten <span class="separator">|</span>
                    Anwenderunterstützung und technischer Betrieb <span class="separator">|</span>
                    Kontinuierliche Implementierung von Anpassungen und Erweiterungen
                </div>
                <ul class="badges">
                    <li>Java-EE</li>
                    <li>REST</li>
                    <li>Wildfly AS</li>
                    <li>Angular.js</li>
                    <li>Bootstrap</li>
                    <li>Eclipse BIRT</li>
                    <li>PostgreSQL</li>
                </ul>
            </li>
            <li class="collapsed">
                <div class="header">
                    <div class="time">2014 - 2015</div>
                    <div class="company">qualitype, Dresden - Genolab</div>
                </div>
                <div class="description">
                    Web-basiertes Softwareprodukt für forensische Spurenanalyse <span class="separator">|</span>
                    Portierung der Desktop-App auf neuen Java-EE Stack <span class="separator">|</span>
                    Funktionen für Abrechnung und Payment-Processing <span class="separator">|</span>
                    Containerisierung der App-Services für Entwicklungsumgebung (Testballon)
                </div>
                <ul class="badges">
                    <li>Java-EE</li>
                    <li>REST</li>
                    <li>Wildfly AS</li>
                    <li>Stripe</li>
                    <li>PostgreSQL</li>
                    <li>Docker</li>
                </ul>
            </li>
            <li class="collapsed">
                <div class="header">
                    <div class="time">2012 - 2014</div>
                    <div class="company">qualitype, Dresden - GPMx</div>
                </div>
                <div class="description">
                    Expertensoftware für forensische Spurenanalyse <span class="separator">|</span>
                    Analyse genetischer Mischspuren mit mathematischen Methoden <span class="separator">|</span>
                    Pflege und Verteilung genetischer Referenzdaten <span class="separator">|</span>
                    Reporting für Untersuchungsergebnisse und Gutachten <span class="separator">|</span>
                    Funktionen für benutzerdefinierte Report-Layouts
                </div>
                <ul class="badges">
                    <li>Java-SE</li>
                    <li>OSGI</li>
                    <li>Eclipse RCP</li>
                    <li>Eclipse BIRT</li>
                </ul>
            </li>
            <li class="collapsed">
                <div class="header">
                    <div class="time">2011 - 2012</div>
                    <div class="company">qualitype, Dresden - Qualitrail v2</div>
                </div>
                <div class="description">
                    Analyse, Konzeption und prototypische Implementierung mit internationalen Partnern <span class="separator">|</span>
                    Globale (EMEA), Branchen- und Stufen-übergreifende Rückverfolgbarkeit von Lebensmitteln <span class="separator">|</span>
                    Algorithmen für Überbrückung von Lücken in der Zuliefererkette <span class="separator">|</span>
                    Funktionen für QM, Benchmarking und Qualifizierung teilnehmender Betriebe <span class="separator">|</span>
                    I18N von Report-Layouts und -Inhalten <span class="separator">|</span>
                    Betrieb als verteilte Lösung zur Verbesserung der Antwortzeiten
                </div>
                <ul class="badges">
                    <li>Java-EE</li>
                    <li>SOAP</li>
                    <li>JBoss Seam</li>
                    <li>JSF+Facelets</li>
                    <li>JBoss AS</li>
                    <li>Jasper Reports</li>
                    <li>iReport</li>
                    <li>PostgreSQL</li>
                </ul>
            </li>
            <li class="collapsed">
                <div class="header">
                    <div class="time">2007 - 2011</div>
                    <div class="company">qualitype, Dresden - Qualitrail</div>
                </div>
                <div class="description">
                    Rückverfolgbarkeit von Lebensmitteln <span class="separator">|</span>
                    Web-Service mit Browser-Frontend <span class="separator">|</span>
                    QM für Zuliefererkette <span class="separator">|</span>
                    Integration mit SW teilnehmender Betriebe <span class="separator">|</span>
                    Kontinuierliche Erweiterung um neue Branchen und Stufen <span class="separator">|</span>
                    Support-Unterstützung
                </div>
                <ul class="badges">
                    <li>Java-EE</li>
                    <li>SOAP</li>
                    <li>JBoss Seam</li>
                    <li>RichFaces</li>
                    <li>JBoss AS</li>
                    <li>Jasper Reports</li>
                    <li>iReport</li>
                    <li>PostgreSQL</li>
                </ul>
            </li>
            <li class="collapsed">
                <div class="header">
                    <div class="time">2006 - 2007</div>
                    <div class="company">Daimler Chrysler, Stuttgart</div>
                </div>
                <div class="description">
                    Prozess- und Systemintegration im Bereich IT Corporate Controlling <span class="separator">|</span> 
                    Implementierung SAP Template für neues Werk in Übersee <span class="separator">|</span> 
                    Integration von Prozessen für Logistik, Beschaffung und Financial Controlling <span class="separator">|</span> 
                    Workflow Automatisierung
                </div>
                <ul class="badges">
                    <li>Java-EE</li>
                    <li>SAP R/3</li>
                    <li>SAP Netweaver</li>
                    <li>SAP XI</li>
                </ul>
            </li>
            <li class="collapsed">
                <div class="header">
                    <div class="time">2004 - 2006</div>
                    <div class="company">Tiscon Infosystems, Neu-Ulm</div>
                </div>
                <div class="description">
                    Master Data-, Material- und Claims-Management <span class="separator">|</span> 
                    Rückverfolgbarkeit von Produkten und Teilen <span class="separator">|</span> 
                    Reporting <span class="separator">|</span> 
                    Integration mit Produktionssteuerung <span class="separator">|</span> 
                    Workflow-Automatisierung
                </div>
                <ul class="badges">
                    <li>Java-EE</li>
                    <li>SOAP</li>
                    <li>Struts</li>
                    <li>Crystal Reports</li>
                    <li>Websphere AS</li>
                    <li>HP Process Manager</li>
                </ul>
            </li>
            <li class="collapsed">
                <div class="header">
                    <div class="time">2003 - 2004</div>
                    <div class="company">ATOS Origin, Frankfurt/Main</div>
                </div>
                <div class="description">
                    Financial Controlling <span class="separator">|</span> 
                    Integration Mainframe und App Server <span class="separator">|</span> 
                    Message-Mapping und -Routing für Buchungen aus Kontoauszugsdaten <span class="separator">|</span> 
                    Workflow-Automatisierung <span class="separator">|</span> 
                    Web-App für manuelle Nachbearbeitung
                </div>
                <ul class="badges">
                    <li>Java-EE</li>
                    <li>SOAP</li>
                    <li>Struts</li>
                    <li>Websphere AS</li>
                </ul>
            </li>
        </ul>
    </section>
`;

/**
 * references
 */
const referencesSection = `
    <section id="references">
        <h3>Referenzen</h3>
        <ul class="contacts">
            <li class="mail">
                <div class="label">Dr. Isabell Hilger, qualitype GmbH</div>
                <div class="text"><a href="mailto:i.hilger@qualitype.de">i.hilger@qualitype.de</a></div>
            </li>
        </ul>
    </section>
`;

/**
 * education
 */
const educationSection = `
    <section id="education">
        <h3>Ausbildung</h3>
        <ul>
            <li>
                <div class="label">Technische Universität Dresden | 2003</div>
                <div class="text">Technische Informatik</div>
            </li>
            <li>
                <div class="label">Berufsbildungszentrum Wittenberg | 1997</div>
                <div class="text">Technischer Assistent für Informatik</div>
            </li>
        </ul>
        <ul>
            <li>
                <div class="label">Sprachen</div>
                <ul class="badges">
                    <li>Deutsch</li>
                    <li>Englisch</li>
                </ul>
            </li>
        </ul>
    </section>
`;

/**
 * contact
 */
const contactSection = `
    <section id="contact">
        <h3>Kontakt</h3>
        <ul class="contacts">
            <li class="mail">
                <div class="label">E-Mail</div>
                <div class="text"><a href="mailto:ronny.deuse@gmail.com">ronny.deuse@gmail.com</a></div>
            </li>
            <li class="github">
                <div class="label">Github</div>
                <div class="text"><a href="https://github.com/RonnyDeuse" target="_blank">RonnyDeuse</a></div>
            </li>
            <li class="linkedin">
                <div class="label">Linked-in</div>
                <div class="text"><a href="https://www.linkedin.com/in/ronny-deuse-73915a239" target="_blank">ronny-deuse-73915a239</a></div>
            </li>
        </ul>
    </section>
`;

/**
 * app
 */
document.querySelector('#app').innerHTML = `
    ${titleSection}
    ${aboutSection}
    ${skillsSection}
    ${experienceSection}
    ${referencesSection}
    ${educationSection}
    ${contactSection}
`;

document.querySelectorAll("li.collapsed").forEach(li => {
    li.addEventListener("click", () => {
        li.classList.remove("collapsed");
    });
});

console.log("Application started");

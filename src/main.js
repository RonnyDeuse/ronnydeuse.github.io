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
            <h2>Software-Entwicklung und -Integration</h2>
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
        <h3>Fähigkeiten</h3>
        <ul>
            <li>
                <div class="label">Sprachen</div>
                <ul class="badges">
                    <li>Deutsch</li>
                    <li>Englisch</li>
                </ul>
            </li>
            <li>
                <div class="label">Frontend</div>
                <ul class="badges">
                    <li>JavaScript</li>
                    <li>Bootstrap</li>
                    <li>Web Components</li>
                    <li>Blazor</li>
                </ul>
            </li>
            <li>
                <div class="label">Backend</div>
                <ul class="badges">
                    <li>C#</li>
                    <li>ASP.NET Core</li>
                    <li>KISS+SOLID</li>
                    <li>Clean Code+Architecture</li>
                    <li>TDD</li>
                    <li>xUnit+Moq</li>
                </ul>
            </li>
            <li>
                <div class="label">Persistenz</div>
                <ul class="badges">
                    <li>SQL-Server</li>
                    <li>PostgreSQL</li>
                </ul>
            </li>
            <li>
                <div class="label">API</div>
                <ul class="badges">
                    <li>RESTful</li>
                    <li>GraphQL</li>
                    <li>MQTT</li>
                    <li>WebSockets</li>
                </ul>
            </li>
            <li>
                <div class="label">Integration</div>
                <ul class="badges">
                    <li>File I/O</li>
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
            <li>
                <div class="label">Erste Hilfe</div>
                <ul class="badges">
                    <li>Ersthelfer</li>
                    <li>Brandschutzhelfer</li>
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
            <li>
                <div class="header">
                    <div class="time">2019 - Heute</div>
                    <div class="company">qualitype, Dresden - SAMPLES</div>
                </div>
                <div class="description">
                    Web-basiertes Produkt für Laborinformationsmanagement (LIMS) und geführte Untersuchungen (LES) |
                    Klinische Labore, Qualitätskontroll-Labore u.a. Zielgruppen |
                    Registrierung, Vorbereitung, Lagerung und Entsorgung von Proben |
                    Geführte Untersuchung mit benutzerdefinierten Workflows |
                    Erweiterungen für Auftragslabore |
                    DSGVO-konforme Anonymisierung und Speicherung von Patientendaten |
                    Generierung und Zustellung von Befunden |
                    HL7/FHIR-Schnittstelle für Integration des LIMS in Klinikumgebungen |
                    Netzwerkübergreifende Integration von Diensten und Laborgeräten |
                    Entwicklung von Geräteadaptern u.a. für Drucker, Waagen und Pipetten |
                    Steuerung von Laborgeräten durch das LES |
                    Benutzerdefinierte Teilautomatisierung von Untersuchungsabläufen |
                    Implementierung von Messe-Prototypen mit internationalen Partnern und Präsentation auf Industriemessen |
                    DevOps-Unterstützung bei Implementierung einer CI/CD-Pipeline |
                    Anwenderunterstützung und technischer Betrieb
                </div>
                <ul class="badges">
                    <li>C#</li>
                    <li>ASP.NET Core</li>
                    <li>QuestPDF</li>
                    <li>SQL-Server</li>
                    <li>RESTful</li>
                    <li>GraphQL</li>
                    <li>MQTT</li>
                    <li>Serial I/O</li>
                    <li>Messaging</li>
                    <li>Workflows</li>
                    <li>Mapping+Routing</li>
                    <li>Windows Services</li>
                    <li>SiLA2/AnIML</li>
                    <li>OPC-UA/LADS</li>
                    <li>HL7/FHIR</li>
                    <li>Edge-IoT</li>
                    <li>EMQX</li>
                    <li>Camunda</li>
                    <li>Node-RED</li>
                    <li>Docker</li>
                    <li>CI+CD</li>
                </ul>
            </li>
            <li>
                <div class="header">
                    <div class="time">2017 - 2019</div>
                    <div class="company">qualitype, Dresden - CeCuLab</div>
                </div>
                <div class="description">
                    Desktop-App für analytisches Klinik-Labor |
                    Registrierung, Lagerung und Untersuchung von Proben |
                    Geführte Durchführung von Untersuchungen auf Basis benutzerdefinierter Workflows |
                    Dokumentation und Analyse von ELISA-Tests |
                    Integration von Laborgeräten für Datenaustausch und Steuerung |
                    Etikettendrucker, Barcode-Scanner, Zellkultivierung und Photometer |
                    Anwenderunterstützung und technischer Betrieb
                </div>
                <ul class="badges">
                    <li>Java-EE</li>
                    <li>Wildfly</li>
                    <li>OSGI</li>
                    <li>Eclipse RCP</li>
                    <li>PostgreSQL</li>
                    <li>Zebra-SDK</li>
                    <li>SiLA2</li>
                </ul>
            </li>
            <li>
                <div class="header">
                    <div class="time">2015 - 2023</div>
                    <div class="company">qualitype, Dresden - GEDNAP</div>
                </div>
                <div class="description">
                    Web-App für Ringversuche mit forensischen Kriminallaboren |
                    Planung, Vorbereitung, Durchführung und Auswertung von Ringversuchen |
                    Benutzerdefinierte Aufgabenstellungen mit automatischer Ergebnisauswertung |
                    Benchmarking teilnehmender Labore |
                    Generierung und Zustellung von Reports und Zertifikaten |
                    DSGVO-konforme Pflege von Teilnehmerdaten |
                    Anwenderunterstützung und technischer Betrieb |
                    Kontinuierliche Implementierung von Anpassungen und Erweiterungen
                </div>
                <ul class="badges">
                    <li>Java-EE</li>
                    <li>Wildfly</li>
                    <li>Angular.js</li>
                    <li>Bootstrap</li>
                    <li>Eclipse BIRT</li>
                    <li>PostgreSQL</li>
                    <li>DSGVO</li>
                </ul>
            </li>
            <li>
                <div class="header">
                    <div class="time">2014 - 2015</div>
                    <div class="company">qualitype, Dresden - Genolab</div>
                </div>
                <div class="description">
                    Web-basiertes Softwareprodukt für forensische Spurenanalyse |
                    Portierung der Desktop-App auf neuen Java-EE Stack |
                    Funktionen für Abrechnung und Payment-Processing |
                    Containerisierung der App-Services für Entwicklungsumgebung (Testballon)
                </div>
                <ul class="badges">
                    <li>Java-EE</li>
                    <li>Wildfly</li>
                    <li>Stripe</li>
                    <li>PostgreSQL</li>
                    <li>Docker</li>
                </ul>
            </li>
            <li>
                <div class="header">
                    <div class="time">2012 - 2014</div>
                    <div class="company">qualitype, Dresden - GPMx</div>
                </div>
                <div class="description">
                    Expertensoftware für forensische Spurenanalyse |
                    Analyse genetischer Mischspuren mit mathematischen Methoden |
                    Pflege und Verteilung genetischer Referenzdaten |
                    Reporting für Untersuchungsergebnisse und Gutachten |
                    Funktionen für benutzerdefinierte Report-Layouts
                </div>
                <ul class="badges">
                    <li>Java</li>
                    <li>OSGI</li>
                    <li>Eclipse RCP</li>
                    <li>Eclipse BIRT</li>
                </ul>
            </li>
            <li>
                <div class="header">
                    <div class="time">2011 - 2012</div>
                    <div class="company">qualitype, Dresden - Qualitrail v2</div>
                </div>
                <div class="description">
                    Analyse, Konzeption und prototypische Implementierung mit internationalen Partnern |
                    Globale (EMEA), Branchen- und Stufen-übergreifende Rückverfolgbarkeit von Lebensmitteln |
                    Algorithmen für Überbrückung von Lücken in der Zuliefererkette |
                    Funktionen für QM, Benchmarking und Qualifizierung teilnehmender Betriebe |
                    I18N von Report-Layouts und -Inhalten |
                    Betrieb als verteilte Lösung zur Verbesserung der Antwortzeiten
                </div>
                <ul class="badges">
                    <li>Java-EE</li>
                    <li>JBoss Seam</li>
                    <li>JSF+Facelets</li>
                    <li>JBoss AS</li>
                    <li>XML/SOAP</li>
                    <li>Jasper Reports</li>
                    <li>iReport</li>
                    <li>PostgreSQL</li>
                </ul>
            </li>
            <li>
                <div class="header">
                    <div class="time">2007 - 2011</div>
                    <div class="company">qualitype, Dresden - Qualitrail</div>
                </div>
                <div class="description">
                    Rückverfolgbarkeit von Lebensmitteln |
                    Web-Service mit Browser-Frontend |
                    QM für Zuliefererkette |
                    Integration mit SW teilnehmender Betriebe |
                    Kontinuierliche Erweiterung um neue Branchen und Stufen |
                    Support-Unterstützung
                </div>
                <ul class="badges">
                    <li>Java-EE</li>
                    <li>JBoss Seam</li>
                    <li>RichFaces</li>
                    <li>JBoss AS</li>
                    <li>XML/SOAP</li>
                    <li>Jasper Reports</li>
                    <li>iReport</li>
                    <li>PostgreSQL</li>
                </ul>
            </li>
            <li>
                <div class="header">
                    <div class="time">2006 - 2007</div>
                    <div class="company">Daimler Chrysler, Stuttgart</div>
                </div>
                <div class="description">
                    Prozess- und Systemintegration im Bereich IT Corporate Controlling | 
                    Implementierung SAP Template für neues Werk in Übersee | 
                    Integration von Prozessen für Logistik, Beschaffung und Financial Controlling | 
                    Workflow Automatisierung
                </div>
                <ul class="badges">
                    <li>Java-EE</li>
                    <li>SAP R/3</li>
                    <li>SAP Netweaver</li>
                    <li>SAP XI</li>
                </ul>
            </li>
            <li>
                <div class="header">
                    <div class="time">2004 - 2006</div>
                    <div class="company">Tiscon Infosystems, Neu-Ulm</div>
                </div>
                <div class="description">
                    Master Data-, Material- und Claims-Management | 
                    Rückverfolgbarkeit von Produkten und Teilen | 
                    Reporting | 
                    Integration mit Produktionssteuerung | 
                    Workflow-Automatisierung
                </div>
                <ul class="badges">
                    <li>Java-EE</li>
                    <li>XML/SOAP</li>
                    <li>Struts</li>
                    <li>Crystal Reports</li>
                    <li>Websphere</li>
                    <li>HP Process Manager</li>
                </ul>
            </li>
            <li>
                <div class="header">
                    <div class="time">2003 - 2004</div>
                    <div class="company">ATOS Origin, Frankfurt/Main</div>
                </div>
                <div class="description">
                    Financial Controlling | 
                    Integration Mainframe und App Server | 
                    Message-Mapping und -Routing für Buchungen aus Kontoauszugsdaten | 
                    Workflow-Automatisierung | 
                    Web-App für manuelle Nachbearbeitung
                </div>
                <ul class="badges">
                    <li>Java-EE</li>
                    <li>XML/SOAP</li>
                    <li>Struts</li>
                    <li>Websphere</li>
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
                <div class="label">Technische Informatik</div>
                <div class="text">Technische Universität Dresden | 2003</div>
            </li>
            <li>
                <div class="label">Technischer Assistent für Informatik</div>
                <div class="text">Berufsbildungszentrum Wittenberg | 1997</div>
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

console.log("Application started");

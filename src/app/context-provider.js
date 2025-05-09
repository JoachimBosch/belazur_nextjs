"use client";

import React from "react";
import { createContext, useEffect, useState } from "react";

const MyContext = createContext();

const _DESKTOPtext = {
    english: {
        respectPrivacy: "We respect your privacy ",
        cookies: "This website uses cookies to improve your experience.",
        functionalCookies: "Functional cookies (required)",
        allowAnalytics: "Cookies for Marketing purposes",
        accept: "Accept",
        acceptAll: "Accept all",
        decline: "Decline",
        followUs: "Follow us on ",
        serviceButton: "BACK TO ALL SERVICES",
        getInTouch: "Call us today",
        mailUs: "Contact us",
        navbarItem1: "HOME",
        navbarItem2: "SERVICES",
        navbarItem3: "ABOUT US",
        navbarItem4: "CONTACT",
        navbarLanguage: "CHOOSE YOUR LANGUAGE",
        onePage: "ONE-PAGE WEBSITE",
        multiPage: "MULTI-PAGE WEBSITE",
        ecommerce: "E-COMMERCE",
        introSubHeader1:
            "At Bel'Azur Coding, we specialize in creating tailored, high-performance websites that are as unique as your business.",
        introSubHeader2:
            "We offer a strong commitment to quality and a flair for elegant, hand-coded solutions.",
        introSubHeader3: "Together, we turn your digital dreams into reality.",
        philosophyHeader: "OUR PHILOSOPHY",
        philosophyText1:
            "We believe in clean code, clean design, and clear communication. Every project we take on is a collaborative journey, and your satisfaction is our ultimate goal.",
        philosophyText2:
            "From concept to launch, we're here to ensure your digital presence makes a powerful impact.",
        philosophyClosing:
            "< Let's transform your ideas into an exceptional online experience />",
        whyUsHeader1: "Tailored Development",
        whyUsText1:
            "We design your website to meet the unique needs of your business. Our approach ensures that your website not only stands out visually, but also in terms of performance, providing smooth user experience across all devices. We work closely with you to understand your brand and its goals to translate your vision into a digital solution that truly reflects who you are.",
        whyUsHeader2: "Manual Coding Experts",
        whyUsText2:
            "We pride ourselves on our expertise in manual coding. By building from scratch, we offer you faster, more secure and highly customizable solutions. This approach ensures that your site is optimized for performance, resistant to common security threats and can easily scale as your business grows. With Bel'Azur Coding, you choose reliability, precision and adaptability.",
        whyUsHeader3: "Multilingual Service",
        whyUsText3:
            "Communication is key to any successful project, and at Bel'Azur Coding, we make it effortless. We provide services in Dutch, French, and English. Our linguistic versatility ensures that we can work efficiently with a diverse range of clients, catering to both local and international businesses. Our commitment to clear, consistent communication means you'll always be in the loop, no matter where you are in the world.",
        allServicesSubHeader: "Services based on your actual needs",
        allServicesText:
            "At Bel'Azur Coding, we are passionate about delivering exceptional web development solutions that help your business stand out in the digital landscape. We take a personalized approach to every project, ensuring that the final product aligns perfectly with your goals and vision. From single-page websites to complex e-commerce platforms, we are equipped to bring your ideas to life.",
        vitrineHeader: "Simple, Impactful One-Page Websites for Your Business.",
        vitrinePrice: "Your online experience from €750 excl. VAT",
        vitrinePriceShort: "€750 *",
        vitrinePriceShortIntro: "From",
        vitrineIntro1:
            "A one-page website is a simple concept. It's an affordable web design that actually consists of two pages: a front page and a contact page.",
        vitrineIntro2:
            "On your front page, you introduce yourself to the public. You can tell who you are, what you do - and maybe why you do it, and so much more.",
        vitrineIntro3:
            "Your contact page provides a way for people to get in touch with you. This can be a contact form, an address link, a link to your social media page, etc.",
        vitrineIntro4: "The possibilities are endless.",
        vitrinePerfect: "Perfect for",
        vitrineBenefitsHeader: "Benefits",
        vitrineBox1:
            "Think of it as a beautifully designed online brochure. All the important information about your business is on one single page, making it easy for your customers to understand who you are and what you offer without clicking around too much. It's simple, but it packs a punch—delivering your message in a way that grabs attention and encourages action.",
        vitrinePerfectFor: [
            "Event promotions",
            "Highlighting a product/service",
            "Simple portfolios",
            "Starting online",
        ],
        vitrineBenefits: [
            "Business domain name",
            "Quick setup, low cost",
            "Perfect for small businesses",
            "Mobile-friendly design",
        ],
        websiteHeader:
            "Tailored Multi-Page Websites That Grow With Your Business",
        websitePrice: "Full online visibility starting from €1850 excl. VAT",
        websitePriceShort: "€1850 *",
        websitePriceShortIntro: "From",
        websiteIntro1:
            "A multi-page website is ideal for businesses that need to present a lot of information in an organized, engaging way.",
        websiteIntro2:
            "Whether you're an event planner outlining your services, a construction firm showcasing your past projects, or a community organization sharing resources.",
        websiteIntro3:
            "We create a website that's easy to navigate and enjoyable for visitors to explore.",
        websitePerfect: "Perfect for",
        websiteBenefitsHeader: "Benefits",
        websiteBox1:
            "Think of it as a full digital experience. Instead of packing everything onto one page, we spread your content across several well-organized pages, like “About Us”, “Services”, “Portfolio”, or “Contact”. This layout helps guide visitors through your site, giving them the details they need without overwhelming them. It's flexible and built to grow as your business evolves.",
        websitePerfectFor: [
            "Service companies",
            "Resource-sharing organizations",
            "Businesses with portfolios",
            "Content-driven platforms",
        ],
        websiteBenefits: [
            "Quick, easy info access",
            "Professional brand image",
            "Rich content options",
            "Scalable design for growth",
        ],
        ecommerceHeader:
            "Drive Sales and Reach New Customers with a Seamless Online Shopping Experience",
        ecommercePrice: "Price available on request",
        ecommercePriceShort: "On request",
        ecommerceIntro1:
            "E-commerce websites are designed to help you start selling online easily and effectively.",
        ecommerceIntro2:
            "Whether you're a local artisan launching your first online shop, or a retail business ready to go global,",
        ecommerceIntro3:
            "we build a secure, beautiful online store that makes shopping easy for your customers and managing orders a breeze for you.",
        ecommerceIntro4: "Your options are limitless.",
        ecommercePerfect: "Perfect for",
        ecommerceBenefitsHeader: "Benefits",
        ecommerceBox1:
            "It's your complete online store where you can sell your own products or services. We can set it up using Shopify for a simple, ready-made solution or custom-build it for more control and flexibility. From displaying your products in an attractive layout to offering multiple payment options, we make sure your store is easy to use and optimized for sales.",
        ecommercePerfectFor: [
            "First-time online sellers",
            "Retailers expanding reach",
            "Tailored e-commerce solutions",
            "Secure payment options",
        ],
        ecommerceBenefits: [
            "Local and global sales",
            "Revenue 24/7",
            "Secure payments",
            "Branded, attractive designs",
        ],
        aboutUsHeader: "Who are we?",
        aboutLisa:
            "Lisa is the driving force behind Bel'Azur Coding. Without her, this website would probably not even exist. Lisa has an eye for design, enjoys solving the most difficult questions and does not shy away from any challenge. Thanks to her studies through SheCodes, she is perfectly capable of building beautiful, mobile-friendly and interactive websites that put your company into a new light.",
        aboutJoachim:
            "Joachim is the geek of the duo. He's always had a strong interest in web design and is constantly acquiring new skills. Thanks to a Full Stack certificate issued by 4Geeks Academy and a recent course in React Native, he is able to develop complex and modern websites, e-commerce platforms and mobile applications.",
        contactHeader: "Contact us",
        contactFirstName: "First Name",
        contactLastName: "Last Name",
        contactPhone: "Phone Number",
        contactEmail: "Email Address",
        contactCompany: "Company",
        contactInterest: "I'm interested in",
        contactInterestOption1: "Select an option",
        contactInterestOption2: "One-Page Website",
        contactInterestOption3: "Multi-Page Website",
        contactInterestOption4: "E-commerce Website",
        contactInterestOption5: "Other",
        contactAdditionalInfo: "Additional information",
        contactButton: "Submit",
        contactIsRequired: "is required",
        contactNumeric: "Phone number must be numeric",
        contactEmailError: "Invalid email address",
        contactEmailRequired: "Email is required",
        contactEmailSentSuccess: "Email sent successfully!",
        contactEmailSentError: "Failed to send email. Please try again.",
        taxWarning: "* Price excluding taxes",
        continue: "Continue in English",
        contactRecaptchaError: "ReCaptcha Error, please try again",
    },
    french: {
        respectPrivacy: "Nous respectons votre vie privée ",
        cookies:
            "Ce site Web utilise des cookies pour améliorer votre expérience.",
        functionalCookies: "Cookies fonctionnels (obligatoires)",
        allowAnalytics: "Cookies à des Fins Marketing",
        accept: "Accepter",
        acceptAll: "Accepter tout",
        decline: "Refuser",
        followUs: "Suivez-nous sur ",
        serviceButton: "RETOURNEZ VERS TOUS LES SERVICES",
        getInTouch: "Appelez-nous",
        mailUs: "Nous contacter",
        navbarItem1: "ACCEUIL",
        navbarItem2: "SERVICES",
        navbarItem3: "QUI SOMMES NOUS",
        navbarItem4: "CONTACT",
        navbarLanguage: "CHOISSISEZ VOTRE LANGUE",
        onePage: "SITE WEB SIMPLE",
        multiPage: "SITE WEB MULTI-PAGES",
        ecommerce: "E-COMMERCE",
        introSubHeader1:
            "Chez Bel'Azur Coding, nous nous spécialisons dans la création de sites web sur mesure et performants, aussi uniques que votre entreprise.",
        introSubHeader2:
            "Nous offrons un engagement fort envers la qualité et un goût pour des solutions élégantes et codées à la main.",
        introSubHeader3:
            "Ensemble, nous transformons vos rêves numériques en réalité.",
        philosophyHeader: "NOTRE PHILOSOPHIE",
        philosophyText1:
            "Nous croyons en un code propre, un design clair et une communication transparente. Chaque projet est une collaboration, et votre satisfaction est notre objectif ultime.",
        philosophyText2:
            "De la conception au lancement, nous veillons à ce que votre présence digitale ait un impact puissant.",
        philosophyClosing:
            "< Transformons vos idées en une expérience exceptionnelle />",
        whyUsHeader1: "Développement Sur Mesure",
        whyUsText1:
            "Nous concevons votre site web pour qu'il réponde aux besoins uniques de votre entreprise. Notre approche garantit que votre site web se distingue non seulement sur le plan visuel, mais aussi en termes de performances, en offrant une expérience utilisateur fluide sur tous les appareils. Nous travaillons en étroite collaboration avec vous pour comprendre votre marque et vos objectifs, et traduire votre vision en une solution numérique qui reflète vraiment qui vous êtes.",
        whyUsHeader2: "Experts en Codage Manuel",
        whyUsText2:
            "Nous sommes fiers de notre expertise en matière de codage manuel. En partant de zéro, nous vous offrons des solutions plus rapides, plus sûres et hautement personnalisables. Cette approche garantit que votre site est optimisé pour la performance, qu'il résiste aux menaces de sécurité les plus courantes et qu'il peut facilement s'adapter à la croissance de votre entreprise. Avec Bel'Azur Coding, vous choisissez la fiabilité, la précision et l'adaptabilité",

        whyUsHeader3: "Service Multilingue",
        whyUsText3:
            "La communication est la clé de tout projet réussi, et chez Bel'Azur Coding, nous la rendons simple. Nous proposons nos services en néerlandais, français et anglais. Notre polyvalence linguistique garantit que nous pouvons travailler efficacement avec une gamme diversifiée de clients, locaux et internationaux. Notre engagement envers une communication claire et cohérente signifie que vous serez toujours informé, où que vous soyez dans le monde.",
        allServicesSubHeader: "Des services adaptés à vos besoins réels",
        allServicesText:
            "Chez Bel'Azur Coding, nous sommes passionnés par la livraison de solutions exceptionnelles de développement web qui aident votre entreprise à se démarquer dans le paysage numérique. Nous adoptons une approche personnalisée pour chaque projet, en veillant à ce que le produit final s'aligne parfaitement sur vos objectifs et votre vision. Des sites web d'une seule page aux plateformes e-commerce complexes, nous sommes équipés pour donner vie à vos idées.",
        vitrineHeader:
            "Des sites web simples et percutants pour votre entreprise.",
        vitrinePrice: "Votre expérience en ligne à partir de 750€ HT",
        vitrinePriceShort: "750€ *",
        vitrinePriceShortIntro: "à partir de ",
        vitrineIntro1:
            "Un site web d'une page est un concept simple. C'est une conception web abordable qui se compose en réalité de deux pages : une page d'accueil et une page de contact.",
        vitrineIntro2:
            "Sur votre page d'accueil, vous vous présentez au public. Vous pouvez dire qui vous êtes, ce que vous faites - et peut-être pourquoi vous le faites, et bien plus encore.",
        vitrineIntro3:
            "Votre page de contact fournit un moyen pour les gens de vous contacter. Cela peut être un formulaire de contact, un lien d'adresse, un lien vers votre page de médias sociaux, etc.",
        vitrineIntro4: "Les possibilités sont infinies.",
        vitrinePerfect: "Parfait pour",
        vitrineBenefitsHeader: "Avantages",
        vitrineBox1:
            "Considérez-le comme une brochure en ligne magnifiquement conçue. Toutes les informations importantes sur votre entreprise sont sur une seule page, ce qui permet à vos clients de comprendre facilement qui vous êtes et ce que vous proposez sans trop de clics. C'est simple, mais ça a de l'impact—transmettant votre message de manière à capter l'attention et encourager l'action.",
        vitrinePerfectFor: [
            "Promotions d’événements",
            "Mise en avant d'un produit/service",
            "Portfolios simples",
            "Démarrer en ligne",
        ],
        vitrineBenefits: [
            "Nom de domaine d’entreprise",
            "Mise en ligne rapide et économique",
            "Idéal pour les petites entreprises",
            "Design adapté au mobile",
        ],
        websiteHeader:
            "Des sites web multi-pages qui évoluent avec votre entreprise",
        websitePrice: "Visibilité totale à partir de 1850€ HT",
        websitePriceShort: "1850€ *",
        websitePriceShortIntro: "à partir de ",
        websiteIntro1:
            "Un site Web multi-pages est idéal pour les entreprises qui ont besoin de présenter beaucoup d'informations d'une manière organisée et attrayante,",
        websiteIntro2:
            "Qu'il s'agisse d'un organisateur d'événements qui présente ses services, d'une entreprise de construction qui présente ses projets antérieurs ou d'un organisme communautaire qui partage ses ressources,",
        websiteIntro3:
            "Nous créons un site web facile à parcourir et agréable à explorer pour les visiteurs.",
        websitePerfect: "Parfait pour",
        websiteBenefitsHeader: "Avantages",
        websiteBox1:
            "Il s'agit d'une expérience numérique complète. Au lieu de tout mettre sur une seule page, nous répartissons votre contenu sur plusieurs pages bien organisées, comme « À propos de nous », « Services », « Portfolio » ou « Contact ». Cette disposition permet de guider les visiteurs à travers votre site, en leur donnant les détails dont ils ont besoin sans les submerger. Le site est flexible et conçu pour s'adapter à l'évolution de votre entreprise",
        websitePerfectFor: [
            "Entreprises de services",
            "Partage de ressources",
            "Portfolios professionnels",
            "Plateformes de contenu",
        ],
        websiteBenefits: [
            "Accès rapide aux infos",
            "Image professionnelle",
            "Contenus variés",
            "Design évolutif",
        ],
        ecommerceHeader:
            "Stimuler les ventes et atteindre de nouveaux clients grâce à une expérience d'achat en ligne transparente",
        ecommercePrice: "Prix ​​disponible sur demande",
        ecommercePriceShort: "Sur demande",
        ecommerceIntro1:
            "Les sites de commerce électronique sont conçus pour vous aider à vendre en ligne facilement et efficacement.",
        ecommerceIntro2:
            "Que vous soyez un artisan local qui lance sa première boutique en ligne ou une entreprise de vente au détail prête à s'internationaliser,",
        ecommerceIntro3:
            "nous créons une boutique en ligne sécurisée et esthétique qui facilite les achats de vos clients et la gestion des commandes pour vous.",
        ecommerceIntro4: "Vos options sont illimitées.",
        ecommercePerfect: "Parfait pour",
        ecommerceBenefitsHeader: "Avantages",
        ecommerceBox1:
            "Il s'agit d'une boutique en ligne complète où vous pouvez vendre vos propres produits ou services. Nous pouvons l'installer à l'aide de Shopify pour une solution simple et prête à l'emploi ou la construire sur mesure pour plus de contrôle et de flexibilité. De l'affichage de vos produits dans une présentation attrayante à l'offre de plusieurs options de paiement, nous veillons à ce que votre boutique soit facile à utiliser et optimisée pour les ventes",
        ecommercePerfectFor: [
            "Premiers pas en ligne",
            "Commerces élargissant leur portée",
            "Solutions e-commerce personnalisées",
            "Paiements sécurisés",
        ],
        ecommerceBenefits: [
            "Ventes locales et internationales",
            "Revenus 24/7",
            "Paiements sécurisés",
            "Designs attractifs",
        ],

        aboutUsHeader: "Qui sommes nous ?",
        aboutLisa:
            "Lisa est la force motrice de Bel'Azur Coding. Sans elle, ce site n'existerait probablement pas. Lisa a un œil pour le design, aime résoudre des questions difficiles et n'hésite pas à relever des défis. Grâce à sa formation chez SheCodes, elle est parfaitement capable de construire des sites web magnifiques, adaptés aux mobiles et interactifs qui présentent votre entreprise sous un nouveau jour.",
        aboutJoachim:
            "Joachim est le geek du duo. Il a toujours eu un fort intérêt pour la conception de sites web et ne cesse d'acquérir de nouvelles compétences. Grâce à un certificat Full Stack délivré par 4Geeks Academy et à un cours récent sur React Native, il est capable de développer des sites web complexes et modernes, des plateformes d' e-commerce et des applications mobiles.",
        contactHeader: "Contactez-nous",
        contactFirstName: "Prénom",
        contactLastName: "Nom de famille",
        contactPhone: "Numéro de téléphone",
        contactEmail: "Courriel",
        contactCompany: "Entreprise",
        contactInterest: "Je suis intéressé par",
        contactInterestOption1: "Sélectionnez une option",
        contactInterestOption2: "Site web une page",
        contactInterestOption3: "Site web multi-pages",
        contactInterestOption4: "Site web e-commerce",
        contactInterestOption5: "Autre",
        contactAdditionalInfo: "Informations supplémentaires",
        contactButton: "Envoyer",
        contactIsRequired: "est requis",
        contactNumeric: "Le numéro de téléphone doit être numérique",
        contactEmailError: "Adresse e-mail invalide",
        contactEmailRequired: "Un courriel est requis",
        contactEmailSentSuccess: "E-mail envoyé avec succès !",
        contactEmailSentError:
            "Échec de l'envoi de l'e-mail. Veuillez réessayer.",
        taxWarning: "* Prix hors TVA",
        continue: "Continuer en français",
        contactRecaptchaError: "Erreur ReCaptcha, veuillez réessayer",
    },

    dutch: {
        respectPrivacy: "Wij respecteren uw privacy",
        cookies:
            "Deze website maakt gebruik van cookies om uw ervaring te verbeteren.",
        functionalCookies: "Functionele cookies (verplicht)",
        allowAnalytics: "Cookies voor Marketingdoeleinden",
        accept: "Accepteren",
        acceptAll: "Alles accepteren",
        decline: "Afwijzen",
        followUs: "Volg ons op ",
        serviceButton: "TERUG NAAR ALLE DIENSTEN",
        getInTouch: "Bel ons vandaag",
        mailUs: "Contacteer ons",
        navbarItem1: "HOME",
        navbarItem2: "DIENSTEN",
        navbarItem3: "WIE ZIJN WIJ",
        navbarItem4: "CONTACT",
        navbarLanguage: "KIES UW TAAL",
        onePage: "SINGLE-PAGE WEBSITE",
        multiPage: "MULTI-PAGE WEBSITE",
        ecommerce: "E-COMMERCE",
        introSubHeader1:
            "Bij Bel'Azur Coding bouwen we websites op maat die even uniek zijn als uw onderneming. Met een passie voor kwaliteit schrijven we elke regel code met zorg en precisie.",
        introSubHeader2:
            "We combineren vakmanschap en creativiteit om uw digitale dromen tot leven te brengen. ",
        introSubHeader3: "Samen maken we uw digitale dromen werkelijkheid.",
        philosophyHeader: "ONZE FILOSOFIE",
        philosophyText1:
            "Bij Bel'Azur Coding draait alles om eenvoud, kwaliteit en samenwerking. We geloven in propere code, strak design en open communicatie.",
        philosophyText2:
            "Van het eerste idee tot de grote lancering; wij zorgen ervoor dat uw digitale aanwezigheid niet alleen gezien wordt, maar ook écht indruk maakt.",
        philosophyClosing:
            "< Samen maken we van uw idee een unieke digitale ervaring />",
        whyUsHeader1: "Ontwerp op maat",
        whyUsText1:
            "Wij ontwerpen uw website om te voldoen aan de unieke behoeften van jouw bedrijf. Onze aanpak zorgt ervoor dat uw website niet alleen visueel opvalt, maar ook qua prestaties, en de soepele gebruikerservaring biedt op alle apparaten. We werken nauw met u samen om uw merk en doelstellingen te begrijpen en uw visie te vertalen naar een digitale oplossing die echt weerspiegelt wie u bent.",
        whyUsHeader2: "Experts in coderen",
        whyUsText2:
            "We zijn trots op onze expertise in handmatige codering. Door vanaf nul te bouwen, bieden we u snellere, veiligere en zeer aanpasbare oplossingen. Deze aanpak zorgt ervoor dat uw site is geoptimaliseerd voor prestaties, bestand is tegen veelvoorkomende beveiligingsrisico's en gemakkelijk kan worden geschaald naarmate uw bedrijf groeit. Met Bel'Azur Coding kiest u voor betrouwbaarheid, precisie en aanpassingsvermogen.",

        whyUsHeader3: "Taal is onze troef",
        whyUsText3:
            "Communicatie is de sleutel tot elk succesvol project, en bij Bel'Azur Coding maken we het moeiteloos. Wij bieden onze diensten aan in het Nederlands, Frans en Engels. Onze taalkundige veelzijdigheid zorgt ervoor dat we efficiënt kunnen samenwerken met een breed scala aan klanten, zowel lokale als internationale bedrijven. Onze toewijding aan duidelijke en consistente communicatie betekent dat u altijd op de hoogte blijft, waar u zich ook bevindt in de wereld.",
        allServicesSubHeader:
            "Diensten gebaseerd op uw daadwerkelijke behoeften",
        allServicesText:
            "Bij Bel'Azur Coding zijn we gepassioneerd over het leveren van uitzonderlijke weboplossingen die uw bedrijf helpen opvallen in het digitale landschap. We hanteren een persoonlijke aanpak voor elk project, waarbij we ervoor zorgen dat het eindproduct perfect aansluit bij uw doelen en visie. Van single-page websites tot complexe e-commerce platforms, wij bezitten de kennis om uw ideeën tot leven te brengen.",
        vitrineHeader:
            "Eenvoudige, impactvolle single-page websites voor uw bedrijf.",
        vitrinePrice: "Uw online ervaring vanaf € 750,- excl. BTW",
        vitrinePriceShort: "€ 750 *",
        vitrinePriceShortIntro: "Vanaf",
        vitrineIntro1:
            "Een single-page website is een eenvoudig concept. Het is een betaalbaar webdesign dat eigenlijk uit twee pagina's bestaat: een voorpagina en een contactpagina.",
        vitrineIntro2:
            "Op je voorpagina stel je jezelf voor aan het publiek. Je kunt vertellen wie je bent, wat je doet - en misschien waarom je dat doet, en nog veel meer.",
        vitrineIntro3:
            "Je contactpagina biedt mensen een manier om met je in contact te komen. Dit kan een contactformulier zijn, een adreslink, een link naar je social media-pagina, enzovoort.",
        vitrineIntro4: "De mogelijkheden zijn eindeloos.",
        vitrinePerfect: "Perfect voor",
        vitrineBenefitsHeader: "Voordelen",
        vitrineBox1:
            "Zie het als een prachtig ontworpen online brochure. Alle belangrijke informatie over uw bedrijf staat op één enkele pagina, waardoor uw klanten gemakkelijk begrijpen wie u bent en wat u aanbiedt zonder al te veel rond te hoeven klikken. Het is eenvoudig, maar het heeft een grote impact - het overbrengen van uw boodschap op een manier die de aandacht trekt en aanzet tot actie.",
        vitrinePerfectFor: [
            "Evenementpromotie",
            "Een product/dienst uitlichten",
            "Eenvoudige portfolio's",
            "Starten online",
        ],
        vitrineBenefits: [
            "Bedrijfsdomeinnaam",
            "Snelle en goedkope implementatie",
            "Perfect voor kleine bedrijven",
            "Mobielvriendelijk ontwerp",
        ],
        websiteHeader:
            "Op maat gemaakte Multi-Page Websites die meegroeien met uw bedrijf",
        websitePrice: "Volledige online zichtbaarheid vanaf € 1850,- excl. BTW",
        websitePriceShort: "€ 1850 *",
        websitePriceShortIntro: "Vanaf",
        websiteIntro1:
            "Een website met meerdere pagina's is ideaal voor bedrijven die veel informatie op een georganiseerde, boeiende manier moeten presenteren.",
        websiteIntro2:
            "Of u nu een evenementenplanner bent die uw diensten uiteenzet, een bouwbedrijf dat uw eerdere projecten laat zien of een gemeenschapsorganisatie die hulpbronnen deelt.",
        websiteIntro3:
            "Een website met meerdere pagina's is ideaal voor bedrijven die veel informatie op een aantrekkelijke manier moeten presenteren.",
        websitePerfect: "Perfect voor",
        websiteBenefitsHeader: "Voordelen",
        websiteBox1:
            "Zie het als een volledige digitale ervaring. In plaats van alles op één pagina te zetten, verdelen we uw inhoud over verschillende goed georganiseerde pagina's, zoals “Over ons”, “Diensten”, “Portfolio” of “Contact”. Deze lay-out leidt bezoekers door je site en geeft ze de details die ze nodig hebben zonder ze te overweldigen. Het is flexibel en gebouwd om mee te groeien met de ontwikkeling van je bedrijf.",
        websitePerfectFor: [
            "Dienstverlenende bedrijven",
            "Resource-sharing organisaties",
            "Portfolio-gedreven bedrijven",
            "Contentplatformen",
        ],
        websiteBenefits: [
            "Snelle toegang tot informatie",
            "Professionele uitstraling",
            "Veelzijdige inhoud",
            "Schaalbaar ontwerp",
        ],
        ecommerceHeader:
            "Verkoop stimuleren en nieuwe klanten bereiken met een naadloze online winkelervaring",
        ecommercePrice: "Prijs op aanvraag",
        ecommercePriceShort: "Op aanvraag",
        ecommerceIntro1:
            "E-commerce websites zijn ontworpen om u te helpen eenvoudig en effectief te beginnen met online verkopen.",
        ecommerceIntro2:
            "Of u nu een lokale ambachtsman bent die een eerste online winkel lanceert, of een detailhandelsbedrijf dat klaar is om wereldwijd te gaan,",
        ecommerceIntro3:
            "wij bouwen een veilige, mooie online winkel die winkelen makkelijk maakt voor uw klanten en het beheren van bestellingen een koud kunstje voor u.",
        ecommerceIntro4: "De opties zijn grenzeloos.",
        ecommercePerfect: "Perfect voor",
        ecommerceBenefitsHeader: "Voordelen",
        ecommerceBox1:
            "Het is uw complete online winkel waar u uw eigen producten of diensten kunt verkopen. We kunnen het opzetten met Shopify voor een eenvoudige, kant-en-klare oplossing of het op maat bouwen voor meer controle en flexibiliteit. Van het weergeven van je producten in een aantrekkelijke lay-out tot het aanbieden van meerdere betaalopties, wij zorgen ervoor dat je winkel gemakkelijk te gebruiken is en geoptimaliseerd is voor de verkoop.",
        ecommercePerfectFor: [
            "Eerste online verkoop",
            "Detailhandel met bredere doelgroep",
            "Aangepaste e-commerceoplossingen",
            "Veilige betaalmethoden",
        ],
        ecommerceBenefits: [
            "Lokale en wereldwijde verkoop",
            "24/7 inkomsten",
            "Veilige betalingen",
            "Merkgerichte ontwerpen",
        ],

        aboutUsHeader: "Wie zijn wij?",
        aboutLisa:
            "Lisa is de drijvende Kracht achter Bel’Azur Coding. Zonder haar had deze website waarschijnlijk niet eens bestaan. Lisa heeft oog voor design, lost graag de moeilijkste vraagstukken op en gaat geen enkele uitdaging uit de weg. Dankzij haar opleiding via SheCodes is zij perfect in staat om mooie, mobile-friendly en interactieve websites te bouwen die uw bedrijf in een nieuw daglicht stellen.",
        aboutJoachim:
            "Joachim is de nerd van het duo. Hij heeft altijd een sterke interesse gehad in webdesign en is continu bezig met het vergaren van nieuwe kennis. Dankzij een Full Stack certificaat uitgegeven door 4Geeks Academy en een recente cursus in React Native, is hij in staat complexe en moderne websites, e-commerce platformen en mobiele applicaties te ontwikkelen.",
        contactHeader: "Contacteer ons",
        contactFirstName: "Voornaam",
        contactLastName: "Achternaam",
        contactPhone: "Telefoonnummer",
        contactEmail: "E-mailadres",
        contactCompany: "Bedrijf",
        contactInterest: "Ik ben geïnteresseerd in",
        contactInterestOption1: "Selecteer een optie",
        contactInterestOption2: "One-Page Website",
        contactInterestOption3: "Multi-Page Website",
        contactInterestOption4: "E-commerce Website",
        contactInterestOption5: "Andere",
        contactAdditionalInfo: "Aanvullende informatie",
        contactButton: "Verzenden",
        contactIsRequired: "is verplicht",
        contactNumeric: "Telefoonnummer moet numeriek zijn",
        contactEmailError: "Ongeldig e-mailadres",
        contactEmailRequired: "E-mailadres is verplicht",
        contactEmailSentSuccess: "E-mail succesvol verzonden!",
        contactEmailSentError: "E-mail verzenden mislukt. Probeer het opnieuw.",
        taxWarning: "* Prijzen zonder BTW",
        continue: "Doorgaan in het Nederlands",
        contactRecaptchaError: "ReCaptcha Error, gelieve opnieuw te proberen",
    },
};

const _MOBILEtext = {
    english: {
        respectPrivacy: "We respect your privacy ",
        cookies: "This website uses cookies to improve your experience.",
        functionalCookies: "Functional cookies (required)",
        allowAnalytics: "Cookies for Marketing purposes",
        acceptAll: "Accept all",
        accept: "Accept",
        decline: "Decline",
        followUs: "Follow us on ",
        serviceButton: "BACK TO SERVICES",
        getInTouch: "Call us",
        mailUs: "Email us",
        navbarItem1: "HOME",
        navbarItem2: "SERVICES",
        navbarItem3: "ABOUT US",
        navbarItem4: "CONTACT",
        navbarLanguage: "CHOOSE YOUR LANGUAGE",
        onePage: "ONE-PAGE SITE",
        multiPage: "MULTI-PAGE SITE",
        ecommerce: "E-COMMERCE",
        introSubHeader1: "Custom websites tailored to your business.",
        introSubHeader2: "Quality and hand-coded solutions.",
        introSubHeader3: "Your digital dreams, realized.",
        philosophyHeader: "OUR PHILOSOPHY",
        philosophyText1:
            "We believe in clean code, clean design, and clear communication. Every project we take on is a collaborative journey, and your satisfaction is our ultimate goal.",
        philosophyText2:
            "From concept to launch, we're here to ensure your digital presence makes a powerful impact.",
        philosophyClosing:
            "< Let's transform your ideas into an exceptional online experience />",
        whyUsHeader1: "Custom Development",
        whyUsText1:
            "Unique code for your business. Stunning, fast, and user-friendly designs on all devices.",
        whyUsHeader2: "Manual Coding",
        whyUsText2: "Hand-crafted sites: fast, secure, scalable, and reliable.",
        whyUsHeader3: "Multilingual Service",
        whyUsText3:
            "We communicate in Dutch, French, and English, ensuring clarity for every client.",
        allServicesSubHeader: "Services tailored to your needs",
        allServicesText:
            "We deliver personalized websites to help your business stand out. From simple sites to complex platforms, we bring your ideas to life.",
        vitrineHeader: "Simple, impactful websites.",
        vitrinePrice: "Starting from €750 excl. VAT",
        vitrinePriceShort: "€750 *",
        vitrinePriceShortIntro: "From",
        vitrineIntro1: "Affordable design: front and contact pages.",
        vitrineIntro2: "Introduce your business, services, and more.",
        vitrineIntro3: "Easy contact options: forms, links, and more.",
        vitrineIntro4: "Endless possibilities.",
        vitrinePerfect: "Ideal for",
        vitrineBenefitsHeader: "Benefits",
        vitrineBox1:
            "A single page with all key info, designed to grab attention and drive action.",
        vitrinePerfectFor: [
            "Event promotions",
            "Highlighting a product/service",
            "Simple portfolios",
            "Starting online",
        ],
        vitrineBenefits: [
            "Business domain name",
            "Quick setup, low cost",
            "Perfect for small businesses",
            "Mobile-friendly design",
        ],
        websiteHeader: "Websites that grow with you.",
        websitePrice: "Starting from €1850 excl. VAT",
        websitePriceShort: "€1850 *",
        websitePriceShortIntro: "From",
        websiteIntro1: "Ideal for detailed, organized business info.",
        websiteIntro2: "From services to resources, showcase your work.",
        websiteIntro3: "Easy to navigate and explore.",
        websitePerfect: "Ideal for",
        websiteBenefitsHeader: "Benefits",
        websiteBox1:
            "Organized, multi-page layouts for seamless navigation and growth.",
        websitePerfectFor: [
            "Service companies",
            "Resource-sharing organizations",
            "Businesses with portfolios",
            "Content-driven platforms",
        ],
        websiteBenefits: [
            "Quick, easy info access",
            "Professional brand image",
            "Rich content options",
            "Scalable design for growth",
        ],
        ecommerceHeader: "Boost sales with seamless online shopping.",
        ecommercePrice: "Price on demand",
        ecommercePriceShort: "On demand",
        ecommerceIntro1: "Easy, effective e-commerce sites.",
        ecommerceIntro2: "From local shops to global brands.",
        ecommerceIntro3: "Secure, user-friendly stores for smooth management.",
        ecommerceIntro4: "Unlimited possibilities.",
        ecommercePerfect: "Ideal for",
        ecommerceBenefitsHeader: "Benefits",
        ecommerceBox1:
            "Custom or Shopify-based stores, optimized for sales and user experience.",
        ecommercePerfectFor: [
            "First-time online sellers",
            "Retailers expanding reach",
            "Tailored e-commerce solutions",
            "Secure payment options",
        ],
        ecommerceBenefits: [
            "Local and global sales",
            "Revenue 24/7",
            "Secure payments",
            "Branded, attractive designs",
        ],

        aboutUsHeader: "Who are we?",
        aboutLisa:
            "Lisa is the driving force behind Bel'Azur Coding. Without her, this site probably wouldn’t exist. Lisa has an eye for design, loves solving tough challenges, and doesn’t shy away from tackling difficulties. Thanks to her training at SheCodes, she is perfectly capable of building beautiful, mobile-friendly, and interactive websites that showcase your business in a new light.",
        aboutJoachim:
            "Joachim is the geek of the duo. He has always had a strong interest in web design and continuously acquires new skills. With a Full Stack certificate from 4Geeks Academy and a recent course on React Native, he is capable of developing complex and modern websites, e-commerce platforms, and mobile applications.",
        contactHeader: "Get in touch",
        contactFirstName: "First Name",
        contactLastName: "Last Name",
        contactPhone: "Phone",
        contactEmail: "Email",
        contactCompany: "Company",
        contactInterest: "I'm interested in",
        contactInterestOption1: "Select",
        contactInterestOption2: "One-Page Website",
        contactInterestOption3: "Multi-Page Website",
        contactInterestOption4: "E-commerce",
        contactInterestOption5: "Other",
        contactAdditionalInfo: "Additional info",
        contactButton: "Submit",
        contactIsRequired: "is required",
        contactNumeric: "Phone must be numeric",
        contactEmailError: "Invalid email",
        contactEmailRequired: "Email required",
        contactEmailSentSuccess: "Email sent!",
        contactEmailSentError: "Email failed. Try again.",
        taxWarning: "* Price excluding taxes",
        continue: "Continue in English",
        contactRecaptchaError: "ReCaptcha Error, please try again",
    },
    french: {
        respectPrivacy: "Nous respectons votre vie privée ",
        cookies:
            "Ce site Web utilise des cookies pour améliorer votre expérience.",
        functionalCookies: "Cookies fonctionnels (obligatoires)",
        accept: "Accepter",
        allowAnalytics: "Cookies à des Fins Marketing",
        acceptAll: "Accepter tout",
        decline: "Refuser",
        followUs: "Suivez-nous sur ",
        serviceButton: "RETOUR AUX SERVICES",
        getInTouch: "Appelez-nous",
        mailUs: "Nous contacter",
        navbarItem1: "ACCUEIL",
        navbarItem2: "SERVICES",
        navbarItem3: "QUI SOMMES NOUS",
        navbarItem4: "CONTACT",
        navbarLanguage: "CHOISSISEZ VOTRE LANGUE",
        onePage: "SITE ONE-PAGE",
        multiPage: "SITE MULTI-PAGE",
        ecommerce: "E-COMMERCE",
        introSubHeader1: "Des sites adaptés à votre activité.",
        introSubHeader2: "Solutions sur mesure.",
        introSubHeader3: "Vos rêves numériques en realité.",
        philosophyHeader: "NOTRE PHILOSOPHIE",
        philosophyText1:
            "Nous croyons en un code propre, un design clair et une communication transparente. Chaque projet est une collaboration, et votre satisfaction est notre objectif ultime.",
        philosophyText2:
            "De la conception au lancement, nous veillons à ce que votre présence digitale ait un impact puissant.",
        philosophyClosing:
            "< Transformons vos idées en une expérience exceptionnelle />",
        whyUsHeader1: "Développement personnalisé",
        whyUsText1: "Code unique, designs modernes, rapides et sur mesure.",
        whyUsHeader2: "Code manuel",
        whyUsText2:
            "Des sites faits à la main : rapides, sécurisés et fiables.",
        whyUsHeader3: "Service multilingue",
        whyUsText3:
            "Nous communiquons en français, anglais et néerlandais pour une clarté optimale.",
        allServicesSubHeader: "Des services adaptés à vos besoins",
        allServicesText:
            "Sites personnalisés pour mettre en valeur votre entreprise.",
        vitrineHeader: "Sites simples et impactants.",
        vitrinePrice: "à partir de 750€ HT",
        vitrinePriceShort: "750€ *",
        vitrinePriceShortIntro: "à partir de ",
        vitrineIntro1: "Design abordable : page d'accueil et contact.",
        vitrineIntro2: "Présentez votre activité, vos services, etc.",
        vitrineIntro3: "Options de contact faciles : formulaires, liens, etc.",
        vitrineIntro4: "Possibilités infinies.",
        vitrinePerfect: "Parfait pour",
        vitrineBenefitsHeader: "Avantages",
        vitrineBox1: "Une page unique avec toutes les infos clés.",
        vitrinePerfectFor: [
            "Promotions d’événements",
            "Mise en avant d'un produit/service",
            "Portfolios simples",
            "Démarrer en ligne",
        ],
        vitrineBenefits: [
            "Nom de domaine d’entreprise",
            "Mise en ligne rapide et économique",
            "Idéal pour les petites entreprises",
            "Design adapté au mobile",
        ],
        websiteHeader: "Sites qui évoluent avec vous.",
        websitePrice: "à partir de 1850€ HT",
        websitePriceShort: "1850€ *",
        websitePriceShortIntro: "à partir de ",
        websiteIntro1: "Idéal pour des infos détaillées et organisées.",
        websiteIntro2: "Présentez vos services et ressources.",
        websiteIntro3: "Navigation simple et intuitive.",
        websitePerfect: "Parfait pour",
        websiteBenefitsHeader: "Avantages",
        websiteBox1: "Des designs multi-pages pour une navigation fluide.",
        websitePerfectFor: [
            "Entreprises de services",
            "Partage de ressources",
            "Portfolios professionnels",
            "Plateformes de contenu",
        ],
        websiteBenefits: [
            "Accès rapide aux infos",
            "Image professionnelle",
            "Contenus variés",
            "Design évolutif",
        ],
        ecommerceHeader: "Boostez vos ventes en ligne.",
        ecommercePrice: "Prix ​​disponible sur demande",
        ecommercePriceShort: "Sur demande",
        ecommerceIntro1: "Sites e-commerce simples et efficaces.",
        ecommerceIntro2: "Pour les boutiques locales et marques globales.",
        ecommerceIntro3: "Boutiques sécurisées et conviviales.",
        ecommerceIntro4: "Possibilités infinies.",
        ecommercePerfect: "Parfait pour",
        ecommerceBenefitsHeader: "Avantages",
        ecommerceBox1: "Boutiques sur mesure ou basées sur Shopify.",
        ecommercePerfectFor: [
            "Premiers pas en ligne",
            "Commerces élargissant leur portée",
            "Solutions e-commerce personnalisées",
            "Paiements sécurisés",
        ],
        ecommerceBenefits: [
            "Ventes locales et internationales",
            "Revenus 24/7",
            "Paiements sécurisés",
            "Designs attractifs",
        ],

        aboutUsHeader: "Qui sommes nous ?",
        aboutLisa:
            "Lisa est la force motrice de Bel'Azur Coding. Sans elle, ce site n'existerait probablement pas. Lisa a un œil pour le design, aime résoudre des questions difficiles et n'hésite pas à relever des défis. Grâce à sa formation chez SheCodes, elle est parfaitement capable de construire des sites web magnifiques, adaptés aux mobiles et interactifs qui présentent votre entreprise sous un nouveau jour.",
        aboutJoachim:
            "Joachim est le geek du duo. Il a toujours eu un fort intérêt pour la conception de sites web et ne cesse d'acquérir de nouvelles compétences. Grâce à un certificat Full Stack délivré par 4Geeks Academy et à un cours récent sur React Native, il est capable de développer des sites web complexes et modernes, des plateformes d' e-commerce et des applications mobiles.",
        contactHeader: "Contactez-nous",
        contactFirstName: "Prénom",
        contactLastName: "Nom",
        contactPhone: "Téléphone",
        contactEmail: "Email",
        contactCompany: "Entreprise",
        contactInterest: "Je suis intéressé(e) par",
        contactInterestOption1: "Sélectionner",
        contactInterestOption2: "Site One-Page",
        contactInterestOption3: "Site Multi-Page",
        contactInterestOption4: "E-commerce",
        contactInterestOption5: "Autre",
        contactAdditionalInfo: "Infos supplémentaires",
        contactButton: "Envoyer",
        contactIsRequired: "est requis",
        contactNumeric: "Téléphone doit être numérique",
        contactEmailError: "Email invalide",
        contactEmailRequired: "Email requis",
        contactEmailSentSuccess: "Email envoyé !",
        contactEmailSentError: "Échec de l'envoi. Réessayez.",
        taxWarning: "* Prix hors TVA",
        continue: "Continuer en français",
        contactRecaptchaError: "Erreur ReCaptcha, veuillez réessayer",
    },

    dutch: {
        respectPrivacy: "Wij respecteren uw privacy ",
        cookies:
            "Deze website maakt gebruik van cookies om uw ervaring te verbeteren.",
        functionalCookies: "Functionele cookies (verplicht)",
        allowAnalytics: "Cookies voor Marketingdoeleinden",
        acceptAll: "Alles accepteren",
        accept: "Accepteren",
        decline: "Afwijzen",
        followUs: "Volg ons op ",
        serviceButton: "TERUG NAAR DIENSTEN",
        getInTouch: "Bel ons",
        mailUs: "Mail ons",
        navbarItem1: "HOME",
        navbarItem2: "DIENSTEN",
        navbarItem3: "OVER ONS",
        navbarItem4: "CONTACT",
        navbarLanguage: "KIES UW TAAL",
        onePage: "ONE-PAGE WEBSITE",
        multiPage: "MULTI-PAGE WEBSITE",
        ecommerce: "E-COMMERCE",
        introSubHeader1: "Op maat gemaakte websites voor uw bedrijf.",
        introSubHeader2: "Kwaliteit en handgemaakte oplossingen.",
        introSubHeader3: "Uw digitale dromen, gerealiseerd.",
        philosophyHeader: "ONZE FILOSOFIE",
        philosophyText1:
            "Bij Bel'Azur Coding draait alles om eenvoud, kwaliteit en samenwerking. We geloven in propere code, strak design en open communicatie.",
        philosophyText2:
            "Van het eerste idee tot de grote lancering; wij zorgen ervoor dat uw digitale aanwezigheid niet alleen gezien wordt, maar ook écht indruk maakt.",
        philosophyClosing:
            "< Samen maken we van uw idee een unieke digitale ervaring />",
        whyUsHeader1: "Maatwerk Ontwikkeling",
        whyUsText1:
            "Unieke code voor uw bedrijf. Prachtige, snelle en gebruiksvriendelijke ontwerpen.",
        whyUsHeader2: "Handmatige Code",
        whyUsText2:
            "Handgemaakte sites: snel, veilig, schaalbaar en betrouwbaar.",
        whyUsHeader3: "Meertalige Service",
        whyUsText3:
            "We communiceren in Nederlands, Frans en Engels voor duidelijke samenwerking.",
        allServicesSubHeader: "Diensten op maat voor uw behoeften",
        allServicesText:
            "We leveren gepersonaliseerde websites om uw bedrijf te onderscheiden van de rest.",
        vitrineHeader: "Eenvoudige, impactvolle websites.",
        vitrinePrice: "Vanaf € 750,- excl. BTW",
        vitrinePriceShort: "€ 750 *",
        vitrinePriceShortIntro: "Vanaf",
        vitrineIntro1: "Betaalbaar ontwerp: homepagina en contactpagina.",
        vitrineIntro2: "Stel uw bedrijf, diensten en meer voor.",
        vitrineIntro3: "Eenvoudige contactopties: formulieren, links, enz.",
        vitrineIntro4: "Oneindige mogelijkheden.",
        vitrinePerfect: "Ideaal voor",
        vitrineBenefitsHeader: "Voordelen",
        vitrineBox1: "Een enkele pagina met alle belangrijke informatie.",
        vitrinePerfectFor: [
            "Evenementpromotie",
            "Een product/dienst uitlichten",
            "Eenvoudige portfolio's",
            "Starten online",
        ],
        vitrineBenefits: [
            "Bedrijfsdomeinnaam",
            "Snelle en goedkope implementatie",
            "Perfect voor kleine bedrijven",
            "Mobielvriendelijk ontwerp",
        ],
        websiteHeader: "Websites die met u meegroeien.",
        websitePrice: "Vanaf € 1850,- excl. BTW",
        websitePriceShort: "€ 1850 *",
        websitePriceShortIntro: "Vanaf",
        websiteIntro1:
            "Ideaal voor gedetailleerde en georganiseerde bedrijfsinformatie.",
        websiteIntro2: "Van diensten tot resources, toon uw werk.",
        websiteIntro3: "Eenvoudig te navigeren en te verkennen.",
        websitePerfect: "Ideaal voor",
        websiteBenefitsHeader: "Voordelen",
        websiteBox1:
            "Georganiseerde, multi-page ontwerpen voor gemakkelijke navigatie.",
        websitePerfectFor: [
            "Dienstverlenende bedrijven",
            "Resource-sharing organisaties",
            "Portfolio-gedreven bedrijven",
            "Contentplatformen",
        ],
        websiteBenefits: [
            "Snelle toegang tot informatie",
            "Professionele uitstraling",
            "Veelzijdige inhoud",
            "Schaalbaar ontwerp",
        ],
        ecommerceHeader: "Verhoog uw verkoop met online shoppen.",
        ecommercePrice: "Prijs op aanvraag",
        ecommercePriceShort: "Op aanvraag",
        ecommerceIntro1: "Eenvoudige en effectieve e-commerce sites.",
        ecommerceIntro2: "Van lokale winkels tot wereldwijde merken.",
        ecommerceIntro3: "Veilige en gebruiksvriendelijke winkels.",
        ecommerceIntro4: "Oneindige mogelijkheden.",
        ecommercePerfect: "Ideaal voor",
        ecommerceBenefitsHeader: "Voordelen",
        ecommerceBox1:
            "Aangepaste of Shopify-webshops, geoptimaliseerd voor verkoop.",
        ecommercePerfectFor: [
            "Eerste online verkoop",
            "Detailhandel met bredere doelgroep",
            "Aangepaste e-commerceoplossingen",
            "Veilige betaalmethoden",
        ],
        ecommerceBenefits: [
            "Lokale en wereldwijde verkoop",
            "24/7 inkomsten",
            "Veilige betalingen",
            "Aantrekkelijke, merkgerichte ontwerpen",
        ],

        aboutUsHeader: "The team",
        aboutLisa:
            "Lisa is de drijvende Kracht achter Bel'Azur Coding. Zonder haar had deze website waarschijnlijk niet eens bestaan. Lisa heeft oog voor design, lost graag de moeilijkste vraagstukken op en gaat geen enkele uitdaging uit de weg. Dankzij haar opleiding via SheCodes is zij perfect in staat om mooie, mobile-friendly en interactieve websites te bouwen die uw bedrijf in een nieuw daglicht stellen.",
        aboutJoachim:
            "Joachim is de nerd van het duo. Hij heeft altijd een sterke interesse gehad in webdesign en is continu bezig met het vergaren van nieuwe kennis. Dankzij een Full Stack certificaat uitgegeven door 4Geeks Academy en een recente cursus in React Native, is hij in staat complexe en moderne websites, e-commerce platformen en mobiele applicaties te ontwikkelen.",
        contactHeader: "Neem contact op",
        contactFirstName: "Voornaam",
        contactLastName: "Achternaam",
        contactPhone: "Telefoon",
        contactEmail: "E-mail",
        contactCompany: "Bedrijf",
        contactInterest: "Ik ben geïnteresseerd in",
        contactInterestOption1: "Selecteer",
        contactInterestOption2: "One-Page Website",
        contactInterestOption3: "Multi-Page Website",
        contactInterestOption4: "E-commerce",
        contactInterestOption5: "Andere",
        contactAdditionalInfo: "Extra informatie",
        contactButton: "Verstuur",
        contactIsRequired: "is verplicht",
        contactNumeric: "Telefoonnummer moet numeriek zijn",
        contactEmailError: "Ongeldig e-mailadres",
        contactEmailRequired: "E-mail is verplicht",
        contactEmailSentSuccess: "E-mail verzonden!",
        contactEmailSentError: "E-mail verzenden mislukt. Probeer opnieuw.",
        taxWarning: "* Prijzen zonder BTW",
        continue: "Doorgaan in het Nederlands",
        contactRecaptchaError: "ReCaptcha Error, gelieve opnieuw te proberen",
    },
};

// eslint-disable-next-line react/prop-types
export const MyProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("userLanguage") || "french";
        }
        return "french";
    });
    const [screenWidth, setScreenWidth] = useState(
        typeof window !== "undefined" ? window.innerWidth : 0
    );
    const [text, setText] = useState(_DESKTOPtext);
    const [logoWidth, setLogoWidth] = useState("80px");
    const [logoHeight, setLogoHeight] = useState("80px");

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedLanguage = localStorage.getItem("userLanguage");
            setLanguage(storedLanguage || "french");
        }
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const handleResize = () => {
                setScreenWidth(window.innerWidth);
            };
            // Add resize event listener
            window.addEventListener("resize", handleResize);
            // Call once to set initial width
            handleResize();
            return () => {
                // Cleanup the event listener
                window.removeEventListener("resize", handleResize);
            };
        }
    }, []);

    useEffect(() => {
        if (screenWidth <= 1023) {
            setText(_MOBILEtext);
            setLogoWidth("50px");
            setLogoHeight("50px");
        } else {
            setText(_DESKTOPtext);
            setLogoWidth("80px");
            setLogoHeight("80px");
        }
    }, [screenWidth]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("userLanguage", language);
        }
    }, [language]);

    /* Add all variables to appContext to sync them in the entire application */
    const appContext = {
        language,
        setLanguage,
        text,
        logoWidth,
        logoHeight,
    };

    return (
        <MyContext.Provider value={appContext}>{children}</MyContext.Provider>
    );
};

export default MyContext;

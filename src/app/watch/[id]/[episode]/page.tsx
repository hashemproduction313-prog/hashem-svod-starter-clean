// src/app/watch/[id]/[episode]/page.tsx
import WatchClient from "../WatchClient";

type EpisodeData = {
  num: number;
  title: string;
  shortSummary: string;
  duration: string;
  playbackId: string; // <-- Playback ID (pas Asset ID)
  isPremium: boolean;
  thumb?: string; // <-- chemin public
};

type SeriesData = {
  id: number;
  title: string;
  episodes: EpisodeData[];
};

const SERIES_DATA: Record<number, SeriesData> = {
  /** ===== Série 1 : Le Lever ===== */
  1: {
    id: 1,
    title: "Le Lever",
    episodes: [
      {
        num: 1,
        title: "Épisode 1 : Le Salut dans les Religions",
        shortSummary:
          "Alors que le monde s’enfonce dans l’obscurité prophétisée par toutes les grandes religions, trois voix s’élèvent pour poser une question bouleversante : et si le salut ne résidait pas dans les rites... mais dans la reconnaissance d’un homme ?",
        duration: "43:41",
        playbackId: "zoYyA02Zywh01xYeVqM2JVlPzvJh8Wqlu1BWcSRqnXkRY",
        isPremium: false,
        thumb: "/thumbs/thumbs_9-1.jpg",
      },
      {
        num: 2,
        title: "Épisode 2 : La Religion de tous les Prophètes",
        shortSummary:
          "Depuis Adam jusqu’à Mohammed (pslsf), Dieu a toujours envoyé un guide pour transmettre Sa véritable religion. Cette voie divine n’a jamais été limitée aux rituels, mais repose sur la soumission au représentant de Dieu sur Terre. Aujourd’hui encore, cette guidance continue – mais saurez-vous reconnaître le guide de votre temps ?",
        duration: "44:17",
        playbackId: "ZSPwEZOkIEh01qfSdA2rPWS2wCi2bXo6bmXU2cxsPCKE",
        isPremium: false,
        thumb: "/thumbs/thumbs_9-2.jpg",
      },
      {
        num: 3,
        title: "Épisode 3 : Comment reconnaître l'Imam Al Mahdi (de Lui est la Paix)",
        shortSummary: "",
        duration: "44:08",
        playbackId: "2BF00Zuj447to7eUfjy3wMa02mzpyiOWTCX3wRqa1f2z8",
        isPremium: false,
        thumb: "/thumbs/thumbs_9-3.jpg",
      },
      {
        num: 4,
        title: "Épisode 4 : Les Signes de la Fin des Temps",
        shortSummary: "",
        duration: "45:17",
        playbackId: "FKC6K1JTJQcjagc63y8801okqd01jI1gc8sWHV8Qt9tEw",
        isPremium: false,
        thumb: "/thumbs/thumbs_9-4.jpg",
      },
      {
        num: 5,
        title: "Épisode 5 : Le jour du Jugement",
        shortSummary: "",
        duration: "45:46",
        playbackId: "5kfnUq1QA8WPMRE236AVbujPIkK6U02mH25LjzqdEYR8",
        isPremium: false,
        thumb: "/thumbs/thumbs_9-5.jpg",
      },
      {
        num: 6,
        title: "Épisode 6 : L'épreuve de l'Antéchrist Dajjal",
        shortSummary: "",
        duration: "45:21",
        playbackId: "KVgkymmoU224ANSJJxvND5iVHl02GP6Wp01302IgDr9UE4",
        isPremium: false,
        thumb: "/thumbs/thumbs_9-6.jpg",
      },
      {
        num: 7,
        title:
          "Épisode 7 : Nous réagissons aux Cheikhs de la Hawza Universitaire de Najaf",
        shortSummary: "",
        duration: "47:21",
        playbackId: "3fQ6aEPg01UCasWxZQbn01sLD4aMLoK2BsbZnMXL1QU88",
        isPremium: false,
        thumb: "/thumbs/thumbs_9-7.jpg",
      },
      {
        num: 8,
        title:
          "Épisode 8 : Les Ennemis Jurés de l'Imam Al Mahdi (de Lui est Paix)",
        shortSummary: "",
        duration: "47:15",
        playbackId: "Vi4bvJMZathneiBCBWN2YGBFqwqfT4TQfUZLqHau02hI",
        isPremium: false,
        thumb: "/thumbs/thumbs_9-8.jpg",
      },
      {
        num: 9,
        title:
          "Épisode 9 : L'Imam Al Mahdi (de Lui est la Paix) est Apparu",
        shortSummary: "",
        duration: "47:06",
        playbackId:
          "h01o48BPaYbP02AXbJZEi66iQwSZOXkOykjawyWFLN1I00",
        isPremium: false,
        thumb: "/thumbs/thumbs_9-9.jpg",
      },
      {
        num: 10,
        title:
          "Épisode 10 : Ahmed Al Hassan Al Yamani (de Lui est la Paix)",
        shortSummary: "",
        duration: "47:17",
        playbackId: "5a01t4PCZeCd4PFTL4ngBCDx8vhiVHTv3M7cV6oAYoMY",
        isPremium: false,
        thumb: "/thumbs/thumbs_9-10.jpg",
      },
      {
        num: 11,
        title:
          "Épisode 11 : Qui est Abdullah Hashem (de Lui est la Paix) ?",
        shortSummary: "",
        duration: "47:08",
        playbackId:
          "n429N01xWZ2yW3PBrw01hLJtRVkbmJ3siknW02boQEWXVw",
        isPremium: false,
        thumb: "/thumbs/thumbs_9-11.jpg",
      },
      {
        num: 12,
        title:
          "Épisode 12 : Abdullah Hashem (de Lui est la Paix) est le Qa'im",
        shortSummary: "",
        duration: "51:28",
        playbackId:
          "01yjaMLQPZOCEOMPAM00XTO55007Ml9MJR202CdHA200omy8",
        isPremium: false,
        thumb: "/thumbs/thumbs_9-12.jpg",
      },
      {
        num: 13,
        title: "Épisode 13 : Le Jardin d'Eden",
        shortSummary: "",
        duration: "47:40",
        playbackId: "BmtkzEnu3XNlktqGPflIVTiom00e177b9bT995CQfaLk",
        isPremium: false,
        thumb: "/thumbs/thumbs_9-13.jpg",
      },
      {
        num: 14,
        title: "Épisode 14 : la Gouvernance de Satan",
        shortSummary: "",
        duration: "47:29",
        playbackId: "ORCeAYHRJz36cs6ML1pdZkUYSi4MCne16w8P8rb02q8w",
        isPremium: false,
        thumb: "/thumbs/thumbs_9-14.jpg",
      },
      {
        num: 15,
        title:
          "Épisode 15 : les compagnons du Mahdi (de Lui est la Paix)",
        shortSummary: "",
        duration: "48:12",
        playbackId:
          "yE01ZIfPyWloP00Jt8DYWHA3Sya2LTgehgpYvDz01GSBVM",
        isPremium: false,
        thumb: "/thumbs/thumbs_9-15.jpg",
      },
      {
        num: 16,
        title:
          "Épisode 16 : Pourquoi Dieu permet-il la souffrance dans le monde ?",
        shortSummary: "",
        duration: "47:05",
        playbackId:
          "M022W8OMMls9QWJ8Yvp014CDKlqMSyDU00p7QDfwbD7Yks",
        isPremium: false,
        thumb: "/thumbs/thumbs_9-16.jpg",
      },
      {
        num: 17,
        title: "Épisode 17 : les différents degrés du Croyant",
        shortSummary: "",
        duration: "46:53",
        playbackId:
          "vpe1E4F7w01iGpkcdw01BMViP2RYTOOFyDskXVedeFkWc",
        isPremium: false,
        thumb: "/thumbs/thumbs_9-17.jpg",
      },
      {
        num: 18,
        title:
          "Épisode 18 : La Première Création d'Allah : Muhammad (pslsf)",
        shortSummary: "",
        duration: "46:33",
        playbackId: "hvBYGB5dqMlv1rhTC9oZwsVvsWWGYrnCr5iMz5NhCIc",
        isPremium: false,
        thumb: "/thumbs/thumbs_9-18.jpg",
      },
      {
        num: 19,
        title: "Épisode 19 : Seul Allah est Lumière sans Ténèbres",
        shortSummary: "",
        duration: "47:03",
        playbackId:
          "zZdAB02b9PUznllNZ013Ma0001cGF202G9FqAYMdyJQoQ00es",
        isPremium: false,
        thumb: "/thumbs/thumbs_9-19.jpg",
      },
      {
        num: 20,
        title: "Épisode 20 : la plus Grande Idole, l'Ego",
        shortSummary: "",
        duration: "47:00",
        playbackId: "KDfggEPorfEZRFsm9fuiaWTLhhbCIQ2FzYVPjGPoLew",
        isPremium: false,
        thumb: "/thumbs/thumbs_9-20.jpg",
      },
      {
        num: 21,
        title: "Épisode 21 : Ils t'interrogent au sujet de l'Âme",
        shortSummary: "",
        duration: "45:34",
        playbackId: "2R9iIQ301G7SI6Nlh4C01R5NgMEgc9oAF8jDUIaFboxOc",
        isPremium: false,
        thumb: "/thumbs/thumbs_9-21.jpg",
      },
      {
        num: 22,
        title:
          "Épisode 22 : Rajaa, le retour des Âmes dans ce monde",
        shortSummary: "",
        duration: "46:10",
        playbackId:
          "WmTbMjbAmrm1yo4nS4gYu01d22R1JC3Gd01QWq9EDY86E",
        isPremium: false,
        thumb: "/thumbs/thumbs_9-22.jpg",
      },
      {
        num: 23,
        title: "Épisode 23 : l'Enfer est-il réel ?",
        shortSummary: "",
        duration: "47:43",
        playbackId:
          "rvsHynsI7DQRetP901QrMRhPF017jqbeZMzpug01M9mLB8",
        isPremium: false,
        thumb: "/thumbs/thumbs_9-23.jpg",
      },
      {
        num: 24,
        title:
          "Épisode 24 : La Porte de la Cité de toutes les Cciences",
        shortSummary: "",
        duration: "47:26",
        playbackId:
          "tWmn02Zc02mHww85KRZUMKqOZD27dyhH00zDdMmvYs5LyU",
        isPremium: false,
        thumb: "/thumbs/thumbs_9-24.jpg",
      },

      // BONUS (101–104)
      {
        num: 101,
        title: "Bonus 1 — Trouver le bon Leader",
        shortSummary: "",
        duration: "00:00",
        playbackId:
          "zPEk00rNnh84KIHrWWwdFduE01JU8o2hAjwdBu702dvr1k",
        isPremium: false,
      },
      {
        num: 102,
        title: "Bonus 2 — L’Appel à la Suprématie d’Allah",
        shortSummary: "",
        duration: "00:00",
        playbackId: "VIrB8yrj19h01MacpYYJKkrzH00My8rVH7FaGJO3zbrsM",
        isPremium: false,
      },
      {
        num: 103,
        title: "Bonus 3 — Le Rassemblement",
        shortSummary: "",
        duration: "00:00",
        playbackId: "ZG1NtrG9nfJwJMsl01n9KmzJ3kMFgyArNx5YZA5V5Kes",
        isPremium: false,
      },
      {
        num: 104,
        title: "Bonus 4 — Prêter Allégeance au Mahdi",
        shortSummary: "",
        duration: "00:00",
        playbackId: "7qw5CUlQjFhJaVH2Q8RiDkYFY0011SU92KWxp4TTkWgQ",
        isPremium: false,
      },
    ],
  },

  /** ===== Série 2 : Les Apôtres de l’Esprit Saint ===== */
  2: {
    id: 2,
    title: "Les Apôtres de l'Esprit Saint",
    episodes: [
      {
        num: 1,
        title: "Ep.01 | D’Adam au Messie : Un guide divin sur Terre",
        shortSummary:
          "Découvrez le rôle intemporel de l'Esprit Saint à travers les âges, de la création d'Adam jusqu’à son incarnation actuelle dans le Mahdi (psl). Un voyage spirituel profond entre révélation, continuité prophétique et vérité oubliée.",
        duration: "45:21",
        playbackId:
          "OHhQ01WCXw997WUX9s9T35zT018Y01003qaAK9zqYLrQbXM",
        isPremium: false,
        thumb: "/Les apotres de l'esprit saint/thumbs/thumbs8-1.jpg",
      },
      {
        num: 2,
        title:
          "Ép.02 | La Succession de Jésus : Quelles évidences Jésus a-il présenté ?",
        shortSummary:
          "Jésus n’était pas venu sans laisser de guide : il désigne Pierre comme son successeur et révèle le lien entre lumière divine et autorité. Un éclairage biblique sur la transmission de l’Esprit Saint.",
        duration: "47:44",
        playbackId:
          "VIrB8yrj19h01MacpYYJKkrzH00My8rVH7FaGJO3zbrsM",
        isPremium: false,
        thumb: "/Les apotres de l'esprit saint/thumbs/thumbs8-2.jpg",
      },
      {
        num: 3,
        title:
          "Ép.03 | Comment Distinguer les Prophètes de Dieu des Faux Prophètes",
        shortSummary:
          "Après le départ de Jésus, des imposteurs comme Paul et Simon Magus se sont imposés. Cet épisode dévoile les critères pour reconnaître un véritable prophète de Dieu à travers les âges.",
        duration: "41:34",
        playbackId:
          "YGhGaRrSA00fq01Npp00TcPozs1NPq9ANGiFKLjJ3wvWcY",
        isPremium: false,
        thumb: "/Les apotres de l'esprit saint/thumbs/thumbs8-3.jpg",
      },
      {
        num: 4,
        title: "Ep. 04 | Les marchands du temple",
        shortSummary:
          "À l’aide des Écritures, apprenez à identifier les vrais guides spirituels et à démasquer les trompeurs modernes. Un épisode essentiel pour discerner les bons fruits des arbres corrompus.",
        duration: "40:04",
        playbackId:
          "Wdbhi4Kd024vGR3NRfhc2UvI1M9yY02FSI2Hn01ZFDvKnk",
        isPremium: false,
        thumb: "/Les apotres de l'esprit saint/thumbs/thumbs8-4.jpg",
      },
      {
        num: 5,
        title: "Ep. 05 | La laïcité oppresse-t-elle Dieu?",
        shortSummary:
          "Jésus est venu établir le règne de Dieu, pas un pouvoir terrestre corrompu. Découvrez sa mission royale et son rejet des gouvernements humains.",
        duration: "37:15",
        playbackId:
          "XoQrRB3QmrqAUghgw01lK8SH29Vx01k1gjqHUO00fuZmdE",
        isPremium: false,
        thumb: "/Les apotres de l'esprit saint/thumbs/thumbs8-5.jpg",
      },
      {
        num: 6,
        title: "Ep. 06 | Rendez à César ce qui est à Dieu?",
        shortSummary:
          "Le message de Jésus a-t-il été détourné pour justifier les empires ? Ce chapitre dévoile comment le Royaume de Dieu fut réinterprété, souvent à des fins de domination.",
        duration: "38:01",
        playbackId: "8gKPAesXmo7XgYVcEy5VaV77xVEjXOFcZhh81aiLKyI",
        isPremium: false,
        thumb: "/Les apotres de l'esprit saint/thumbs/thumbs8-6.jpg",
      },
      {
        num: 7,
        title:
          "Ep. 07 | Jésus devait régner, pas mourir : Les Preuves Bibliques ignorées",
        shortSummary:
          "La foi suffit-elle vraiment pour être sauvé ? En comparant christianisme et spiritualités orientales, cet épisode redéfinit le salut à la lumière de la Septième Alliance.",
        duration: "45:52",
        playbackId:
          "9p02Ya01j6uurMlcdO3s2UWy02lUXojgrB00eivTFYwJkV4",
        isPremium: false,
        thumb: "/Les apotres de l'esprit saint/thumbs/thumbs8-7.jpg",
      },
      {
        num: 8,
        title: "Ep. 08 | Tous les chrétiens seront-ils sauvés?",
        shortSummary:
          "Un mot peut tout changer : que révèle le vrai sens du Royaume de Dieu dans les Écritures ? Redécouvrez la mission de Jésus sous un nouveau jour.",
        duration: "44:35",
        playbackId:
          "9p02Ya01j6uurMlcdO3s2UWy02lUXojgrB00eivTFYwJkV4",
        isPremium: false,
        thumb: "/Les apotres de l'esprit saint/thumbs/thumbs8-8.jpg",
      },
      {
        num: 9,
        title: "Ep. 09 | Qui est le peuple élu aujourd hui ?",
        shortSummary:
          "Entre démocratie humaine et gouvernance divine, quel est le vrai système de Dieu ? Un épisode explosif sur le Pape, la Nouvelle-Guinée, les inégalités en Afrique et le rôle prophétique du peuple élu.",
        duration: "43:46",
        playbackId:
          "qg9dEaHKZQc00n8LS01zonAeL01Lk4j4nIb7KbIApkqeNQ",
        isPremium: false,
        thumb: "/Les apotres de l'esprit saint/thumbs/thumbs8-9.jpg",
      },
      {
        num: 10,
        title: "Ep. 10 | Dieu sacrifierait-il Son Fils?",
        shortSummary:
          "Et si Dieu n’avait jamais voulu le sacrifice de Son Fils ? En revisitant la ligature d’Isaac, cette vidéo questionne le cœur de la doctrine chrétienne sur la crucifixion.",
        duration: "33:23",
        playbackId:
          "OGtUN01g4KfwD5Es95qQDE73Y2ZUBBR1ikhGy4i2e01DU",
        isPremium: false,
        thumb: "/Les apotres de l'esprit saint/thumbs/thumbs8-10.jpg",
      },
      {
        num: 11,
        title:
          "Ep. 11 | Le Signe de Jonas et le Sacrifice de Jésus",
        shortSummary:
          "Jésus est-il vraiment mort pour les péchés du monde ? À travers le signe de Jonas, cet épisode met en lumière les contradictions théologiques autour du salut chrétien.",
        duration: "37:41",
        playbackId:
          "bgBfZO257hnKzHtrpCIDioa7kJILdX200FUvur8V01O2s",
        isPremium: false,
        thumb: "/Les apotres de l'esprit saint/thumbs/thumbs8-11.jpg",
      },
      {
        num: 12,
        title:
          "Ep. 12 | La Bible écrite en Grec et L'Influence de Paul : Ce Que Vous Devez Savoir !",
        shortSummary:
          "La Bible moderne a-t-elle été falsifiée ? Découvrez l’influence de Paul, l’écart avec les enseignements originels de Jésus, et qui pourrait réellement être le Paraclet annoncé.",
        duration: "39:47",
        playbackId: "cFBRBpkRrkwuvuDGIjn8d8oNiw7I4B2QmYHznp9ETGc",
        isPremium: false,
        thumb: "/Les apotres de l'esprit saint/thumbs/thumbs8-12.jpg",
      },
      {
        num: 13,
        title:
          "Ep. 13 | Qui est vraiment le Paraclet ? Jésus, l'Esprit Saint ou un autre Prophète ?",
        shortSummary:
          "Qui est vraiment le Paraclet annoncé par Jésus : l’Esprit Saint ou un prophète à venir ? Cette enquête spirituelle explore les textes bibliques, islamiques et apocryphes pour révéler une vérité cachée derrière des siècles de manipulations religieuses.",
        duration: "42:35",
        playbackId:
          "3F3Vh8C3suOytFOnv6wWTef37R02o1l4Ilda009vsh01xM",
        isPremium: false,
        thumb: "/Les apotres de l'esprit saint/thumbs/thumbs8-13.jpg",
      },
      {
        num: 14,
        title:
          "Ep. 14 | Le Paraclet : La beauté de l'islam vu par des anciens chrétiens",
        shortSummary:
          "Et si le Paraclet annoncé par Jésus unissait plutôt qu’il ne divisait ? Cet épisode dévoile les liens profonds entre Jésus, Muhammad et les Ahlul Bayt, révélant la véritable nature du Saint-Esprit et la mission des guides divins à la fin des temps.",
        duration: "40:56",
        playbackId:
          "fj5vMl8b00QpUt019JjF9tS4ZMleUXJzZFiSwP1wSed0000",
        isPremium: false,
        thumb: "/Les apotres de l'esprit saint/thumbs/thumbs8-14.jpg",
      },
      {
        num: 15,
        title:
          "Ep. 15 | La Réincarnation dans la Bible : Vous Devez le Savoir !",
        shortSummary:
          "La réincarnation n’est pas qu’un concept oriental : elle se cache aussi dans les Écritures bibliques. Découvrez comment Jean-Baptiste, Élie et les prophètes témoignent de ce mystère spirituel longtemps dissimulé par les traditions religieuses.",
        duration: "39:53",
        playbackId:
          "hj1rteaD7mYPT5qhYOOUkcSu7Q5Sjg3InqQTKGs01ETM",
        isPremium: false,
        thumb: "/Les apotres de l'esprit saint/thumbs/thumbs8-15.jpg",
      },
      {
        num: 16,
        title: "Ep. 16 | La réincarnation dans le christianisme ?",
        shortSummary:
          "De la Torah au Coran, l’histoire des textes sacrés est aussi celle des écrits effacés et censurés. Cet épisode dévoile comment les autorités religieuses ont limité l’accès à la vérité divine et pourquoi les écrits rejetés recèlent souvent la lumière la plus pure.",
        duration: "32:05",
        playbackId:
          "5eLY2fAABEHxAevvN02h6wTV202sXv2l9e01Vt66kAu00wY",
        isPremium: false,
        thumb: "/Les apotres de l'esprit saint/thumbs/thumbs8-16.jpg",
      },
      {
        num: 17,
        title: "Ep. 17  | Le Royaume de Dieu: PLUS PROCHE QUE JAMAIS!",
        shortSummary:
          "Le Royaume de Dieu n’est pas un rêve lointain : il est déjà ici, mais invisible aux yeux du monde. Abdullah Hashem Aba Al-Sadiq révèle la réalité de l’État de Justice Divine et la transformation intérieure nécessaire pour y entrer.",
        duration: "30:49",
        playbackId:
          "aThb6KjgAisdxPuuP5dV1yP02lSEdsYFK01hHdspkm00Bk",
        isPremium: false,
        thumb: "/Les apotres de l'esprit saint/thumbs/thumbs8-17.jpg",
      },
      {
        num: 18,
        title:
          "Ep. 18 | Rien ne peut fonctionner sans un leader désigné par DIEU",
        shortSummary:
          "Des rues du Caire aux prophéties anciennes, cet épisode explore la révolution égyptienne et la faillite des mouvements sans guide divin. Une leçon puissante sur la nécessité d’un dirigeant choisi par Dieu pour établir la justice véritable.",
        duration: "45:54",
        playbackId:
          "lWE1Df7xFIdJhFN9jQ6neaja02LAy6aMHUXJFWiUYNtA",
        isPremium: false,
        thumb: "/Les apotres de l'esprit saint/thumbs/thumbs8-18.jpg",
      },
      {
        num: 19,
        title:
          "Ep. 19 | Constat après une année de massacres au Moyen Orient: pas de guidance divine!",
        shortSummary:
          "Au-delà des bombes et des discours politiques, la guerre au Moyen-Orient cache une lutte spirituelle entre vérité et illusion. Découvrez comment les puissances terrestres manipulent la foi pour servir leurs intérêts, et pourquoi les Écritures appellent à rejeter le -moindre mal-.",
        duration: "45:34",
        playbackId:
          "B1IvfBTUll6sejMW2017di2600TS3837IzZqdxQrYylNM",
        isPremium: false,
        thumb: "/Les apotres de l'esprit saint/thumbs/thumbs8-19.jpg",
      },
      {
        num: 20,
        title: "Ep. 20 | Jésus est-il Gabriel ?",
        shortSummary:
          "Et si Jésus et Gabriel partageaient une même essence spirituelle ? Cet épisode fascinant révèle le lien sacré entre l’ange messager et le Messie, à la lumière des textes bibliques, apocryphes et des enseignements d’Abdullah Hashem, le Qaim de la famille de Muhammad (psl).",
        duration: "45:53",
        playbackId:
          "Jmxh1S8lBw9Rv43VAuw23Jy5B4aYgt4KJnEyQsNDL02w",
        isPremium: false,
        thumb: "/Les apotres de l'esprit saint/thumbs/thumbs8-20.jpg",
      },
      {
        num: 21,
        title: "Ep. 21 | Qui a été crucifié à la place de Jésus?",
        shortSummary:
          "Une enquête bouleversante sur la crucifixion de Jésus : a-t-il vraiment été crucifié ou a-t-il échappé à la mort ? Découvrez les révélations des évangiles gnostiques, les mystères de Gethsémani et les secrets spirituels du grand transfert de corps.",
        duration: "44:05",
        playbackId:
          "e4ddgaxTQUnmkwfWwF4ZRtpG3t3DmGgffRewQbpiHKc",
        isPremium: false,
        thumb: "/Les apotres de l'esprit saint/thumbs/thumbs8-21.jpg",
      },
      {
        num: 22,
        title:
          "Ep. 22 | Le Prophète Mohammed fût le représentant de Christ",
        shortSummary:
          "Et si la venue du Prophète Mohammed avait été prophétisée dans la Torah et les Évangiles ? Plongez dans une exploration unique des textes sacrés qui dévoilent l'identité du Paraclet et son lien avec la mission de l'Islam.",
        duration: "41:13",
        playbackId:
          "1NbVkmfbhROX7uIvoGdIVcGfcwR6qh7R6V8Gm2hsQU00",
        isPremium: false,
        thumb: "/Les apotres de l'esprit saint/thumbs/thumbs8-22.jpg",
      },
      {
        num: 23,
        title: "Ep. 23 | Qui est meilleur, Jésus ou Mohammed?",
        shortSummary:
          "Redécouvrez le Prophète Mohammed sous un jour méconnu : un homme de paix, de justice et de compassion. Un message universel d’amour, souvent mal compris, remis dans son contexte spirituel et historique.",
        duration: "43:26",
        playbackId:
          "g5nhyJzldRN3k6d4nRZ01YmOzK8iX47zcLN013eYaSUo4",
        isPremium: false,
        thumb: "/Les apotres de l'esprit saint/thumbs/thumbs8-23.jpg",
      },
      {
        num: 24,
        title: "Ep. 24 | Satan Créateur de l'Univers  - Partie 1",
        shortSummary:
          "Le monde matériel a-t-il été façonné par Dieu… ou par Satan ? Une plongée saisissante dans les textes apocryphes et les révélations du Mahdi pour comprendre la véritable origine de notre réalité.",
        duration: "34:13",
        playbackId:
          "WoL1wRGP01MIL01pJ402JEtqOsKCzueg6UeItuTPM7NAxE",
        isPremium: false,
        thumb: "/Les apotres de l'esprit saint/thumbs/thumbs8-24.jpg",
      },
      {
        num: 25,
        title: "Ep. 25 | Satan, Créateur de l'Univers - Partie 2",
        shortSummary:
          "Suite de l’enquête sur la création du monde matériel, où les enseignements du Mahdi révèlent ce que les religions ont longtemps gardé secret. Une discussion brûlante sur la vérité derrière la matière et le plan divin.",
        duration: "39:28",
        playbackId:
          "CGZkOpANeUgxLtgauoZbYX3seSSP9KxdtTIaQ8MRkFQ",
        isPremium: false,
        thumb: "/Les apotres de l'esprit saint/thumbs/thumbs8-25.jpg",
      },
      {
        num: 26,
        title: "Ep. 26 | Jésus l'Épée d'Allah",
        shortSummary:
          "Analyse croisée des enseignements de Jésus et Muhammad : deux prophètes, un même message de paix et d’humanité. Découvrez ce qui les unit au-delà des différences religieuses.",
        duration: "43:47",
        playbackId: "5p13kUxYTMW6tvgS13BqJIiR9m3Tf6wLPmpftSFvFpM",
        isPremium: false,
        thumb: "/Les apotres de l'esprit saint/thumbs/thumbs8-26.jpg",
      },
      {
        num: 27,
        title:
          "Ep. 27 | Les Alliances Divines et les Conséquences de l’Injustice",
        shortSummary:
          "Explorez les pactes successifs entre Dieu et l’humanité, de Jésus à Muhammad, jusqu’à la dernière alliance éternelle. Une révélation spirituelle sur les châtiments divins et la trahison des hommes.",
        duration: "45:25",
        playbackId:
          "cFru5i00zu9CDgJdrXb01yC7G7M01wDOv02Nberc86lv6Ww",
        isPremium: false,
        thumb: "/Les apotres de l'esprit saint/thumbs/thumbs8-27.jpg",
      },
      {
        num: 28,
        title:
          "Ep. 28 | L'héritage du Prophète détruit par les musulmans",
        shortSummary:
          "Plongée dans la destruction de la sixième alliance par le peuple musulman. Comprenez les conséquences spirituelles de cette trahison et l'appel urgent à revenir à la vérité.",
        duration: "40:58",
        playbackId:
          "cFru5i00zu9CDgJdrXb01yC7G7M01wDOv02Nberc86lv6Ww",
        isPremium: false,
        thumb: "/Les apotres de l'esprit saint/thumbs/thumbs8-28.jpg",
      },
      {
        num: 29,
        title: "Ep. 29 | Jésus, Le Voyageur",
        shortSummary:
          "Pourquoi Jésus a-t-il tant voyagé ? Une réponse révélée à travers les Évangiles, explorant la mission mobile du Messie et l’appel à marcher avec lui jusqu’à l'honneur divin.",
        duration: "35:19",
        playbackId:
          "eyvacgR5b6b2gzzGsPPbLPfJc8bmZUPdIwS1ynnQz1g",
        isPremium: false,
        thumb: "/Les apotres de l'esprit saint/thumbs/thumbs8-29.jpg",
      },
      {
        num: 30,
        title:
          "Ep. 30 | Message important pour les femmes qui veulent plaire à Dieu - La vérité sur le voile.",
        shortSummary:
          "Le voile est-il une prescription divine ou une construction humaine ? Un regard croisé sur le judaïsme, le christianisme et l’islam qui bouscule les idées reçues sur la place de la femme.",
        duration: "42:02",
        playbackId:
          "Ko8EKRW2fXF5pingJlyXBzZ7R6cQElMVVcW6fkXXQuQ",
        isPremium: false,
        thumb: "/Les apotres de l'esprit saint/thumbs/thumbs8-30.jpg",
      },
      {
        num: 31,
        title: "Ep. 31| LES ÉTOILES SONT DES ÂMES",
        shortSummary:
          "Et si les étoiles guidaient plus que les navigateurs ? Découvrez comment l’astrologie sacrée a révélé la naissance de Jésus, et ce que les corps célestes disent sur les envoyés de Dieu.",
        duration: "35:24",
        playbackId:
          "SfYBW77ydKa600jZCWV4AXO8IqP01m3gD1Dbusbr1kvlM",
        isPremium: false,
        thumb: "/Les apotres de l'esprit saint/thumbs/thumbs8-31.jpg",
      },
      {
        num: 32,
        title: "Ep.32 | Questions - Réponses",
        shortSummary:
          "Les Apôtres de l'Esprit Saint répondent à vos questions avec les paroles du Mahdi. Une rencontre authentique entre foi, doute et vérité spirituelle.",
        duration: "46:21",
        playbackId:
          "yXcYHtV9s3FGfBsiX57JLfeAcfCgycwXVT86a7aV67k",
        isPremium: false,
        thumb: "/Les apotres de l'esprit saint/thumbs/thumbs8-32.jpg",
      },
      {
        num: 33,
        title:
          "Ep. 33 | L'histoire et Sa Corruption par les Puissants",
        shortSummary:
          "Comment les empires ont-ils réécrit l’Histoire spirituelle ? Ce chapitre dévoile la manipulation de l’Église, le rôle trouble de Paul et les vérités cachées sur les premiers disciples.",
        duration: "44:14",
        playbackId:
          "VKrlCojeU8gmxqfLLcQkw600b5FQu1dmvC1Lgx3sLOBY",
        isPremium: false,
        thumb: "/Les apotres de l'esprit saint/thumbs/thumbs8-33.jpg",
      },
      {
        num: 34,
        title:
          "Ep. 34 | Paul, Le Faux Apôtre De Jésus ?",
        shortSummary:
          "Paul a-t-il vraiment été inspiré ou a-t-il imposé une nouvelle religion ? Analyse spirituelle et historique d’un personnage controversé du christianisme primitif.",
        duration: "45:33",
        playbackId:
          "02mfjELQ2C2WhPYnK2lGEq8m6aTx1fr003n275GdQS9KE",
        isPremium: false,
        thumb: "/Les apotres de l'esprit saint/thumbs/thumbs8-34.jpg",
      },
      {
        num: 35,
        title:
          "Ep. 35 | Jésus démasque Paul dans l'Apocalypse - Preuves Eschatologiques",
        shortSummary:
          "Jésus lui-même aurait-il dénoncé Paul dans l’Apocalypse ? Une révélation choc, verset après verset, qui pourrait changer votre perception du christianisme pour toujours.",
        duration: "41:42",
        playbackId:
          "WQSSyTF005juB3ZuXT024hNx2R9H13u1TcLLWge3lg01fo",
        isPremium: false,
        thumb: "/Les apotres de l'esprit saint/thumbs/thumbs8-35.jpg",
      },
      {
        num: 36,
        title:
          "Ep. 36 | Réponse à @frerePaulAdrien - Islam VS Christianisme: Malentendus",
        shortSummary:
          "Islam et christianisme partagent une même racine, mais ont été altérés par l’homme. Cet épisode révèle que seul l’envoyé de Dieu aujourd’hui peut restaurer le vrai message.",
        duration: "42:11",
        playbackId:
          "7SDiF7VwdlZFLA01mqp5idH6sWc86AQRwMR00ypTrJ9e8",
        isPremium: false,
        thumb: "/Les apotres de l'esprit saint/thumbs/thumbs8-36.jpg",
      },
      {
        num: 37,
        title:
          "Ep. 37 | Réponse à @frerePaulAdrien 2/2 - Islam & Christianisme unis dans la vérité",
        shortSummary:
          "Une réponse tranchante à un prêtre populaire : mariage, laïcité, clergé… Que dit vraiment Dieu sur la place de la religion dans la société ? Les faux discours sont démasqués.",
        duration: "45:30",
        playbackId:
          "T02smqDbhODbDc3ruxhHN4ecACfFErQHiKqmdK01JOLPs",
        isPremium: false,
        thumb: "/Les apotres de l'esprit saint/thumbs/thumbs8-37.jpg",
      },
      {
        num: 38,
        title:
          "Ep. 38 | Paul le Romain Pharisien: un apôtre autoproclamé ?",
        shortSummary:
          "Était-il vraiment disciple… ou caméléon opportuniste ? Découvrez les contradictions, les mensonges et les intérêts politiques derrière l’apôtre le plus influent du Nouveau Testament.",
        duration: "45:41",
        playbackId:
          "V5NRvw35JAw9hAd02101p3XwSUPBRqqiVZsK3NhvUYAUg",
        isPremium: false,
        thumb: "/Les apotres de l'esprit saint/thumbs/thumbs8-38.jpg",
      },
      {
        num: 39,
        title:
          "EP. 39 | LA PREUVE ULTIME QUE MOHAMMED EST LE PARACLET BIBLIQUE",
        shortSummary:
          "Après des siècles de mystère, l'identité du Paraclet annoncé par Jésus est enfin dévoilée. Les preuves bibliques et logiques mènent à une seule conclusion : il s'agit du Prophète Mohammed.",
        duration: "26:40",
        playbackId:
          "A01CchSDijemoxiJdCzFtPhtdKMfnI83oJ01tQYFOXNrU",
        isPremium: false,
        thumb: "/Les apotres de l'esprit saint/thumbs/thumbs8-39.jpg",
      },
      {
        num: 40,
        title: "Ep. 40 | Le Saint Esprit : Toute la Vérité !",
        shortSummary:
          "Dernier épisode choc : le Saint-Esprit n’est pas une force vague, mais une réalité vivante et humaine. Jésus, Mohammed et les Ahlul Bayt forment ensemble ce souffle divin éternel.",
        duration: "40:11",
        playbackId:
          "FHJvdM83VWG01gDJTmn4wmg01WsqGcblCxJppRZlakpYI",
        isPremium: false,
        thumb: "/Les apotres de l'esprit saint/thumbs/thumbs8-40.jpg",
      },

      // BONUS
      {
        num: 101,
        title: "Bonus 1 — Un espoir pour ce monde en perdition",
        shortSummary: "",
        duration: "43:10",
        playbackId:
          "3TipVUld00O02ELaD01lpIzydaNEws5s201mANgYQPBDiB00",
        isPremium: false,
      },
      {
        num: 102,
        title: "Bonus 2 — Une humanité réunie par un leader divin",
        shortSummary: "",
        duration: "43:46",
        playbackId: "FZImL1kNv8gGVYtFyCVq8p3GI5Ofv6GU2U2Jks9uFbU",
        isPremium: false,
      },
      {
        num: 103,
        title:
          "Bonus 3 — Une humanité réunie par un leader divin - Une alliance nouvelle !",
        shortSummary: "",
        duration: "41:34",
        playbackId:
          "YGhGaRrSA00fq01Npp00TcPozs1NPq9ANGiFKLjJ3wvWcY",
        isPremium: false,
      },
      {
        num: 104,
        title: "Bonus 4 — Une nouvelle Alliance avec Dieu!",
        shortSummary: "",
        duration: "40:56",
        playbackId:
          "ETdKAGdkl01iJX01F7Ev3ZrHsXTtsG01eQhLZEfGapwfSA",
        isPremium: false,
      },
      {
        num: 105,
        title: "Bonus 5 — Créer une communauté unie dans la foi",
        shortSummary: "",
        duration: "44:54",
        playbackId:
          "H1mDXa4jAq5TeJBUeF5WuqchXLFGoRfiZPQc500Q01zj4",
        isPremium: false,
      },
      {
        num: 106,
        title:
          "Bonus 6 — La communauté divine : la clé de notre survie",
        shortSummary: "",
        duration: "42:15",
        playbackId:
          "C02Pvmy5003nYxn9SQi4d8p4ZFwPZFJ00N1KCk00TBHTxiY",
        isPremium: false,
      },
      {
        num: 107,
        title:
          "Bonus 7 — Les Prophéties du Mahdi, leader divin contre la tyrannie et l'égarement",
        shortSummary: "",
        duration: "43:06",
        playbackId:
          "ZSEBS9Cw6BqwgGyqX008AH4BM7ZkFbY02aQZCwqhaWBp8",
        isPremium: false,
      },
    ],
  },

  /** ===== Série 3 : Le Sermon (10 épisodes) ===== */
  3: {
    id: 3,
    title: "Le Sermon",
    episodes: [
      {
        num: 1,
        title: "Sermon de l'Invitation à la 7ème Alliance",
        shortSummary:
          "Le Mahdi appelle l’humanité à entrer dans une nouvelle alliance avec Dieu, non plus limitée à un peuple ou une époque, mais ouverte à toutes les âmes justes. Face à l’effondrement moral, spirituel et écologique du monde, ce pacte est la dernière chance pour établir un État de Justice Divine sur Terre. Il invite les pauvres, les opprimés et les pécheurs à se lever, à se purifier, et à devenir le nouveau peuple élu de Dieu par la soumission à Son Esprit vivant.",
        duration: "35:33",
        playbackId:
          "e5272TCdV01FvVL5emTbk00tNrxVbxa3b02yrDYh00crEgA",
        isPremium: false,
        thumb: "/Le Sermon/thumbs/thumbs1-1.jpg",
      },
      {
        num: 2,
        title: "Le Qâ’im Aba Al-Sadiq (as) dénonce les leaders arabes",
        shortSummary:
          "Le Mahdi, Aba Al-Sadiq (as), condamne fermement les dirigeants arabes qu’il qualifie de traîtres et d’opposants à Dieu, usurpant le pouvoir sans autorité divine. Il les tient responsables de la pauvreté, de l’oppression et de l’ignorance des peuples musulmans, tout en dénonçant aussi les savants corrompus complices de ces régimes. Ce sermon est un appel à se dissocier de ces tyrans et à rejoindre l’Alliance de Dieu pour établir un véritable État de Justice Divine sur Terre.",
        duration: "23:27",
        playbackId: "01J01ETF9MAvaWFJ2PklsEeeb44RTPsBNHSkag01IdoeY8",
        isPremium: false,
        thumb: "/Le Sermon/thumbs/thumbs1-2.jpg",
      },
      {
        num: 3,
        title: "Sermon de la Clarification — Le Messager de l’Imam Mahdi",
        shortSummary:
          "Dans ce sermon, Abdullah As-Sadiq affirme être le « Abdullah » mentionné dans le testament du Prophète Mohammed, désigné comme successeur légitime et messager de l’Imam Mahdi. Il expose la rupture répétée par l’humanité de toutes les alliances divines à cause du rejet des dirigeants nommés par Dieu, et annonce la venue de la 7ᵉ et dernière Alliance. Enfin, il appelle les croyants du monde entier à reconnaître l’autorité divine, à soutenir l’appel du Mahdi et à se lever pacifiquement pour affirmer leur foi malgré la persécution.",
        duration: "30:19",
        playbackId:
          "IVBxCWEdDs5mKKv8PlOELl4wR02Vd02gV2R69Rl35KFFk",
        isPremium: false,
        thumb: "/Le Sermon/thumbs/thumbs1-3.jpg",
      },
      {
        num: 4,
        title:
          "Sermon du 10ᵉ Anniversaire de l'Apparition du Mahdi Aba al-Sadiq (a.s)",
        shortSummary:
          "Dix ans après la réalisation d'une prophétie ancienne, Abdullah se lève pour réaffirmer sa mission divine en tant que successeur du Mahdi, porteur du testament du Prophète Mohammed. Face à l’oppression mondiale, il appelle les croyants à s’unir et à établir l’État de Justice Divine sur Terre, guidés par la bannière de la vérité. Ce discours mêle foi, résistance et renaissance spirituelle pour éveiller un peuple en quête de paix et de justice.",
        duration: "40:03",
        playbackId:
          "xsv9Pd7KlxM3Q2gTIegwH6gtX00IEvTRRadJS334sWVc",
        isPremium: false,
        thumb: "/Le Sermon/thumbs/thumbs1-4.jpg",
      },
      {
        num: 5,
        title: "Discours du Qaʾim Aba Al-Sadiq sur les Martyrs",
        shortSummary:
          "Dans un hommage bouleversant, Aba Al-Sadiq dévoile les histoires tragiques de jeunes croyants assassinés pour leur foi en la vérité divine. À travers les larmes et la colère, il révèle une persécution mondiale contre les partisans du Mahdi, qui se poursuit depuis 1400 ans. Mais au milieu de cette obscurité, une lumière s’élève : celle d’une communauté unie, prête à faire triompher la justice et l’allégeance à Dieu.",
        duration: "32:00",
        playbackId:
          "vNaCq00evyzOaFP8XJlzoB8tqJV00IHXdQQv022N3EsY3o",
        isPremium: false,
        thumb: "/Le Sermon/thumbs/thumbs1-5.jpg",
      },
      {
        num: 6,
        title: "Sermon sur l'Antéchrist",
        shortSummary:
          "Et si l’Antéchrist n’était pas un homme, mais une nation entière ? Dans ce sermon percutant, Aba Al-Sadiq révèle une interprétation des textes sacrés : les États-Unis seraient la grande bête prophétique, incarnation moderne de l’iniquité et de la supercherie spirituelle. Un appel à discerner la vérité cachée derrière les symboles du pouvoir mondial et à choisir l’allégeance divine face à l’imposture.",
        duration: "14:13",
        playbackId:
          "Cfo2ZeZCE4QLz1Ha00IqZx4Rp0100fn7uC2q94O3Mtngfk",
        isPremium: false,
        thumb: "/Le Sermon/thumbs/thumbs1-6.jpg",
      },
      {
        num: 7,
        title:
          "Les Juifs, les Chrétiens et les Musulmans détruisent le Monde",
        shortSummary:
          "Dans ce plaidoyer, Aba Al-Sadiq appelle juifs, chrétiens et musulmans à se réunir pour sauver l’humanité d’un chaos religieux auto-infligé. Face à des institutions corrompues et des conflits sans fin, il propose un dialogue courageux, où l'amour et la raison prévalent sur les dogmes. Et si la paix commençait simplement autour d’une table, entre frères en humanité ?",
        duration: "38:28",
        playbackId: "IWZT6wsWAc5SZG5NXnOuJAn9iaDZejkV7c4PfhrlhEc",
        isPremium: false,
        thumb: "/Le Sermon/thumbs/thumbs1-7.jpg",
      },
      {
        num: 8,
        title: "Demandez à Dieu à mon propos",
        shortSummary:
          "Dans cet appel passionné, Abdouah s’adresse aux juifs, chrétiens et musulmans pour les inviter à se libérer des institutions religieuses corrompues qui ont déformé les messages des prophètes. Il affirme être le messager désigné de notre époque, envoyé pour restaurer la véritable religion de Dieu et instaurer une ère de paix et de justice. Il exhorte chacun à ne pas le suivre aveuglément, mais à interroger Dieu Lui-même avec sincérité, afin de reconnaître la vérité par un signe divin.",
        duration: "15:34",
        playbackId:
          "gmpj1St023IVc8RXlYnB00AenqnLvq4YKRACI9T400IN00U",
        isPremium: false,
        thumb: "/Le Sermon/thumbs/thumbs1-8.jpg",
      },
      {
        num: 9,
        title: "Un message spécial aux chrétiens du monde entier",
        shortSummary:
          "L’orateur affirme que Dieu confirme Ses messagers par des signes visibles et que l’effondrement des institutions religieuses actuelles montrerait leur fausseté. Il conteste la légitimité de la papauté et se présente comme le véritable successeur spirituel annoncé après Jésus, dans la lignée des prophètes. Il appelle enfin les chrétiens du monde entier à reconnaître son message et à revenir, selon lui, à la guidance authentique voulue par Dieu.",
        duration: "11:16",
        playbackId:
          "lbSbDwfPduLs3usYoRnzfDrqR7rp5PGv16DTVSuY364",
        isPremium: false,
        thumb: "/Le Sermon/thumbs/thumbs1-9.jpg",
      },
      {
        num: 10,
        title: "Le Mahdi veut la paix entre Israël et la Palestine",
        shortSummary:
          "Le Mahdi appelle Juifs et Arabes, tous descendants d’Abraham, à cesser la haine et la guerre au nom de leur héritage prophétique commun. Il propose une solution de paix durable fondée sur l’unité spirituelle, la justice divine et la reconnaissance de son autorité désignée par Dieu à travers le testament du Prophète Mohammed. Il invite les deux camps à construire ensemble un État de Justice Divine où tous vivront en sécurité, dans l’honneur et la prospérité.",
        duration: "18:53",
        playbackId:
          "YAciTdFMRcQhcVeq00sGJ9RYcA00ArGkJhtbPFZ679N02Y",
        isPremium: false,
        thumb: "/Le Sermon/thumbs/thumbs1-10.jpg",
      },
    ],
  },

  /** ===== Série 4 : Humanité 2.0 ===== */
  4: {
    id: 4,
    title: "Humanité 2.0",
    episodes: [
      {
        num: 1,
        title:
          "La Solution Spirituelle et Réaliste pour l'Humanité de la Fin des Temps - Ép. 1",
        shortSummary:
          "Dans un monde miné par l’injustice, la division et le chaos, une vérité divine refait surface à travers Aba Al-Sadiq (De Lui est la Paix), successeur désigné du Mahdi. Portant un message d’unité, de justice et de libération spirituelle, il appelle les enfants d’Abraham à s’unir autour d’un État de Justice Divine. Ce message bouleversant dévoile que la véritable solution pour l’humanité n’est ni politique, ni idéologique, mais prophétique.",
        duration: "1:42:28",
        playbackId: "Pui6UAQnynINFNzSxShsgZLuIQ01Z52faDHcS9OxkxPk",
        isPremium: false,
        thumb: "/Humanité 2.0/thumbs/thumbs2-1.jpg",
      },
      {
        num: 2,
        title: "Le Testament – Ou comment ne pas finir en Enfer  - Ep.2",
        shortSummary:
          "À la veille de sa mort, le Prophète Mohammed (psl) tente de transmettre un testament qui changera le destin de l’humanité — mais des figures historiques s’y opposent violemment. Cet épisode dévoile la trahison oubliée, les preuves scripturaires irréfutables, et le lien profond entre le testament et la guidance divine dans toutes les religions.",
        duration: "1:45:26",
        playbackId:
          "X1LvR02wTnLqhBZ9d14hbszHmMgMFrkyxR024c028QlV3E",
        isPremium: false,
        thumb: "/Humanité 2.0/thumbs/thumbs2-2.jpg",
      },
      {
        num: 3,
        title:
          "Comment échapper à la Tribulation Prophétisée : La 7ème Alliance (Épisode 3)",
        shortSummary:
          "Le monde est en pleine tribulation : famines, guerres, effondrement des valeurs… mais Dieu n’envoie jamais un châtiment sans un avertisseur. De l’alliance d’Adam à celle de Mohammed, découvrez la 7ème et dernière alliance offerte aujourd’hui à toute l’humanité.",
        duration: "01:34:08",
        playbackId:
          "Y3CjZxYJy8tszD4RHxxYj100ZUoPcR006O021i3bB25003c",
        isPremium: false,
        thumb: "/Humanité 2.0/thumbs/thumbs2-3.jpg",
      },
      {
        num: 4,
        title:
          "Ép. 4 — 10 Signes qui prouvent que l’Imam Mahdi est arrivé – Partie 1",
        shortSummary:
          "Des prophéties vieilles de 1400 ans semblent s’accomplir : gratte-ciel bédouins, objets qui parlent, bouleversements mondiaux… Premier volet des signes attestant la présence du Mahdi aujourd’hui.",
        duration: "29:48",
        playbackId:
          "uA00Pss2XmFlqWcN6htE00L4zxG502C001vv8Y1m1gsrDQM",
        isPremium: false,
        thumb: "/Humanité 2.0/thumbs/thumbs2-4.jpg",
      },
      {
        num: 5,
        title:
          "Ép. 5 — 10 Signes qui prouvent que l’Imam Mahdi est arrivé – Partie 2",
        shortSummary:
          "Suite : technologies, géopolitique et noms annoncés il y a 1400 ans. Un regard prophétique sur notre époque et les bouleversements imminents.",
        duration: "50:43",
        playbackId:
          "F8P3ZV1aTPWuf4dyHnU1M9Wz02n02D2frLFvYvIDVhGRY",
        isPremium: false,
        thumb: "/Humanité 2.0/thumbs/thumbs2-5.jpg",
      },
      {
        num: 6,
        title:
          "EP6 : Questions-Réponses — Messagers de Dieu, Satan, incarnations de Jésus",
        shortSummary:
          "Aba Al-Sadiq (de Lui est la Paix) répond aux grandes questions : critères de choix des messagers, rôle de Satan, mystère des incarnations de Jésus.",
        duration: "01:23:33",
        playbackId:
          "D9DVfgrUJ02rvl3BUn1WysMICM01OYexyzwdevGjp86FA",
        isPremium: false,
        thumb: "/Humanité 2.0/thumbs/thumbs2-6.jpg",
      },
      {
        num: 7,
        title:
          "Comment accéder aux connaissances secrètes que les religions cachent (Ép. 7)",
        shortSummary:
          "Au-delà des rites : la métaphore de l’œuf pour dévoiler les couches invisibles de la vraie foi et des mystères réservés aux chercheurs sincères.",
        duration: "01:32:09",
        playbackId:
          "ipGrzpVH1kZQ01lFJzpQo9xyQC7nF02ghpZ5Xo89Kd5RU",
        isPremium: false,
        thumb: "/Humanité 2.0/thumbs/thumbs2-7.jpg",
      },
      {
        num: 8,
        title:
          "Mohammed est-il meilleur que Jésus ? – La Révélation Cachée d’Ahlul Bayt (Ép. 8)",
        shortSummary:
          "Révélations des Ahlul Bayt sur la prééminence du Prophète Mohammed (paix sur lui et sa famille) et lumière nouvelle sur les prophètes.",
        duration: "01:14:18",
        playbackId:
          "7wJd01SpYpP600zL00P302zFaS2OTb8Y3WTbLah6k401lc9k",
        isPremium: false,
        thumb: "/Humanité 2.0/thumbs/thumbs2-8.jpg",
      },
    ],
  },

  /** ===== Série 5 : Documentaire ===== */
  5: {
    id: 5,
    title: "Documentaire",
    episodes: [
      {
        num: 1,
        title: "La Religion est un Homme – Le Lien Céleste",
        shortSummary:
          "Et si la religion n’avait jamais été un livre, une école ou un rituel, mais un seul homme, choisi par Dieu à chaque époque ? Ce documentaire retrace l’histoire oubliée de la succession divine, révélant que l’esprit de Dieu ne quitte jamais la terre, mais réside en un homme vivant, aujourd’hui encore. Un voyage spirituel qui remet en question tout ce que vous pensiez savoir sur Dieu, les prophètes et la vérité.",
        duration: "32:59",
        playbackId: "mtgTKS02jJ4WkodBaXMFnoJ6rgZnk501pxtntUugSvM8c",
        isPremium: false,
        thumb: "/Documentaire/thumbs/thumbs3-1.jpg",
      },
      {
        num: 2,
        title: "La Communauté du Mahdi — L’Odyssée Spirituelle",
        shortSummary:
          "Plongez dans l’épopée de la Communauté du Mahdi, guidée par Aba Al-Sadiq (de Lui est la Paix), des rues du Caire aux terres d’exil en Europe. Entre persécutions, signes prophétiques et renaissance spirituelle, une communauté bâtit un État de Justice Divine sur les cendres du monde en crise. Une aventure humaine et divine où foi, sacrifice et révélation changent le cours de l’histoire.",
        duration: "1:18:42",
        playbackId: "HfsMDsP8dGg8tqDLdODXsbTY7qv4pfH01rOT7e94BeR8",
        isPremium: false,
        thumb: "/Documentaire/thumbs/thumbs3-2.jpg",
      },
      {
        num: 3,
        title: "Le Nouveau Pape : Mission à Rome",
        shortSummary:
          "À l’aube de Pâques 2025, des croyants proclament au Vatican la venue du véritable pape, Abdullah Hashem Aba Al-Sadiq (de Lui est la Paix), successeur de Jésus. Bannières noires et messages de vérité résonnent au cœur de la place Saint-Pierre, en défi aux symboles du pouvoir religieux. Le lendemain, le pape François meurt — un signe saisissant pour ceux qui réfléchissent.",
        duration: "12:56",
        playbackId: "xu6f8AC6PueWs6XuHfE7mcZuNtpYpIRSk7AiY2lt9Sw",
        isPremium: false,
        thumb: "/Documentaire/thumbs/thumbs3-3.jpg",
      },
      {
        num: 4,
        title: "Conférence sur la Suprématie de Dieu",
        shortSummary:
          "Pour la première fois, une conférence religieuse réunit croyants, chercheurs, élus et universitaires autour d’un même message : la Suprématie de Dieu. À Crewe (Angleterre), des intervenants du monde entier explorent les enseignements du Mahdi vivant, Aba Al-Sadiq (de Lui est la Paix), et la foi Ahmadi. Un tournant qui redéfinit la religion comme une force vivante, unificatrice et profondément humaine.",
        duration: "35:30",
        playbackId: "1HV2OhxIs8C02qhcmUe7WSsxwefuZTVUzZSyoehJPva4",
        isPremium: false,
        thumb: "/Documentaire/thumbs/thumbs3-4.jpg",
      },
    ],
  },

  /** ===== Série 6 : C'est l'Heure ===== */
  6: {
    id: 6,
    title: "C'est l'Heure",
    episodes: [
      {
        num: 1,
        title: "Un nouveau pape est né",
        shortSummary:
          "Le jour de Pâques 2025, des croyants du monde entier s’unissent pour proclamer l’arrivée du véritable pape désigné par Dieu : Abassadiq (psl). À Rome, au Vatican, leurs bannières et leurs voix brisent le silence, sous les yeux d’un pape mourant. Le lendemain, un événement inattendu secoue le monde : le pape François est déclaré mort, marquant un tournant prophétique pour les chrétiens et l’humanité.",
        duration: "34:17",
        playbackId: "Nt7xl4ZDdzj78P01G9MAQmn2c6RC5k9bEqPu4p82CzqE",
        isPremium: false,
        thumb: "/C'est l'Heure/thumbs/thumbs4-1.jpg",
      },
      {
        num: 2,
        title: "Qui est vraiment le successeur de Jésus ?",
        shortSummary:
          "Et si Jésus avait laissé un successeur clairement désigné, mais oublié par l’Histoire ? Cette vidéo explosive explore les textes bibliques et les prophéties pour révéler les trois lois divines permettant de reconnaître un véritable envoyé de Dieu. À travers des preuves tirées de l’Évangile et des témoignages oubliés, le voile se lève sur celui qui pourrait être le successeur spirituel annoncé depuis des millénaires.",
        duration: "45:17",
        playbackId: "ZhkkygxfbTO9T01aW3cpgCpqMkYgYWOois02wqsd1vfOM",
        isPremium: false,
        thumb: "/C'est l'Heure/thumbs/thumbs4-2.jpg",
      },
      {
        num: 3,
        title: "Antéchrist, Dajjâl et Œil Unique",
        shortSummary:
          "Et si le célèbre œil unique du Dajjâl cachait un secret bien plus ancien ? Ce nouvel épisode plonge dans les origines occultes du culte du veau d’or et ses liens profonds avec les divinités égyptiennes et l’idolâtrie persistante à travers les âges. À travers des preuves historiques, scripturaires et prophétiques, Aba Al-Sadiq (de Lui est la Paix) expose une vérité qui bouscule les croyances établies et alerte sur le retour de l’antéchrist.",
        duration: "45:03",
        playbackId: "de6fz9QnYd01eVmzO44Ij4tSPASNqfm6w9koRIgAogRA",
        isPremium: false,
        thumb: "/C'est l'Heure/thumbs/thumbs4-3.jpg",
      },
      {
        num: 4,
        title: "Les grandes tribulations et la solution divine",
        shortSummary:
          "Alors que le monde semble courir vers l’autodestruction, cette vidéo décrypte les signes prophétiques et scientifiques d’une crise globale imminente. Elle révèle la seule solution divine : un envoyé désigné par Dieu, porteur d’un message révolutionnaire de justice, de vérité et d’unité. Préparez-vous à redéfinir votre vision de la foi, du pouvoir et de l’avenir de l’humanité.",
        duration: "45:28",
        playbackId:
          "1cMbeGHZPW5znLqzvU5OdhbEr801h01nYt6q6lP5xcknU",
        isPremium: false,
        thumb: "/C'est l'Heure/thumbs/thumbs4-4.jpg",
      },
      {
        num: 5,
        title: "EP5 – Le Mahdi vous guide vers le paradis",
        shortSummary:
          "Dans un monde où le chaos spirituel règne, Aba Al-Sadiq (de Lui est la Paix) rappelle que seul le dirigeant désigné par Dieu peut nous guider vers la lumière. Cette vidéo confronte l’hypocrisie des États face à la liberté religieuse, tout en affirmant la vérité d’un appel pacifique, divin et universel. Une invitation à choisir entre l’allégeance au pouvoir des hommes ou au représentant de Dieu sur Terre.",
        duration: "45:49",
        playbackId:
          "vmynZwecRoj01xSIqotI02s2Ob7mdFTiKuLz98qDnfVdk",
        isPremium: false,
        thumb: "/C'est l'Heure/thumbs/thumbs4-5.jpg",
      },
      {
        num: 6,
        title: "EP6 – Le refus d’allégeance de l’Imam Ali (as) à Abou Bakr",
        shortSummary:
          "Plongez dans les heures sombres qui ont suivi la mort du Prophète Mohammed (psl), où l’Imam Ali (as) refusa de prêter allégeance à Abou Bakr, dénonçant une usurpation du pouvoir légitime. Cette vidéo expose des tensions violentes entre compagnons et révèle des vérités occultées sur les débuts de l’Islam. Un récit percutant qui déconstruit les mythes d’unité et éclaire la tragédie d’une succession détournée.",
        duration: "44:58",
        playbackId:
          "X00p399TLLuB01trydlhVh1uXJKfPErG654kov3rtMsbw",
        isPremium: false,
        thumb: "/C'est l'Heure/thumbs/thumbs4-6.jpg",
      },
      {
        num: 7,
        title: "EP7 – Le Prophète Muhammad défend le Prophète Jésus",
        shortSummary:
          "Dans un échange percutant, Aba Al-Sadiq (de Lui est la Paix) réconcilie l’Islam et le Christianisme en dévoilant l’amour profond du Prophète Muhammad (psl) pour Jésus (psl). Cette vidéo bouscule les idées reçues en appelant les chrétiens à reconsidérer leurs alliances et à reconnaître ceux qui honorent vraiment le Messie. Un appel vibrant à l’unité spirituelle face aux divisions héritées de l’histoire.",
        duration: "46:02",
        playbackId:
          "Gbne5kPzYftKuau6USKi00xTFlj02ZH7diAMGNdLE7cks",
        isPremium: false,
        thumb: "/C'est l'Heure/thumbs/thumbs4-7.jpg",
      },
      {
        num: 8,
        title: "EP8 – L’Histoire du Saint-Esprit",
        shortSummary:
          "Du buisson ardent à l’Immaculée Conception, ce documentaire explore l’incroyable destinée du Saint-Esprit à travers les traditions juive, chrétienne et islamique. Marie, l’arche vivante de Dieu, et Jésus, esprit incarné, nous conduisent jusqu’à Nadjaf, où réside le dernier porteur de cet Esprit. Une enquête spirituelle vertigineuse sur la voix de Dieu, de Moïse à l’Imam Al-Mahdi.",
        duration: "43:58",
        playbackId:
          "pUx42K700hOx3CuDvEjr00YwOMbCMzQUwU5QrzUIzdp8M",
        isPremium: false,
        thumb: "/C'est l'Heure/thumbs/thumbs4-9.jpg",
      },
      {
        num: 9,
        title: "EP9 – L’Assomption de Marie en Islam",
        shortSummary:
          "Cet épisode déconstruit les fondements du dogme catholique de l’Assomption, en confrontant ses origines théologiques à la lumière des récits islamiques. À travers les enseignements des Ahl al-Bayt, découvrez une vérité oubliée sur le destin de Marie (psl) et son lien profond avec la terre sacrée de Nadjaf. Une enquête spirituelle qui replace Marie au cœur du mystère divin, entre l’Arche d’Alliance et la promesse du Mahdi.",
        duration: "46:11",
        playbackId:
          "MG00Q5cmpDglcZ02QK6zRA47JwMmyaiHQjrPOVbksnvBM",
        isPremium: false,
        thumb: "/C'est l'Heure/thumbs/thumbs4-10.jpg",
      },
      {
        num: 10,
        title: "EP10 – Le TESTAMENT détermine le successeur des Prophètes",
        shortSummary:
          "Explorez le mystère du testament prophétique, la preuve divine qui désigne les véritables successeurs depuis Adam jusqu’au Mahdi. À travers des hadiths puissants issus du chiisme et du sunnisme, cet épisode dévoile comment chaque Prophète a transmis un écrit sacré à son héritier. Une plongée captivante dans l’héritage spirituel ignoré, qui bouleverse les fondements de l’histoire religieuse.",
        duration: "39:34",
        playbackId: "x6fbGIuaygmXUr8ngmEQNy6Zj00WM5VqShuKmEzUnVHw",
        isPremium: false,
        thumb: "/C'est l'Heure/thumbs/thumbs4-11.jpg",
      },
      {
        num: 11,
        title: "EP11 – Comment reconnaître l’Imam de son Temps",
        shortSummary:
          "À travers le Coran, les hadiths sunnites et chiites, cet épisode dévoile l'importance cruciale de connaître et reconnaître l'Imam vivant. Sans lui, la mort spirituelle est inévitable, et seule sa guidance donne accès à la véritable compréhension du message divin. Entre preuves scripturaires et dénonciation des fausses interprétations, un appel vibrant à suivre celui que Dieu a désigné.",
        duration: "46:16",
        playbackId:
          "d59dVVR00A01aoEUy0178zBrENeK3nahjg4l02HyLCzJXN4",
        isPremium: false,
        thumb: "/C'est l'Heure/thumbs/thumbs4-12.jpg",
      },
      {
        num: 12,
        title: "EP12 – Le Prototype de l'État de Justice Divine",
        shortSummary:
          "Et si l’histoire sacrée nous montrait la clé d’un monde meilleur ? Dans cet épisode, découvrez comment chaque messager de Dieu — d’Adam à Muhammad (psl) — a toujours appelé à bâtir un État basé sur la justice divine. Aujourd’hui, le Mahdi (psl) relance cette mission avec un prototype vivant d’une société de paix, d’unité et de vérité, à construire aux côtés de ceux qui croient vraiment.",
        duration: "37:26",
        playbackId: "acIJxumpuFziSUzebsNlb6wDd3EjectpPTtPUvgKxZM",
        isPremium: false,
        thumb: "/C'est l'Heure/thumbs/thumbs4-13.jpg",
      },
      {
        num: 13,
        title: "EP13 – Le Saint-Esprit est insufflé dans un homme",
        shortSummary:
          "Et si l'Esprit de Dieu pouvait véritablement habiter un homme ? Dans cet épisode, on explore les textes bibliques et coraniques révélant comment le souffle divin fut transmis à Adam, Jésus, et les guides choisis par Dieu pour chaque époque. Un voyage spirituel percutant qui dévoile la nature réelle du Saint-Esprit et son rôle central dans la guidance divine sur Terre.",
        duration: "45:23",
        playbackId:
          "PgAq5Iz028JAjRymIZonR3gmPbY9OXOLzf8AcGes84FA",
        isPremium: false,
        thumb: "/C'est l'Heure/thumbs/thumbs4-14.jpg",
      },
      {
        num: 14,
        title: "EP14 – Les musulmans sont-ils les véritables chrétiens ?",
        shortSummary:
          "Dans un dialogue sincère et percutant, l’émission explore les racines communes entre islam et christianisme, révélant des vérités oubliées sur la succession spirituelle. À travers les Évangiles, le Coran et les révélations contemporaines, les intervenants démontrent que la véritable voie du Christ perdure à travers les hommes désignés par Dieu. Un épisode essentiel qui bouscule les idées reçues et invite à repenser le sens profond du christianisme aujourd’hui.",
        duration: "42:14",
        playbackId:
          "6c3Z1NHQQ0001CliFn2RkCs5z6XOBYSH6F7h8yFoKi7N4",
        isPremium: false,
        thumb: "/C'est l'Heure/thumbs/thumbs4-15.jpg",
      },
      {
        num: 15,
        title:
          "EP15 – Pourquoi suivre la famille du Prophète (pslf) ?",
        shortSummary:
          "L’émission explore les versets du Coran et les traditions prophétiques pour démontrer que l’amour et l’obéissance envers la famille du Prophète sont des piliers fondamentaux de la foi. À travers des preuves tirées des sources sunnites elles-mêmes, elle expose les contradictions des écoles traditionnelles et rappelle la légitimité spirituelle des descendants du Prophète. Un appel passionné à reconnaître la lignée divine et à se rallier à l’Imam désigné par Dieu, Abā al-Ṣādiq (as).",
        duration: "45:15",
        playbackId:
          "FmFi00nfCatrSvv7N1hRvGFFYpB1c6Ehuz00rKNOh00r00c",
        isPremium: false,
        thumb: "/C'est l'Heure/thumbs/thumbs4-16.jpg",
      },
      {
        num: 16,
        title:
          "EP16 – La nomination de l’Imam Ali (as) comme successeur du Prophète Muhammad (pslf)",
        shortSummary:
          "À travers des sources reconnues sunnites, cette émission démontre de manière irréfutable que le Prophète Muhammad (pslf) a désigné l’Imam Ali (as) comme successeur légitime. Chaque étape – de l’enfance d’Ali à l’événement de Ghadir Khumm – est minutieusement analysée pour mettre en lumière les preuves occultées par l’histoire officielle. Un épisode-choc qui bouleverse les récits établis et ravive la vérité sur la transmission du pouvoir divin.",
        duration: "44:42",
        playbackId:
          "AkwzOmL5CqLgy01HGUUOVzxfrzNFhjaPXo4oJQ1t4zlg",
        isPremium: false,
        thumb: "/C'est l'Heure/thumbs/thumbs4-17.jpg",
      },
      {
        num: 17,
        title:
          "EP17 – Emprisonnement de deux membres de la religion Ahmadi de Paix et de Lumière au Maroc",
        shortSummary:
          "Deux jeunes croyants marocains sont arrêtés après avoir posé une simple banderole religieuse dans un acte de foi pacifique. Accusés à tort de terrorisme, leur histoire dévoile une injustice choquante dans un pays qui se dit musulman. Une sœur témoigne, bouleversée, face à une répression brutale d’un appel pourtant empreint de paix.",
        duration: "45:47",
        playbackId:
          "f9XeKDp01pbHMIKIsevzmtY01fDbERYWiAvblC8gg2XoE",
        isPremium: false,
        thumb: "/C'est l'Heure/thumbs/thumbs4-19.jpg",
      },
      {
        num: 18,
        title:
          "EP18 – L'Immunité Présidentielle pour les Messagers et les Prophètes",
        shortSummary:
          "Dans cet épisode percutant, on explore pourquoi les prophètes et messagers, comme les chefs d’État, sont au-dessus des lois qu’ils énoncent. À travers les exemples de Moïse, Jésus, et Mohammed, Abā al-Sādiq (psl) dévoile une vérité troublante : l'autorité divine transcende les règles humaines. Un appel à reconsidérer notre conception de justice lorsque c’est Dieu qui choisit Son représentant.",
        duration: "45:12",
        playbackId:
          "GYwzQ02G1pPW01TRNid1uWf7ONrJTgHpRNGvQmCzon4lg",
        isPremium: false,
        thumb: "/C'est l'Heure/thumbs/thumbs4-20.jpg",
      },
      {
        num: 19,
        title: "EP19 – Comment Laure a trouvé le Mahdi",
        shortSummary:
          "Dans ce témoignage bouleversant, Laure, une jeune Belge au parcours spirituel atypique, raconte comment sa quête de vérité l’a menée jusqu’au Mahdi, Abā al-Sādiq (psl). Animée par un cœur sincère et l’absence d’attentes, elle découvre une foi vivante, unie et tournée vers Dieu. Une rencontre inoubliable avec l’Imam et une communauté où l’amour, la lumière et la justice deviennent réalité.",
        duration: "45:03",
        playbackId:
          "9vdH8wEAoHVCYv1EUE0101y102aWm8hgHvG3J8cPnPrLKQ",
        isPremium: false,
        thumb: "/C'est l'Heure/thumbs/thumbs4-21.jpg",
      },
      {
        num: 20,
        title: "EP20 – Se prosterner devant un homme",
        shortSummary:
          "Dans cet épisode percutant, les intervenants abordent une polémique majeure : la prosternation devant l’Imam Abā al-Sādiq (psl). À travers les Écritures et les avis de grands savants musulmans, ils démontrent que cet acte est spirituellement légitime et historiquement pratiqué par des prophètes. Une exploration profonde qui renverse les idées reçues sur la soumission et l’adoration dans la foi authentique.",
        duration: "45:50",
        playbackId:
          "RsZUogdco8qDKLVzGvxEaEdwSB35CCuai65kJDUbgMY",
        isPremium: false,
        thumb: "/C'est l'Heure/thumbs/thumbs4-22.jpg",
      },
      {
        num: 21,
        title: "EP21 – La Bannière Noire du Mahdi",
        shortSummary:
          "Dans cet épisode essentiel, découvrez la seule bannière prophétique légitime : celle du Mahdi, portant l’inscription « L’allégeance est à Dieu ». À travers les preuves tirées des hadiths et de l’histoire islamique, les intervenants dévoilent comment les groupes extrémistes ont détourné ce symbole sacré. Une exploration saisissante qui restaure l’honneur du Prophète Mohammed (psl) et distingue la vraie guidance divine de l’imposture.",
        duration: "36:14",
        playbackId:
          "0102528yEG0202p601301x00P101bQm701c01ef3MOD4AYtE6bHgM",
        isPremium: false,
        thumb: "/C'est l'Heure/thumbs/thumbs4-23.jpg",
      },
      {
        num: 22,
        title: "EP22 – Le Royaume est un Homme",
        shortSummary:
          "Dans un échange vibrant, Yasmine et ses invités décryptent l’enseignement d’Aba Al-Sadiq (de Lui est la Paix) sur la véritable nature du Royaume de Dieu. Ni lieu physique, ni territoire, ce royaume commence dans le cœur des hommes guidés par le représentant de Dieu sur Terre. Un épisode bouleversant qui révèle que là où se trouve le roi, là commence le règne divin.",
        duration: "44:46",
        playbackId:
          "iAHGvmqaFmWUk02hnQwo01udX6027TBIFwOs02TfKHkGHhc",
        isPremium: false,
        thumb: "/C'est l'Heure/thumbs/thumbs4-24.jpg",
      },
      {
        num: 23,
        title: "EP23 – La mort du Prophète Mohammed",
        shortSummary:
          "Et si tout avait basculé au moment où le Prophète Mohammed (psl) a voulu écrire un testament pour guider sa communauté ? Dans cet épisode explosif, les preuves issues des plus grands savants sunnites révèlent une vérité longtemps ignorée : le Prophète aurait bel et bien voulu désigner son successeur. Un face-à-face brûlant entre les récits officiels et les enseignements d’Aba Al-Sadiq (de Lui est la Paix), qui bouleverse l’Histoire de l’islam.",
        duration: "43:17",
        playbackId:
          "EVMOy1jSjkVAcvuWTBehv4WUL29XQ021M1WXMcFVi7H00",
        isPremium: false,
        thumb: "/C'est l'Heure/thumbs/thumbs4-25.jpg",
      },
      {
        num: 24,
        title: "EP24 – La Terre des Croyants",
        shortSummary:
          "Et si un État pouvait incarner la justice divine, loin des modèles politiques actuels ? Dans cet épisode, les croyants révèlent un projet inédit initié par Aba Al-Sadiq (de Lui est la Paix) : un prototype de société fondée sur l’équité, la foi, et la contribution de chacun au bien commun. Une vision révolutionnaire où la miséricorde de Dieu se manifeste dans chaque aspect de la vie collective.",
        duration: "45:25",
        playbackId:
          "IRUk01jyCnF2M01uIAbNzYwU00ezlpMjjoQZDjiPMZcaio",
        isPremium: false,
        thumb: "/C'est l'Heure/thumbs/thumbs4-26.jpg",
      },
      {
        num: 25,
        title: "EP25 – Un Grand Signe Pour Les Chrétiens",
        shortSummary:
          "Le message du Mahdi Aba Al-Sadiq (de Lui est la Paix) résonne avec force auprès des chrétiens en quête de vérité, en redonnant sens aux paroles de Jésus et en exposant la trahison des valeurs chrétiennes par les institutions. Un événement bouleversant marque cet épisode : le jour de Pâques, alors qu’une bannière appelant à un nouveau pape est brandie face au Vatican, le pape François décède moins de 24 heures plus tard. Ce signe grandiose est présenté comme une preuve divine confirmant la mission de celui qui se proclame successeur de Jésus.",
        duration: "45:20",
        playbackId: "PUrJYI2TLlTnyrfcaB4F6YdBsyKy6eBl6v44v8EkPVY",
        isPremium: false,
        thumb: "/C'est l'Heure/thumbs/thumbs4-27.jpg",
      },
      {
        num: 26,
        title:
          "EP26 – Un envoyé de Jésus infaillible, Abdullah Hashem (De Lui est la Paix)",
        shortSummary:
          "Et si le salut ne passait pas seulement par croire, mais par suivre un successeur vivant ? Dans cet épisode passionnant, Aba Al-Sadiq (de Lui est la Paix) répond aux grandes questions des chrétiens en révélant l'urgence d'un guide désigné, ici et maintenant. À travers les Évangiles et le Coran, il démonte les croyances figées pour ouvrir la voie à un envoyé annoncé : Abdullah Hashem.",
        duration: "46:00",
        playbackId:
          "vegf3xwkUqwIrc028W2k91CLcmyc4nJkJQDYvskyfu58",
        isPremium: false,
        thumb: "/C'est l'Heure/thumbs/thumbs4-28.jpg",
      },
      {
        num: 27,
        title: "EP27 – Gaza et la construction du 3ème Temple",
        shortSummary:
          "Dans un contexte explosif entre Israël et Palestine, Aba Al-Sadiq (de Lui est la Paix) lance un appel historique à la paix, dépassant les frontières et les nationalismes. Il propose une solution prophétique oubliée : unir les fils d’Ismaël et d’Isaac autour d’un projet divin de réconciliation et de justice. Et si le véritable Temple n’était pas de pierre, mais un pacte spirituel destiné à réunir l’humanité entière ?",
        duration: "44:03",
        playbackId:
          "wR2TJxhewq5kGP25NotmHeFHyuI5MWRz7H1T00jVMFtM",
        isPremium: false,
        thumb: "/C'est l'Heure/thumbs/thumbs4-29.jpg",
      },
      {
        num: 28,
        title: "EP28 – Conflit Israélo-Palestinien",
        shortSummary:
          "Aba Al-Sadiq (de Lui est la Paix) lance un cri prophétique pour sortir du cycle sanglant entre Israël et Palestine, refusant de choisir un camp autre que celui de la vérité. Il accuse l’hypocrisie des dirigeants arabes et appelle les peuples à se lever pour la paix réelle, incarnée par un leadership divin. Et si la véritable solution n’était ni politique, ni militaire, mais spirituelle et révolutionnaire ?",
        duration: "47:02",
        playbackId:
          "GA5vU12TazjkDJeQiyuclDT4r3FKBz01awdp5jUA8OJM",
        isPremium: false,
        thumb: "/C'est l'Heure/thumbs/thumbs4-30.jpg",
      },
      {
        num: 29,
        title: "EP29 – À Chaque Époque Un Messager",
        shortSummary:
          "Et si Dieu n’avait jamais cessé d’envoyer des guides à l’humanité ? Dans cet épisode, Aba Al-Sadiq (de Lui est la Paix) démontre, textes à l’appui, que chaque époque a son messager désigné, porteur du même Esprit Divin que Jésus, Moïse ou Mohammed. Un appel vibrant aux chrétiens et croyants sincères à reconnaître le plan divin en action aujourd’hui.",
        duration: "45:03",
        playbackId:
          "01MWD00RLWsZNLRfgPwgTbh021OvFx9S02X8qZ8Vz2SseoI",
        isPremium: false,
        thumb: "/C'est l'Heure/thumbs/thumbs4-31.jpg",
      },
      {
        num: 30,
        title: "EP30 – Le Christianisme du Ier siècle",
        shortSummary:
          "Plongée explosive dans les racines du christianisme ! Aba Al-Sadiq (de Lui est la Paix) démonte les figures de Paul et Marcion, révélant comment leurs enseignements ont dévié du message original de Jésus et semé division et confusion. Une remise en question radicale de l’Église moderne à la lumière des textes oubliés et de la vérité des persécutés.",
        duration: "45:24",
        playbackId:
          "tkXccX902A3x01OMO6e3Z4jwwyN5RgdXKu01vMrW4HwnhM",
        isPremium: false,
        thumb: "/C'est l'Heure/thumbs/thumbs4-32.jpg",
      },
    ],
  },

  /** ===== Série 7 : Dieu t’Appelle ===== */
  7: {
    id: 7,
    title: "Dieu t'Appelle",
    episodes: [
      {
        num: 1,
        title: "Ép 1 : Abdullah Hashem Aba Al-Sadiq est-il le Mahdi ?",
        shortSummary:
          "Dans ce premier épisode, une exploration profonde et sans tabou remet en question l'histoire de la succession prophétique, en s'appuyant sur les textes sunnites et chiites. Le sujet central : l'existence d’un testament oublié du Prophète Mohammed et l'identité de celui qui aurait été désigné. À travers des preuves scripturaires et des témoignages vibrants, l’émission propose une révélation : Abdullah Hashem Aba Al-Sadiq (psl) serait ce successeur tant attendu, celui que les prophéties annoncent.",
        duration: "45:17",
        playbackId: "yjOcn5qO01vfODqVwquowLawS6wNYnawb00jAmV00Il55s",
        isPremium: false,
        thumb: "/Dieu t'Appelle/thumbs/thumbs5-1.jpg",
      },
      {
        num: 2,
        title: "Ép 2 : L’ultime réveil avant la fin d’un cycle",
        shortSummary:
          "À travers une révélation percutante, ce second épisode met en lumière la vraie nature du Royaume de Dieu : ce n’est pas un lieu, mais un homme. De Moïse à Mohammed, de Jésus au Mahdi, l’histoire se répète — un appel à abandonner les traditions figées pour reconnaître le représentant divin vivant. Tandis que les prophéties prennent vie sous nos yeux, les téléspectateurs sont invités à faire un choix décisif : suivre la loi… ou suivre celui qui l’incarne.",
        duration: "45:15",
        playbackId: "ZbKk3sep01lZDnHS4n68oaKJpVKapYILyN00f2rI7vrHo",
        isPremium: false,
        thumb: "/Dieu t'Appelle/thumbs/thumbs5-2.jpg",
      },
      {
        num: 3,
        title: "Ép 3 : Le monde est en perdition",
        shortSummary:
          "Dans un monde ravagé par la guerre, la pauvreté et les persécutions religieuses, ce nouvel épisode explore la crise des réfugiés comme symptôme d’un système mondial défaillant. À travers des témoignages poignants et une analyse spirituelle des textes sacrés, les hôtes rappellent que l’accueil de l’étranger est un devoir divin, ancré dans le judaïsme, le christianisme et l’islam. L’épisode dévoile aussi une solution radicale et inspirée : créer un État spirituel pour les persécutés, dirigé par le représentant de Dieu, Aba Al-Sadiq (psl).",
        duration: "45:32",
        playbackId: "USuaScceYYl01NT00qEcViOQCqhUWzh115uAEXa3cNsXQ",
        isPremium: false,
        thumb: "/Dieu t'Appelle/thumbs/thumbs5-3.jpg",
      },
      {
        num: 4,
        title: "Ép 4 : La Septième Alliance",
        shortSummary:
          "Cet épisode révèle la rupture de la sixième alliance prophétique et l'émergence de la Septième Alliance, établie avec Ahmed Al-Hassan (psl), messager de Dieu dans notre époque. Contrairement aux alliances passées liées à des peuples ou des lignées, celle-ci est conclue avec les âmes sincères, au-delà des origines, nations ou langues. Une révolution spirituelle est en marche, bouleversant les dogmes anciens et invitant chacun à reconnaître la nouvelle preuve divine.",
        duration: "44:24",
        playbackId: "uRuuffVdwsSAmdFBTeYUs01zmNKQNWZO6qxx6AEhqFtI",
        isPremium: false,
        thumb: "/Dieu t'Appelle/thumbs/thumbs5-4.jpg",
      },
      {
        num: 5,
        title:
          "Ép 5 : La Rédemption dans les Religions Abrahamiques et Orientales",
        shortSummary:
          "Cet épisode explore la quête du salut dans les grandes religions du monde, d’Israël à l’Inde, du Coran à la Torah en passant par les philosophies orientales. À travers un décryptage profond, les animateurs confrontent les dogmes et dévoilent les contradictions autour de la rédemption dans le judaïsme, le christianisme, l’islam et l’hindouisme. Finalement, ils révèlent la promesse unique de la Septième Alliance : un retour à l’état originel d’Adam, guidé par le Messager de Dieu en notre temps, Ahmed Al-Hassan (psl).",
        duration: "44:53",
        playbackId: "tEoVqV8B1lCfIyLM2VsaZ77fvpp02QIwg01XpWQSta6EY",
        isPremium: false,
        thumb: "/Dieu t'Appelle/thumbs/thumbs5-5.jpg",
      },
      {
        num: 6,
        title:
          "Ép 6 : Pourquoi la Religion Ahmadi de Paix et Lumière n'est-elle pas une nouvelle Religion ?",
        shortSummary:
          "Cet épisode passionnant démonte l’idée reçue selon laquelle la Religion Ahmadi de Paix et de Lumière serait une nouvelle foi. À travers un voyage comparatif entre judaïsme, christianisme, islam et la 7e Alliance, on découvre qu’il s’agit en réalité d’une continuité prophétique enracinée dans le Testament du Prophète Mohammed. Ce message profond réaffirme la présence éternelle de l’Esprit de Dieu sur Terre, incarnée aujourd’hui par le Qa’im de la famille de Mohammed : Aba Al-Sadiq (psl).",
        duration: "44:08",
        playbackId:
          "PzfySaN02wfNZ00Gmj4jwIhRLQG02axork007ra00mWC7On00",
        isPremium: false,
        thumb: "/Dieu t'Appelle/thumbs/thumbs5-6.jpg",
      },
      {
        num: 7,
        title:
          "Ép 7 : La Connaissance Ésotérique du Prophète dans les Hadiths",
        shortSummary:
          "Dans cet épisode, découvrez la sagesse cachée du Prophète Mohammed (psl) transmise à travers les alliances divines, des Prophètes anciens jusqu’à Aba Al-Sadiq (psl). La Religion Ahmadi de Paix et de Lumière se révèle comme le prolongement légitime des traditions abrahamiques, portant l’esprit éternel de Dieu à travers les âges. Explorez comment la reconnaissance du testament prophétique et la présence d’un guide vivant distinguent cette foi unique, fondée sur la connaissance divine et la suprématie de Dieu.",
        duration: "44:08",
        playbackId:
          "V5VuHL89ngX7zi301SWvR6Q2Bb01Jo7Ug3mlmaiPuv01zU",
        isPremium: false,
        thumb: "/Dieu t'Appelle/thumbs/thumbs5-7.jpg",
      },
      {
        num: 8,
        title: "Ép 8 : Le voile n'a JAMAIS été une OBLIGATION",
        shortSummary:
          "Dans cet épisode percutant, les intervenants démontent les idées reçues sur le port du voile, en prouvant qu’il n’a jamais été une obligation dans l’islam selon le Coran et les hadiths authentiques. À travers une analyse historique, scripturaire et sociale, ils révèlent que le voile fut souvent un marqueur politique, culturel ou de classe – jamais un commandement divin universel. Ils concluent que la véritable pudeur est une affaire de cœur, et que Dieu n’a jamais imposé aux femmes de couvrir leurs cheveux.",
        duration: "43:43",
        playbackId: "AJNjuxgHKMw9GcUeNkE5mYKcH4BpiXUI3InGU9RMce8",
        isPremium: false,
        thumb: "/Dieu t'Appelle/thumbs/thumbs5-8.jpg",
      },
      {
        num: 9,
        title: "Ép 9 : L’amour du Prophète pour Jésus-Christ",
        shortSummary:
          "Dans cet épisode, une lumière est jetée sur l’amour profond du Prophète Mohammed (psl) pour Jésus-Christ, qu’il défend malgré les critiques des Juifs et les incompréhensions des Chrétiens. À travers l’analyse de textes juifs, chrétiens et musulmans, il est démontré que l’Islam accomplit une promesse ancestrale faite à Ismaël. Le prophète Mohammed, en proclamant Jésus comme Messie d’Israël mais non comme Dieu, s’attire la colère des deux camps — révélant la complexité et la grandeur de sa mission.",
        duration: "45:16",
        playbackId:
          "sJjC0201dKFj37500P9mA7wt6CyRHCidi3q6LMTYJbjqEI",
        isPremium: false,
        thumb: "/Dieu t'Appelle/thumbs/thumbs5-9.jpg",
      },
      {
        num: 10,
        title: "Ép 10 : Le Mahdi ou les Mahdis dans le Coran et la Sunna",
        shortSummary:
          "Ce dialogue passionné explore la question centrale du Mahdi dans le Coran et la Sunna, au croisement des traditions sunnites et chiites. À travers une remise en contexte historique de la compilation du Coran, il met en lumière les divergences et la confusion qui entourent la transmission des textes sacrés. L’épisode insiste sur l’importance de reconnaître les signes divins authentiques, et sur le fait que seule la succession divine garantit la vérité.",
        duration: "17:41",
        playbackId:
          "Zru1e012rtgH02z5BzPsAPp01KO6A87hVTlgGmYRe5ogaU",
        isPremium: false,
        thumb: "/Dieu t'Appelle/thumbs/thumbs5-10.jpg",
      },
      {
        num: 11,
        title: "Ép 11 : Judaïsme, Christianisme, Islam",
        shortSummary:
          "Dans cet épisode, les intervenants analysent les incohérences des trois grandes religions monothéistes et leur incapacité à reconnaître un véritable envoyé de Dieu. Ils dénoncent l'emprise des élites religieuses, l'absence de preuves divines actuelles et la souffrance provoquée par l’injustice mondiale. L’émission lance un appel direct à la sincérité spirituelle, à la mubahala, et à la reconnaissance d’un guide vivant désigné par Dieu aujourd’hui.",
        duration: "45:12",
        playbackId: "ZzFEp7A4TlJWoJRNriQtTW1JQ5YkTHye7WhFATV9Pk8",
        isPremium: false,
        thumb: "/Dieu t'Appelle/thumbs/thumbs5-11.jpg",
      },
      {
        num: 12,
        title: "Ép 12 : Hommage à tous nos Martyrs",
        shortSummary:
          "Dans cet hommage poignant, l’épisode retrace les derniers jours de deux jeunes martyrs, Ibrahim et Nour, tués pour avoir annoncé l’apparition de l’Imam Mahdi (psl). Entre mensonges médiatiques, oppression policière et silence religieux, la vérité éclate par les témoignages déchirants de leurs proches. Une dénonciation bouleversante de l’injustice, portée par la foi inébranlable des croyants du monde entier.",
        duration: "44:31",
        playbackId:
          "0101016o8uqPrv7m4TmMEcG8jZ2UZRmBnEPjqp9dm7KOkM",
        isPremium: false,
        thumb: "/Dieu t'Appelle/thumbs/thumbs5-12.jpg",
      },
      {
        num: 13,
        title: "Ép 13 : L’unité des religions sous l’Imam Mahdi",
        shortSummary:
          "Toutes les religions authentiques convergent vers une seule vérité : celle de l’Imam al-Mahdi (psl), désigné par Dieu pour rassembler l’humanité. À travers les Écritures — Torah, Évangile et Coran — cet épisode dévoile une vision prophétique d’unité et de justice divine. Une révélation incontournable pour quiconque cherche sincèrement la lumière au-delà des dogmes établis.",
        duration: "44:38",
        playbackId: "YlykpG3jNmRWi5BUtmVh6fNjf47KORVYz2Lg6TK3gkc",
        isPremium: false,
        thumb: "/Dieu t'Appelle/thumbs/thumbs5-13.jpg",
      },
    ],
  },

  /** ===== Série 15 : Le Hall des Mystères (NOUVELLE SÉRIE) ===== */
  15: {
    id: 15,
    title: "Le Hall des Mystères",
    episodes: [
      {
        num: 1,
        title:
          "EP 1 – Notre Religion : Pourquoi elle est l'Unique et Véritable Religion de Dieu",
        shortSummary:
          "Dans un monde saturé de croyances divisées, une seule religion vivante se distingue : celle qui a un guide vivant désigné par Dieu. Aba Al-Sadiq (paix sur lui) démontre que le salut ne peut venir que par la « corde d’Allah » – un homme vivant, porteur de la vérité divine à chaque époque. Une conférence puissante qui bouleverse toutes les certitudes religieuses et appelle chacun à reconnaître le véritable successeur de Dieu.",
        duration: "35:59",
        playbackId:
          "qdNrxCcZB01yVg01k6Ehq025tmiJnNaDxbQt01Xhlv4K5BE",
        isPremium: false,
        thumb: "/Le Hall des Mystères/thumbs/thumbs7-1.jpg",
      },
      {
        num: 2,
        title: "Ép 2 : Le Testament du Prophète Mohammed (pslsf)",
        shortSummary:
          "Au cœur de cette conférence, la vérité éclatante sur le testament laissé par le Prophète Mohammed (psl) est dévoilée, défiant les récits traditionnels. L’Imam Ali en fut le scribe, dicté par le Prophète sur son lit de mort, établissant une lignée de 12 imams et 12 Mahdis. Ce testament, pierre angulaire de la foi, démontre que seule l’allégeance au successeur désigné garantit le salut et préserve de l’égarement.",
        duration: "38:41",
        playbackId: "sjysmrocpCj56cHXiTxt1K9AzYqcAFAzawwgGcPHZZU",
        isPremium: false,
        thumb: "/Le Hall des Mystères/thumbs/thumbs7-2.jpg",
      },
      {
        num: 3,
        title:
          "Ép 3 : La 7ème et dernière Alliance : Notre Pacte avec Dieu",
        shortSummary:
          "Le Mahdi Aba Al-Sadiq dévoile la dimension oubliée mais centrale de la foi : l’alliance divine entre Dieu et l’humanité. À travers les figures d’Adam, Noé, Abraham, Moïse, Jésus et Mohammed, chaque alliance marque une étape clé du salut. Aujourd’hui, la 7ème et dernière alliance appelle chacun à reconnaître son engagement envers Dieu dans une ère de révélation ultime.",
        duration: "42:15",
        playbackId: "qUnv00AEGjMFO4s00RaNIRclbUpokpT007026qRHmrlUPKc",
        isPremium: false,
        thumb: "/Le Hall des Mystères/thumbs/thumbs7-3.jpg",
      },
      {
        num: 4,
        title:
          "Ép 4 : L'Arrivée du Mahdi : Signes Majeurs avant son Apparition",
        shortSummary:
          "Le Mahdi Aba Al-Sadiq (psl) répond à un sceptique en révélant les innombrables signes prophétiques confirmant l’Heure et la venue du Qa’im. À travers les récits du Prophète Mohammed (psl) et de sa famille, il expose des prédictions troublantes — déjà accomplies — sur le monde moderne. Ce message puissant invite chacun à reconnaître que nous vivons bel et bien à l’époque du Mahdi, et qu’il est temps de choisir.",
        duration: "43:51",
        playbackId: "imCNQUBZCHoXQEQQVdALpVj4JhDtH6gHQwTN02n02yyXM",
        isPremium: false,
        thumb: "/Le Hall des Mystères/thumbs/thumbs7-4.jpg",
      },
      {
        num: 5,
        title: "Ép 5 : Le Saint-Esprit et la Voix de Dieu",
        shortSummary:
          "Aba al-Sadiq (psl) révèle que le Saint-Esprit est en réalité les prophètes et leurs successeurs, porteurs de la voix divine à travers les âges. De la tristesse du Mahdi face à l’injustice au rôle caché d’Ali (psl) dans les grandes étapes de l’Histoire sainte, les mystères se dévoilent. Dieu continue de parler à l’humanité — non par des miracles spectaculaires, mais par ses représentants élus, voilés sous l’apparence des hommes.",
        duration: "36:52",
        playbackId:
          "02nNZKFZtvBNwijeb87S2I37kVvhERRk4LEoWGCHL02WU",
        isPremium: false,
        thumb: "/Le Hall des Mystères/thumbs/thumbs7-5.jpg",
      },
      {
        num: 6,
        title:
          "Ép 6 : La Vérité est Amère : Es-Tu Prêt pour La Connaissance Secrète ?",
        shortSummary:
          "À travers l’allégorie de l’œuf, l’Imam Ahmad al-Hassan (psl) révèle les couches profondes et souvent cachées de la religion véritable. Seuls ceux qui osent briser la coquille et supporter l’amertume de la vérité accèdent à la connaissance divine interdite à la masse. Ce voyage intérieur dérange, secoue, mais promet l’émerveillement à ceux qui persévèrent dans la quête du sens.",
        duration: "46:31",
        playbackId:
          "WJqE7TQjfV12CoLNgSipe4u00xsD02dKu9oq02D8Qe02Jic",
        isPremium: false,
        thumb: "/Le Hall des Mystères/thumbs/thumbs7-6.jpg",
      },
      {
        num: 7,
        title:
          "Épisode 7 – Pourquoi Jésus sera un Partisan du Mahdi ?",
        shortSummary:
          "Dans cet épisode percutant, l’émission explore pourquoi Jésus (paix sur lui) reviendra sur Terre non comme guide suprême, mais comme partisan loyal de l’Imam al-Mahdi. Les traditions islamiques, coraniques et bibliques sont convoquées pour prouver la supériorité spirituelle de Mohammed et de sa descendance sur tous les prophètes. L’épisode bouleverse les idées reçues et dévoile la nature divine et universelle de la succession choisie par Dieu.",
        duration: "34:08",
        playbackId:
          "7ZQY5GrO7Q7R83nYWB2M2Tg4r0001aVXv00HsmeKDCfuMU",
        isPremium: false,
        thumb: "/Le Hall des Mystères/thumbs/thumbs7-7.jpg",
      },
      {
        num: 8,
        title:
          "Épisode 8 – Dieux de l'Antiquité : La Vérité derrière les Mythes",
        shortSummary:
          "L'émission explore une thèse audacieuse : les dieux des mythologies anciennes étaient en réalité des prophètes et des messagers authentiques, oubliés ou divinisés avec le temps. S’appuyant sur les enseignements de l’imam Ahmed Al-Hassan et des récits prophétiques, l’épisode identifie des figures comme Socrate, Platon, Aristote, Bouddha, Zoroastre, Hermès, Zeus ou encore Isis et Apollon comme étant parmi les 124 000 prophètes mentionnés dans la tradition islamique.",
        duration: "36:27",
        playbackId:
          "00N98tLDn76QUz01fs9ObyYKOmgg8prPZDsNLHuSX1oGY",
        isPremium: false,
        thumb: "/Le Hall des Mystères/thumbs/thumbs7-8.jpg",
      },
      {
        num: 9,
        title:
          "Épisode 9 – Réincarnation & Islam : Le Mahdi et Le Retour Des Prophètes",
        shortSummary:
          "Découvrez la vérité bouleversante sur la réincarnation (Raja) à travers les textes du Coran, les hadiths et les enseignements de l’Imam Ahmad Al-Hassan (psl). Loin d’être étrangère à l’Islam, la promesse du retour des prophètes, des imams, des martyrs — et même des anges — y est liée à la fin des temps. Le Mahdi et ses compagnons sont présentés comme les acteurs clés de cette transformation spirituelle et physique du monde.",
        duration: "40:50",
        playbackId: "eZKMsEig8Lcbuzyq02gsKQuHABuOLGgm8pC1gx00VGd4Y",
        isPremium: false,
        thumb: "/Le Hall des Mystères/thumbs/thumbs7-9.jpg",
      },
      {
        num: 10,
        title:
          "Épisode 10 – Un Ange Appelle au Mahdi : Secrets Révélés",
        shortSummary:
          "Plonge dans le mystère des anges à travers le Coran, la Torah et l’Évangile, et surtout via les traditions de l’Islam. Découvre leurs formes multiples et leur rôle dans la création, jusqu’à la prophétie d’un appel céleste annonçant publiquement l’Imam al-Mahdi — heure de la reconnaissance pour l’humanité entière.",
        duration: "52:55",
        playbackId:
          "NFachhcbCbj01xssLq01SeSrL8ZXwMqBK6eUsgX6feJtc",
        isPremium: false,
        thumb: "/Le Hall des Mystères/thumbs/thumbs7-10.jpg",
      },
      {
        num: 11,
        title: "Ép 11 : Comment le Mahdi va établir son État ?",
        shortSummary:
          "Découvre comment le Mahdi (psl) mettra en place un État de Justice Divine fondé sur l’Ahmadisme, un système économique alternatif aux modèles capitaliste, socialiste et communiste. Une société où l’argent devient inutile, où les croyants partagent tout jusqu’à éradiquer la pauvreté — un appel radical à la transformation humaine.",
        duration: "43:08",
        playbackId:
          "z6U0096tb02oFrqtEpY0102RXlnb6UziXp7ECU79BT1wor00",
        isPremium: false,
        thumb: "/Le Hall des Mystères/thumbs/thumbs7-11.jpg",
      },
      {
        num: 12,
        title: "Épisode 12 – Les Rêves : Dernière partie de la Prophétie",
        shortSummary:
          "Pourquoi les rêves sont-ils la forme ultime de la prophétie ? À travers la Torah, l’Évangile et le Coran, l’émission explore les visions divines, les songes sataniques et leur rôle dans notre destinée. Un voyage captivant pour apprendre à distinguer les véritables messages du ciel.",
        duration: "54:53",
        playbackId:
          "7lpOX2ko7JcMQQuOfpfeyTazlVjUjuYIvH7xOot8b5s",
        isPremium: false,
        thumb: "/Le Hall des Mystères/thumbs/thumbs7-12.jpg",
      },
    ],
  },
};

// === Texte générique BONUS (affichage) ===
const BONUS_TITLE =
  "Bonus : Le Manifeste du Mahdi — Les Chroniques des Ansars";
const BONUS_SUMMARY =
  "Dans un monde en crise, un message se lève pour unir les justes et renverser la tyrannie : celui du Mahdi, Abdullah Hashem. Porté par des siècles de prophéties, ce manifeste dévoile une nouvelle Alliance entre Dieu et l’humanité, appelant à bâtir un État de Justice Divine. Entre communauté spirituelle, leadership divin et espoir concret, découvrez la mission ultime pour sauver le monde.";

/** BONUS visuels dynamiques par série */
function makeBonusItems(seriesId: number) {
  if (seriesId === 2) {
    // 7 vignettes propres à la série 2
    const base = "/Les Apotres de l'Esprit Saint/bonus";
    return [
      {
        imgSrc: `${base}/bonus_thumbs8-1.jpg`,
        alt: "Bonus 1 — Un espoir pour ce monde en perdition",
        href: `/watch/2/101`,
      },
      {
        imgSrc: `${base}/bonus_thumbs8-2.jpg`,
        alt: "Bonus 2 — Une humanité réunie par un leader divin",
        href: `/watch/2/102`,
      },
      {
        imgSrc: `${base}/bonus_thumbs8-3.jpg`,
        alt: "Bonus 3 — Une alliance nouvelle !",
        href: `/watch/2/103`,
      },
      {
        imgSrc: `${base}/bonus_thumbs8-4.jpg`,
        alt: "Bonus 4 — Une nouvelle Alliance avec Dieu!",
        href: `/watch/2/104`,
      },
      {
        imgSrc: `${base}/bonus_thumbs8-5.jpg`,
        alt: "Bonus 5 — La communauté divine : la clé de notre survie",
        href: `/watch/2/105`,
      },
      {
        imgSrc: `${base}/bonus_thumbs8-6.jpg`,
        alt: "Bonus 6 — Prophéties du Mahdi",
        href: `/watch/2/106`,
      },
      {
        imgSrc: `${base}/bonus_thumbs8-7.jpg`,
        alt: "Bonus 7 — Prophéties du Mahdi",
        href: `/watch/2/107`,
      },
    ];
  }
  if (seriesId === 1) {
    return [
      {
        imgSrc: "/bonus/bonus1.jpg",
        alt: "Épisode 1 – Trouver le bon Leader",
        href: `/watch/1/101`,
      },
      {
        imgSrc: "/bonus/bonus2.jpg",
        alt: "Épisode 2 – L’Appel à la Suprématie d’Allah",
        href: `/watch/1/102`,
      },
      {
        imgSrc: "/bonus/bonus3.jpg",
        alt: "Épisode 3 – Le Rassemblement",
        href: `/watch/1/103`,
      },
      {
        imgSrc: "/bonus/bonus4.jpg",
        alt: "Épisode 4 – Prêter Allégeance au Mahdi",
        href: `/watch/1/104`,
      },
    ];
  }
  // Pas de bonus pour les séries 3, 4, 5, 6, 7 et 15
  return [];
}

export default function WatchEpisodePage({
  params,
}: {
  params: { id: string; episode: string };
}) {
  const seriesIdNum = Number(params.id);
  const episodeNum = Number(params.episode);

  const seriesData =
    SERIES_DATA[seriesIdNum as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 15];
  if (!seriesData) {
    return (
      <div style={{ color: "#fff", padding: 40 }}>Série introuvable.</div>
    );
  }

  const currentEpisode = seriesData.episodes.find(
    (ep) => ep.num === episodeNum
  );
  if (!currentEpisode) {
    return (
      <div style={{ color: "#fff", padding: 40 }}>Épisode introuvable.</div>
    );
  }

  // "Suivant" : seulement sur les épisodes principaux 1–40 (pas bonus)
  const nextEpisode = seriesData.episodes
    .filter((ep) => ep.num >= 1 && ep.num <= 40)
    .find((ep) => ep.num === episodeNum + 1);

  return (
    <WatchClient
      seriesId={seriesData.id}
      seriesTitle={seriesData.title}
      fullTitle={currentEpisode.title}
      synopsis={currentEpisode.shortSummary}
      duration={currentEpisode.duration}
      playbackId={currentEpisode.playbackId}
      isPremium={currentEpisode.isPremium}
      nextEpisodeNum={nextEpisode?.num}
      nextEpisodeTitle={nextEpisode?.title}
      // Grille "Autres épisodes" : seulement 1–40 (les bonus restent en dessous)
      thumbs={seriesData.episodes
        .filter((ep) => ep.num >= 1 && ep.num <= 40)
        .map((ep) => ({ num: ep.num, title: ep.title, thumb: ep.thumb }))}
      bonusTitle={BONUS_TITLE}
      bonusSummary={BONUS_SUMMARY}
      bonusItems={makeBonusItems(seriesData.id)}
    />
  );
}

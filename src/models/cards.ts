

/**
 * Tarot Card
 */

interface Card {
  id: number;
  name: string;
  description: string;
  type: string; // major or minor Arcana
  suit?: string; // wands, cups, swords, pentacles
  orientation: boolean; // true = upright or  false = reversed
  // meanings: {
  //   keywords: {
  //     positive: string[];
  //     negative: string[];
  //   };
  //   negative: {
  //     past: string;
  //     present: string;
  //     future: string;
  //   };
  //   positive: {
  //     past: string;
  //     present: string;
  //     future: string;
  //   };
  // };
  // element: string; // fire, water, air, earth
  // numerology: string; 
  // astrology: string; 
  // planet: string;
  // timing: string;
  cardImages: CardImage[];
}
// the urls are wikicommons and can be seen here: 
// https://en.wikipedia.org/wiki/Rider%E2%80%93Waite_Tarot
interface CardImage {
  id: number;
  art_set: string;
  label: string;
  url: {
    tiny: string;
    small: string;
    mid: string;
    large: string;
  };
  alt: string;
  cardId: number;
}

interface CardImageAttributation {
  id: number;
  artist: string;
  artist_url: string;
  art_set: string;
  art_set_url: string;
}

/**
 * Tarot Deck
 */
interface Deck {
  cards: Card[];
}

/**
 * Tarot Spread
 */
interface Spread {
  id: string;
  name: string;
  description: string;
  cards: Card[];
}


const deck: Deck = {
  cards: [
    {
      id: 0,
      name: "The Fool",
      description: "The Fool is the spirit in search of experience. He represents the mystical cleverness bereft of reason within us, the childlike ability to tune into the inner workings of the world. The sun shining behind him represents the divine nature of the Fool's wisdom and exuberance, holy madness or 'crazy wisdom'. On his back are all the possessions he might need. In his hand there is a flower, showing his appreciation of beauty. He is frequently accompanied by a dog, sometimes seen as his animal desires, sometimes as the call of the real world, nipping at his heels and distracting him. He is seemingly unconcerned that he is standing on a precipice, apparently about to step off.",
      type: "major",
      orientation: true,
      // meanings: {
      //   negative: {
      //     past: "You may have made some impulsive or reckless decisions in the past.",
      //     present: "You may be feeling lost or directionless at the moment.",
      //     future: "If you are not careful, you may repeat past mistakes."
      //           },
      //   positive: {
      //     past: "You have lived a life full of adventure and excitement.",
      //     present: "You are open to new experiences and new beginnings.",
      //     future: "You have a bright future ahead of you if you trust your intuition and follow your heart."
      //   },
      //   keywords: {
      //     positive: ["beginnings", "spontaneity", "originality", "innocence", "freedom", "faith", "inexperience"],
      //     negative: ["naivety", "recklessness", "risk-taking", "foolishness", "immaturity", "inexperience"]
      //   }
      // },
      cardImages: [
        {
          id: 0,
          art_set: "rider-waite-smith",
          label: "The Fool",
          alt: "A rendering of the tarot card The Fool depicting a jester",
          url: {
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/RWS_Tarot_00_Fool.jpg/512px-RWS_Tarot_00_Fool.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/RWS_Tarot_00_Fool.jpg/256px-RWS_Tarot_00_Fool.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/RWS_Tarot_00_Fool.jpg/128px-RWS_Tarot_00_Fool.jpg",
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/RWS_Tarot_00_Fool.jpg/64px-RWS_Tarot_00_Fool.jpg"
          },
          cardId: 0
        }
      ]
    },
    {
      id: 1,
      name: "The Magician",
      description: "The Magician is associated with the planet, Mercury and carries with it skill, logic, and intellect. The number of the Magician is one, the number of beginnings. The Magician is the bridge between the world of the spirit and the world of humanity. His right hand holds a staff raised toward the sky and his left hand points to the earth. He takes the power of the Universe and channels it through his own body and directs it to the physical plane. Above the Magician's head is the symbol of eternity and around his waist is a snake biting its own tail, another symbol of eternity. His magical table holds all four suits of the Tarot, each of which represents one of the four primordial elements of the alchemists – earth, air, fire and water. These symbolise the appropriate use of mind, heart, body and soul in the process of manifestation. The Magician's robe is white, symbolising the purity and innocence found in the Fool but his cloak is red, representing worldly experience and knowledge.",
      type: "major",
      orientation: true,
      cardImages: [
        {
          id: 1,
          art_set: "rider-waite-smith",
          label: "The Magician",
          alt: "A rendering of the tarot card The Magician depicting a magician",
          url: {
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/RWS_Tarot_01_Magician.jpg/512px-RWS_Tarot_01_Magician.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/RWS_Tarot_01_Magician.jpg/256px-RWS_Tarot_01_Magician.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/RWS_Tarot_01_Magician.jpg/128px-RWS_Tarot_01_Magician.jpg",
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/RWS_Tarot_01_Magician.jpg/64px-RWS_Tarot_01_Magician.jpg"
          },
          cardId: 1
        }
      ]
    },
    {
      id: 2,
      name: "The High Priestess",
      description: "The High Priestess is also known as Persephone, Isis, the Corn Maiden and Artemis. She sits at the gate before the great Mystery, as indicated by the Tree of Life in the background. She sits between the darkness and the light, represented by the pillars of Solomon's temple, which suggests it is she who is the mediator of the passage into the depth of reality. The tapestry hung between the pillars keeps the casual onlookers out and allows only those initiated to enter. The pomegranates on the tapestry are sacred to Persephone. They are a symbol of duty (because Persephone ate a pomegranate seed in the underworld which forced her to return every year). The blue robe the Priestess is wearing is a symbol of knowledge. She is wearing the crown of Isis (although she has the lunar crescent at her feet, not on her head) and on her lap is a Torah scroll, indicating her connection with the Hebrew tradition and the Tree of Life, which mentions wisdom.",
      type: "major",
      orientation: true,
      cardImages: [
        {
          id: 2,
          art_set: "rider-waite-smith",
          label: "The High Priestess",
          alt: "A rendering of the tarot card The High Priestess depicting a priestess",
          url: {
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/RWS_Tarot_02_High_Priestess.jpg/500px-RWS_Tarot_02_High_Priestess.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/RWS_Tarot_02_High_Priestess.jpg/256px-RWS_Tarot_02_High_Priestess.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/100px-RWS_Tarot_02_High_Priestess.jpg",
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/64px-RWS_Tarot_02_High_Priestess.jpg"
          },
          cardId: 2
        }
      ]
    },
    {
      id: 3,
      name: "The Empress",
      description: "The Empress is Demeter, the Earth Mother, fertility goddess, and is connected with the goddesses of the moon. She is the nurturer who provides love, protection and abundance. She is the giver of earthly gifts, although at the same time, she can, in anger withhold, as Demeter did when her daughter, Persephone, was kidnapped. In fury and grief, she kept the Earth barren till her child was returned to her. There is, in all of us, a desire to be loved completely and absolutely. When the Empress appears in a reading, she tells you that you will be loved in just this way. She also reminds you that you must also nurture yourself and that you have the ability to provide yourself with all the love you need.",
      type: "major",
      orientation: true,
      cardImages: [
        {
          id: 3,
          art_set: "rider-waite-smith",
          label: "The Empress",
          alt: "A rendering of the tarot card The Empress depicting a mother",
          url: {
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/RWS_Tarot_03_Empress.jpg/512px-RWS_Tarot_03_Empress.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/RWS_Tarot_03_Empress.jpg/256px-RWS_Tarot_03_Empress.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/RWS_Tarot_03_Empress.jpg/128px-RWS_Tarot_03_Empress.jpg",
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/RWS_Tarot_03_Empress.jpg/64px-RWS_Tarot_03_Empress.jpg"
          },
          cardId: 3
        }
      ]
    },
    {
      id: 4,
      name: "The Emperor",
      description: "The Emperor is the complement to the Empress. He is the Masculine Principle, the Animus and the Patriarch. He represents power and authority, and his stern attitude is quite a departure from the sensual beauty of the Empress. The Emperor has a long, white beard, a symbol of his experience. As an archetype, it is common to see masculine figures of authority or father figures with long white beards. These include Father Christmas, Merlin, and Gandalf. He wears armor, another indication of experience, and his red robes imply the fiery passion of the masculine principle. He sits upon a cubic stone, a symbol of the physical world and his own control of it. In his right hand, he holds an ankh, the Egyptian symbol of life, and in his left is an orb representing the world over which he rules.",
      type: "major",
      orientation: true,
      cardImages: [
        {
          id: 4,
          art_set: "rider-waite-smith",
          label: "The Emperor",
          alt: "A rendering of the tarot card The Emperor depicting a king",
          url: {
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/RWS_Tarot_04_Emperor.jpg/512px-RWS_Tarot_04_Emperor.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/RWS_Tarot_04_Emperor.jpg/256px-RWS_Tarot_04_Emperor.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/RWS_Tarot_04_Emperor.jpg/128px-RWS_Tarot_04_Emperor.jpg",
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/RWS_Tarot_04_Emperor.jpg/64px-RWS_Tarot_04_Emperor.jpg"
          },
          cardId: 4
        }
      ]
    },
    {
      id: 5,
      name: "The Hierophant",
      description: "The Hierophant is known as the High Priest in some decks. He is the masculine counterpart to the High Priestess. He is also known as Chiron, the Pope and the Shaman. The Hierophant is ruled by Taurus. The Hierophant is the wise teacher and counselor who brings structured religion to mankind. He represents the need to conform to rules or fixed situations. His appearance in a reading can show that you are struggling with a force that is not innovative, free-spirited or individual. Groups can be enriching or stifling, depending on circumstances. Sometimes we need to follow a program or embrace tradition, other times, we need to trust ourselves.",
      type: "major",
      orientation: true,
      cardImages: [
        {
          id: 5,
          art_set: "rider-waite-smith",
          label: "The Hierophant",
          alt: "A rendering of the tarot card The Hierophant depicting a priest",
          url: {
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/RWS_Tarot_05_Hierophant.jpg/512px-RWS_Tarot_05_Hierophant.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/RWS_Tarot_05_Hierophant.jpg/256px-RWS_Tarot_05_Hierophant.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/RWS_Tarot_05_Hierophant.jpg/128px-RWS_Tarot_05_Hierophant.jpg",
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/RWS_Tarot_05_Hierophant.jpg/64px-RWS_Tarot_05_Hierophant.jpg"
          },
          cardId: 5
        }
      ]
    },
    {
      id: 6,
      name: "The Lovers",
      description: "The Lovers represent relationships and choices. Its appearance in a spread indicates some decision about an existing relationship, a temptation of the heart, or a choice of potential partners. Often an aspect of the Querent's life will have to be sacrificed; a bachelor(ette)'s lifestyle may be sacrificed and a relationship gained (or vice versa), or one potential partner may be chosen while another is turned down. Whatever the choice, it should not be made lightly, as the ramifications will be lasting. This card is associated with the astrological sign of Gemini.",
      type: "major",
      orientation: true,
      cardImages: [
        {
          id: 6,
          art_set: "rider-waite-smith",
          label: "The Lovers",
          alt: "A rendering of the tarot card The Lovers depicting a couple",
          url: {
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/RWS_Tarot_06_Lovers.jpg/512px-RWS_Tarot_06_Lovers.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/RWS_Tarot_06_Lovers.jpg/256px-RWS_Tarot_06_Lovers.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/RWS_Tarot_06_Lovers.jpg/128px-RWS_Tarot_06_Lovers.jpg",
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/RWS_Tarot_06_Lovers.jpg/64px-RWS_Tarot_06_Lovers.jpg"
          },
          cardId: 6
        }
      ]
    },
    {
      id: 7,
      name: "The Chariot",
      description: "The Chariot is the representation of Victory, the conquering Hero who stands up in the Chariot that is pulled by two horses. The Chariot is literally the triumphal vehicle of a victorious king, conquering prince, or even death. The Chariot is linked to the astrological sign of Cancer. It reflects the drive and ambition needed to succeed and to achieve victory over one's opponents. It implies self-control and discipline, indicating that the Querent should harness his or her emotions and control any conflicting impulses in order to triumph over whatever challenges he or she may face. The Chariot also represents the healthy functioning of the body, suggesting that the Querent is in control of his or her physical self.",
      type: "major",
      orientation: true,
      cardImages: [
        {
          id: 7,
          art_set: "rider-waite-smith",
          label: "The Chariot",
          alt: "A rendering of the tarot card The Chariot depicting a chariot",
          url: {
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/RWS_Tarot_07_Chariot.jpg/153px-RWS_Tarot_07_Chariot.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/RWS_Tarot_07_Chariot.jpg/256px-RWS_Tarot_07_Chariot.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/RWS_Tarot_07_Chariot.jpg/128px-RWS_Tarot_07_Chariot.jpg",
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/RWS_Tarot_07_Chariot.jpg/64px-RWS_Tarot_07_Chariot.jpg"
          },
          cardId: 7
        }
      ]
    },
    {
      id: 8,
      name: "Strength",
      description: "Strength is a card of courage, inner strength, and compassion. It represents the ability to overcome challenges and to face your fears. Strength also reminds you to be kind and compassionate towards yourself and others.",
      type: "major",
      orientation: true,
      cardImages: [
        {
          id: 8,
          art_set: "rider-waite-smith",
          label: "Strength",
          alt: "A rendering of the tarot card Strength depicting a person holding the mouth of a lion open",
          url: {
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/RWS_Tarot_08_Strength.jpg/149px-RWS_Tarot_08_Strength.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/RWS_Tarot_08_Strength.jpg/256px-RWS_Tarot_08_Strength.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/RWS_Tarot_08_Strength.jpg/128px-RWS_Tarot_08_Strength.jpg",
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/RWS_Tarot_08_Strength.jpg/64px-RWS_Tarot_08_Strength.jpg"
          },
          cardId: 8
        }
      ]
    },
    {
      id: 9,
      name: "The Hermit",
      description: "The Hermit is a card of solitude, introspection, and self-discovery. It represents the need to take time for yourself to reflect on your life and to find your own path. The Hermit also reminds you that you are not alone and that there is always guidance available.",
      type: "major",
      orientation: true,
      cardImages: [
        {
          id: 9,
          art_set: "rider-waite-smith",
          label: "The Hermit",
          alt: "A rendering of the tarot card The Hermit depicting a cloaked figure with a staff and lantern walking through the snow",
          url: {
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/RWS_Tarot_09_Hermit.jpg/154px-RWS_Tarot_09_Hermit.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/RWS_Tarot_09_Hermit.jpg/256px-RWS_Tarot_09_Hermit.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/RWS_Tarot_09_Hermit.jpg/128px-RWS_Tarot_09_Hermit.jpg",
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/RWS_Tarot_09_Hermit.jpg/64px-RWS_Tarot_09_Hermit.jpg"
          },
          cardId: 9
        }
      ]
    },
    {
      id: 10,
      name: "Wheel of Fortune",
      description: "Wheel of Fortune is a card of change, cycles, and karma. It represents the fact that life is constantly changing and that everything happens for a reason. Wheel of Fortune also reminds you to go with the flow and to embrace the changes that come your way.",
      type: "major",
      orientation: true,
      cardImages: [
        {
          id: 10,
          art_set: "rider-waite-smith",
          label: "Wheel of Fortune",
          alt: "A rendering of the tarot card Wheel of Fortune depicting a spinning wheel with four figures on it, representing the four seasons of life.",
          url: {
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg/156px-RWS_Tarot_10_Wheel_of_Fortune.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg/256px-RWS_Tarot_10_Wheel_of_Fortune.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg/128px-RWS_Tarot_10_Wheel_of_Fortune.jpg",
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg/64px-RWS_Tarot_10_Wheel_of_Fortune.jpg"
          },
          cardId: 10
        }
      ]
    },
    {
      id: 11,
      name: "Justice",
      description: "Justice is a card of fairness, balance, and truth. It represents the need to act with integrity and to treat others with respect. Justice also reminds you that there is always a consequence for your actions.",
      type: "major",
      orientation: true,
      cardImages: [
        {
          id: 11,
          art_set: "rider-waite-smith",
          label: "Justice",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/RWS_Tarot_11_Justice.jpg/64px-RWS_Tarot_11_Justice.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/RWS_Tarot_11_Justice.jpg/128px-RWS_Tarot_11_Justice.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/RWS_Tarot_11_Justice.jpg/256px-RWS_Tarot_11_Justice.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/RWS_Tarot_11_Justice.jpg/512px-RWS_Tarot_11_Justice.jpg"
          },
          alt: "A rendering of the tarot card Justice depicting a figure holding a sword and scales",
          cardId: 11
        }
      ]
    },
    {
      id: 12,
      name: "The Hanged Man",
      description: "The Hanged Man is a card of surrender, sacrifice, and new perspectives. It represents the need to let go of the old in order to make room for the new. The Hanged Man also reminds you to look at things from a different perspective and to see the world in a new light.",
      type: "major",
      orientation: true,
      cardImages: [
        {
          id: 12,
          art_set: "rider-waite-smith",
          label: "The Hanged Man",
          alt: "A rendering of the tarot card The Hanged Man depicting a figure hanging upside down from a tree.",
          url: {
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/RWS_Tarot_12_Hanged_Man.jpg/153px-RWS_Tarot_12_Hanged_Man.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/RWS_Tarot_12_Hanged_Man.jpg/256px-RWS_Tarot_12_Hanged_Man.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/RWS_Tarot_12_Hanged_Man.jpg/128px-RWS_Tarot_12_Hanged_Man.jpg",
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/RWS_Tarot_12_Hanged_Man.jpg/64px-RWS_Tarot_12_Hanged_Man.jpg"
          },
          cardId: 12
        }
      ]
    },
    {
      id: 13,
      name: "Death",
      description: "Death is a card of transformation, endings, and new beginnings. It represents the fact that death is a natural part of life and that it is necessary for new growth to occur. Death also reminds you to let go of the past and to embrace the present moment.",
      type: "major",
      orientation: true,
      cardImages: [
        {
          id: 13,
          art_set: "rider-waite-smith",
          label: "Death",
          alt: "A rendering of the tarot card Death depicting a skeletal figure riding a horse and carrying a scythe.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/RWS_Tarot_13_Death.jpg/64px-RWS_Tarot_13_Death.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/RWS_Tarot_13_Death.jpg/128px-RWS_Tarot_13_Death.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/RWS_Tarot_13_Death.jpg/256px-RWS_Tarot_13_Death.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/RWS_Tarot_13_Death.jpg/512px-RWS_Tarot_13_Death.jpg"
          },
          cardId: 13
        }
      ]
    },
    {
      id: 14,
      name: "Temperance",
      description: "Temperance is a card of balance, moderation, and patience. It represents the need to find harmony in all areas of your life. Temperance also reminds you to be patient and to trust that things will work out in the end.",
      type: "major",
      orientation: true,
      cardImages: [
        {
          id: 14,
          art_set: "rider-waite-smith",
          label: "Temperance",
          alt: "A rendering of the tarot card Temperance depicting an angel standing between two pools of water, pouring water from one to the other.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/RWS_Tarot_14_Temperance.jpg/64px-RWS_Tarot_14_Temperance.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/RWS_Tarot_14_Temperance.jpg/128px-RWS_Tarot_14_Temperance.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/RWS_Tarot_14_Temperance.jpg/256px-RWS_Tarot_14_Temperance.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/RWS_Tarot_14_Temperance.jpg/512px-RWS_Tarot_14_Temperance.jpg"
          },
          cardId: 14
        }
      ]
    },
    {
      id: 15,
      name: "The Devil",
      description: "The Devil is a card of temptation, addiction, and materialism. It represents the shadow self and the dark side of human nature. The Devil also reminds you to be aware of your own temptations and to avoid falling into excess.",
      type: "major",
      orientation: true,
      cardImages: [
        {
          id: 15,
          art_set: "rider-waite-smith",
          label: "The Devil",
          alt: "A rendering of the tarot card The Devil depicting a horned figure with a bat's wings and cloven hooves, sitting on a throne with two naked figures chained to it.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/RWS_Tarot_15_Devil.jpg/64px-RWS_Tarot_15_Devil.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/RWS_Tarot_15_Devil.jpg/128px-RWS_Tarot_15_Devil.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/RWS_Tarot_15_Devil.jpg/256px-RWS_Tarot_15_Devil.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/RWS_Tarot_15_Devil.jpg/512px-RWS_Tarot_15_Devil.jpg"
          },
          cardId: 15
        }
      ]
    },
    {
      id: 16,
      name: "The Tower",
      description: "The Tower is a card of sudden change, upheaval, and destruction. It represents the need to let go of old structures and beliefs in order to make room for the new. The Tower also reminds you that you are stronger than you think and that you can survive any challenge.",
      type: "major",
      orientation: true,
      cardImages: [
        {
          id: 16,
          art_set: "rider-waite-smith",
          label: "The Tower",
          alt: "A rendering of the tarot card The Tower depicting a tower struck by lightning and crumbling to the ground.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/RWS_Tarot_16_Tower.jpg/64px-RWS_Tarot_16_Tower.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/RWS_Tarot_16_Tower.jpg/128px-RWS_Tarot_16_Tower.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/RWS_Tarot_16_Tower.jpg/256px-RWS_Tarot_16_Tower.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/RWS_Tarot_16_Tower.jpg/512px-RWS_Tarot_16_Tower.jpg"
          },
          cardId: 16
        }
      ]
    },
    {
      id: 17,
      name: "The Star",
      description: "The Star is a card of hope, healing, and renewal. It represents the light at the end of the tunnel and the promise of a better future. The Star also reminds you to stay positive and to never give up on your dreams.",
      type: "major",
      orientation: true,
      cardImages: [
        {
          id: 17,
          art_set: "rider-waite-smith",
          label: "The Star",
          alt: "A rendering of the tarot card The Star depicting a naked woman kneeling beside a pool of water, pouring water from a pitcher into the pool.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/RWS_Tarot_17_Star.jpg/64px-RWS_Tarot_17_Star.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/RWS_Tarot_17_Star.jpg/128px-RWS_Tarot_17_Star.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/RWS_Tarot_17_Star.jpg/256px-RWS_Tarot_17_Star.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/RWS_Tarot_17_Star.jpg/512px-RWS_Tarot_17_Star.jpg"
          },
          cardId: 17
        }
      ]
    },
    {
      id: 18,
      name: "The Moon",
      description: "The Moon is a card of illusion, mystery, and the subconscious mind. It represents the hidden aspects of your personality and the depths of your soul. The Moon also reminds you to be open to new possibilities and to trust your intuition.",
      type: "major",
      orientation: true,
      cardImages: [
        {
          id: 18,
          art_set: "rider-waite-smith",
          label: "The Moon",
          alt: "A rendering of the tarot card The Moon depicting a full moon in the night sky, with a wolf and a dog howling at it.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/RWS_Tarot_18_Moon.jpg/64px-RWS_Tarot_18_Moon.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/RWS_Tarot_18_Moon.jpg/128px-RWS_Tarot_18_Moon.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/RWS_Tarot_18_Moon.jpg/256px-RWS_Tarot_18_Moon.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/RWS_Tarot_18_Moon.jpg/512px-RWS_Tarot_18_Moon.jpg"
          },
          cardId: 18
        }
      ]
    },
    {
      id: 19,
      name: "The Sun",
      description: "The Sun is a card of happiness, vitality, and success. It represents the joy of life and the power of the human spirit. The Sun also reminds you to shine your light on the world and to make a difference.",
      type: "major",
      orientation: true,
      cardImages: [
        {
          id: 19,
          art_set: "rider-waite-smith",
          label: "The Sun",
          alt: "A rendering of the tarot card The Sun depicting a naked child riding a white horse, with a sun shining in the sky.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/RWS_Tarot_19_Sun.jpg/64px-RWS_Tarot_19_Sun.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/RWS_Tarot_19_Sun.jpg/128px-RWS_Tarot_19_Sun.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/RWS_Tarot_19_Sun.jpg/256px-RWS_Tarot_19_Sun.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/RWS_Tarot_19_Sun.jpg/512px-RWS_Tarot_19_Sun.jpg"
          },
          cardId: 19
        }
      ]
    },
    {
      id: 20,
      name: "Judgment",
      description: "Judgment is a card of new beginnings, awakening, and forgiveness. It represents the need to let go of the past and to embrace the future. Judgment also reminds you that you have the power to create your own destiny.",
      type: "major",
      orientation: true,
      cardImages: [
        {
          id: 20,
          art_set: "rider-waite-smith",
          label: "Judgment",
          alt: "A rendering of the tarot card Judgment depicting an angel blowing a trumpet, with figures rising from their graves.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/RWS_Tarot_20_Judgement.jpg/156px-RWS_Tarot_20_Judgement.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/RWS_Tarot_20_Judgement.jpg/312px-RWS_Tarot_20_Judgement.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/RWS_Tarot_20_Judgement.jpg/624px-RWS_Tarot_20_Judgement.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/RWS_Tarot_20_Judgement.jpg/1248px-RWS_Tarot_20_Judgement.jpg"
          },
          cardId: 20
        }
      ]
    },
    {
      id: 21,
      name: "The World",
      description: "The World is a card of completion, fulfillment, and unity. It represents the end of a cycle and the beginning of a new one. The World also reminds you that you are connected to everything and everyone in the universe.",
      type: "major",
      orientation: true,
      cardImages: [
        {
          id: 21,
          art_set: "rider-waite-smith",
          label: "The World",
          alt: "A rendering of the tarot card The World depicting a woman dancing inside a laurel wreath, surrounded by four animals at the corners of the card.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/RWS_Tarot_21_World.jpg/154px-RWS_Tarot_21_World.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/RWS_Tarot_21_World.jpg/308px-RWS_Tarot_21_World.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/RWS_Tarot_21_World.jpg/616px-RWS_Tarot_21_World.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/RWS_Tarot_21_World.jpg/1232px-RWS_Tarot_21_World.jpg"
          },
          cardId: 21
        }
      ]
    },
    {
      id: 22,
      name: "Ace of Wands",
      description: "The Ace of Wands is a card of new beginnings, inspiration, and creativity. It represents the spark of life and the potential for new growth. The Ace of Wands also reminds you to follow your dreams and to take action on your ideas.",
      type: "minor",
      suit: "wands",
      orientation: true,
      cardImages: [
        {
          id: 22,
          art_set: "rider-waite-smith",
          label: "Ace of Wands",
          alt: "A rendering of the tarot card Ace of Wands depicting a hand holding a wand with a sprouting leaf at the top.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Wands01.jpg/64px-Wands01.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Wands01.jpg/128px-Wands01.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Wands01.jpg/256px-Wands01.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Wands01.jpg/512px-Wands01.jpg"
          },

          cardId: 22
        }
      ]
    },
    {
      id: 23,
      name: "Two of Wands",
      description: "The Two of Wands is a card of duality, balance, and choice. It represents the need to weigh your options and make a decision. The Two of Wands also reminds you that you have the power to create your own future.",
      type: "minor",
      suit: "wands",
      orientation: true,
      cardImages: [
        {
          id: 23,
          art_set: "rider-waite-smith",
          label: "Two of Wands",
          alt: "A rendering of the tarot card Two of Wands depicting two crossed wands, with a globe on top.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Wands02.jpg/155px-Wands02.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Wands02.jpg/310px-Wands02.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Wands02.jpg/620px-Wands02.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Wands02.jpg/1240px-Wands02.jpg"
          },
          cardId: 23
        }
      ]
    },
    {
      id: 24,
      name: "Three of Wands",
      description: "The Three of Wands is a card of planning, preparation, and foresight. It represents the need to put in the work in order to achieve your goals. The Three of Wands also reminds you that you have the skills and resources you need to succeed.",
      type: "minor",
      suit: "wands",
      orientation: true,
      cardImages: [
        {
          id: 24,
          art_set: "rider-waite-smith",
          label: "Three of Wands",
          alt: "A rendering of the tarot card Three of Wands depicting a man standing on a cliff, looking out at the sea.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Wands03.jpg/153px-Wands03.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Wands03.jpg/306px-Wands03.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Wands03.jpg/612px-Wands03.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Wands03.jpg/1224px-Wands03.jpg"
          },
          cardId: 24
        }
      ]
    },
    {
      id: 25,
      name: "Four of Wands",
      description: "The Four of Wands is a card of celebration, harmony, and community. It represents the joy of being together with loved ones and the feeling of belonging. The Four of Wands also reminds you to cherish the good times and to savor the moments.",
      type: "minor",
      suit: "wands",
      orientation: true,
      cardImages: [
        {
          id: 25,
          art_set: "rider-waite-smith",
          label: "Four of Wands",
          alt: "A rendering of the tarot card Four of Wands depicting two couples dancing under a garland of flowers.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Wands04.jpg/153px-Wands04.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Wands04.jpg/306px-Wands04.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Wands04.jpg/612px-Wands04.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Wands04.jpg/1224px-Wands04.jpg"
          },
          cardId: 25
        }
      ]
    },
    {
      id: 26,
      name: "Five of Wands",
      description: "The Five of Wands is a card of conflict, competition, and rivalry. It represents the challenges and setbacks that we all face in life. The Five of Wands also reminds us that it is important to stand up for ourselves and to fight for what we believe in.",
      type: "minor",
      suit: "wands",
      orientation: true,
      cardImages: [
        {
          id: 26,
          art_set: "rider-waite-smith",
          label: "Five of Wands",
          alt: "A rendering of the tarot card Five of Wands depicting five young men fighting with wands.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Wands05.jpg/154px-Wands05.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Wands05.jpg/308px-Wands05.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Wands05.jpg/616px-Wands05.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Wands05.jpg/1232px-Wands05.jpg"
          },
          cardId: 26
        }
      ]
    },
    {
      id: 27,
      name: "Six of Wands",
      description: "The Six of Wands is a card of victory, success, and recognition. It represents the fruits of your labor and the rewards of your hard work. The Six of Wands also reminds you to celebrate your accomplishments and to enjoy your success.",
      type: "minor",
      suit: "wands",
      orientation: true,
      cardImages: [
        {
          id: 27,
          art_set: "rider-waite-smith",
          label: "Six of Wands",
          alt: "A rendering of the tarot card Six of Wands depicting a man on horseback, holding a laurel wreath in the air.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Wands06.jpg/156px-Wands06.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Wands06.jpg/312px-Wands06.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Wands06.jpg/624px-Wands06.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Wands06.jpg/1248px-Wands06.jpg"
          },
          cardId: 27
        }
      ]
    },
    {
      id: 28,
      name: "Seven of Wands",
      description: "The Seven of Wands is a card of challenge, perseverance, and determination. It represents the need to stand up for yourself and to fight for what you believe in. The Seven of Wands also reminds you that you are stronger and more resilient than you think you are.",
      type: "minor",
      suit: "wands",
      orientation: true,
      cardImages: [
        {
          id: 28,
          art_set: "rider-waite-smith",
          label: "Seven of Wands",
          alt: "A rendering of the tarot card Seven of Wands depicting a man standing on a cliff, defending himself from six other men with wands.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Wands07.jpg/153px-Wands07.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Wands07.jpg/306px-Wands07.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Wands07.jpg/612px-Wands07.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Wands07.jpg/1224px-Wands07.jpg"
          },
          cardId: 28
        }
      ]
    },
    {
      id: 29,
      name: "Eight of Wands",
      description: "The Eight of Wands is a card of movement, progress, and change. It represents the swift unfolding of events and the rapid pace of life. The Eight of Wands also reminds you to be flexible and adaptable, and to go with the flow.",
      type: "minor",
      suit: "wands",
      orientation: true,
      cardImages: [
        {
          id: 29,
          art_set: "rider-waite-smith",
          label: "Eight of Wands",
          alt: "A rendering of the tarot card Eight of Wands depicting eight wands flying through the air.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Wands08.jpg/153px-Wands08.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Wands08.jpg/306px-Wands08.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Wands08.jpg/612px-Wands08.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Wands08.jpg/1224px-Wands08.jpg"
          },
          cardId: 29
        }
      ]
    },
    {
      id: 30,
      name: "Nine of Wands",
      description: "The Nine of Wands is a card of perseverance, resilience, and strength. It represents the ability to overcome any challenge and to emerge victorious. The Nine of Wands also reminds you that you are stronger than you think you are.",
      type: "minor",
      suit: "wands",
      orientation: true,
      cardImages: [
        {
          id: 30,
          art_set: "rider-waite-smith",
          label: "Nine of Wands",
          alt: "A rendering of the tarot card Nine of Wands depicting a man with a wand in each hand, standing guard over eight other wands.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Tarot_Nine_of_Wands.jpg/64px-Tarot_Nine_of_Wands.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Tarot_Nine_of_Wands.jpg/128px-Tarot_Nine_of_Wands.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Tarot_Nine_of_Wands.jpg/256px-Tarot_Nine_of_Wands.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Tarot_Nine_of_Wands.jpg/512px-Tarot_Nine_of_Wands.jpg"
          },
          cardId: 30
        }
      ]
    },
    {
      id: 31,
      name: "Ten of Wands",
      description: "The Ten of Wands is a card of responsibility, burden, and overwhelm. It represents the challenges of success and the weight of expectation. The Ten of Wands also reminds you that you are not alone and that there are people who can help you carry your burdens.",
      type: "minor",
      suit: "wands",
      orientation: true,
      cardImages: [
        {
          id: 31,
          art_set: "rider-waite-smith",
          label: "Ten of Wands",
          alt: "A rendering of the tarot card Ten of Wands depicting a man carrying a heavy bundle of sticks on his back.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Wands10.jpg/64px-Wands10.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Wands10.jpg/128px-Wands10.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Wands10.jpg/256px-Wands10.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Wands10.jpg/512px-Wands10.jpg"
          },
          cardId: 31
        }
      ]
    },
    {
      id: 32,
      name: "Page of Wands",
      description: "The Page of Wands is a card of new beginnings, excitement, and enthusiasm. It represents the spark of inspiration and the potential for new growth. The Page of Wands also reminds you to follow your dreams and to pursue your passions.",
      type: "minor",
      suit: "wands",
      orientation: true,
      cardImages: [
        {
          id: 32,
          art_set: "rider-waite-smith",
          label: "Page of Wands",
          alt: "A rendering of the tarot card Page of Wands depicting a young man holding a wand in one hand and a flower in the other.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Wands11.jpg/64px-Wands11.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Wands11.jpg/128px-Wands11.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Wands11.jpg/256px-Wands11.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Wands11.jpg/512px-Wands11.jpg"
          },
          cardId: 32
        }
      ]
    },
    {
      id: 33,
      name: "Knight of Wands",
      description: "The Knight of Wands is a card of action, adventure, and courage. It represents the need to take risks and to go after what you want in life. The Knight of Wands also reminds you to be bold and to seize the moment.",
      type: "minor",
      suit: "wands",
      orientation: true,
      cardImages: [
        {
          id: 33,
          art_set: "rider-waite-smith",
          label: "Knight of Wands",
          alt: "A rendering of the tarot card Knight of Wands depicting a young man on a white horse, holding a wand in one hand and a shield in the other.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Wands12.jpg/64px-Wands12.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Wands12.jpg/128px-Wands12.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Wands12.jpg/256px-Wands12.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Wands12.jpg/512px-Wands12.jpg"
          },
          cardId: 33
        }
      ]
    },
    {
      id: 34,
      name: "Queen of Wands",
      description: "The Queen of Wands is a card of passion, creativity, and leadership. It represents the feminine aspect of the Wands suit and the power of fire. The Queen of Wands also reminds you to be confident and to embrace your own power.",
      type: "minor",
      suit: "wands",
      orientation: true,
      cardImages: [
        {
          id: 34,
          art_set: "rider-waite-smith",
          label: "Queen of Wands",
          alt: "A rendering of the tarot card Queen of Wands depicting a woman sitting on a throne, holding a wand in one hand and a sunflower in the other.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Wands13.jpg/64px-Wands13.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Wands13.jpg/128px-Wands13.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Wands13.jpg/256px-Wands13.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Wands13.jpg/512px-Wands13.jpg"
          },
          cardId: 34
        }
      ]
    },
    {
      id: 35,
      name: "King of Wands",
      description: "The King of Wands is a card of authority, leadership, and vision. It represents the masculine aspect of the Wands suit and the power of fire. The King of Wands also reminds you to be strong and to stand up for what you believe in.",
      type: "minor",
      suit: "wands",
      orientation: true,
      cardImages: [
        {
          id: 35,
          art_set: "rider-waite-smith",
          label: "King of Wands",
          alt: "A rendering of the tarot card King of Wands depicting a man sitting on a throne, holding a wand in one hand and a lion-headed scepter in the other.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Wands14.jpg/64px-Wands14.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Wands14.jpg/128px-Wands14.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Wands14.jpg/256px-Wands14.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Wands14.jpg/512px-Wands14.jpg"
          },
          cardId: 35
        }
      ]
    },
    {
      id: 36,
      name: "Ace of Cups",
      description: "The Ace of Cups is a card of new beginnings, love, and compassion. It represents the overflowing cup of emotions and the potential for deep connection with others. The Ace of Cups also reminds you to open your heart to love and to let yourself be loved.",
      type: "minor",
      suit: "cups",
      orientation: true,
      cardImages: [
        {
          id: 36,
          art_set: "rider-waite-smith",
          label: "Ace of Cups",
          alt: "A rendering of the tarot card Ace of Cups depicting a white dove holding a golden cup in its beak.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Cups01.jpg/64px-Cups01.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Cups01.jpg/128px-Cups01.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Cups01.jpg/256px-Cups01.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Cups01.jpg/512px-Cups01.jpg"
          },
          cardId: 36
        }
      ]
    },
    {
      id: 37,
      name: "Two of Cups",
      description: "The Two of Cups is a card of harmony, balance, and partnership. It represents the union of two people in love, or the coming together of two opposing forces. The Two of Cups also reminds you to cherish your relationships and to nurture the connections that you have with others.",
      type: "minor",
      suit: "cups",
      orientation: true,
      cardImages: [
        {
          id: 37,
          art_set: "rider-waite-smith",
          label: "Two of Cups",
          alt: "A rendering of the tarot card Two of Cups depicting a man and a woman sitting face-to-face, holding cups in their hands.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Cups02.jpg/64px-Cups02.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Cups02.jpg/128px-Cups02.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Cups02.jpg/256px-Cups02.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Cups02.jpg/512px-Cups02.jpg"
          },
          cardId: 37
        }
      ]
    },
    {
      id: 38,
      name: "Three of Cups",
      description: "The Three of Cups is a card of celebration, friendship, and joy. It represents the coming together of three people in celebration, or the harmony and balance that exists between three different aspects of your life. The Three of Cups also reminds you to cherish your friendships and to celebrate the good times in life.",
      type: "minor",
      suit: "cups",
      orientation: true,
      cardImages: [
        {
          id: 38,
          art_set: "rider-waite-smith",
          label: "Three of Cups",
          alt: "A rendering of the tarot card Three of Cups depicting three women dancing and celebrating together.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Cups03.jpg/64px-Cups03.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Cups03.jpg/128px-Cups03.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Cups03.jpg/256px-Cups03.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Cups03.jpg/512px-Cups03.jpg"
          },
          cardId: 38
        }
      ]
    },
    {
      id: 39,
      name: "Four of Cups",
      description: "The Four of Cups is a card of contentment, boredom, and apathy. It represents the feeling of being stuck in a rut or of being dissatisfied with your current situation. The Four of Cups also reminds you that you are in control of your own happiness and that you have the power to change your circumstances.",
      type: "minor",
      suit: "cups",
      orientation: true,
      cardImages: [
        {
          id: 39,
          art_set: "rider-waite-smith",
          label: "Four of Cups",
          alt: "A rendering of the tarot card Four of Cups depicting a young man sitting under a tree, looking at three cups on the ground in front of him. A fourth cup is being offered to him by a hand from the clouds.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Cups04.jpg/64px-Cups04.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Cups04.jpg/128px-Cups04.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Cups04.jpg/256px-Cups04.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Cups04.jpg/512px-Cups04.jpg"
          },
          cardId: 39
        }
      ]
    },
    {
      id: 40,
      name: "Five of Cups",
      description: "The Five of Cups is a card of loss, disappointment, and regret. It represents the pain of losing something or someone that is important to you. The Five of Cups also reminds you that grief is a natural process and that it is important to allow yourself to feel your emotions.",
      type: "minor",
      suit: "cups",
      orientation: true,
      cardImages: [
        {
          id: 40,
          art_set: "rider-waite-smith",
          label: "Five of Cups",
          alt: "A rendering of the tarot card Five of Cups depicting a young man kneeling in front of a fountain, looking at three cups that have fallen to the ground. Two cups remain upright in the fountain.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cups05.jpg/64px-Cups05.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cups05.jpg/128px-Cups05.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cups05.jpg/256px-Cups05.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cups05.jpg/512px-Cups05.jpg"
          },
          cardId: 40
        }
      ]
    },
    {
      id: 41,
      name: "Six of Cups",
      description: "The Six of Cups is a card of nostalgia, childhood memories, and the past. It represents the feeling of longing for a simpler time or for a relationship that is no more. The Six of Cups also reminds you to cherish your memories and to appreciate the good times that you have had in the past.",
      type: "minor",
      suit: "cups",
      orientation: true,
      cardImages: [
        {
          id: 41,
          art_set: "rider-waite-smith",
          label: "Six of Cups",
          alt: "A rendering of the tarot card Six of Cups depicting two children playing together in a garden. In the background, there are six cups arranged in a circle.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Cups06.jpg/64px-Cups06.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Cups06.jpg/128px-Cups06.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Cups06.jpg/256px-Cups06.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Cups06.jpg/512px-Cups06.jpg"
          },
          cardId: 41
        }
      ]
    },
    {
      id: 42,
      name: "Seven of Cups",
      description: "The Seven of Cups is a card of illusion, fantasy, and temptation. It represents the many different choices and possibilities that are available to you. The Seven of Cups also reminds you to be careful of what you wish for and to make sure that you are choosing the right things for yourself.",
      type: "minor",
      suit: "cups",
      orientation: true,
      cardImages: [
        {
          id: 42,
          art_set: "rider-waite-smith",
          label: "Seven of Cups",
          alt: "A rendering of the tarot card Seven of Cups depicting a young man sitting on the ground in front of seven cups, each containing a different image.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Cups07.jpg/64px-Cups07.jpg",
            small:  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Cups07.jpg/128px-Cups07.jpg",
            mid:  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Cups07.jpg/256px-Cups07.jpg",
            large:  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Cups07.jpg/512px-Cups07.jpg"
          },
          cardId: 42
        }
      ]
    },
    {
      id: 43,
      name: "Eight of Cups",
      description: "The Eight of Cups is a card of change, transition, and new beginnings. It represents the need to let go of the past and to move on to new and better things. The Eight of Cups also reminds you that you are in control of your own destiny and that you have the power to create the life that you want.",
      type: "minor",
      suit: "cups",
      orientation: true,
      cardImages: [
        {
          id: 43,
          art_set: "rider-waite-smith",
          label: "Eight of Cups",
          alt: "A rendering of the tarot card Eight of Cups depicting a man walking away from eight cups that are arranged in a circle.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Cups08.jpg/64px-Cups08.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Cups08.jpg/128px-Cups08.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Cups08.jpg/256px-Cups08.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Cups08.jpg/512px-Cups08.jpg"
          },
          cardId: 43
        }
      ]
    },
    {
      id: 44,
      name: "Nine of Cups",
      description: "The Nine of Cups is a card of contentment, satisfaction, and fulfillment. It represents the achievement of your goals and the realization of your dreams. The Nine of Cups also reminds you to appreciate all of the good things in your life and to be grateful for all of your blessings.",
      type: "minor",
      suit: "cups",
      orientation: true,
      cardImages: [
        {
          id: 44,
          art_set: "rider-waite-smith",
          label: "Nine of Cups",
          alt: "A rendering of the tarot card Nine of Cups depicting a man sitting at a table with nine cups in front of him. He is smiling and looks content.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Cups09.jpg/64px-Cups09.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Cups09.jpg/128px-Cups09.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Cups09.jpg/256px-Cups09.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Cups09.jpg/512px-Cups09.jpg"
          },
          cardId: 44
        }
      ]
    },
    {
      id: 45,
      name: "Ten of Cups",
      description: "The Ten of Cups is a card of happiness, love, and family. It represents the perfect union of two people and the creation of a new family. The Ten of Cups also reminds you to cherish your relationships and to enjoy the simple things in life.",
      type: "minor",
      suit: "cups",
      orientation: true,
      cardImages: [
        {
          id: 45,
          art_set: "rider-waite-smith",
          label: "Ten of Cups",
          alt: "A rendering of the tarot card Ten of Cups depicting a family of four standing under a rainbow. They are all holding hands and smiling.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Cups10.jpg/64px-Cups10.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Cups10.jpg/128px-Cups10.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Cups10.jpg/256px-Cups10.jpg",
            large:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Cups10.jpg/512px-Cups10.jpg"
          },
          cardId: 45
        }
      ]
    },
    {
      id: 46,
      name: "Page of Cups",
      description: "The Page of Cups is a card of new beginnings, fresh starts, and new opportunities. It represents the birth of a new relationship, the start of a new project, or the beginning of a new chapter in your life. The Page of Cups also reminds you to be open to new experiences and to follow your dreams.",
      type: "minor",
      suit: "cups",
      orientation: true,
      cardImages: [
        {
          id: 46,
          art_set: "rider-waite-smith",
          label: "Page of Cups",
          alt: "A rendering of the tarot card Page of Cups depicting a young man kneeling by a stream, offering a cup of water to a fish.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Cups11.jpg/64px-Cups11.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Cups11.jpg/128px-Cups11.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Cups11.jpg/256px-Cups11.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Cups11.jpg/512px-Cups11.jpg"
          },
          cardId: 46
        }
      ]
    },
    {
      id: 47,
      name: "Knight of Cups",
      description: "The Knight of Cups is a card of romance, idealism, and chivalry. It represents a young man who is passionate about love and who is always willing to help others. The Knight of Cups also reminds you to be open to new experiences and to follow your heart.",
      type: "minor",
      suit: "cups",
      orientation: true,
      cardImages: [
        {
          id: 47,
          art_set: "rider-waite-smith",
          label: "Knight of Cups",
          alt: "A rendering of the tarot card Knight of Cups depicting a young man riding on a white horse, holding a cup in one hand and a flower in the other.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Cups12.jpg/64px-Cups12.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Cups12.jpg/128px-Cups12.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Cups12.jpg/256px-Cups12.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Cups12.jpg/512px-Cups12.jpg"
          },
          cardId: 47
        }
      ]
    },
    {
      id: 48,
      name: "Queen of Cups",
      description: "The Queen of Cups is a card of compassion, empathy, and intuition. It represents a woman who is wise and compassionate, and who is always willing to help others. The Queen of Cups also reminds you to listen to your intuition and to follow your heart.",
      type: "minor",
      suit: "cups",
      orientation: true,
      cardImages: [
        {
          id: 48,
          art_set: "rider-waite-smith",
          label: "Queen of Cups",
          alt: "A rendering of the tarot card Queen of Cups depicting a woman sitting on a throne, holding a cup in one hand and a golden fish in the other.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Cups13.jpg/64px-Cups13.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Cups13.jpg/128px-Cups13.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Cups13.jpg/256px-Cups13.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Cups13.jpg/512px-Cups13.jpg"
          },
          cardId: 48
        }
      ]
    },
    {
      id: 49,
      name: "King of Cups",
      description: "The King of Cups is a card of wisdom, compassion, and understanding. It represents a man who is wise and compassionate, and who is always willing to help others. The King of Cups also reminds you to be kind and compassionate to yourself and to others.",
      type: "minor",
      suit: "cups",
      orientation: true,
      cardImages: [
        {
          id: 49,
          art_set: "rider-waite-smith",
          label: "King of Cups",
          alt: "A rendering of the tarot card King of Cups depicting a man sitting on a throne, holding a cup in one hand and a scepter in the other.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Cups14.jpg/64px-Cups14.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Cups14.jpg/128px-Cups14.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Cups14.jpg/256px-Cups14.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Cups14.jpg/512px-Cups14.jpg"
          },
          cardId: 49
        }
      ]
    },
    {
      id: 50,
      name: "Ace of Swords",
      description: "The Ace of Swords is a card of new beginnings, clarity of thought, and intellectual insight. It represents the power of the mind and the ability to see things clearly. The Ace of Swords also reminds you to be honest with yourself and to speak your truth.",
      type: "minor",
      suit: "swords",
      orientation: true,
      cardImages: [
        {
          id: 50,
          art_set: "rider-waite-smith",
          label: "Ace of Swords",
          alt: "A rendering of the tarot card Ace of Swords depicting a white hand emerging from a cloud, holding a sword. Above the sword is a crown.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Swords01.jpg/64px-Swords01.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Swords01.jpg/128px-Swords01.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Swords01.jpg/256px-Swords01.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Swords01.jpg/512px-Swords01.jpg"
          },
          cardId: 50
        }
      ]
    },
    {
      id: 51,
      name: "Two of Swords",
      description: "The Two of Swords is a card of indecision, stalemate, and conflict. It represents the difficulty of making a decision and the feeling of being stuck between two options. The Two of Swords also reminds you to weigh your options carefully and to make a decision that is right for you.",
      type: "minor",
      suit: "swords",
      orientation: true,
      cardImages: [
        {
          id: 51,
          art_set: "rider-waite-smith",
          label: "Two of Swords",
          alt: "A rendering of the tarot card Two of Swords depicting a woman blindfolded, sitting between two swords. She is holding a sword in each hand.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Swords02.jpg/64px-Swords02.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Swords02.jpg/128px-Swords02.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Swords02.jpg/256px-Swords02.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Swords02.jpg/512px-Swords02.jpg"
          },
          cardId: 51
        }
      ]
    },
    {
      id: 52,
      name: "Three of Swords",
      description: "The Three of Swords is a card of heartbreak, sorrow, and betrayal. It represents the pain of loss and the feeling of being broken-hearted. The Three of Swords also reminds you that it is okay to feel your emotions and to allow yourself to grieve.",
      type: "minor",
      suit: "swords",
      orientation: true,
      cardImages: [
        {
          id: 52,
          art_set: "rider-waite-smith",
          label: "Three of Swords",
          alt: "A rendering of the tarot card Three of Swords depicting a heart pierced by three swords.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Swords03.jpg/64px-Swords03.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Swords03.jpg/128px-Swords03.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Swords03.jpg/256px-Swords03.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Swords03.jpg/512px-Swords03.jpg"
          },
          cardId: 52
        }
      ]
    },
    {
      id: 53,
      name: "Four of Swords",
      description: "The Four of Swords is a card of rest, contemplation, and healing. It represents the need to take a break and to recharge your batteries. The Four of Swords also reminds you to reflect on your life and to make sure that you are on the right path.",
      type: "minor",
      suit: "swords",
      orientation: true,
      cardImages: [
        {
          id: 53,
          art_set: "rider-waite-smith",
          label: "Four of Swords",
          alt: "A rendering of the tarot card Four of Swords depicting a knight lying on a tomb, with his hands folded across his chest. Three swords are hanging above him, and a fourth sword is on the ground next to him.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Swords04.jpg/64px-Swords04.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Swords04.jpg/128px-Swords04.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Swords04.jpg/256px-Swords04.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Swords04.jpg/512px-Swords04.jpg"
          },
          cardId: 53
        }
      ]
    },
    {
      id: 54,
      name: "Five of Swords",
      description: "The Five of Swords is a card of conflict, competition, and defeat. It represents the feeling of being overwhelmed and outnumbered. The Five of Swords also reminds you that it is okay to lose sometimes and that you can learn from your mistakes.",
      type: "minor",
      suit: "swords",
      orientation: true,
      cardImages: [
        {
          id: 54,
          art_set: "rider-waite-smith",
          label: "Five of Swords",
          alt: "A rendering of the tarot card Five of Swords depicting two men fighting with swords, while three other men lie defeated on the ground.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Swords05.jpg/64px-Swords05.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Swords05.jpg/128px-Swords05.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Swords05.jpg/256px-Swords05.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Swords05.jpg/512px-Swords05.jpg"
          },
          cardId: 54
        }
      ]
    },
    {
      id: 55,
      name: "Six of Swords",
      description: "The Six of Swords is a card of transition, change, and new beginnings. It represents the need to let go of the past and to move on to new and better things. The Six of Swords also reminds you that you are not alone and that there are people who care about you and who want to help you through this transition.",
      type: "minor",
      suit: "swords",
      orientation: true,
      cardImages: [
        {
          id: 55,
          art_set: "rider-waite-smith",
          label: "Six of Swords",
          alt: "A rendering of the tarot card Six of Swords depicting a woman and a child crossing a river in a boat. They are being ferried by a boatman. Six swords are sticking out of the water behind them.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Swords06.jpg/64px-Swords06.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Swords06.jpg/128px-Swords06.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Swords06.jpg/256px-Swords06.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Swords06.jpg/512px-Swords06.jpg"
          },
          cardId: 55
        }
      ]
    },
    {
      id: 56,
      name: "Seven of Swords",
      description: "The Seven of Swords is a card of deceit, betrayal, and theft. It represents the act of taking something that is not yours or of being deceived by someone you trust. The Seven of Swords also reminds you to be careful of who you trust and to be aware of your surroundings.",
      type: "minor",
      suit: "swords",
      orientation: true,
      cardImages: [
        {
          id: 56,
          art_set: "rider-waite-smith",
          label: "Seven of Swords",
          alt: "A rendering of the tarot card Seven of Swords depicting a young man sneaking away with seven swords. Three swords are still stuck in the ground behind him.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Swords07.jpg/64px-Swords07.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Swords07.jpg/128px-Swords07.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Swords07.jpg/256px-Swords07.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Swords07.jpg/512px-Swords07.jpg"
          },
          cardId: 56
        }
      ]
    },
    {
      id: 57,
      name: "Eight of Swords",
      description: "The Eight of Swords is a card of mental anguish, anxiety, and self-doubt. It represents the feeling of being trapped and unable to move forward. The Eight of Swords also reminds you that you are not alone and that there are people who care about you and who want to help you through this difficult time.",
      type: "minor",
      suit: "swords",
      orientation: true,
      cardImages: [
        {
          id: 57,
          art_set: "rider-waite-smith",
          label: "Eight of Swords",
          alt: "A rendering of the tarot card Eight of Swords depicting a blindfolded woman sitting on the ground, with eight swords stuck in the ground around her.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Swords08.jpg/64px-Swords08.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Swords08.jpg/128px-Swords08.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Swords08.jpg/256px-Swords08.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Swords08.jpg/512px-Swords08.jpg"
          },
          cardId: 57
        }
      ]
    },
    {
      id: 58,
      name: "Nine of Swords",
      description: "The Nine of Swords is a card of nightmares, despair, and hopelessness. It represents the feeling of being overwhelmed by your problems and of not being able to see a way out. The Nine of Swords also reminds you that your thoughts are powerful and that you can create your own reality. Focus on positive thoughts and outcomes and you will begin to see a change in your life.",
      type: "minor",
      suit: "swords",
      orientation: true,
      cardImages: [
        {
          id: 58,
          art_set: "rider-waite-smith",
          label: "Nine of Swords",
          alt: "A rendering of the tarot card Nine of Swords depicting a woman sitting up in bed, looking terrified. Nine swords are hanging above her head.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Swords09.jpg/64px-Swords09.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Swords09.jpg/128px-Swords09.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Swords09.jpg/256px-Swords09.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Swords09.jpg/512px-Swords09.jpg"
          },
          cardId: 58
        }
      ]
    },
    {
      id: 59,
      name: "Ten of Swords",
      description: "The Ten of Swords is a card of defeat, ruin, and destruction. It represents the feeling of being completely defeated and of having nothing left. The Ten of Swords also reminds you that even in the darkest of times, there is always hope.",
      type: "minor",
      suit: "swords",
      orientation: true,
      cardImages: [
        {
          id: 59,
          art_set: "rider-waite-smith",
          label: "Ten of Swords",
          alt: "A rendering of the tarot card Ten of Swords depicting a man lying dead on the ground, with ten swords piercing his body.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Swords10.jpg/64px-Swords10.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Swords10.jpg/128px-Swords10.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Swords10.jpg/256px-Swords10.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Swords10.jpg/512px-Swords10.jpg"
          },
          cardId: 59
        }
      ]
    },
    {
      id: 60,
      name: "Page of Swords",
      description: "The Page of Swords is a card of new ideas, intellectual curiosity, and fresh perspectives. It represents the beginning of a new intellectual journey or the birth of a new idea. The Page of Swords also reminds you to be open to new ideas and to explore your intellectual potential.",
      type: "minor",
      suit: "swords",
      orientation: true,
      cardImages: [
        {
          id: 60,
          art_set: "rider-waite-smith",
          label: "Page of Swords",
          alt: "A rendering of the tarot card Page of Swords depicting a young man sitting on a rock, holding a sword in one hand and a scroll of paper in the other.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Swords11.jpg/64px-Swords11.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Swords11.jpg/128px-Swords11.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Swords11.jpg/256px-Swords11.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Swords11.jpg/512px-Swords11.jpg"
          },
          cardId: 60
        }
      ]
    },
    {
      id: 61,
      name: "Knight of Swords",
      description: "The Knight of Swords is a card of action, adventure, and new beginnings. It represents the need to take action and to pursue your dreams. The Knight of Swords also reminds you to be bold and courageous and to never give up on your goals.",
      type: "minor",
      suit: "swords",
      orientation: true,
      cardImages: [
        {
          id: 61,
          art_set: "rider-waite-smith",
          label: "Knight of Swords",
          alt: "A rendering of the tarot card Knight of Swords depicting a young man riding on a white horse, holding a sword in one hand and a raised fist in the other.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Swords12.jpg/64px-Swords12.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Swords12.jpg/128px-Swords12.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Swords12.jpg/256px-Swords12.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Swords12.jpg/512px-Swords12.jpg"
          },
          cardId: 61
        }
      ]
    },
    {
      id: 62,
      name: "Queen of Swords",
      description: "The Queen of Swords is a card of truth, clarity, and intuition. It represents the ability to see through the illusions and to know the truth. The Queen of Swords also reminds you to be honest with yourself and with others.",
      type: "minor",
      suit: "swords",
      orientation: true,
      cardImages: [
        {
          id: 62,
          art_set: "rider-waite-smith",
          label: "Queen of Swords",
          alt: "A rendering of the tarot card Queen of Swords depicting a woman sitting on a throne, holding a sword in one hand and a scale in the other.",
          url:{
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Swords13.jpg/64px-Swords13.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Swords13.jpg/128px-Swords13.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Swords13.jpg/256px-Swords13.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Swords13.jpg/512px-Swords13.jpg"
          },
          cardId: 62
        }
      ]
    },
    {
      id: 63,
      name: "King of Swords",
      description: "The King of Swords is a card of justice, intellect, and authority. It represents the ability to think clearly and to make wise decisions. The King of Swords also reminds you to be fair and just in your dealings with others.",
      type: "minor",
      suit: "swords",
      orientation: true,
      cardImages: [
        {
          id: 63,
          art_set: "rider-waite-smith",
          label: "King of Swords",
          alt: "A rendering of the tarot card King of Swords depicting a man sitting on a throne, holding a sword in one hand and a scepter in the other.",
          url:{
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Swords14.jpg/64px-Swords14.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Swords14.jpg/128px-Swords14.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Swords14.jpg/256px-Swords14.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Swords14.jpg/512px-Swords14.jpg"
          },
          cardId: 63
        }
      ]
    },
    {
      id: 64,
      name: "Ace of Pentacles",
      description: "The Ace of Pentacles is a card of new beginnings, prosperity, and abundance. It represents the start of a new financial venture or the manifestation of a new material possession. The Ace of Pentacles also reminds you to be grateful for what you have and to share your abundance with others.",
      type: "minor",
      suit: "pentacles",
      orientation: true,
      cardImages: [
        {
          id: 64,
          art_set: "rider-waite-smith",
          label: "Ace of Pentacles",
          alt: "A rendering of the tarot card Ace of Pentacles depicting a hand emerging from a cloud, holding a gold coin. A pentacle is in the background.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Pents01.jpg/64px-Pents01.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Pents01.jpg/128px-Pents01.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Pents01.jpg/256px-Pents01.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Pents01.jpg/512px-Pents01.jpg"
          },
          cardId: 64
        }
      ]
    },
    {
      id: 65,
      name: "Two of Pentacles",
      description: "The Two of Pentacles is a card of balance, juggling, and multitasking. It represents the need to balance your work life with your personal life and to manage your resources carefully. The Two of Pentacles also reminds you that it is okay to ask for help when you need it.",
      type: "minor",
      suit: "pentacles",
      orientation: true,
      cardImages: [
        {
          id: 65,
          art_set: "rider-waite-smith",
          label: "Two of Pentacles",
          alt: "A rendering of the tarot card Two of Pentacles depicting a young man juggling two gold coins. He is standing on a boat that is tossed about by rough seas.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Pents02.jpg/64px-Pents02.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Pents02.jpg/128px-Pents02.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Pents02.jpg/256px-Pents02.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Pents02.jpg/512px-Pents02.jpg"
          },
          cardId: 65
        }
      ]
    },
    {
      id: 66,
      name: "Three of Pentacles",
      description: "The Three of Pentacles is a card of teamwork, collaboration, and mastery. It represents the importance of working together to achieve a common goal. The Three of Pentacles also reminds you to be proud of your accomplishments and to celebrate your successes.",
      type: "minor",
      suit: "pentacles",
      orientation: true,
      cardImages: [
        {
          id: 66,
          art_set: "rider-waite-smith",
          label: "Three of Pentacles",
          alt: "A rendering of the tarot card Three of Pentacles depicting three stonemasons working together to build a cathedral. One stonemason is holding a hammer and chisel, another is holding a plumb line, and the third is holding a trowel.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Pents03.jpg/64px-Pents03.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Pents03.jpg/128px-Pents03.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Pents03.jpg/256px-Pents03.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Pents03.jpg/512px-Pents03.jpg"
          },
          cardId: 66
        }
      ]
    },
    {
      id: 67,
      name: "Four of Pentacles",
      description: "The Four of Pentacles is a card of greed, materialism, and possessiveness. It represents the fear of loss and the unwillingness to share. The Four of Pentacles also reminds you that money is not the most important thing in life.",
      type: "minor",
      suit: "pentacles",
      orientation: true,
      cardImages: [
        {
          id: 67,
          art_set: "rider-waite-smith",
          label: "Four of Pentacles",
          alt: "A rendering of the tarot card Four of Pentacles depicting a man sitting on a chest of gold coins, clutching one of the coins tightly in his hand.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Pents04.jpg/64px-Pents04.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Pents04.jpg/128px-Pents04.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Pents04.jpg/256px-Pents04.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Pents04.jpg/512px-Pents04.jpg"
          },
          cardId: 67
        }
      ]
    },
    {
      id: 68,
      name: "Five of Pentacles",
      description: "The Five of Pentacles is a card of poverty, hardship, and loss. It represents the feeling of being alone and unsupported. The Five of Pentacles also reminds you that even in the darkest of times, there is always hope.",
      type: "minor",
      suit: "pentacles",
      orientation: true,
      cardImages: [
        {
          id: 68,
          art_set: "rider-waite-smith",
          label: "Five of Pentacles",
          alt: "A rendering of the tarot card Five of Pentacles depicting two beggars standing in the snow outside a church. They are both wearing rags and one of them is barefoot.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Pents05.jpg/64px-Pents05.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Pents05.jpg/128px-Pents05.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Pents05.jpg/256px-Pents05.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Pents05.jpg/512px-Pents05.jpg"
          },
          cardId: 68
        }
      ]
    },
    {
      id: 69,
      name: "Six of Pentacles",
      description: "The Six of Pentacles is a card of charity, generosity, and giving. It represents the importance of sharing your abundance with others. The Six of Pentacles also reminds you that you are always receiving, even when you don't realize it.",
      type: "minor",
      suit: "pentacles",
      orientation: true,
      cardImages: [
        {
          id: 69,
          art_set: "rider-waite-smith",
          label: "Six of Pentacles",
          alt: "A rendering of the tarot card Six of Pentacles depicting a wealthy man giving gold coins to two beggars.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pents06.jpg/64px-Pents06.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pents06.jpg/128px-Pents06.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pents06.jpg/256px-Pents06.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pents06.jpg/512px-Pents06.jpg"
          },
          cardId: 69
        }
      ]
    },
    {
      id: 70,
      name: "Seven of Pentacles",
      description: "The Seven of Pentacles is a card of patience, perseverance, and hard work. It represents the need to be patient and to trust in the process. The Seven of Pentacles also reminds you that your hard work will eventually pay off.",
      type: "minor",
      suit: "pentacles",
      orientation: true,
      cardImages: [
        {
          id: 70,
          art_set: "rider-waite-smith",
          label: "Seven of Pentacles",
          alt: "A rendering of the tarot card Seven of Pentacles depicting a young man leaning on a pitchfork, looking at seven gold coins that are hanging from a tree.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Pents07.jpg/64px-Pents07.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Pents07.jpg/128px-Pents07.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Pents07.jpg/256px-Pents07.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Pents07.jpg/512px-Pents07.jpg"
          },
          cardId: 70
        }
      ]
    },
    {
      id: 71,
      name: "Eight of Pentacles",
      description: "The Eight of Pentacles is a card of skill, craftsmanship, and mastery. It represents the importance of developing your skills and talents. The Eight of Pentacles also reminds you to take pride in your work and to be grateful for your gifts.",
      type: "minor",
      suit: "pentacles",
      orientation: true,
      cardImages: [
        {
          id: 71,
          art_set: "rider-waite-smith",
          label: "Eight of Pentacles",
          alt: "A rendering of the tarot card Eight of Pentacles depicting a young man working at a table, carving a gold coin. There are seven other gold coins on the table.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Pents08.jpg/64px-Pents08.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Pents08.jpg/128px-Pents08.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Pents08.jpg/256px-Pents08.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Pents08.jpg/512px-Pents08.jpg"
          },
          cardId: 71
        }
      ]
    },
    {
      id: 72,
      name: "Nine of Pentacles",
      description: "The Nine of Pentacles is a card of abundance, prosperity, and fulfillment. It represents the feeling of being content and satisfied with your life. The Nine of Pentacles also reminds you to enjoy your success and to be grateful for all that you have.",
      type: "minor",
      suit: "pentacles",
      orientation: true,
      cardImages: [
        {
          id: 72,
          art_set: "rider-waite-smith",
          label: "Nine of Pentacles",
          alt: "A rendering of the tarot card Nine of Pentacles depicting a woman walking in a garden, holding a falcon on one hand and a gold coin in the other. She is surrounded by abundant flowers and fruits.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Pents09.jpg/64px-Pents09.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Pents09.jpg/128px-Pents09.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Pents09.jpg/256px-Pents09.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Pents09.jpg/512px-Pents09.jpg"
          },
          cardId: 72
        }
      ]
    },
    {
      id: 73,
      name: "Ten of Pentacles",
      description: "The Ten of Pentacles is a card of generational wealth, family, and tradition. It represents the importance of passing on your values and your legacy to future generations. The Ten of Pentacles also reminds you to enjoy the fruits of your labor and to be grateful for all that you have.",
      type: "minor",
      suit: "pentacles",
      orientation: true,
      cardImages: [
        {
          id: 73,
          art_set: "rider-waite-smith",
          label: "Ten of Pentacles",
          alt: "A rendering of the tarot card Ten of Pentacles depicting a wealthy family standing in front of a large manor house. They are all surrounded by gold coins.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Pents10.jpg/64px-Pents10.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Pents10.jpg/128px-Pents10.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Pents10.jpg/256px-Pents10.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Pents10.jpg/512px-Pents10.jpg"
          },
          cardId: 73
        }
      ]
    },
    {
      id: 74,
      name: "Page of Pentacles",
      description: "The Page of Pentacles is a card of new beginnings, opportunities, and growth. It represents the start of a new financial or professional venture. The Page of Pentacles also reminds you to be practical and to focus on your goals.",
      type: "minor",
      suit: "pentacles",
      orientation: true,
      cardImages: [
        {
          id: 74,
          art_set: "rider-waite-smith",
          label: "Page of Pentacles",
          alt: "A rendering of the tarot card Page of Pentacles depicting a young man sitting on a rock, holding a gold coin in one hand and a pentacle in the other.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Pents11.jpg/64px-Pents11.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Pents11.jpg/128px-Pents11.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Pents11.jpg/256px-Pents11.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Pents11.jpg/512px-Pents11.jpg"
          },
          cardId: 74
        }
      ]
    },
    {
      id: 75,
      name: "Knight of Pentacles",
      description: "The Knight of Pentacles is a card of hard work, dedication, and ambition. It represents the importance of working hard to achieve your goals. The Knight of Pentacles also reminds you to be patient and to trust in the process.",
      type: "minor",
      suit: "pentacles",
      orientation: true,
      cardImages: [
        {
          id: 75,
          art_set: "rider-waite-smith",
          label: "Knight of Pentacles",
          alt: "A rendering of the tarot card Knight of Pentacles depicting a young man riding on a horse, holding a gold coin in one hand and a pentacle in the other.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Pents12.jpg/64px-Pents12.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Pents12.jpg/128px-Pents12.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Pents12.jpg/256px-Pents12.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Pents12.jpg/512px-Pents12.jpg"
          },
          cardId: 75
        }
      ]
    },
    {
      id: 76,
      name: "Queen of Pentacles",
      description: "The Queen of Pentacles is a card of abundance, prosperity, and nurturing. She represents the importance of taking care of yourself and your loved ones. The Queen of Pentacles also reminds you to be generous and to share your abundance with others.",
      type: "minor",
      suit: "pentacles",
      orientation: true,
      cardImages: [
        {
          id: 76,
          art_set: "rider-waite-smith",
          label: "Queen of Pentacles",
          alt: "A rendering of the tarot card Queen of Pentacles depicting a woman sitting on a throne, holding a gold coin in one hand and a pentacle in the other.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Pents13.jpg/64px-Pents13.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Pents13.jpg/128px-Pents13.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Pents13.jpg/256px-Pents13.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Pents13.jpg/512px-Pents13.jpg"
          },
          cardId: 76
        }
      ]
    },
    {
      id: 77,
      name: "King of Pentacles",
      description: "The King of Pentacles is a card of stability, security, and success. He represents the importance of building a solid foundation for yourself and your loved ones. The King of Pentacles also reminds you to be grateful for what you have and to enjoy the fruits of your labor.",
      type: "minor",
      suit: "pentacles",
      orientation: true,
      cardImages: [
        {
          id: 77,
          art_set: "rider-waite-smith",
          label: "King of Pentacles",
          alt: "A rendering of the tarot card King of Pentacles depicting a man sitting on a throne, holding a gold coin in one hand and a pentacle in the other.",
          url: {
            tiny: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Pents14.jpg/64px-Pents14.jpg",
            small: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Pents14.jpg/128px-Pents14.jpg",
            mid: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Pents14.jpg/256px-Pents14.jpg",
            large: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Pents14.jpg/512px-Pents14.jpg"
          },
          cardId: 77
        }
      ]
    }
  ]
};

function newDeck(): Deck {
  return deck;
}

function getCardByID(id: number): Card {
  // check bounding ranges of number
  return deck.cards[id];
}

function shuffleDeck(deck: Deck): Deck {
  const leftSide: Card[] = deck.cards.slice(0,Math.ceil(deck.cards.length / 2));
  const rightSide: Card[] = deck.cards.slice(Math.ceil(deck.cards.length / 2), deck.cards.length);

  // rightSide has all cards "orientation" set to opposite of current value
  rightSide.forEach((card:Card) => {
    card.orientation = !card.orientation;
  });

  // shuffle rightSide and leftSide alternating cards into new deck
  const newDeck:Deck = {
    cards: []
  };

  for (let i = 0; i < 78; i++) {
    if(leftSide.length > 1) {
      newDeck.cards.push(leftSide.pop()!);
    }
    if(rightSide.length > 1) {
      newDeck.cards.push(rightSide.pop()!);
    }
  }

  return newDeck;
}

// using recursive function to shuffle deck
// using the shuffleDeck function multiple times
// to ensure a good shuffle
function shuffle(deck: Deck, times: number): Deck {
  if(times === 0) {
    return deck;
  }
  return shuffle(shuffleDeck(deck), times - 1);
}

function goodShuffle(deck: Deck): Deck {
  return shuffle(deck, 13);
}

function newShuffledDeck(): Deck {
  return goodShuffle(newDeck());
}

function drawTop(deck: Deck): Card {
  return deck.cards.pop()!;
}

function drawThree(deck: Deck): Card[] {
  const card_one: Card = deck.cards.pop()!;
  const card_two: Card = deck.cards.pop()!;
  const card_three: Card = deck.cards.pop()!;

  return [card_one, card_two, card_three];
}

function newDeckDrawThree(): Card[] {
  const deck: Deck = newShuffledDeck();
  return drawThree(deck);
}

export { newDeck, newDeckDrawThree, getCardByID, Card, Deck, CardImage }
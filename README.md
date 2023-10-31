# soothsaying

[![codecov](https://codecov.io/gh/free-ignorance/shrewd/branch/main/graph/badge.svg)](https://codecov.io/gh/free-ignorance/soothsaying)

------

This API is used to create deck of Tarot cards, shuffle, and deal 3 cards for a Tarot reading.

## Getting Started / Development Setup




### Documentation / Using the API



### Basic usage

<details>
  <summary>Basic Usage</summary>

  You can install and run the application in node 16.6.0 or higher with the following commands:

```bash
npm ci
npm run start
```

you should see 

```bash
[2023-10-27T15:26:32.097Z] info: Initializing Server.... 
[2023-10-27T15:26:32.099Z] info: Initializing Middlewares.... 
[2023-10-27T15:26:32.101Z] info: Initializing Controller "/health" Route.... 
[2023-10-27T15:26:32.102Z] info: Initializing Controller "/cards" Route.... 
[2023-10-27T15:26:32.104Z] info: Server Initialized and Listening on the port 3000. 
```

You can confirm the API is running locally with 

```bash
curl localhost:3000/health
```

which should return a healthy ready check from the health endpoint 

```json
{
  "data": {
    "date": "2023-10-27T15:36:00.721Z",
    "uptime": "00:00:05:58",
    "version": "0.1.0"
  },
  "meta": {
    "status": 200
  }
}
```


</details>

### Advanced usage / Development

We are constantly accepting new Issues and any Contributions in PR form. Please checkout the repo's [Issues](https://github.com/free-ignorance/soothsaying/issues).

### API Endpoints

<details>
  <summary>Tarot Reading Endpoint /cards/1</summary>

You can request a single card from the API with a GET request to the /cards endpoint.

```bash 
curl https://soothsaying-c436343ba6ff.herokuapp.com/cards/1
```

Response

```json
{
  "data": {
    "id": 0,
    "name": "The Fool",
    "description": "The Fool is the spirit in search of experience. He represents the mystical cleverness bereft of reason within us, the childlike ability to tune into the inner workings of the world. The sun shining behind him represents the divine nature of the Fool's wisdom and exuberance, holy madness or 'crazy wisdom'. On his back are all the possessions he might need. In his hand there is a flower, showing his appreciation of beauty. He is frequently accompanied by a dog, sometimes seen as his animal desires, sometimes as the call of the real world, nipping at his heels and distracting him. He is seemingly unconcerned that he is standing on a precipice, apparently about to step off.",
    "type": "major",
    "orientation": false,
    "cardImages": [
      {
        "id": 0,
        "art_set": "rider-waite-smith",
        "label": "The Fool",
        "alt": "A rendering of the tarot card The Fool depicting a jester",
        "url": {
          "large": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/RWS_Tarot_00_Fool.jpg/512px-RWS_Tarot_00_Fool.jpg",
          "mid": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/RWS_Tarot_00_Fool.jpg/256px-RWS_Tarot_00_Fool.jpg",
          "small": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/RWS_Tarot_00_Fool.jpg/128px-RWS_Tarot_00_Fool.jpg",
          "tiny": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/RWS_Tarot_00_Fool.jpg/64px-RWS_Tarot_00_Fool.jpg"
        },
        "cardId": 0
      }
    ]
  },
  "meta": {
    "status": 200
  }
}
```

</details>
<details>
  <summary>Tarot Reading Endpoint /cards</summary>

You can get a 3 card reading by hitting the base endpoint of `/cards` with a GET request.

```bash
curl https://soothsaying-c436343ba6ff.herokuapp.com/cards
```

Response

```json
{
{
  "data": [
    {
      "id": 76,
      "name": "Queen of Pentacles",
      "description": "The Queen of Pentacles is a card of abundance, prosperity, and nurturing. She represents the importance of taking care of yourself and your loved ones. The Queen of Pentacles also reminds you to be generous and to share your abundance with others.",
      "type": "minor",
      "suit": "pentacles",
      "orientation": false,
      "cardImages": [
        {
          "id": 76,
          "art_set": "rider-waite-smith",
          "label": "Queen of Pentacles",
          "alt": "A rendering of the tarot card Queen of Pentacles depicting a woman sitting on a throne, holding a gold coin in one hand and a pentacle in the other.",
          "url": {
            "tiny": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Pents13.jpg/64px-Pents13.jpg",
            "small": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Pents13.jpg/128px-Pents13.jpg",
            "mid": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Pents13.jpg/256px-Pents13.jpg",
            "large": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Pents13.jpg/512px-Pents13.jpg"
          },
          "cardId": 76
        }
      ]
    },
    {
      "id": 53,
      "name": "Four of Swords",
      "description": "The Four of Swords is a card of rest, contemplation, and healing. It represents the need to take a break and to recharge your batteries. The Four of Swords also reminds you to reflect on your life and to make sure that you are on the right path.",
      "type": "minor",
      "suit": "swords",
      "orientation": false,
      "cardImages": [
        {
          "id": 53,
          "art_set": "rider-waite-smith",
          "label": "Four of Swords",
          "alt": "A rendering of the tarot card Four of Swords depicting a knight lying on a tomb, with his hands folded across his chest. Three swords are hanging above him, and a fourth sword is on the ground next to him.",
          "url": {
            "tiny": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Swords04.jpg/64px-Swords04.jpg",
            "small": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Swords04.jpg/128px-Swords04.jpg",
            "mid": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Swords04.jpg/256px-Swords04.jpg",
            "large": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Swords04.jpg/512px-Swords04.jpg"
          },
          "cardId": 53
        }
      ]
    },
    {
      "id": 72,
      "name": "Nine of Pentacles",
      "description": "The Nine of Pentacles is a card of abundance, prosperity, and fulfillment. It represents the feeling of being content and satisfied with your life. The Nine of Pentacles also reminds you to enjoy your success and to be grateful for all that you have.",
      "type": "minor",
      "suit": "pentacles",
      "orientation": true,
      "cardImages": [
        {
          "id": 72,
          "art_set": "rider-waite-smith",
          "label": "Nine of Pentacles",
          "alt": "A rendering of the tarot card Nine of Pentacles depicting a woman walking in a garden, holding a falcon on one hand and a gold coin in the other. She is surrounded by abundant flowers and fruits.",
          "url": {
            "tiny": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Pents09.jpg/64px-Pents09.jpg",
            "small": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Pents09.jpg/128px-Pents09.jpg",
            "mid": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Pents09.jpg/256px-Pents09.jpg",
            "large": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Pents09.jpg/512px-Pents09.jpg"
          },
          "cardId": 72
        }
      ]
    }
  },
  "meta": {
    "status": 200
  }
}
```
</details>

<details>
  <summary>Tarot Reading Endpoint /cards/slack</summary>


Also has a slack friendly endpoint!

```bash 
curl https://soothsaying-c436343ba6ff.herokuapp.com/cards/slack
```

Example Response 

```json
{
  "blocks": [
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "Very interesting, let's see what the cards have to say... :crystal_ball:"
      }
    },
    {
      "type": "divider"
    },
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "Your Past card is *King of Wands* \n The King of Wands is a card of authority, leadership, and vision. It represents the masculine aspect of the Wands suit and the power of fire. The King of Wands also reminds you to be strong and to stand up for what you believe in."
      },
      "accessory": {
        "type": "image",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Wands14.jpg/128px-Wands14.jpg",
        "alt_text": "A rendering of the tarot card King of Wands depicting a man sitting on a throne, holding a wand in one hand and a lion-headed scepter in the other."
      }
    },
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "Your Past card is *Ace of Cups* \n The Ace of Cups is a card of new beginnings, love, and compassion. It represents the overflowing cup of emotions and the potential for deep connection with others. The Ace of Cups also reminds you to open your heart to love and to let yourself be loved."
      },
      "accessory": {
        "type": "image",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Cups01.jpg/128px-Cups01.jpg",
        "alt_text": "A rendering of the tarot card Ace of Cups depicting a white dove holding a golden cup in its beak."
      }
    },
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "Your Past card is *Two of Cups* \n The Two of Cups is a card of harmony, balance, and partnership. It represents the union of two people in love, or the coming together of two opposing forces. The Two of Cups also reminds you to cherish your relationships and to nurture the connections that you have with others."
      },
      "accessory": {
        "type": "image",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Cups02.jpg/128px-Cups02.jpg",
        "alt_text": "A rendering of the tarot card Two of Cups depicting a man and a woman sitting face-to-face, holding cups in their hands."
      }
    }
  ]
}
```


</details>


<details>
  <summary>Health Endpoint /health</summary>


You can confirm the API is running locally with 

```bash
curl localhost:3000/health
```

which should return a healthy ready check from the health endpoint 

```json
{
  "data": {
    "date": "2023-10-27T15:36:00.721Z",
    "uptime": "00:00:05:58",
    "version": "0.1.0"
  },
  "meta": {
    "status": 200
  }
}
```


</details>



## Bot Support

All support and related questions can be resolved by visiting the https://sage.af/about/bot page and checking there for more information and then asked in our discord if you still need help.

### Slack

<div align="center">
  <p>Our api is used by our organization's slack bot. <a href="https://sage.af/about/bot">Sage Bot</a> which is used to provide tarot readings to your slack channels. </p>
  <p>
    <img src="https://github.com/free-ignorance/soothsaying/assets/127320/439132a1-376f-4cbf-929d-8b2a672d931f" alt="Image of Example response of the bot in slack" />
  </p>
  <p>You can always add the bot to your slack workspace by clicking the button below.</p>
  <p>
    <a href="https://slack.com/oauth/v2/authorize?client_id=780455873664.6087369520707&scope=commands&user_scope=">
      <img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x" />
    </a>
  </p>
</div>


### Discord




### Tarot Cards 


<h2>Frequently Asked Questions</h2>
<h3>what is tarot?</h3>
<p>
A tarot reading is a form of cartomancy, or divination, whereby practitioners use tarot cards to help self-reflect, connect with their inner self, meditate, and problem-solve. They formulate a subject or focus, sometimes an intent, then draw cards to interpret random meanings applied to the subject. Some suggest the practice can help to gain insight by applying random alternative perspectives to an issue and the practitioner explores and reflects on their issue with a different set of eyes. Ultimately Tarot is a tool for self reflection and discovery. It is not a tool for predicting the future.
</p>
<h3>I am afraid of my reading results, should I be concerned?</h3>
<p>
It is important to understand that the greatest power for change in your own life comes from within. The reading has no more power over your universe than you have given it. A mirror that scares you should not be to blame for your fears. 
</p>
<h3>Can you tell me more about tarot Card Decks?</h3>
<p>
  Tarot cards are a deck of 78 cards divided into two main categories: the Major Arcana and the Minor Arcana. The Major Arcana consists of 22 cards that represent universal archetypes and life experiences, such as the Fool, the Magician, the High Priestess, the Emperor, the Empress, the Chariot, and so on. The Minor Arcana consists of 56 cards that are divided into four suits: Wands, Cups, Swords, and Pentacles. These suits represent the different aspects of our everyday lives, such as our thoughts, feelings, actions, and material world.
</p>
<p>
  Tarot cards can be drawn in either a forward or reversed position. The position of the card can affect its interpretation. In general, forward cards represent the positive aspects of the card's meaning. They suggest that the energy of the card is flowing freely and openly in the client's life. Reversed cards represent the negative aspects of the card's meaning. They suggest that the energy of the card is blocked or restricted in some way. This could be due to a variety of factors, such as fear, resistance, or denial.
</p>
<p>
  It is important to note that tarot readings are not meant to predict the future. Instead, they offer a snapshot of the present moment perspective from yourself to reflect on what meaning you draw at this current time. Even the same cards drawn two different times can have immensely different impact on someone depending their life situation. These reflections and discoveries help us define ourselfs and think of external perspectives. The Person receiving a Tarot Reading is ultimately responsible for making their own choices and creating their own future.
</p>
<h3>Who is Pamela Colman Smith?</h3>
<p>
  Pamela Colman Smith (16 February 1878 – 18 September 1951), also nicknamed Pixie, was a British artist, illustrator, writer and occultist. She is best known for illustrating the Smith-Rider-Waite tarot deck of divinatory tarot cards.
</p>

<h3>Who is A. E. Waite?</h3>
<p>
  Arthur Edward Waite (2 October 1857 – 19 May 1942), commonly known as A. E. Waite, was an American-born British poet and scholarly mystic who wrote extensively on occult and esoteric matters, and was the co-creator of the Smith-Rider-Waite Tarot deck.
</p>

# UPDATES: [V1.2.1]

* Set all messages to embed.

* New `emojis.json` for custom emojis!

* Fixed `setup` command & Help command!

* Fixed Homepage Host!

## → Setup Guide:

### -Setup Your Discord Bot:

First of all, you need to create a [Discord Bot](https://discord.com/developers/applications). Invite the bot in the server which you want be in, and copy the Bot Token. **[Do not share your bot Token].**

_Your Discord Bot works in only one server._

### -Setup The Code:

Follow the steps below:

#### /// **Bot Token Setup:**

Now, go to Secrets (The Lock Icon) on the Left side of your Replit project page. Type in the _Key_ case `TOKEN` and paste your bot token that you copied in the _Value_ case. Click on _Add New Secret_.

#### /// **Config.json Setup:**

Go to the file `config.json`, Set all the requirements like below:

```js

{

  "prefix": "a!",

  "BotName": "ModMail Bot",

  "ServerID": "YOUR-SERVER-ID",

  "ServerName": "YOUR-SERVER-NAME",

  "ModeratorRole": "MODMAIL-MANAGER-OR-STAFF-ROLE-NAME",

  "ModMailCategoryName": "MODMAIL-CATEGORY-NAME",

    

  "EmbedColor": "#2f3136",

  "CloseEmbedColor": "RED",

  "OpenEmbedColor": "GREEN",

  "EmbedFooter": "YOUR-BOT-EMBED-FOOTER",

    

  "StatusText": "YOUR-CUSTOM-STATUS-TEXT-HERE",

  "StatusType": "STREAMING",

  "StatusURL": "https://www.twitch.tv/facebook"

}  

```

#### **♣ _Bot Config:_**

For `prefix`, set your bot's prefix. Make sure to remmeber your bot's prefix.

For `BotName`, set your bot's name.

#### **♣ _Server Config:_** 

For `ServerID`, set your server ID. This bot is not multiguild. 

For `ServerName`, set your server's name.

For `ModeratorRole`, set your modmail manager role, make sure to set the complete role name, do not set the ID. You can only set one role.

For `ModMailCategoryName`, set your ModMail category name. If you created a modmail category called "MODmail", set in `ModMailCategoryName`: "MODmail".

#### **♣ _Embed Config:_**

For `EmbedColor`, set a HEX or a color name (with caps) for the Help command and Details message.

For `CloseEmbedColor`, set a HEX or a color name (with caps) for the Close message color.

For `OpenEmbedColor`, set a HEX or a color name (with caps) for the Open message color.

For `EmbedFooter`, set your Embed footer messages a text.

#### **♣ _Status Config:_**

For `StatusText`, set a custom status text.

For `StatusType`, set your bot status type. **There are four types of status:**

* **STREAMING**

* **DND** (Do not Disturb)

* **IDLE** (Sleeping)

* **ONLINE**

For `StatusURL`, set a twitch channel link there. (Make sure to use HTTPS://). 

>**NOTE:** Make sure you used in `StatusType` the type "STREAMING". If not, ignore this StatusURL step.

## Sharing Info:

**You are not allowed to share the code when you do not have permission from T.F.A#1887 to share this code.**

## Problems and Solutions:

#### ♦ What is a HEX code?

> A HEX color code is a 6-symbol code made of up to three 2-symbol elements. Each of the 2-symbol elements expresses a color value from 0 to 255. The code is written using a formula that turns each value into a unique 2-digit alphanumeric code. For example, the RGB code (224, 105, 16) is E06910 in hexadecimal code. 

> **Get your Hex Code [Here](https://g.co/kgs/1g3CT8).**

#### ♦ Why the status IDLE and DND are not showing up?

> IDLE and DND are special status for Discord Bots. If you set IDLE or DND in `StatusType`, Run your bot and wait **5/15 minutes** by looking at your bot's profile. Your bot status will change 100%!

#### ♦ Why "Server.js is Loading..." is stucked?

> First of all, this is **Not** Replit Bug. If you want to make your bot running, please wait **5/20 minutes**. If it's still not working, refork this project. Or this is **Discord Bot RateLimits.**

#### ♦ Why i am not allowed to share this code?

> A lot of people are copying developers's project, resharing it without credits *(Without the real developer project's name.*). So i'm warning you and all to not share this code without credits. You **must** ask a permission in DMs with me (Q U T Y P I E <3).

```yml

WARNING: If you are trying to bypass this rule, you might get a copyright warning or a ban if you have a lot of copyright warnings.

```


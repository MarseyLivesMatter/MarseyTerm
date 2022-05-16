// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'sumfetch' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Donate
export const donate = async (args: string[]): Promise<string> => {
  return `thank you for your interest. 
here are the ways you can support my work:
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.patreon}" target="_blank">patreon</a></u>
`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'donate'.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMWWMMMMMMMMMMMMMMMWNX0Okxxdollccc:cccllodxkOKXNWMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMW0dlccloxOKNWWWNKOxoc:,'',,;;:ccllooooollcc:;;,,,;coxOXWMMMMMWNNNWMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMXo..  .....',:c:;'...',,;cldxkOKXWWWWWWWWWWWNNX0dc,'...':odxdl:;,,;o0WMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMWx..,c:,.....'''',;::cccccccccclldkXWWWWWWWWWWWKdlccccc:;'..... ..''.,OWMMMMMMM
MMMMMMMMMMMMMMMMMMMMMNo.'kKK0kdc,....,:cccccccccccccccclkNWWWWWWWWWN0occcccccc:,....;lx0k,.oNMMMMMMM
MMMMMMMMMMMMMMMMMMMMMWd.'xKKKKKK0kdc;;:cccccccccccccccldKNWWWWWWWWWWNOoccccccc:;,:ok0KKK0:.cXMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMO'.l0KKKKKKOxolcccccccccccccccldOXWWWWWWWWWWWWWNKxoccccccclodk0KKKO:.cXMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMXc.,kKKKKOxlcccc:,';cccccloxkOKNWWWWWWWWWWWWWWWWWNKkoccccccccldOKKO;.oNMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMO'.c0K0xocccccc,..;ccldx0XNWWWWWWWWWWWWWWWWWWWWWWWNXOdlcc;..;cokKx'.xWMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMNd..oOxlccccccc::clok0XNWWWWWWWWWWWWWWWWWWWWWWWWWWWWWNKkdc,';cclko.,0WMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMXc.,llccccccccclx0XNWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWNX0kolcccl,.:XMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMXc..:cccccccclx0NNX00O0XNWWWWWWWWWWWWWWWWWWWWWWWWWWWWWNXXXKOdlcc,.'OWMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMNo..;cccccccld0XKxc,...:oodOKWWWWWWWWWWWWWWWWWWWWWWWWXxc;,,:oOOdlc'.:KMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMWk'.,:ccccccokXXx,.    .xNx'.cKWWWWWWWWWWWWWWWWWWWWWWXo..   'odkKOo:..dWMMMMMM
MMMMMMMMMMMMMMMMMMMMMMK:..:ccccccd0NNx;,.    .'c;..;0WWWWWWWWWWWNNWWWWWWWWW0;',.  ,xo;xNKd'.:KMMMMMM
MMMMMMMMMMMMMMMMMMMMMWd..,:cccccdKNWNk:;.....',;cdx0NWWWWWWWWXxc::clkXWWWWWNkc,.......dNWKc.'kWMMMMM
MMMMMMMMMMMMMMMMMMMMMK;..;cccccdKNWWWN0kkkO00KXNWWWWWWWWWWWWWXo'.  .lXWWWWWWWNX0kxdooxKWWNx..xWMMMMM
MMMMMMMMMMMMMMMMMMMMWd..,:cccco0NWWWWWWWWWWWWWWWWWWWWWWWWWWWWWNKdclONWWWWWWWWWWWWWWWWWWWWWO,.xWMMMMM
MMMMMMMMMMMMMMMMMMMMX:..;:ccclxXWWWWWWWWWWWWWWWWWWWWWWWWWWWWNX0kocckXWWWWWWWWWWWWWWWWWWWWWK;.dWMMMMM
MMMMMMMMMMMMMMMMMMMMO'.';:ccco0NWWWWWWWWWWWWWWWWWWWWWNXKOkdlc,..   .,lkKNWWWWWWWWWWWWWWWWWNd.:KMMMMM
MMMMMMMMMMMMMMMMMMMWd..,::ccd0NWWWWWWWWWWWWWWWWWWWWWNd,....           ..;cd0NWWWWWWWWWWWWWW0;.xWMMMM
MMMMMMMMMMMMWXK00KXKl..;:cdkKNWWWWWWWWWWWWWWWWWWWWWWNo.                   .lXWWWWWWWWWWWWWWNo.cXMMMM
MMMMMMMMMW0o:,,,,,,,..,oxOXNWWWWWWWWWWWWWWWWWWWWWWWWW0;                   'kNWWWWWWWWWWWWWWNd.:KMMMM
MMMMMMMW0c''cxO000ko,.;k0KNWWWWWWWWWWWWWWWWWWWWWWWWWWNk,. .,:clllllcc;.. .dNWWWWWWWWWWWWWWWK:.dNMMMM
MMMMMMNx'.l0NWWWWWWNx'.lk0XNWWWWWWWWWWWWWWWWWWWWWWWWWWN0c..cxO00000Odc'.:kNWWWWWWWWWWWWWWWXo.:KWMMMM
MMMMMWx..dXWWWWWWWWWNk;.;dOKNWWWWWWWWWWWWWWWWWWWWWWWWWWWXOl;,,,;;,,,,;lOXWWWWWWWWWWWWWWWWXo.;OWMMMMM
MMMMWk'.lKWWWWWWWWWWWWk' .:x0KNWWWWWWWWWWWWWWWWWWWWWWWWWWWWNKOkxxxkOKNWWWWWWWWWWWWWWWWWN0c.:0WMMMMMM
MMMMK:.:ONWWWWWWWWWWWWO'.'..:d0XNWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWNKo''dXWMMMMMMM
MMMWx..dKNWWWWWWWWWWWWx.'k0c..;lkKXNWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWN0o,'l0WMMMMMMMMM
MMMXc.;kXNWWWWWWWWWWWXl.:KNo..,'';lx0XNWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWNKx:',o0WWMMMMMMMMMM
MMM0,.,d0NWWWWWWWWWNKd'.dNx..oOOxc,'';ldOXWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWNXOd:'.;xXWWMMMMMMMMMMMM
MMMk..,:dKNNWWWNNXKkl..:XWd..cOXWNX0xoc;lKWWWWWWWWWWWNKKXXNNNWWWWWWWWWWWWWNkc;,:c,.lXMMMMMMMMMMMMMMM
MMMk..,;:ldxkkkkxdlc:..;Ok;...':ONWWWWNNNWWWWWWWWWWWWNK0OO000KKXXWWWWWWWWWNOdk0XO;.lXMMMMMMMMMMMMMMM
MMMO'.';;:ccccccccccod:....':;;cONWWWWWWWWWWWWWWWWWWWWNX0000000KXWWWWWWWWWWWWNOc'..xWMMMMMMMMMMMMMMM
MMMK:..;;::cccccclokKNO,..,:cldKNWWWWWWWWWWWWWWWWWWWWWWWNNXXXXNWWWWWWWWWWWWWWW0xd:.;OWMMMMMMMMMMMMMM
MMMWx..,:::cloodxOKNWXd..':ok0XNWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWXo.,0MMMMMMMMMMMMMM
MMMMNo..lxxkOKXNWWWNKx;..,ckNXxd0WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWKc.cXMMMMMMMMMMMMM
MMMMMNo..cxOO0XNNNKkoc'..,cONK:.oNWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWk'.kWMMMMMMMMMMMM
MMMMMMWO:.'cdxxxdocc:c,..,l0WXl.:0NWWWWWWWWWWWWWNXXNWWWWWWWWWWWWWWWWWWWWWNNWWWWWWWWK:.oNMMMMMMMMMMMM
MMMMMMMMNOc'..',,;;:coo'.,d0NNk'.dXNWWWWWWWWWWWNd;;dNWWWWWWWWWWWWWWWWWWNkcxNWWWWWWWXc.cXMMMMMMMMMMMM
MMMMMMMMMMWKxl;'...';ll;..oOKNXl.,xKNWWWWWWWWWWXc..cXWWWWWWWWWWWWWWWWWWK:.lNWWWWWWWXc.cXMMMMMMMMMMMM
MMMMMMMMMMMMMWNKOxoc:;,...oOKNWKc.;x0XNWWWWWWWWXc..:0NWWWWWWWWWWWWWWWWXo.,OWWWWWWWWXc.lNMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMWWNO,.ck0XWWWKc.'oOKNWWWWWWWNd...o0XNNNNWWWWWWWWWWKl.,kNWWWWWWWWNo.;0MMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMO'.cOO0KXXX0c.'d0NWNWWWWWNXxc'.lkO000KKKKKKKKK0l.'k00XWWWNXNWWO'.kWMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMNo..,;::::::'.'d0KxcxNWW0clk0l..',,;;;;;;;;;;,'..,d:.oXN0c:kNXo.,OWMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMW0xolllcclll:.':c'.;xOOo'.',..cdddooollllloodxd;....;odl..;c,.;kNMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMWWWWWWWN0oc;'''''''',:clONWMMMMMMMMMMMMMMWXkl:;,,,'',;:lkXWMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNXKK000KXNWWWMMMMMMMMMMMMMMMMMMMMMWNNXXXXXNWWWMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM

Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};
